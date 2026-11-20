window.PARLONS_LISTENING = {
  "version": 1,
  "title": "Parlons · A1 听力训练",
  "tracks": [
    {
      "id": 1,
      "unit": "基础",
      "pages": "讲义 p.1-2",
      "title": "怎么拼写？",
      "focus": "字母、姓名与电话号码",
      "lines": [
        ["A", "Bonjour. Comment vous vous appelez ?"],
        ["B", "Je m'appelle Wentao Shi."],
        ["A", "Ça s'écrit comment, Wentao ?"],
        ["B", "W, E, N, T, A, O. Et Shi : S, H, I."],
        ["A", "Merci. Et votre numéro de téléphone ?"],
        ["B", "C'est le zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit."]
      ],
      "questions": [
        {"q": "这位学生姓什么？", "options": ["Shi", "Li", "Wu"], "a": 0},
        {"q": "Wentao 中有几个字母？", "options": ["5", "6", "7"], "a": 1},
        {"q": "电话号码的最后两位组合是什么？", "options": ["68", "78", "88"], "a": 1}
      ],
      "dictation": {"prompt": "听写姓名拼写后的完整句子", "answer": "Et votre numéro de téléphone ?"},
      "vocab": [["s'appeler", "叫作"], ["Ça s'écrit comment ?", "怎么拼写？"], ["numéro", "号码"]]
    },
    {
      "id": 2,
      "unit": "自我介绍",
      "pages": "讲义 p.17",
      "title": "新同学",
      "focus": "国籍、职业、居住地",
      "lines": [
        ["A", "Salut ! Moi, c'est Clara. Je suis française. Et toi ?"],
        ["B", "Bonjour Clara. Je m'appelle Léo. Je suis chinois et j'habite à Lyon."],
        ["A", "Tu travailles à Lyon ?"],
        ["B", "Non, je suis étudiant à l'École Centrale. J'apprends le français depuis septembre."],
        ["A", "Tu aimes la ville ?"],
        ["B", "Oui, beaucoup. J'aime les parcs et les petits cafés."]
      ],
      "questions": [
        {"q": "Léo 住在哪里？", "options": ["Paris", "Lyon", "Wuhan"], "a": 1},
        {"q": "他的身份是什么？", "options": ["工程师", "医生", "学生"], "a": 2},
        {"q": "他从什么时候开始学法语？", "options": ["九月", "十二月", "三月"], "a": 0}
      ],
      "dictation": {"prompt": "听写 Léo 介绍学习情况的句子", "answer": "J'apprends le français depuis septembre."},
      "vocab": [["depuis", "从……以来"], ["étudiant", "学生"], ["apprendre", "学习"]]
    },
    {
      "id": 3,
      "unit": "家庭",
      "pages": "讲义 p.18",
      "title": "我的家人",
      "focus": "家庭成员、年龄与职业",
      "lines": [
        ["A", "Tu as des frères et sœurs ?"],
        ["B", "Non, je suis fils unique. Dans ma famille, il y a trois personnes : mes parents et moi."],
        ["A", "Qu'est-ce qu'ils font ?"],
        ["B", "Mon père a cinquante-deux ans. Il est ingénieur. Ma mère a cinquante ans et elle est professeure."],
        ["A", "Ils habitent aussi à Lyon ?"],
        ["B", "Non, ils habitent à Wuhan, dans le centre de la Chine."]
      ],
      "questions": [
        {"q": "这个家庭有几个人？", "options": ["2", "3", "4"], "a": 1},
        {"q": "父亲的职业是什么？", "options": ["教授", "工程师", "医生"], "a": 1},
        {"q": "父母住在哪里？", "options": ["武汉", "里昂", "巴黎"], "a": 0}
      ],
      "dictation": {"prompt": "听写表示独生子的句子", "answer": "Je suis fils unique."},
      "vocab": [["fils unique", "独生子"], ["parents", "父母"], ["ingénieur", "工程师"]]
    },
    {
      "id": 4,
      "unit": "日常生活",
      "pages": "讲义 p.19-21",
      "title": "忙碌的一天",
      "focus": "作息、时间与频率",
      "lines": [
        ["A", "À quelle heure est-ce que tu te lèves ?"],
        ["B", "En semaine, je me lève à sept heures. Je prends une douche et je bois un café."],
        ["A", "Tu vas comment à l'école ?"],
        ["B", "Je prends souvent le bus à huit heures. Les cours commencent à neuf heures."],
        ["A", "Et le soir ?"],
        ["B", "Je fais parfois du sport, puis je dîne chez moi. Je ne me couche jamais après minuit."]
      ],
      "questions": [
        {"q": "他几点起床？", "options": ["7点", "8点", "9点"], "a": 0},
        {"q": "他通常怎么去学校？", "options": ["步行", "坐公交", "骑车"], "a": 1},
        {"q": "晚上他有时做什么？", "options": ["运动", "购物", "游泳"], "a": 0}
      ],
      "dictation": {"prompt": "听写包含频率副词的句子", "answer": "Je prends souvent le bus à huit heures."},
      "vocab": [["en semaine", "工作日"], ["parfois", "有时"], ["se coucher", "上床睡觉"]]
    },
    {
      "id": 5,
      "unit": "数字时间",
      "pages": "讲义 p.12-15",
      "title": "预约时间",
      "focus": "日期、钟点与电话号码",
      "lines": [
        ["A", "Cabinet du docteur Martin, bonjour."],
        ["B", "Bonjour, je voudrais prendre rendez-vous, s'il vous plaît."],
        ["A", "Vous êtes disponible mardi vingt-quatre novembre à neuf heures et quart ?"],
        ["B", "Non, j'ai cours le matin. Vous avez une place l'après-midi ?"],
        ["A", "Oui, à quinze heures quarante."],
        ["B", "Parfait. Mon numéro est le zéro six, vingt et un, quarante-cinq, trente, quatre-vingt-douze."]
      ],
      "questions": [
        {"q": "预约是哪一天？", "options": ["11月14日", "11月24日", "12月24日"], "a": 1},
        {"q": "病人为什么上午不行？", "options": ["要上课", "要工作", "要坐火车"], "a": 0},
        {"q": "最后约在几点？", "options": ["9:15", "15:40", "16:20"], "a": 1}
      ],
      "dictation": {"prompt": "听写提出预约请求的句子", "answer": "Je voudrais prendre rendez-vous, s'il vous plaît."},
      "vocab": [["prendre rendez-vous", "预约"], ["disponible", "有空的"], ["une place", "一个空位/号源"]]
    },
    {
      "id": 6,
      "unit": "Unité 7",
      "pages": "讲义 p.22-23",
      "title": "参观公寓",
      "focus": "房间、家具与方位",
      "lines": [
        ["A", "Voici l'appartement. Il fait trente-cinq mètres carrés."],
        ["B", "Il y a combien de pièces ?"],
        ["A", "Deux pièces : un salon avec une petite cuisine et une chambre. La salle de bains est à droite."],
        ["B", "La chambre est calme ?"],
        ["A", "Oui. Le lit est à côté de la fenêtre et le bureau est en face de l'armoire."],
        ["B", "C'est petit, mais très agréable."]
      ],
      "questions": [
        {"q": "公寓面积是多少？", "options": ["25 m²", "35 m²", "45 m²"], "a": 1},
        {"q": "浴室在哪里？", "options": ["右边", "左边", "卧室对面"], "a": 0},
        {"q": "书桌在什么对面？", "options": ["窗户", "床", "衣柜"], "a": 2}
      ],
      "dictation": {"prompt": "听写介绍房间数量的句子", "answer": "Deux pièces : un salon avec une petite cuisine et une chambre."},
      "vocab": [["mètre carré", "平方米"], ["à côté de", "在……旁边"], ["en face de", "在……对面"]]
    },
    {
      "id": 7,
      "unit": "Unité 7",
      "pages": "讲义 p.22-23, p.37-38",
      "title": "理想住房",
      "focus": "描述需求与比较",
      "lines": [
        ["A", "Quel est le logement de vos rêves ?"],
        ["B", "Je voudrais une maison à la campagne, près de la mer."],
        ["A", "Vous voulez une grande maison ?"],
        ["B", "Pas très grande : environ quatre-vingts mètres carrés, avec trois chambres."],
        ["A", "Un jardin est important pour vous ?"],
        ["B", "Oui, je préfère un jardin à une grande terrasse. C'est plus agréable pour les enfants."]
      ],
      "questions": [
        {"q": "房子应该在哪里？", "options": ["市中心", "乡下、靠海", "山里"], "a": 1},
        {"q": "希望多大面积？", "options": ["约60 m²", "约80 m²", "约100 m²"], "a": 1},
        {"q": "说话人更喜欢什么？", "options": ["花园", "大阳台", "车库"], "a": 0}
      ],
      "dictation": {"prompt": "听写表达住房愿望的句子", "answer": "Je voudrais une maison à la campagne, près de la mer."},
      "vocab": [["le logement de vos rêves", "理想住房"], ["environ", "大约"], ["préférer", "更喜欢"]]
    },
    {
      "id": 8,
      "unit": "购物",
      "pages": "讲义 p.24-25",
      "title": "旧货市场",
      "focus": "价格、宾语代词与礼貌表达",
      "lines": [
        ["A", "Bonjour madame. Combien coûte cette lampe ?"],
        ["B", "Elle coûte vingt-cinq euros."],
        ["A", "Elle est jolie, mais un peu chère. Vous pouvez la faire à vingt euros ?"],
        ["B", "D'accord. Et regardez cette petite table, elle va bien avec la lampe."],
        ["A", "Je la trouve très belle. Vous vendez les deux à cinquante euros ?"],
        ["B", "Oui, c'est d'accord."]
      ],
      "questions": [
        {"q": "台灯原价多少？", "options": ["20欧", "25欧", "50欧"], "a": 1},
        {"q": "顾客还看中了什么？", "options": ["椅子", "桌子", "衣柜"], "a": 1},
        {"q": "两件最后一共多少？", "options": ["45欧", "50欧", "55欧"], "a": 1}
      ],
      "dictation": {"prompt": "听写顾客讨价还价的句子", "answer": "Vous pouvez la faire à vingt euros ?"},
      "vocab": [["coûter", "花费/售价"], ["un peu cher", "有点贵"], ["les deux", "两件都"]]
    },
    {
      "id": 9,
      "unit": "过去时",
      "pages": "讲义 p.26-29",
      "title": "搬家的一天",
      "focus": "复合过去时：avoir 与 être",
      "lines": [
        ["A", "Alors, ton déménagement s'est bien passé ?"],
        ["B", "Oui. Samedi matin, deux amis sont venus chez moi."],
        ["A", "Vous avez fait quoi ?"],
        ["B", "Nous avons porté les cartons et nous avons placé les meubles. Ma sœur a nettoyé la cuisine."],
        ["A", "Et le soir ?"],
        ["B", "Nous avons mangé une pizza. Mes amis sont partis vers dix heures et je me suis couché tout de suite."]
      ],
      "questions": [
        {"q": "谁来帮忙了？", "options": ["两个朋友", "父母", "三位同学"], "a": 0},
        {"q": "妹妹做了什么？", "options": ["搬纸箱", "打扫厨房", "摆家具"], "a": 1},
        {"q": "朋友大约几点离开？", "options": ["8点", "9点", "10点"], "a": 2}
      ],
      "dictation": {"prompt": "听写含 être 助动词的句子", "answer": "Samedi matin, deux amis sont venus chez moi."},
      "vocab": [["déménagement", "搬家"], ["carton", "纸箱"], ["tout de suite", "立刻"]]
    },
    {
      "id": 10,
      "unit": "过去时",
      "pages": "讲义 p.26-29, p.37",
      "title": "山里的周末",
      "focus": "过去经历与时间顺序",
      "lines": [
        ["A", "Qu'est-ce que tu as fait ce week-end ?"],
        ["B", "Je suis allé à la montagne avec trois amis."],
        ["A", "Vous avez skié ?"],
        ["B", "Non, il n'y avait pas assez de neige. Samedi, nous avons marché pendant deux heures."],
        ["A", "Et dimanche ?"],
        ["B", "Nous avons visité un village. J'ai pris beaucoup de photos et nous sommes rentrés à Lyon vers dix-huit heures."]
      ],
      "questions": [
        {"q": "为什么没有滑雪？", "options": ["太冷", "雪不够", "受伤了"], "a": 1},
        {"q": "星期六做了什么？", "options": ["走了两小时", "参观村庄", "拍照片"], "a": 0},
        {"q": "星期日几点左右回到里昂？", "options": ["16点", "18点", "20点"], "a": 1}
      ],
      "dictation": {"prompt": "听写说明没有滑雪原因的句子", "answer": "Il n'y avait pas assez de neige."},
      "vocab": [["assez de", "足够的"], ["pendant", "持续"], ["rentrer", "返回"]]
    },
    {
      "id": 11,
      "unit": "Unité 8",
      "pages": "讲义 p.30-31",
      "title": "哪里不舒服？",
      "focus": "身体部位与症状",
      "lines": [
        ["A", "Bonjour. Qu'est-ce qui vous arrive ?"],
        ["B", "Depuis hier, j'ai mal à la gorge et à la tête. Je tousse beaucoup."],
        ["A", "Vous avez de la fièvre ?"],
        ["B", "Oui, trente-huit degrés et demi. Je suis aussi très fatigué."],
        ["A", "Vous avez mal au ventre ?"],
        ["B", "Non, pas du tout. Mais je n'ai pas faim."]
      ],
      "questions": [
        {"q": "哪里疼？", "options": ["喉咙和头", "肚子和背", "腿和脚"], "a": 0},
        {"q": "体温是多少？", "options": ["37.5°C", "38°C", "38.5°C"], "a": 2},
        {"q": "哪项症状没有出现？", "options": ["咳嗽", "肚子疼", "疲劳"], "a": 1}
      ],
      "dictation": {"prompt": "听写描述症状的句子", "answer": "Depuis hier, j'ai mal à la gorge et à la tête."},
      "vocab": [["avoir mal à", "……疼"], ["tousser", "咳嗽"], ["avoir de la fièvre", "发烧"]]
    },
    {
      "id": 12,
      "unit": "Unité 8",
      "pages": "讲义 p.32-33",
      "title": "脚踝扭伤",
      "focus": "受伤、检查与医嘱",
      "lines": [
        ["A", "Bonjour. Comment vous vous êtes fait mal ?"],
        ["B", "Je suis tombée en descendant l'escalier. Je me suis tordu la cheville droite."],
        ["A", "Votre cheville est très enflée. Vous pouvez marcher ?"],
        ["B", "Un peu, mais ça fait très mal."],
        ["A", "Nous allons faire une radio. En attendant, ne posez pas le pied par terre."],
        ["B", "D'accord, docteur."]
      ],
      "questions": [
        {"q": "她是怎么受伤的？", "options": ["跑步时", "下楼时摔倒", "踢球时"], "a": 1},
        {"q": "受伤的是哪里？", "options": ["右脚踝", "左膝盖", "右手腕"], "a": 0},
        {"q": "医生准备做什么检查？", "options": ["验血", "拍X光", "量血压"], "a": 1}
      ],
      "dictation": {"prompt": "听写说明受伤经过的句子", "answer": "Je suis tombée en descendant l'escalier."},
      "vocab": [["se tordre la cheville", "扭伤脚踝"], ["enflé", "肿的"], ["une radio", "X光检查"]]
    },
    {
      "id": 13,
      "unit": "健康建议",
      "pages": "讲义 p.34",
      "title": "睡不好怎么办？",
      "focus": "命令式、il faut 与 devoir",
      "lines": [
        ["A", "Docteur, je suis toujours fatigué et je dors mal."],
        ["B", "Vous travaillez le soir sur votre ordinateur ?"],
        ["A", "Oui, souvent jusqu'à minuit."],
        ["B", "Alors, arrêtez les écrans une heure avant de dormir. Ne buvez pas de café le soir."],
        ["A", "Je dois faire du sport ?"],
        ["B", "Oui, mais pas trop tard. Il faut aussi dormir au moins huit heures."]
      ],
      "questions": [
        {"q": "他为什么疲劳？", "options": ["睡不好", "运动太多", "吃得太少"], "a": 0},
        {"q": "睡前多久应该停止看屏幕？", "options": ["半小时", "一小时", "两小时"], "a": 1},
        {"q": "至少应睡多久？", "options": ["6小时", "7小时", "8小时"], "a": 2}
      ],
      "dictation": {"prompt": "听写否定命令式建议", "answer": "Ne buvez pas de café le soir."},
      "vocab": [["arrêter", "停止"], ["écran", "屏幕"], ["au moins", "至少"]]
    },
    {
      "id": 14,
      "unit": "副动词",
      "pages": "讲义 p.35",
      "title": "怎么发生的？",
      "focus": "en + participe présent",
      "lines": [
        ["A", "Tu as vu ton voisin Paul hier ?"],
        ["B", "Oui, je l'ai vu en allant au bureau."],
        ["A", "Il va bien ?"],
        ["B", "Pas vraiment. Il s'est coupé le doigt en préparant le dîner."],
        ["A", "C'est grave ?"],
        ["B", "Non. Il est allé à la pharmacie en rentrant chez lui et maintenant ça va mieux."]
      ],
      "questions": [
        {"q": "说话人在哪里遇到 Paul？", "options": ["去办公室路上", "药店里", "回家路上"], "a": 0},
        {"q": "Paul 怎么受伤的？", "options": ["切菜时割到手指", "跑步时摔倒", "搬家时扭伤"], "a": 0},
        {"q": "之后他去了哪里？", "options": ["医院", "药店", "学校"], "a": 1}
      ],
      "dictation": {"prompt": "听写包含副动词的受伤句", "answer": "Il s'est coupé le doigt en préparant le dîner."},
      "vocab": [["en allant", "在去……时"], ["se couper le doigt", "割伤手指"], ["ça va mieux", "好多了"]]
    },
    {
      "id": 15,
      "unit": "代词 y",
      "pages": "讲义 p.36-37",
      "title": "你常去那里吗？",
      "focus": "地点代词 y",
      "lines": [
        ["A", "Tu vas souvent à la bibliothèque ?"],
        ["B", "Oui, j'y vais presque tous les jours. J'y travaille l'après-midi."],
        ["A", "Et à la piscine ?"],
        ["B", "J'y vais seulement le samedi matin."],
        ["A", "Tu vas parfois au cinéma du quartier ?"],
        ["B", "Non, je n'y vais jamais. Je préfère regarder des films chez moi."]
      ],
      "questions": [
        {"q": "他多常去图书馆？", "options": ["几乎每天", "每周一次", "从不"], "a": 0},
        {"q": "什么时候去游泳池？", "options": ["周五晚", "周六早", "周日午后"], "a": 1},
        {"q": "他去社区电影院吗？", "options": ["经常去", "偶尔去", "从不去"], "a": 2}
      ],
      "dictation": {"prompt": "听写含 y 的否定句", "answer": "Non, je n'y vais jamais."},
      "vocab": [["presque", "几乎"], ["seulement", "只"], ["ne...jamais", "从不"]]
    },
    {
      "id": 16,
      "unit": "综合复习",
      "pages": "讲义 p.41-43",
      "title": "新公寓与意外",
      "focus": "住房、过去时、受伤与建议",
      "lines": [
        ["A", "Le mois dernier, j'ai déménagé dans un appartement de vingt-cinq mètres carrés au troisième étage."],
        ["B", "Il y a un ascenseur dans l'immeuble ?"],
        ["A", "Non. Samedi, ma sœur et moi avons acheté une table au vide-grenier."],
        ["B", "Vous avez monté la table par l'escalier ?"],
        ["A", "Oui, et je suis tombé en montant. Je me suis tordu la cheville."],
        ["B", "Tu es allé chez le médecin ?"],
        ["A", "Oui. Il m'a dit de me reposer et de ne pas marcher pendant une semaine. Maintenant, ma sœur fait les courses pour moi."]
      ],
      "questions": [
        {"q": "公寓在几楼？", "options": ["二楼", "三楼", "四楼"], "a": 1},
        {"q": "他们买了什么？", "options": ["桌子", "床", "衣柜"], "a": 0},
        {"q": "医生要求休息多久？", "options": ["3天", "1周", "2周"], "a": 1}
      ],
      "dictation": {"prompt": "听写事故发生的句子", "answer": "Oui, et je suis tombé en montant."},
      "vocab": [["au troisième étage", "在三楼"], ["en montant", "往上搬/上楼时"], ["faire les courses", "买日用品"]]
    }
  ]
};
