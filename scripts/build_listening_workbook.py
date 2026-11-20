#!/usr/bin/env python3
"""Build the printable workbook paired with listening.html."""
from __future__ import annotations

import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools_lib"))

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

NAVY = colors.HexColor("#17355C")
BLUE = colors.HexColor("#276BA2")
PALE = colors.HexColor("#EAF3FA")
GOLD = colors.HexColor("#D5A64C")
INK = colors.HexColor("#1C3048")
MUTED = colors.HexColor("#728197")
LINE = colors.HexColor("#DDE5EB")
GREEN = colors.HexColor("#287658")
PAPER = colors.white


def load_data():
    raw = (ROOT / "listening-data.js").read_text(encoding="utf-8")
    match = re.search(r"window\.PARLONS_LISTENING\s*=\s*(\{.*\})\s*;\s*$", raw, re.S)
    if not match:
        raise RuntimeError("Cannot parse listening-data.js")
    data = json.loads(match.group(1))
    if len(data["tracks"]) != 16:
        raise RuntimeError("Workbook expects exactly 16 tracks")
    return data


FONT_PATHS = [
    Path("/System/Library/Fonts/STHeiti Light.ttc"),
    Path("/System/Library/Fonts/Hiragino Sans GB.ttc"),
    Path("/Library/Fonts/Arial Unicode.ttf"),
]
font_path = next((p for p in FONT_PATHS if p.exists()), None)
if not font_path:
    raise RuntimeError("No Chinese-capable font found")
pdfmetrics.registerFont(TTFont("Workbook", str(font_path), subfontIndex=0))
FONT = "Workbook"


styles = getSampleStyleSheet()
BASE = ParagraphStyle("Base", fontName=FONT, fontSize=9.2, leading=14, textColor=INK)
SMALL = ParagraphStyle("Small", parent=BASE, fontSize=7.8, leading=11, textColor=MUTED)
TINY = ParagraphStyle("Tiny", parent=BASE, fontSize=6.8, leading=9, textColor=MUTED)
H1 = ParagraphStyle("H1", parent=BASE, fontSize=23, leading=29, textColor=NAVY, spaceAfter=5)
H2 = ParagraphStyle("H2", parent=BASE, fontSize=15, leading=20, textColor=NAVY, spaceAfter=5)
H3 = ParagraphStyle("H3", parent=BASE, fontSize=10.5, leading=14, textColor=BLUE, spaceAfter=5)
CENTER = ParagraphStyle("Center", parent=BASE, alignment=TA_CENTER)
COVER_TITLE = ParagraphStyle("CoverTitle", parent=BASE, fontSize=31, leading=39, textColor=PAPER, alignment=TA_CENTER)
COVER_SUB = ParagraphStyle("CoverSub", parent=BASE, fontSize=13, leading=20, textColor=colors.HexColor("#D9E8F5"), alignment=TA_CENTER)
ANSWER = ParagraphStyle("Answer", parent=BASE, fontSize=8.4, leading=12.5)
SCRIPT = ParagraphStyle("Script", parent=BASE, fontSize=8.1, leading=12.2, textColor=INK)


def safe(text):
    return (str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


class WorkbookDoc(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(
            filename,
            pagesize=A4,
            rightMargin=16 * mm,
            leftMargin=16 * mm,
            topMargin=17 * mm,
            bottomMargin=16 * mm,
            title="Parlons · A1 听力训练分册",
            author="Parlons",
            subject="与法语零基础复习手册配套的A1听力练习",
        )
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="normal")
        self.addPageTemplates(PageTemplate(id="all", frames=[frame], onPage=self.decorate))

    def decorate(self, canvas, doc):
        if doc.page == 1:
            canvas.saveState()
            canvas.setFillColor(NAVY)
            canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
            canvas.setFillColor(GOLD)
            canvas.circle(A4[0] - 28 * mm, A4[1] - 28 * mm, 44 * mm, fill=1, stroke=0)
            canvas.setFillColor(colors.HexColor("#20517D"))
            canvas.circle(15 * mm, 22 * mm, 55 * mm, fill=1, stroke=0)
            canvas.restoreState()
            return
        canvas.saveState()
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(.5)
        canvas.line(16 * mm, A4[1] - 12 * mm, A4[0] - 16 * mm, A4[1] - 12 * mm)
        canvas.setFont(FONT, 7)
        canvas.setFillColor(MUTED)
        canvas.drawString(16 * mm, A4[1] - 9 * mm, "PARLONS · A1 听力训练分册")
        canvas.drawRightString(A4[0] - 16 * mm, 9 * mm, str(doc.page))
        canvas.drawString(16 * mm, 9 * mm, "配套网站：wentaoshi12-gif.github.io/french-pronunciation/")
        canvas.restoreState()


def label(text, bg=PALE, fg=BLUE):
    return Table([[Paragraph(safe(text), ParagraphStyle("Label", parent=SMALL, textColor=fg, fontSize=7.3, leading=9))]],
                 style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), bg), ("BOX", (0, 0), (-1, -1), .5, bg),
                                   ("LEFTPADDING", (0, 0), (-1, -1), 6), ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                                   ("TOPPADDING", (0, 0), (-1, -1), 3), ("BOTTOMPADDING", (0, 0), (-1, -1), 3)]))


