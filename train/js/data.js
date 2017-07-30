const data = {
	'aa': 'AA制 ',
	'ab': 'angelBaby',
	'ac': '米兰',
	'ad': '阿尔茨海默',
	'av': '维多利亚女王',
	'as': 'August Silk品牌，年轻白领女性提供简洁而精致、时尚而舒适的时装。天然高贵的桑蚕丝面料',
	'al': '亚伯拉罕·林肯',
	'ae': '阿尔伯特·爱因斯坦',
	'ag': '化学元素银',
	'ao': '奥黛丽.赫本',
	'ba': '超级奶爸 ',
	'bb': 'big bang（宇宙大爆炸）是于2006年出道的韩国组合',
	'bc': '梅赛德斯',
	'bd': '李彦宏',
	'bv': 'Nikolaj Kopernik',
	'bs': '毕升',
	'bl': '李小龙',
	'be': '比利时（Belgium BE） 国花虞美人',
	'bg': '比尔·盖茨',
	'bo': '多',
	'ca': '曹昂，曹操长子，随曹操出征张绣，因张绣突然袭击，曹昂为救曹操负责断後，与大将典韦一同战死於宛城',
	'cb': 'CB是商业银行的缩写',
	'cc': '克里斯托弗·哥伦布',
	'cd': '查尔斯·狄更斯',
	'cv': '航空母舰的简称',
	'cs': '曹爽，曹魏权臣，因谋反之罪，被族诛',
	'cl': '蔡伦',
	'ce': 'Crazy English',
	'cg': '发条地精（位于黄昏酒馆）',
	'co': 'co',
	'da': 'David‎ 大卫（米开朗琪罗作品）',
	'db': '大卫·贝克汉姆',
	'dc': 'DC漫画公司（Detective Comics）是美国与漫威漫画公司（Marvel Comics）齐名的漫画巨头',
	'dd': '大大',
	'dv': '达·芬奇 ',
	'ds': '雪铁龙',
	'dl': '恐惧魔王(Dread Lord)是《魔兽争霸》中不死族的英雄之一，该英雄有吸血光环',
	'de': 'DE为半自动手枪沙漠之鹰(Desert Eagle)的缩写。',
	'dg': 'DG是全球最大的唱片公司',
	'do': '杜',
	'va': '~',
	'vb': '维多利亚·贝克汉姆',
	'vc': 'Vice City 罪恶都市',
	'vd': '撒旦',
	'vv': '艾薇儿·拉维尼（Avril Lavigne）艾薇儿发行首张专辑《Let Go》',
	'vs': 'Vidal ·Sassoon VS是个著名发型师的名字',
	'vl': '牛顿',
	've': '犹大',
	'vg': '文森特·威廉·梵·高',
	'vo': '奥巴马',
	'sa': 'Dota中的英雄，Stealth Assassin。隐形刺客，位于清晨酒馆',
	'sb': '谢尔盖·布林(Sergey Brin) 创办谷歌搜索引擎',
	'sc': '资深大律师（SeniorCounsel）',
	'sd': 'SD全称为SlamDunk，日本人气体育漫画《灌篮高手》的简称',
	'sv': '红神 被鬼神卡赞所控制的鬼剑士。平时没什么异常，一旦PK被虐，精神达到崩溃状态时会失去了理智，所以“红神大爆炸”技能无法区分敌军与我军',
	'ss': '苏东坡',
	'sl': 'Nikola Tesla',
	'se': '素娥（仙女称呼）',
	'sg': '弗雷德里克·桑格（Frederick Sanger）是一位英国生物化学家 唯一获得两次诺贝尔化学奖的人',
	'so': '360',
	'la': '蜡笔小新',
	'lb': '刘备',
	'lc': '刘超（百度除名）',
	'ld': '莱昂纳多·迪卡普里奥（Leonardo DiCaprio）',
	'lv': '路易威登（LouisVuitton）',
	'ls': '李斯',
	'll': '丽安娜·刘易斯（Leona Lewis）好莱坞电影《阿凡达》献唱主题曲《I See You》',
	'le': '刘娥（宋真宗赵恒的皇后），宋朝第一位摄政的太后',
	'lg': '老公',
	'lo': '雷欧·奥特曼',
	'ea': '美国艺电公司（Electronic Arts，简称EA）',
	'eb': 'The Electric Boogaloos简称EB 舞蹈组合',
	'ec': '陈奕迅',
	'ed': 'E.d 是专注商业摄影的业内知名摄影师陈小龙的英文名简写。',
	'ev': '约翰·冯·诺依曼 ',
	'es': '恩施土家族苗族自治州',
	'el': '恩来',
	'ee': 'Harley Earl美国商业性设计的代表人物，世界上第一个专职汽车设计师',
	'eg': 'Egypt 埃及的缩写就是EG',
	'eo': '艾伦·麦席森·图灵',
	'ga': '乔治·阿玛尼（Giorgio Armani）创立于意大利米兰',
	'gb': '蔡建',
	'gc': 'garnet crow 来自日本的四人乐团 《名侦探柯南》的主题曲',
	'gd': '权志龙 BIGBANG队长',
	'gv': '~',
	'gs': '漫画《黑瞳》中的组织，国家神秘特别侦查部',
	'gl': 'group leader 负责团队的技术领导等工作',
	'ge': '美国通用电气公司（创始人 爱迪生）',
	'gg': '关公',
	'go': 'go语言',
	'oa': '电影《绿灯侠》中全宇宙绿灯军团的故乡',
	'ob': '高尔夫运动规则中“Out of Bounds”的简称，其中文是“界外”',
	'oc': 'object c',
	'od': '黑曜毁灭者基于魔兽争霸3:冰封王座里天灾军团的一名智力型英雄，位于午夜酒馆。',
	'ov': 'Tim Cook',
	'os': 'her',
	'ol': 'OL “Office Lady”的缩写，中文解释为“白领女性”',
	'oe': '特斯拉',
	'og': 'og “Office Gentleman”的缩写，中文解释为“办公室绅士”',
	'oo': 'OO(Object–Oriented )面向对象'
}

export default data;