def question_block(track):
    parts = [Paragraph("A. 听懂关键信息", H3), Paragraph("先听两遍，再选择正确答案。", SMALL), Spacer(1, 2 * mm)]
    for i, q in enumerate(track["questions"], 1):
        opts = "　".join(f"[ ] {chr(64+j)}. {safe(o)}" for j, o in enumerate(q["options"], 1))
        parts.extend([Paragraph(f"<b>{i}.</b> {safe(q['q'])}", BASE), Spacer(1, 1.2 * mm), Paragraph(opts, SMALL), Spacer(1, 3 * mm)])
    parts.extend([
        HRFlowable(width="100%", thickness=.5, color=LINE, spaceBefore=1 * mm, spaceAfter=4 * mm),
        Paragraph("B. 听写一句", H3),
        Paragraph(safe(track["dictation"]["prompt"]), SMALL),
        Spacer(1, 4 * mm),
        HRFlowable(width="100%", thickness=.6, color=MUTED),
        Spacer(1, 7 * mm),
        HRFlowable(width="100%", thickness=.6, color=MUTED),
        Spacer(1, 5 * mm),
        Paragraph("C. 跟读记录", H3),
        Paragraph("第 1 遍：[ ]　　第 2 遍：[ ]　　第 3 遍：[ ]　　最难的一句：____________________________", SMALL),
        Spacer(1, 5 * mm),
        Paragraph("D. 关键词", H3),
    ])
    vocab = [[Paragraph(f"<b>{safe(fr)}</b>", BASE), Paragraph(safe(zh), SMALL)] for fr, zh in track["vocab"]]
    parts.append(Table(vocab, colWidths=[70 * mm, 85 * mm], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F5F8FA")), ("GRID", (0, 0), (-1, -1), .45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5)
    ])))
    return parts


def build(output):
    data = load_data()
    story = []
    story.extend([Spacer(1, 52 * mm), Paragraph("PARLONS", ParagraphStyle("CoverEyebrow", parent=COVER_SUB, fontSize=11, leading=15, textColor=GOLD)),
                  Spacer(1, 7 * mm), Paragraph("A1 听力训练分册", COVER_TITLE), Spacer(1, 4 * mm),
                  Paragraph("与《法语零基础复习手册》46页版配套", COVER_SUB), Spacer(1, 18 * mm),
                  Table([[Paragraph("16 组原创听力", CENTER), Paragraph("理解 · 听写 · 跟读", CENTER)],
                         [Paragraph("住房与家具", CENTER), Paragraph("身体与健康", CENTER)]], colWidths=[68 * mm, 68 * mm],
                        style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FFFFFF18")), ("TEXTCOLOR", (0, 0), (-1, -1), PAPER),
                                          ("BOX", (0, 0), (-1, -1), .6, colors.HexColor("#FFFFFF50")), ("INNERGRID", (0, 0), (-1, -1), .4, colors.HexColor("#FFFFFF35")),
                                          ("TOPPADDING", (0, 0), (-1, -1), 10), ("BOTTOMPADDING", (0, 0), (-1, -1), 10)])),
                  Spacer(1, 22 * mm), Paragraph("配套网站提供播放、变速、自动评分与逐句跟读", COVER_SUB), PageBreak()])

    story.extend([Paragraph("使用方法", H1), Paragraph("这本分册与网站中的 16 课完全同号。每课建议用 15-20 分钟完成。不要在第一次播放前翻到录音原文。", BASE), Spacer(1, 6 * mm)])
    steps = [
        ("01", "盲听", "第一遍只判断人物、地点和发生的事情。"),
        ("02", "抓信息", "第二遍完成三道理解题，注意数字、时间和否定。"),
        ("03", "听写", "第三遍反复播放目标句，先写内容，再检查拼写。"),
        ("04", "跟读", "最后查看原文，用 0.85 倍速和正常速度各跟读一遍。"),
    ]
    story.append(Table([[Paragraph(f"<b>{n}</b>", H2), Paragraph(f"<b>{safe(t)}</b><br/>{safe(d)}", BASE)] for n, t, d in steps],
                       colWidths=[19 * mm, 136 * mm], style=TableStyle([("GRID", (0, 0), (-1, -1), .5, LINE),
                       ("BACKGROUND", (0, 0), (0, -1), PALE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                       ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                       ("LEFTPADDING", (0, 0), (-1, -1), 8)])))
    story.extend([Spacer(1, 8 * mm), Paragraph("网站入口", H2), Paragraph("https://wentaoshi12-gif.github.io/french-pronunciation/listening.html", BASE),
                  Spacer(1, 3 * mm), Paragraph("网页播放的是设备内置法语语音，不需要上传私人录音。不同设备的声音会略有差异，这正好可以帮助适应不同发音。", SMALL),
                  Spacer(1, 9 * mm), Paragraph("学习记录", H2),
                  Table([[Paragraph("姓名", SMALL), "", Paragraph("开始日期", SMALL), ""], [Paragraph("目标", SMALL), "每周完成 ____ 课", Paragraph("复习日期", SMALL), ""]],
                        colWidths=[22 * mm, 55 * mm, 24 * mm, 54 * mm], rowHeights=[12 * mm, 12 * mm], style=TableStyle([("GRID", (0, 0), (-1, -1), .5, LINE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 7)])), PageBreak()])

    story.extend([Paragraph("课程目录", H1), Paragraph("页码指的是主复习讲义中的对应位置。", SMALL), Spacer(1, 5 * mm)])
    rows = [[Paragraph("课次", SMALL), Paragraph("主题", SMALL), Paragraph("训练重点", SMALL), Paragraph("对应讲义", SMALL)]]
    for t in data["tracks"]:
        rows.append([Paragraph(f"{t['id']:02d}", BASE), Paragraph(safe(t["title"]), BASE), Paragraph(safe(t["focus"]), SMALL), Paragraph(safe(t["pages"]), SMALL)])
    story.append(Table(rows, colWidths=[16 * mm, 38 * mm, 72 * mm, 35 * mm], repeatRows=1, style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY), ("TEXTCOLOR", (0, 0), (-1, 0), PAPER), ("GRID", (0, 0), (-1, -1), .45, LINE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [PAPER, colors.HexColor("#F7F9FB")]), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6), ("LEFTPADDING", (0, 0), (-1, -1), 6)
    ])))
    story.append(PageBreak())

    for t in data["tracks"]:
        story.extend([label(f"第 {t['id']:02d} 课 · {t['unit']}"), Spacer(1, 3 * mm), Paragraph(safe(t["title"]), H1),
                      Paragraph(f"训练重点：{safe(t['focus'])}　　对应：{safe(t['pages'])}", SMALL), Spacer(1, 5 * mm)])
        story.extend(question_block(t))
        story.append(PageBreak())

    story.extend([Paragraph("答案", H1), Paragraph("建议先在网站完成并提交，再使用本页核对。", SMALL), Spacer(1, 5 * mm)])
    answer_rows = []
    for t in data["tracks"]:
        choices = " / ".join(chr(65 + q["a"]) for q in t["questions"])
        answer_rows.append([Paragraph(f"<b>{t['id']:02d} · {safe(t['title'])}</b>", ANSWER), Paragraph(choices, ANSWER), Paragraph(safe(t["dictation"]["answer"]), ANSWER)])
    story.append(Table([[Paragraph("课次", SMALL), Paragraph("选择题", SMALL), Paragraph("听写参考答案", SMALL)]] + answer_rows,
                       colWidths=[47 * mm, 23 * mm, 91 * mm], repeatRows=1, style=TableStyle([
                           ("BACKGROUND", (0, 0), (-1, 0), NAVY), ("TEXTCOLOR", (0, 0), (-1, 0), PAPER),
                           ("GRID", (0, 0), (-1, -1), .45, LINE), ("VALIGN", (0, 0), (-1, -1), "TOP"),
                           ("ROWBACKGROUNDS", (0, 1), (-1, -1), [PAPER, colors.HexColor("#F7F9FB")]),
                           ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6), ("LEFTPADDING", (0, 0), (-1, -1), 6)
                       ])))
    story.append(PageBreak())

    story.extend([Paragraph("录音原文", H1), Paragraph("完成听力、听写和跟读后再查看。A、B 表示两位说话人。", SMALL), Spacer(1, 5 * mm)])
    for i, t in enumerate(data["tracks"]):
        block = [Paragraph(f"{t['id']:02d} · {safe(t['title'])}", H2)]
        for speaker, text in t["lines"]:
            block.append(Paragraph(f"<font color='#276BA2'><b>{speaker}</b></font>　{safe(text)}", SCRIPT))
        block.extend([Spacer(1, 2 * mm), Paragraph("关键词：" + " · ".join(safe(v[0]) for v in t["vocab"]), TINY), Spacer(1, 5 * mm), HRFlowable(width="100%", thickness=.5, color=LINE, spaceAfter=5 * mm)])
        story.append(KeepTogether(block))
        if i in {3, 7, 11}:
            story.append(PageBreak())

    doc = WorkbookDoc(str(output))
    doc.build(story)


if __name__ == "__main__":
    primary = ROOT / "output" / "pdf" / "parlons-a1-listening-workbook.pdf"
    primary.parent.mkdir(parents=True, exist_ok=True)
    build(primary)
    shutil.copy2(primary, ROOT / "listening-workbook.pdf")
    print(primary)
