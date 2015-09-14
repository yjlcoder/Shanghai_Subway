var stations = new Array();
var stationCount = 0;
var links = new Array();
var linkCount = 0;
var lineComponent = Qt.createComponent("PathDraw.qml")
var offsetx = 10
var offsety = 10
//var dest = "同济大学"
//var source = "上海汽车城"

function Station(x,y,text,link){
    this.x = x;
    this.y = y;
    this.text = text;
    this.link = link;
    if(link == null) this.color = "#000000";
    else if(link[2] == null) this.color = link[0].color;
    else this.color = "#000000"
}

function Link(text,line){
    this.text = text;
    this.line = line;
    this.x = stations[findStation(text)].x;
    this.y = stations[findStation(text)].y;
    this.color = getColor(line);
}

function initStation(){
    stations[0] = new Station(70, 195, "嘉定北", null);
    stations[1] = new Station(104, 195, "嘉定西", null);
    stations[2] = new Station(129, 195, "白银路", null);
    stations[3] = new Station(150, 217, "嘉定新城", null);
    stations[4] = new Station(128, 240, "上海赛车场", null);
    stations[5] = new Station(101, 240, "昌吉东路", null);
    stations[6] = new Station(70, 240, "上海汽车城", null);
    stations[7] = new Station(46, 240, "安亭", null);
    stations[8] = new Station(177, 217, "马陆", null);
    stations[9] = new Station(195, 217, "南翔", null);
    stations[10] = new Station(216, 217, "桃浦新村", null);
    stations[11] = new Station(238, 217, "武威路", null);
    stations[12] = new Station(266, 217, "祁连山路", null);
    stations[13] = new Station(289, 217, "李子园", null);
    stations[14] = new Station(311, 217, "上海西站", null);
    stations[15] = new Station(311, 254, "真如", null);
    stations[16] = new Station(311, 278, "枫桥路", null);
    stations[17] = new Station(311, 302, "曹杨路", null);
    stations[18] = new Station(311, 326, "隆德路", null);
    stations[19] = new Station(311, 350, "江苏路", null);
    stations[20] = new Station(269, 5, "美兰湖", null);
    stations[21] = new Station(269, 28, "罗南新村", null);
    stations[22] = new Station(269, 52, "潘广路", null);
    stations[23] = new Station(269, 75, "刘行", null);
    stations[24] = new Station(269, 99, "顾村公园", null);
    stations[25] = new Station(269, 120, "祁华路", null);
    stations[26] = new Station(304, 120, "上海大学", null);
    stations[27] = new Station(336, 120, "南陈路", null);
    stations[28] = new Station(336, 142, "上大路", null);
    stations[29] = new Station(336, 163, "场中路", null);
    stations[30] = new Station(336, 184, "大场镇", null);
    stations[31] = new Station(336, 205, "行知路", null);
    stations[32] = new Station(336, 226, "大华三路", null);
    stations[33] = new Station(336, 250, "新村路", null);
    stations[34] = new Station(336, 278, "岚皋路", null);
    stations[35] = new Station(336, 302, "镇坪路", null);
    stations[36] = new Station(336, 326, "长寿路", null);
    stations[37] = new Station(336, 350, "昌平路", null);
    stations[38] = new Station(336, 372, "静安寺", null);
    stations[39] = new Station(336, 394, "常熟路", null);
    stations[40] = new Station(337, 438, "肇家浜路", null);
    stations[41] = new Station(336, 462, "东安路", null);
    stations[42] = new Station(336, 506, "船厂路", null);
    stations[43] = new Station(360, 506, "后滩", null);
    stations[44] = new Station(393, 506, "长清路", null);
    stations[45] = new Station(423, 506, "耀华路", null);
    stations[46] = new Station(454, 506, "云台路", null);
    stations[47] = new Station(487, 506, "高科西路", null);
    stations[48] = new Station(520, 506, "杨高南路", null);
    stations[49] = new Station(556, 506, "锦绣路", null);
    stations[50] = new Station(601, 506, "芳华路", null);
    stations[51] = new Station(601, 443, "龙阳路", null);
    stations[52] = new Station(601, 417, "花木路", null);
    stations[53] = new Station(362, 302, "中潭路", null);
    stations[54] = new Station(402, 302, "上海火车站", null);
    stations[55] = new Station(455, 302, "宝山路", null);
    stations[56] = new Station(481, 302, "海伦路", null);
    stations[57] = new Station(501, 302, "临平路", null);
    stations[58] = new Station(521, 302, "大连路", null);
    stations[59] = new Station(521, 328, "杨树浦路", null);
    stations[60] = new Station(521, 348, "浦东大道", null);
    stations[61] = new Station(521, 372, "世纪大道", null);
    stations[62] = new Station(521, 416, "浦电路", null);
    stations[63] = new Station(521, 462, "蓝村路", null);
    stations[64] = new Station(487, 462, "塘桥", null);
    stations[65] = new Station(450, 462, "南浦大桥", null);
    stations[66] = new Station(423, 462, "西藏南路", null);
    stations[67] = new Station(394, 462, "鲁班路", null);
    stations[68] = new Station(364, 462, "大木桥路", null);
    stations[69] = new Station(307, 462, "上海体育场", null);
    stations[70] = new Station(263, 462, "上海体育馆", null);
    stations[71] = new Station(263, 438, "宜山路", null);
    stations[72] = new Station(263, 388, "虹桥路", null);
    stations[73] = new Station(263, 358, "延安西路", null);
    stations[74] = new Station(263, 335, "中山公园", null);
    stations[75] = new Station(263, 302, "金沙江路", null);
    stations[76] = new Station(362, 372, "南京西路", null);
    stations[77] = new Station(401, 372, "人民广场", null);
    stations[78] = new Station(442, 372, "南京东路", null);
    stations[79] = new Station(470, 372, "陆家嘴", null);
    stations[80] = new Station(492, 372, "东昌路", null);
    stations[81] = new Station(234, 335, "娄山关路", null);
    stations[82] = new Station(213, 335, "威宁路", null);
    stations[83] = new Station(189, 335, "北新泾", null);
    stations[84] = new Station(150, 335, "淞虹路", null);
    stations[85] = new Station(113, 335, "虹桥2号航站楼", null);
    stations[86] = new Station(76, 335, "虹桥火车站", null);
    stations[87] = new Station(46, 335, "徐泾东", null);
    stations[88] = new Station(557, 417, "上海科技馆", null);
    stations[89] = new Station(558, 443, "世纪公园", null);
    stations[90] = new Station(629, 443, "张江高科", null);
    stations[91] = new Station(659, 443, "金科路", null);
    stations[92] = new Station(711, 443, "唐镇", null);
    stations[93] = new Station(684, 443, "广兰路", null);
    stations[94] = new Station(736, 443, "创新中路", null);
    stations[95] = new Station(736, 467, "华夏东路", null);
    stations[96] = new Station(736, 488, "川沙", null);
    stations[97] = new Station(765, 488, "凌空路", null);
    stations[98] = new Station(794, 488, "远东大道", null);
    stations[99] = new Station(823, 488, "海天三路", null);
    stations[100] = new Station(858, 488, "浦东国际机场", null);
    stations[101] = new Station(402, 5, "富锦路", null);
    stations[102] = new Station(402, 29, "友谊西路", null);
    stations[103] = new Station(402, 54, "宝安公路", null);
    stations[104] = new Station(402, 78, "共富新村", null);
    stations[105] = new Station(402, 103, "呼兰路", null);
    stations[106] = new Station(402, 127, "通河新村", null);
    stations[107] = new Station(402, 152, "共康路", null);
    stations[108] = new Station(402, 176, "彭浦新村", null);
    stations[109] = new Station(402, 201, "汶水路", null);
    stations[110] = new Station(402, 225, "上海马戏城", null);
    stations[111] = new Station(402, 250, "延长路", null);
    stations[112] = new Station(402, 274, "中山北路", null);
    stations[113] = new Station(402, 324, "汉中路", null);
    stations[114] = new Station(402, 345, "新闸路", null);
    stations[115] = new Station(400, 394, "黄陂南路", null);
    stations[116] = new Station(368, 394, "陕西南路", null);
    stations[117] = new Station(308, 394, "衡山路", null);
    stations[118] = new Station(308, 438, "徐家汇", null);
    stations[119] = new Station(248, 483, "漕宝路", null);
    stations[120] = new Station(227, 506, "上海南站", null);
    stations[121] = new Station(207, 524, "锦江乐园", null);
    stations[122] = new Station(187, 543, "莲花路", null);
    stations[123] = new Station(167, 560, "外环路", null);
    stations[124] = new Station(147, 578, "莘庄", null);
    stations[125] = new Station(360, 438, "嘉善路", null);
    stations[126] = new Station(382, 438, "打浦桥", null);
    stations[127] = new Station(401, 438, "马当路", null);
    stations[128] = new Station(423, 438, "陆家浜路", null);
    stations[129] = new Station(448, 438, "小南门", null);
    stations[130] = new Station(472, 415, "商城路", null);
    stations[131] = new Station(237, 438, "桂林路", null);
    stations[132] = new Station(210, 438, "漕河泾开发区", null);
    stations[133] = new Station(183, 438, "合川路", null);
    stations[134] = new Station(156, 438, "星中路", null);
    stations[135] = new Station(129, 438, "七宝", null);
    stations[136] = new Station(102, 438, "中春路", null);
    stations[137] = new Station(75, 438, "九亭", null);
    stations[138] = new Station(48, 438, "泗泾", null);
    stations[139] = new Station(48, 470, "佘山", null);
    stations[140] = new Station(48, 492, "洞泾", null);
    stations[141] = new Station(48, 521, "松江大学城", null);
    stations[142] = new Station(48, 556, "松江新城", null);
    stations[143] = new Station(122, 578, "春申路", null);
    stations[144] = new Station(122, 598, "银都路", null);
    stations[145] = new Station(122, 622, "颛桥", null);
    stations[146] = new Station(122, 642, "北桥", null);
    stations[147] = new Station(122, 666, "剑川路", null);
    stations[148] = new Station(122, 689, "东川路", null);
    stations[149] = new Station(97, 689, "金平路", null);
    stations[150] = new Station(71, 689, "华宁路", null);
    stations[151] = new Station(20, 689, "闵行开发区", null);
    stations[152] = new Station(46, 689, "文井路", null);
    stations[153] = new Station(557, 390, "杨高中路", null);
    stations[154] = new Station(425, 285, "中兴路", null);
    stations[155] = new Station(424, 268, "西藏北路", null);
    stations[156] = new Station(425, 330, "曲阜路", null);
    stations[157] = new Station(455, 268, "虹口足球场", null);
    stations[158] = new Station(488, 268, "曲阳路", null);
    stations[159] = new Station(516, 268, "四平路", null);
    stations[160] = new Station(548, 302, "鞍山新村", null);
    stations[161] = new Station(573, 302, "江浦路", null);
    stations[162] = new Station(600, 302, "黄兴路", null);
    stations[163] = new Station(600, 275, "延吉中路", null);
    stations[164] = new Station(600, 248, "黄兴公园", null);
    stations[165] = new Station(600, 221, "翔殷路", null);
    stations[166] = new Station(600, 197, "嫩江路", null);
    stations[167] = new Station(600, 169, "市光路", null);
    stations[168] = new Station(423, 394, "大世界", null);
    stations[169] = new Station(423, 416, "老西门", null);
    stations[170] = new Station(423, 482, "周家渡", null);
    stations[171] = new Station(422, 525, "成山路", null);
    stations[172] = new Station(422, 548, "杨思", null);
    stations[173] = new Station(422, 568, "济阳路", null);
    stations[174] = new Station(422, 593, "凌兆新村", null);
    stations[175] = new Station(422, 616, "芦恒路", null);
    stations[176] = new Station(422, 636, "浦江镇", null);
    stations[177] = new Station(422, 658, "江月路", null);
    stations[178] = new Station(422, 680, "联航路", null);
    stations[179] = new Station(422, 702, "航天博物馆", null);
    stations[180] = new Station(548, 268, "同济大学", null);
    stations[181] = new Station(548, 242, "国权路", null);
    stations[182] = new Station(548, 216, "五角场", null);
    stations[183] = new Station(548, 190, "江湾体育场", null);
    stations[184] = new Station(548, 164, "三门路", null);
    stations[185] = new Station(548, 138, "殷高东路", null);
    stations[186] = new Station(548, 112, "新江湾城", null);
    stations[187] = new Station(502, 285, "邮电新村", null);
    stations[188] = new Station(481, 347, "四川北路", null);
    stations[189] = new Station(442, 347, "天潼路", null);
    stations[190] = new Station(443, 416, "豫园", null);
    stations[191] = new Station(385, 416, "新天地", null);
    stations[192] = new Station(347, 416, "上海图书馆", null);
    stations[193] = new Station(284, 416, "交通大学", null);
    stations[194] = new Station(237, 388, "宋园路", null);
    stations[195] = new Station(215, 388, "伊犁路", null);
    stations[196] = new Station(194, 388, "水城路", null);
    stations[197] = new Station(173, 388, "龙溪路", null);
    stations[198] = new Station(147, 388, "上海动物园", null);
    stations[199] = new Station(113, 388, "虹桥1号航站楼", null);
    stations[200] = new Station(173, 411, "龙柏新村", null);
    stations[201] = new Station(144, 411, "紫藤路", null);
    stations[202] = new Station(113, 411, "航中路", null);
    stations[203] = new Station(718, 287, "东靖路", null);
    stations[204] = new Station(718, 260, "五洲大道", null);
    stations[205] = new Station(718, 233, "洲海路", null);
    stations[206] = new Station(718, 206, "外高桥保税区南站", null);
    stations[207] = new Station(718, 179, "航津路", null);
    stations[208] = new Station(718, 152, "外高桥保税区北站", null);
    stations[209] = new Station(718, 125, "港城路", null);
    stations[210] = new Station(718, 314, "巨峰路", null);
    stations[211] = new Station(718, 345, "五莲路", null);
    stations[212] = new Station(718, 372, "博兴路", null);
    stations[213] = new Station(697, 372, "金桥路", null);
    stations[214] = new Station(671, 372, "云山路", null);
    stations[215] = new Station(647, 372, "德平路", null);
    stations[216] = new Station(617, 372, "北洋泾路", null);
    stations[217] = new Station(590, 372, "民生路", null);
    stations[218] = new Station(557, 372, "源生体育中心", null);
    stations[219] = new Station(532, 482, "上海儿童医学中心", null);
    stations[220] = new Station(487, 482, "临沂新村", null);
    stations[221] = new Station(487, 527, "东明路", null);
    stations[222] = new Station(487, 545, "高青路", null);
    stations[223] = new Station(487, 568, "华夏西路", null);
    stations[224] = new Station(469, 568, "上南路", null);
    stations[225] = new Station(447, 568, "灵岩南路", null);
    stations[226] = new Station(494, 416, "浦电 路", null);
    stations[227] = new Station(493, 4, "江杨北路", null);
    stations[228] = new Station(493, 27, "铁力路", null);
    stations[229] = new Station(493, 51, "友谊路", null);
    stations[230] = new Station(493, 73, "宝杨路", null);
    stations[231] = new Station(493, 91, "水产路", null);
    stations[232] = new Station(493, 111, "淞滨路", null);
    stations[233] = new Station(493, 136, "张华浜", null);
    stations[234] = new Station(456, 136, "淞发路", null);
    stations[235] = new Station(455, 158, "长江南路", null);
    stations[236] = new Station(455, 179, "殷高西路", null);
    stations[237] = new Station(455, 200, "江湾镇", null);
    stations[238] = new Station(455, 224, "大柏树", null);
    stations[239] = new Station(455, 242, "赤峰路", null);
    stations[240] = new Station(455, 285, "东宝兴路", null);
    stations[241] = new Station(288, 482, "漕溪路", null);
    stations[242] = new Station(288, 506, "龙漕路", null);
    stations[243] = new Station(260, 506, "石龙路", null);
    stationCount = 244;
}

function initLink(){
    var component = Qt.createComponent("Circle.qml");
    var link = new Array()
    link[0] = new Link("嘉定西", "11号线");
    line(stations[0].x+offsetx, stations[0].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[0].link = link;
//    stations[0].color = link[0].color;
//    component.createObject(subway,{"x":stations[0].x,"y":stations[0].y,"color":stations[0].color});
    link = new Array()
    link[0] = new Link("嘉定北", "11号线");
    line(stations[1].x+offsetx, stations[1].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("白银路", "11号线");
    line(stations[1].x+offsetx, stations[1].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[1].link = link;
    link = new Array()
    link[0] = new Link("嘉定西", "11号线");
    line(stations[2].x+offsetx, stations[2].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("嘉定新城", "11号线");
    line(stations[2].x+offsetx, stations[2].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[2].link = link;
    link = new Array()
    link[0] = new Link("白银路", "11号线");
    line(stations[3].x+offsetx, stations[3].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海赛车场", "11号线");
    line(stations[3].x+offsetx, stations[3].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("马陆", "11号线");
    line(stations[3].x+offsetx, stations[3].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    stations[3].link = link;
    link = new Array()
    link[0] = new Link("昌吉东路", "11号线");
    line(stations[4].x+offsetx, stations[4].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("嘉定新城", "11号线");
    line(stations[4].x+offsetx, stations[4].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[4].link = link;
    link = new Array()
    link[0] = new Link("上海汽车城", "11号线");
    line(stations[5].x+offsetx, stations[5].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海赛车场", "11号线");
    line(stations[5].x+offsetx, stations[5].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[5].link = link;
    link = new Array()
    link[0] = new Link("安亭", "11号线");
    line(stations[6].x+offsetx, stations[6].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("昌吉东路", "11号线");
    line(stations[6].x+offsetx, stations[6].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[6].link = link;
    link = new Array()
    link[0] = new Link("上海汽车城", "11号线");
    line(stations[7].x+offsetx, stations[7].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[7].link = link;
    link = new Array()
    link[0] = new Link("嘉定新城", "11号线");
    line(stations[8].x+offsetx, stations[8].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("南翔", "11号线");
    line(stations[8].x+offsetx, stations[8].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[8].link = link;
    link = new Array()
    link[0] = new Link("马陆", "11号线");
    line(stations[9].x+offsetx, stations[9].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("桃浦新村", "11号线");
    line(stations[9].x+offsetx, stations[9].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[9].link = link;
    link = new Array()
    link[0] = new Link("南翔", "11号线");
    line(stations[10].x+offsetx, stations[10].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("武威路", "11号线");
    line(stations[10].x+offsetx, stations[10].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[10].link = link;
    link = new Array()
    link[0] = new Link("桃浦新村", "11号线");
    line(stations[11].x+offsetx, stations[11].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("祁连山路", "11号线");
    line(stations[11].x+offsetx, stations[11].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[11].link = link;
    link = new Array()
    link[0] = new Link("武威路", "11号线");
    line(stations[12].x+offsetx, stations[12].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("李子园", "11号线");
    line(stations[12].x+offsetx, stations[12].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[12].link = link;
    link = new Array()
    link[0] = new Link("祁连山路", "11号线");
    line(stations[13].x+offsetx, stations[13].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海西站", "11号线");
    line(stations[13].x+offsetx, stations[13].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[13].link = link;
    link = new Array()
    link[0] = new Link("李子园", "11号线");
    line(stations[14].x+offsetx, stations[14].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("真如", "11号线");
    line(stations[14].x+offsetx, stations[14].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[14].link = link;
    link = new Array()
    link[0] = new Link("上海西站", "11号线");
    line(stations[15].x+offsetx, stations[15].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("枫桥路", "11号线");
    line(stations[15].x+offsetx, stations[15].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[15].link = link;
    link = new Array()
    link[0] = new Link("真如", "11号线");
    line(stations[16].x+offsetx, stations[16].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("曹杨路", "11号线");
    line(stations[16].x+offsetx, stations[16].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[16].link = link;
    link = new Array()
    link[0] = new Link("枫桥路", "11号线");
    line(stations[17].x+offsetx, stations[17].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("隆德路", "11号线");
    line(stations[17].x+offsetx, stations[17].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("镇坪路", "4号线");
    line(stations[17].x+offsetx, stations[17].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("金沙江路", "4号线");
    line(stations[17].x+offsetx, stations[17].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    link[4] = new Link("镇坪路", "3号线");
    line(stations[17].x+offsetx, stations[17].y+offsety, link[4].x+offsetx, link[4].y+offsety,link[4].color);
    link[5] = new Link("金沙江路", "3号线");
    line(stations[17].x+offsetx, stations[17].y+offsety, link[5].x+offsetx, link[5].y+offsety,link[5].color);
    stations[17].link = link;
    link = new Array()
    link[0] = new Link("曹杨路", "11号线");
    line(stations[18].x+offsetx, stations[18].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("江苏路", "11号线");
    line(stations[18].x+offsetx, stations[18].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[18].link = link;
    link = new Array()
    link[0] = new Link("隆德路", "11号线");
    line(stations[19].x+offsetx, stations[19].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("中山公园", "2号线");
    line(stations[19].x+offsetx, stations[19].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("静安寺", "2号线");
    line(stations[19].x+offsetx, stations[19].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    stations[19].link = link;
    link = new Array()
    link[0] = new Link("罗南新村", "7号线");
    line(stations[20].x+offsetx, stations[20].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[20].link = link;
    link = new Array()
    link[0] = new Link("美兰湖", "7号线");
    line(stations[21].x+offsetx, stations[21].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("潘广路", "7号线");
    line(stations[21].x+offsetx, stations[21].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[21].link = link;
    link = new Array()
    link[0] = new Link("罗南新村", "7号线");
    line(stations[22].x+offsetx, stations[22].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("刘行", "7号线");
    line(stations[22].x+offsetx, stations[22].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[22].link = link;
    link = new Array()
    link[0] = new Link("潘广路", "7号线");
    line(stations[23].x+offsetx, stations[23].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("顾村公园", "7号线");
    line(stations[23].x+offsetx, stations[23].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[23].link = link;
    link = new Array()
    link[0] = new Link("刘行", "7号线");
    line(stations[24].x+offsetx, stations[24].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("祁华路", "7号线");
    line(stations[24].x+offsetx, stations[24].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[24].link = link;
    link = new Array()
    link[0] = new Link("顾村公园", "7号线");
    line(stations[25].x+offsetx, stations[25].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海大学", "7号线");
    line(stations[25].x+offsetx, stations[25].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[25].link = link;
    link = new Array()
    link[0] = new Link("祁华路", "7号线");
    line(stations[26].x+offsetx, stations[26].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("南陈路", "7号线");
    line(stations[26].x+offsetx, stations[26].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[26].link = link;
    link = new Array()
    link[0] = new Link("上海大学", "7号线");
    line(stations[27].x+offsetx, stations[27].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上大路", "7号线");
    line(stations[27].x+offsetx, stations[27].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[27].link = link;
    link = new Array()
    link[0] = new Link("南陈路", "7号线");
    line(stations[28].x+offsetx, stations[28].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("场中路", "7号线");
    line(stations[28].x+offsetx, stations[28].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[28].link = link;
    link = new Array()
    link[0] = new Link("上大路", "7号线");
    line(stations[29].x+offsetx, stations[29].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("大场镇", "7号线");
    line(stations[29].x+offsetx, stations[29].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[29].link = link;
    link = new Array()
    link[0] = new Link("场中路", "7号线");
    line(stations[30].x+offsetx, stations[30].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("行知路", "7号线");
    line(stations[30].x+offsetx, stations[30].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[30].link = link;
    link = new Array()
    link[0] = new Link("大场镇", "7号线");
    line(stations[31].x+offsetx, stations[31].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("大华三路", "7号线");
    line(stations[31].x+offsetx, stations[31].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[31].link = link;
    link = new Array()
    link[0] = new Link("行知路", "7号线");
    line(stations[32].x+offsetx, stations[32].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("新村路", "7号线");
    line(stations[32].x+offsetx, stations[32].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[32].link = link;
    link = new Array()
    link[0] = new Link("大华三路", "7号线");
    line(stations[33].x+offsetx, stations[33].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("岚皋路", "7号线");
    line(stations[33].x+offsetx, stations[33].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[33].link = link;
    link = new Array()
    link[0] = new Link("新村路", "7号线");
    line(stations[34].x+offsetx, stations[34].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("镇坪路", "7号线");
    line(stations[34].x+offsetx, stations[34].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[34].link = link;
    link = new Array()
    link[0] = new Link("岚皋路", "7号线");
    line(stations[35].x+offsetx, stations[35].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("长寿路", "7号线");
    line(stations[35].x+offsetx, stations[35].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("曹杨路", "4号线");
    line(stations[35].x+offsetx, stations[35].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("曹杨路", "3号线");
    line(stations[35].x+offsetx, stations[35].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    link[4] = new Link("中潭路", "4号线");
    line(stations[35].x+offsetx, stations[35].y+offsety, link[4].x+offsetx, link[4].y+offsety,link[4].color);
    link[5] = new Link("中潭路", "3号线");
    line(stations[35].x+offsetx, stations[35].y+offsety, link[5].x+offsetx, link[5].y+offsety,link[5].color);
    stations[35].link = link;
    link = new Array()
    link[0] = new Link("镇坪路", "7号线");
    line(stations[36].x+offsetx, stations[36].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("昌平路", "7号线");
    line(stations[36].x+offsetx, stations[36].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[36].link = link;
    link = new Array()
    link[0] = new Link("长寿路", "7号线");
    line(stations[37].x+offsetx, stations[37].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("静安寺", "7号线");
    line(stations[37].x+offsetx, stations[37].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[37].link = link;
    link = new Array()
    link[0] = new Link("昌平路", "7号线");
    line(stations[38].x+offsetx, stations[38].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("常熟路", "7号线");
    line(stations[38].x+offsetx, stations[38].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("江苏路", "2号线");
    line(stations[38].x+offsetx, stations[38].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("南京西路", "2号线");
    line(stations[38].x+offsetx, stations[38].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[38].link = link;
    link = new Array()
    link[0] = new Link("静安寺", "7号线");
    line(stations[39].x+offsetx, stations[39].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("肇家浜路", "7号线");
    line(stations[39].x+offsetx, stations[39].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("陕西南路", "1号线");
    line(stations[39].x+offsetx, stations[39].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("衡山路", "1号线");
    line(stations[39].x+offsetx, stations[39].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[39].link = link;
    link = new Array()
    link[0] = new Link("常熟路", "7号线");
    line(stations[40].x+offsetx, stations[40].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("东安路", "7号线");
    line(stations[40].x+offsetx, stations[40].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("徐家汇", "9号线");
    line(stations[40].x+offsetx, stations[40].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("嘉善路", "9号线");
    line(stations[40].x+offsetx, stations[40].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[40].link = link;
    link = new Array()
    link[0] = new Link("肇家浜路", "7号线");
    line(stations[41].x+offsetx, stations[41].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("船厂路", "7号线");
    line(stations[41].x+offsetx, stations[41].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("大木桥路", "4号线");
    line(stations[41].x+offsetx, stations[41].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("上海体育场", "4号线");
    line(stations[41].x+offsetx, stations[41].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[41].link = link;
    link = new Array()
    link[0] = new Link("东安路", "7号线");
    line(stations[42].x+offsetx, stations[42].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("后滩", "7号线");
    line(stations[42].x+offsetx, stations[42].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[42].link = link;
    link = new Array()
    link[0] = new Link("船厂路", "7号线");
    line(stations[43].x+offsetx, stations[43].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("长清路", "7号线");
    line(stations[43].x+offsetx, stations[43].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[43].link = link;
    link = new Array()
    link[0] = new Link("后滩", "7号线");
    line(stations[44].x+offsetx, stations[44].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("耀华路", "7号线");
    line(stations[44].x+offsetx, stations[44].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[44].link = link;
    link = new Array()
    link[0] = new Link("长清路", "7号线");
    line(stations[45].x+offsetx, stations[45].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("云台路", "7号线");
    line(stations[45].x+offsetx, stations[45].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("周家渡", "8号线");
    line(stations[45].x+offsetx, stations[45].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("成山路", "8号线");
    line(stations[45].x+offsetx, stations[45].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[45].link = link;
    link = new Array()
    link[0] = new Link("耀华路", "7号线");
    line(stations[46].x+offsetx, stations[46].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("高科西路", "7号线");
    line(stations[46].x+offsetx, stations[46].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[46].link = link;
    link = new Array()
    link[0] = new Link("云台路", "7号线");
    line(stations[47].x+offsetx, stations[47].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("杨高南路", "7号线");
    line(stations[47].x+offsetx, stations[47].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("临沂新村", "6号线");
    line(stations[47].x+offsetx, stations[47].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("东明路", "6号线");
    line(stations[47].x+offsetx, stations[47].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[47].link = link;
    link = new Array()
    link[0] = new Link("高科西路", "7号线");
    line(stations[48].x+offsetx, stations[48].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("锦绣路", "7号线");
    line(stations[48].x+offsetx, stations[48].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[48].link = link;
    link = new Array()
    link[0] = new Link("杨高南路", "7号线");
    line(stations[49].x+offsetx, stations[49].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("芳华路", "7号线");
    line(stations[49].x+offsetx, stations[49].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[49].link = link;
    link = new Array()
    link[0] = new Link("锦绣路", "7号线");
    line(stations[50].x+offsetx, stations[50].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("龙阳路", "7号线");
    line(stations[50].x+offsetx, stations[50].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[50].link = link;
    link = new Array()
    link[0] = new Link("芳华路", "7号线");
    line(stations[51].x+offsetx, stations[51].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("花木路", "7号线");
    line(stations[51].x+offsetx, stations[51].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("世纪公园", "2号线");
    line(stations[51].x+offsetx, stations[51].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("张江高科", "2号线");
    line(stations[51].x+offsetx, stations[51].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[51].link = link;
    link = new Array()
    link[0] = new Link("龙阳路", "7号线");
    line(stations[52].x+offsetx, stations[52].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[52].link = link;
    link = new Array()
    link[0] = new Link("镇坪路", "4号线");
    line(stations[53].x+offsetx, stations[53].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("镇坪路", "3号线");
    line(stations[53].x+offsetx, stations[53].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("上海火车站", "4号线");
    line(stations[53].x+offsetx, stations[53].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("上海火车站", "3号线");
    line(stations[53].x+offsetx, stations[53].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[53].link = link;
    link = new Array()
    link[0] = new Link("宝山路", "4号线");
    line(stations[54].x+offsetx, stations[54].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("中山北路", "1号线");
    line(stations[54].x+offsetx, stations[54].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("汉中路", "1号线");
    line(stations[54].x+offsetx, stations[54].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("宝山路", "3号线");
    line(stations[54].x+offsetx, stations[54].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    link[4] = new Link("中潭路", "4号线");
    line(stations[54].x+offsetx, stations[54].y+offsety, link[4].x+offsetx, link[4].y+offsety,link[4].color);
    link[5] = new Link("中潭路", "3号线");
    line(stations[54].x+offsetx, stations[54].y+offsety, link[5].x+offsetx, link[5].y+offsety,link[5].color);
    stations[54].link = link;
    link = new Array()
    link[0] = new Link("上海火车站", "4号线");
    line(stations[55].x+offsetx, stations[55].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("海伦路", "4号线");
    line(stations[55].x+offsetx, stations[55].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("东宝兴路", "3号线");
    line(stations[55].x+offsetx, stations[55].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("上海火车站", "3号线");
    line(stations[55].x+offsetx, stations[55].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[55].link = link;
    link = new Array()
    link[0] = new Link("宝山路", "4号线");
    line(stations[56].x+offsetx, stations[56].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("临平路", "4号线");
    line(stations[56].x+offsetx, stations[56].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("邮电新村", "10号线");
    line(stations[56].x+offsetx, stations[56].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("四川北路", "10号线");
    line(stations[56].x+offsetx, stations[56].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[56].link = link;
    link = new Array()
    link[0] = new Link("海伦路", "4号线");
    line(stations[57].x+offsetx, stations[57].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("大连路", "4号线");
    line(stations[57].x+offsetx, stations[57].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[57].link = link;
    link = new Array()
    link[0] = new Link("临平路", "4号线");
    line(stations[58].x+offsetx, stations[58].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("杨树浦路", "4号线");
    line(stations[58].x+offsetx, stations[58].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[58].link = link;
    link = new Array()
    link[0] = new Link("大连路", "4号线");
    line(stations[59].x+offsetx, stations[59].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("浦东大道", "4号线");
    line(stations[59].x+offsetx, stations[59].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[59].link = link;
    link = new Array()
    link[0] = new Link("杨树浦路", "4号线");
    line(stations[60].x+offsetx, stations[60].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("世纪大道", "4号线");
    line(stations[60].x+offsetx, stations[60].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[60].link = link;
    link = new Array()
    link[0] = new Link("浦东大道", "4号线");
    line(stations[61].x+offsetx, stations[61].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("浦电路", "4号线");
    line(stations[61].x+offsetx, stations[61].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("东昌路", "2号线");
    line(stations[61].x+offsetx, stations[61].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("上海科技馆", "2号线");
    line(stations[61].x+offsetx, stations[61].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    link[4] = new Link("商城路", "9号线");
    line(stations[61].x+offsetx, stations[61].y+offsety, link[4].x+offsetx, link[4].y+offsety,link[4].color);
    link[5] = new Link("杨高中路", "9号线");
    line(stations[61].x+offsetx, stations[61].y+offsety, link[5].x+offsetx, link[5].y+offsety,link[5].color);
    link[6] = new Link("源生体育中心", "6号线");
    line(stations[61].x+offsetx, stations[61].y+offsety, link[6].x+offsetx, link[6].y+offsety,link[6].color);
    link[7] = new Link("浦电 路", "6号线");
    line(stations[61].x+offsetx, stations[61].y+offsety, link[7].x+offsetx, link[7].y+offsety,link[7].color);
    stations[61].link = link;
    link = new Array()
    link[0] = new Link("世纪大道", "4号线");
    line(stations[62].x+offsetx, stations[62].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("蓝村路", "4号线");
    line(stations[62].x+offsetx, stations[62].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[62].link = link;
    link = new Array()
    link[0] = new Link("浦电路", "4号线");
    line(stations[63].x+offsetx, stations[63].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("塘桥", "4号线");
    line(stations[63].x+offsetx, stations[63].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("上海儿童医学中心", "6号线");
    line(stations[63].x+offsetx, stations[63].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("浦电 路", "6号线");
    line(stations[63].x+offsetx, stations[63].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[63].link = link;
    link = new Array()
    link[0] = new Link("蓝村路", "4号线");
    line(stations[64].x+offsetx, stations[64].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("南浦大桥", "4号线");
    line(stations[64].x+offsetx, stations[64].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[64].link = link;
    link = new Array()
    link[0] = new Link("塘桥", "4号线");
    line(stations[65].x+offsetx, stations[65].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("西藏南路", "4号线");
    line(stations[65].x+offsetx, stations[65].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[65].link = link;
    link = new Array()
    link[0] = new Link("南浦大桥", "4号线");
    line(stations[66].x+offsetx, stations[66].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("鲁班路", "4号线");
    line(stations[66].x+offsetx, stations[66].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("陆家浜路", "8号线");
    line(stations[66].x+offsetx, stations[66].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("周家渡", "8号线");
    line(stations[66].x+offsetx, stations[66].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[66].link = link;
    link = new Array()
    link[0] = new Link("西藏南路", "4号线");
    line(stations[67].x+offsetx, stations[67].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("大木桥路", "4号线");
    line(stations[67].x+offsetx, stations[67].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[67].link = link;
    link = new Array()
    link[0] = new Link("鲁班路", "4号线");
    line(stations[68].x+offsetx, stations[68].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("东安路", "4号线");
    line(stations[68].x+offsetx, stations[68].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[68].link = link;
    link = new Array()
    link[0] = new Link("东安路", "4号线");
    line(stations[69].x+offsetx, stations[69].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海体育馆", "4号线");
    line(stations[69].x+offsetx, stations[69].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[69].link = link;
    link = new Array()
    link[0] = new Link("上海体育场", "4号线");
    line(stations[70].x+offsetx, stations[70].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("宜山路", "4号线");
    line(stations[70].x+offsetx, stations[70].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("徐家汇", "1号线");
    line(stations[70].x+offsetx, stations[70].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("漕宝路", "1号线");
    line(stations[70].x+offsetx, stations[70].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[70].link = link;
    link = new Array()
    link[0] = new Link("上海体育馆", "4号线");
    line(stations[71].x+offsetx, stations[71].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("虹桥路", "4号线");
    line(stations[71].x+offsetx, stations[71].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("徐家汇", "9号线");
    line(stations[71].x+offsetx, stations[71].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("桂林路", "9号线");
    line(stations[71].x+offsetx, stations[71].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    link[4] = new Link("漕溪路", "3号线");
    line(stations[71].x+offsetx, stations[71].y+offsety, link[4].x+offsetx, link[4].y+offsety,link[4].color);
    link[5] = new Link("虹桥路", "3号线");
    line(stations[71].x+offsetx, stations[71].y+offsety, link[5].x+offsetx, link[5].y+offsety,link[5].color);
    stations[71].link = link;
    link = new Array()
    link[0] = new Link("宜山路", "4号线");
    line(stations[72].x+offsetx, stations[72].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("延安西路", "4号线");
    line(stations[72].x+offsetx, stations[72].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("交通大学", "10号线");
    line(stations[72].x+offsetx, stations[72].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("宋园路", "10号线");
    line(stations[72].x+offsetx, stations[72].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    link[4] = new Link("延安西路", "3号线");
    line(stations[72].x+offsetx, stations[72].y+offsety, link[4].x+offsetx, link[4].y+offsety,link[4].color);
    link[5] = new Link("宜山路", "3号线");
    line(stations[72].x+offsetx, stations[72].y+offsety, link[5].x+offsetx, link[5].y+offsety,link[5].color);
    stations[72].link = link;
    link = new Array()
    link[0] = new Link("虹桥路", "4号线");
    line(stations[73].x+offsetx, stations[73].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("中山公园", "4号线");
    line(stations[73].x+offsetx, stations[73].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("虹桥路", "3号线");
    line(stations[73].x+offsetx, stations[73].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("中山公园", "3号线");
    line(stations[73].x+offsetx, stations[73].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[73].link = link;
    link = new Array()
    link[0] = new Link("延安西路", "4号线");
    line(stations[74].x+offsetx, stations[74].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("金沙江路", "4号线");
    line(stations[74].x+offsetx, stations[74].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("江苏路", "2号线");
    line(stations[74].x+offsetx, stations[74].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("娄山关路", "2号线");
    line(stations[74].x+offsetx, stations[74].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    link[4] = new Link("金沙江路", "3号线");
    line(stations[74].x+offsetx, stations[74].y+offsety, link[4].x+offsetx, link[4].y+offsety,link[4].color);
    link[5] = new Link("延安西路", "3号线");
    line(stations[74].x+offsetx, stations[74].y+offsety, link[5].x+offsetx, link[5].y+offsety,link[5].color);
    stations[74].link = link;
    link = new Array()
    link[0] = new Link("中山公园", "4号线");
    line(stations[75].x+offsetx, stations[75].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("曹杨路", "4号线");
    line(stations[75].x+offsetx, stations[75].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("曹杨路", "3号线");
    line(stations[75].x+offsetx, stations[75].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("中山公园", "3号线");
    line(stations[75].x+offsetx, stations[75].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[75].link = link;
    link = new Array()
    link[0] = new Link("静安寺", "2号线");
    line(stations[76].x+offsetx, stations[76].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("人民广场", "2号线");
    line(stations[76].x+offsetx, stations[76].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[76].link = link;
    link = new Array()
    link[0] = new Link("南京西路", "2号线");
    line(stations[77].x+offsetx, stations[77].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("南京东路", "2号线");
    line(stations[77].x+offsetx, stations[77].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("新闸路", "1号线");
    line(stations[77].x+offsetx, stations[77].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("黄陂南路", "1号线");
    line(stations[77].x+offsetx, stations[77].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    link[4] = new Link("曲阜路", "8号线");
    line(stations[77].x+offsetx, stations[77].y+offsety, link[4].x+offsetx, link[4].y+offsety,link[4].color);
    link[5] = new Link("大世界", "8号线");
    line(stations[77].x+offsetx, stations[77].y+offsety, link[5].x+offsetx, link[5].y+offsety,link[5].color);
    stations[77].link = link;
    link = new Array()
    link[0] = new Link("人民广场", "2号线");
    line(stations[78].x+offsetx, stations[78].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("陆家嘴", "2号线");
    line(stations[78].x+offsetx, stations[78].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("天潼路", "10号线");
    line(stations[78].x+offsetx, stations[78].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("豫园", "10号线");
    line(stations[78].x+offsetx, stations[78].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[78].link = link;
    link = new Array()
    link[0] = new Link("南京东路", "2号线");
    line(stations[79].x+offsetx, stations[79].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("东昌路", "2号线");
    line(stations[79].x+offsetx, stations[79].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[79].link = link;
    link = new Array()
    link[0] = new Link("陆家嘴", "2号线");
    line(stations[80].x+offsetx, stations[80].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("世纪大道", "2号线");
    line(stations[80].x+offsetx, stations[80].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[80].link = link;
    link = new Array()
    link[0] = new Link("威宁路", "2号线");
    line(stations[81].x+offsetx, stations[81].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("中山公园", "2号线");
    line(stations[81].x+offsetx, stations[81].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[81].link = link;
    link = new Array()
    link[0] = new Link("北新泾", "2号线");
    line(stations[82].x+offsetx, stations[82].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("娄山关路", "2号线");
    line(stations[82].x+offsetx, stations[82].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[82].link = link;
    link = new Array()
    link[0] = new Link("淞虹路", "2号线");
    line(stations[83].x+offsetx, stations[83].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("威宁路", "2号线");
    line(stations[83].x+offsetx, stations[83].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[83].link = link;
    link = new Array()
    link[0] = new Link("虹桥2号航站楼", "2号线");
    line(stations[84].x+offsetx, stations[84].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("北新泾", "2号线");
    line(stations[84].x+offsetx, stations[84].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[84].link = link;
    link = new Array()
    link[0] = new Link("虹桥火车站", "2号线");
    line(stations[85].x+offsetx, stations[85].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("淞虹路", "2号线");
    line(stations[85].x+offsetx, stations[85].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("虹桥1号航站楼", "10号线");
    line(stations[85].x+offsetx, stations[85].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    stations[85].link = link;
    link = new Array()
    link[0] = new Link("徐泾东", "2号线");
    line(stations[86].x+offsetx, stations[86].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("虹桥2号航站楼", "2号线");
    line(stations[86].x+offsetx, stations[86].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[86].link = link;
    link = new Array()
    link[0] = new Link("虹桥火车站", "2号线");
    line(stations[87].x+offsetx, stations[87].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[87].link = link;
    link = new Array()
    link[0] = new Link("世纪大道", "2号线");
    line(stations[88].x+offsetx, stations[88].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("世纪公园", "2号线");
    line(stations[88].x+offsetx, stations[88].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[88].link = link;
    link = new Array()
    link[0] = new Link("上海科技馆", "2号线");
    line(stations[89].x+offsetx, stations[89].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("龙阳路", "2号线");
    line(stations[89].x+offsetx, stations[89].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[89].link = link;
    link = new Array()
    link[0] = new Link("龙阳路", "2号线");
    line(stations[90].x+offsetx, stations[90].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("金科路", "2号线");
    line(stations[90].x+offsetx, stations[90].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[90].link = link;
    link = new Array()
    link[0] = new Link("张江高科", "2号线");
    line(stations[91].x+offsetx, stations[91].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("广兰路", "2号线");
    line(stations[91].x+offsetx, stations[91].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[91].link = link;
    link = new Array()
    link[0] = new Link("广兰路", "2号线");
    line(stations[92].x+offsetx, stations[92].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("创新中路", "2号线");
    line(stations[92].x+offsetx, stations[92].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[92].link = link;
    link = new Array()
    link[0] = new Link("金科路", "2号线");
    line(stations[93].x+offsetx, stations[93].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("唐镇", "2号线");
    line(stations[93].x+offsetx, stations[93].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[93].link = link;
    link = new Array()
    link[0] = new Link("唐镇", "2号线");
    line(stations[94].x+offsetx, stations[94].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("华夏东路", "2号线");
    line(stations[94].x+offsetx, stations[94].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[94].link = link;
    link = new Array()
    link[0] = new Link("创新中路", "2号线");
    line(stations[95].x+offsetx, stations[95].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("川沙", "2号线");
    line(stations[95].x+offsetx, stations[95].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[95].link = link;
    link = new Array()
    link[0] = new Link("华夏东路", "2号线");
    line(stations[96].x+offsetx, stations[96].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("凌空路", "2号线");
    line(stations[96].x+offsetx, stations[96].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[96].link = link;
    link = new Array()
    link[0] = new Link("川沙", "2号线");
    line(stations[97].x+offsetx, stations[97].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("远东大道", "2号线");
    line(stations[97].x+offsetx, stations[97].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[97].link = link;
    link = new Array()
    link[0] = new Link("凌空路", "2号线");
    line(stations[98].x+offsetx, stations[98].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("海天三路", "2号线");
    line(stations[98].x+offsetx, stations[98].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[98].link = link;
    link = new Array()
    link[0] = new Link("远东大道", "2号线");
    line(stations[99].x+offsetx, stations[99].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("浦东国际机场", "2号线");
    line(stations[99].x+offsetx, stations[99].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[99].link = link;
    link = new Array()
    link[0] = new Link("海天三路", "2号线");
    line(stations[100].x+offsetx, stations[100].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[100].link = link;
    link = new Array()
    link[0] = new Link("友谊西路", "1号线");
    line(stations[101].x+offsetx, stations[101].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[101].link = link;
    link = new Array()
    link[0] = new Link("富锦路", "1号线");
    line(stations[102].x+offsetx, stations[102].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("宝安公路", "1号线");
    line(stations[102].x+offsetx, stations[102].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[102].link = link;
    link = new Array()
    link[0] = new Link("友谊西路", "1号线");
    line(stations[103].x+offsetx, stations[103].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("共富新村", "1号线");
    line(stations[103].x+offsetx, stations[103].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[103].link = link;
    link = new Array()
    link[0] = new Link("宝安公路", "1号线");
    line(stations[104].x+offsetx, stations[104].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("呼兰路", "1号线");
    line(stations[104].x+offsetx, stations[104].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[104].link = link;
    link = new Array()
    link[0] = new Link("共富新村", "1号线");
    line(stations[105].x+offsetx, stations[105].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("通河新村", "1号线");
    line(stations[105].x+offsetx, stations[105].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[105].link = link;
    link = new Array()
    link[0] = new Link("呼兰路", "1号线");
    line(stations[106].x+offsetx, stations[106].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("共康路", "1号线");
    line(stations[106].x+offsetx, stations[106].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[106].link = link;
    link = new Array()
    link[0] = new Link("通河新村", "1号线");
    line(stations[107].x+offsetx, stations[107].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("彭浦新村", "1号线");
    line(stations[107].x+offsetx, stations[107].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[107].link = link;
    link = new Array()
    link[0] = new Link("共康路", "1号线");
    line(stations[108].x+offsetx, stations[108].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("汶水路", "1号线");
    line(stations[108].x+offsetx, stations[108].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[108].link = link;
    link = new Array()
    link[0] = new Link("彭浦新村", "1号线");
    line(stations[109].x+offsetx, stations[109].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海马戏城", "1号线");
    line(stations[109].x+offsetx, stations[109].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[109].link = link;
    link = new Array()
    link[0] = new Link("汶水路", "1号线");
    line(stations[110].x+offsetx, stations[110].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("延长路", "1号线");
    line(stations[110].x+offsetx, stations[110].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[110].link = link;
    link = new Array()
    link[0] = new Link("上海马戏城", "1号线");
    line(stations[111].x+offsetx, stations[111].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("中山北路", "1号线");
    line(stations[111].x+offsetx, stations[111].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[111].link = link;
    link = new Array()
    link[0] = new Link("延长路", "1号线");
    line(stations[112].x+offsetx, stations[112].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海火车站", "1号线");
    line(stations[112].x+offsetx, stations[112].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[112].link = link;
    link = new Array()
    link[0] = new Link("上海火车站", "1号线");
    line(stations[113].x+offsetx, stations[113].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("新闸路", "1号线");
    line(stations[113].x+offsetx, stations[113].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[113].link = link;
    link = new Array()
    link[0] = new Link("汉中路", "1号线");
    line(stations[114].x+offsetx, stations[114].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("人民广场", "1号线");
    line(stations[114].x+offsetx, stations[114].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[114].link = link;
    link = new Array()
    link[0] = new Link("人民广场", "1号线");
    line(stations[115].x+offsetx, stations[115].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("陕西南路", "1号线");
    line(stations[115].x+offsetx, stations[115].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[115].link = link;
    link = new Array()
    link[0] = new Link("黄陂南路", "1号线");
    line(stations[116].x+offsetx, stations[116].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("常熟路", "1号线");
    line(stations[116].x+offsetx, stations[116].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("新天地", "10号线");
    line(stations[116].x+offsetx, stations[116].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("上海图书馆", "10号线");
    line(stations[116].x+offsetx, stations[116].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[116].link = link;
    link = new Array()
    link[0] = new Link("常熟路", "1号线");
    line(stations[117].x+offsetx, stations[117].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("徐家汇", "1号线");
    line(stations[117].x+offsetx, stations[117].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[117].link = link;
    link = new Array()
    link[0] = new Link("衡山路", "1号线");
    line(stations[118].x+offsetx, stations[118].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海体育馆", "1号线");
    line(stations[118].x+offsetx, stations[118].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("宜山路", "9号线");
    line(stations[118].x+offsetx, stations[118].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("肇家浜路", "9号线");
    line(stations[118].x+offsetx, stations[118].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[118].link = link;
    link = new Array()
    link[0] = new Link("上海体育馆", "1号线");
    line(stations[119].x+offsetx, stations[119].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海南站", "1号线");
    line(stations[119].x+offsetx, stations[119].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[119].link = link;
    link = new Array()
    link[0] = new Link("漕宝路", "1号线");
    line(stations[120].x+offsetx, stations[120].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("锦江乐园", "1号线");
    line(stations[120].x+offsetx, stations[120].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("石龙路", "3号线");
    line(stations[120].x+offsetx, stations[120].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    stations[120].link = link;
    link = new Array()
    link[0] = new Link("上海南站", "1号线");
    line(stations[121].x+offsetx, stations[121].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("莲花路", "1号线");
    line(stations[121].x+offsetx, stations[121].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[121].link = link;
    link = new Array()
    link[0] = new Link("锦江乐园", "1号线");
    line(stations[122].x+offsetx, stations[122].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("外环路", "1号线");
    line(stations[122].x+offsetx, stations[122].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[122].link = link;
    link = new Array()
    link[0] = new Link("莲花路", "1号线");
    line(stations[123].x+offsetx, stations[123].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("莘庄", "1号线");
    line(stations[123].x+offsetx, stations[123].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[123].link = link;
    link = new Array()
    link[0] = new Link("外环路", "1号线");
    line(stations[124].x+offsetx, stations[124].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("春申路", "5号线");
    line(stations[124].x+offsetx, stations[124].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[124].link = link;
    link = new Array()
    link[0] = new Link("肇家浜路", "9号线");
    line(stations[125].x+offsetx, stations[125].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("打浦桥", "9号线");
    line(stations[125].x+offsetx, stations[125].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[125].link = link;
    link = new Array()
    link[0] = new Link("嘉善路", "9号线");
    line(stations[126].x+offsetx, stations[126].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("马当路", "9号线");
    line(stations[126].x+offsetx, stations[126].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[126].link = link;
    link = new Array()
    link[0] = new Link("打浦桥", "9号线");
    line(stations[127].x+offsetx, stations[127].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("陆家浜路", "9号线");
    line(stations[127].x+offsetx, stations[127].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[127].link = link;
    link = new Array()
    link[0] = new Link("马当路", "9号线");
    line(stations[128].x+offsetx, stations[128].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("小南门", "9号线");
    line(stations[128].x+offsetx, stations[128].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("老西门", "8号线");
    line(stations[128].x+offsetx, stations[128].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("西藏南路", "8号线");
    line(stations[128].x+offsetx, stations[128].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[128].link = link;
    link = new Array()
    link[0] = new Link("陆家浜路", "9号线");
    line(stations[129].x+offsetx, stations[129].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("商城路", "9号线");
    line(stations[129].x+offsetx, stations[129].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[129].link = link;
    link = new Array()
    link[0] = new Link("小南门", "9号线");
    line(stations[130].x+offsetx, stations[130].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("世纪大道", "9号线");
    line(stations[130].x+offsetx, stations[130].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[130].link = link;
    link = new Array()
    link[0] = new Link("漕河泾开发区", "9号线");
    line(stations[131].x+offsetx, stations[131].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("宜山路", "9号线");
    line(stations[131].x+offsetx, stations[131].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[131].link = link;
    link = new Array()
    link[0] = new Link("合川路", "9号线");
    line(stations[132].x+offsetx, stations[132].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("桂林路", "9号线");
    line(stations[132].x+offsetx, stations[132].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[132].link = link;
    link = new Array()
    link[0] = new Link("星中路", "9号线");
    line(stations[133].x+offsetx, stations[133].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("漕河泾开发区", "9号线");
    line(stations[133].x+offsetx, stations[133].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[133].link = link;
    link = new Array()
    link[0] = new Link("七宝", "9号线");
    line(stations[134].x+offsetx, stations[134].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("合川路", "9号线");
    line(stations[134].x+offsetx, stations[134].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[134].link = link;
    link = new Array()
    link[0] = new Link("中春路", "9号线");
    line(stations[135].x+offsetx, stations[135].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("星中路", "9号线");
    line(stations[135].x+offsetx, stations[135].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[135].link = link;
    link = new Array()
    link[0] = new Link("九亭", "9号线");
    line(stations[136].x+offsetx, stations[136].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("七宝", "9号线");
    line(stations[136].x+offsetx, stations[136].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[136].link = link;
    link = new Array()
    link[0] = new Link("泗泾", "9号线");
    line(stations[137].x+offsetx, stations[137].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("中春路", "9号线");
    line(stations[137].x+offsetx, stations[137].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[137].link = link;
    link = new Array()
    link[0] = new Link("佘山", "9号线");
    line(stations[138].x+offsetx, stations[138].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("九亭", "9号线");
    line(stations[138].x+offsetx, stations[138].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[138].link = link;
    link = new Array()
    link[0] = new Link("洞泾", "9号线");
    line(stations[139].x+offsetx, stations[139].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("泗泾", "9号线");
    line(stations[139].x+offsetx, stations[139].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[139].link = link;
    link = new Array()
    link[0] = new Link("松江大学城", "9号线");
    line(stations[140].x+offsetx, stations[140].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("佘山", "9号线");
    line(stations[140].x+offsetx, stations[140].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[140].link = link;
    link = new Array()
    link[0] = new Link("松江新城", "9号线");
    line(stations[141].x+offsetx, stations[141].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("洞泾", "9号线");
    line(stations[141].x+offsetx, stations[141].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[141].link = link;
    link = new Array()
    link[0] = new Link("松江大学城", "9号线");
    line(stations[142].x+offsetx, stations[142].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[142].link = link;
    link = new Array()
    link[0] = new Link("莘庄", "5号线");
    line(stations[143].x+offsetx, stations[143].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("银都路", "5号线");
    line(stations[143].x+offsetx, stations[143].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[143].link = link;
    link = new Array()
    link[0] = new Link("春申路", "5号线");
    line(stations[144].x+offsetx, stations[144].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("颛桥", "5号线");
    line(stations[144].x+offsetx, stations[144].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[144].link = link;
    link = new Array()
    link[0] = new Link("银都路", "5号线");
    line(stations[145].x+offsetx, stations[145].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("北桥", "5号线");
    line(stations[145].x+offsetx, stations[145].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[145].link = link;
    link = new Array()
    link[0] = new Link("颛桥", "5号线");
    line(stations[146].x+offsetx, stations[146].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("剑川路", "5号线");
    line(stations[146].x+offsetx, stations[146].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[146].link = link;
    link = new Array()
    link[0] = new Link("北桥", "5号线");
    line(stations[147].x+offsetx, stations[147].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("东川路", "5号线");
    line(stations[147].x+offsetx, stations[147].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[147].link = link;
    link = new Array()
    link[0] = new Link("剑川路", "5号线");
    line(stations[148].x+offsetx, stations[148].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("金平路", "5号线");
    line(stations[148].x+offsetx, stations[148].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[148].link = link;
    link = new Array()
    link[0] = new Link("东川路", "5号线");
    line(stations[149].x+offsetx, stations[149].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("华宁路", "5号线");
    line(stations[149].x+offsetx, stations[149].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[149].link = link;
    link = new Array()
    link[0] = new Link("金平路", "5号线");
    line(stations[150].x+offsetx, stations[150].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("文井路", "5号线");
    line(stations[150].x+offsetx, stations[150].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[150].link = link;
    link = new Array()
    link[0] = new Link("文井路", "5号线");
    line(stations[151].x+offsetx, stations[151].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[151].link = link;
    link = new Array()
    link[0] = new Link("华宁路", "5号线");
    line(stations[152].x+offsetx, stations[152].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("闵行开发区", "5号线");
    line(stations[152].x+offsetx, stations[152].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[152].link = link;
    link = new Array()
    link[0] = new Link("世纪大道", "9号线");
    line(stations[153].x+offsetx, stations[153].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[153].link = link;
    link = new Array()
    link[0] = new Link("西藏北路", "8号线");
    line(stations[154].x+offsetx, stations[154].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("曲阜路", "8号线");
    line(stations[154].x+offsetx, stations[154].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[154].link = link;
    link = new Array()
    link[0] = new Link("虹口足球场", "8号线");
    line(stations[155].x+offsetx, stations[155].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("中兴路", "8号线");
    line(stations[155].x+offsetx, stations[155].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[155].link = link;
    link = new Array()
    link[0] = new Link("中兴路", "8号线");
    line(stations[156].x+offsetx, stations[156].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("人民广场", "8号线");
    line(stations[156].x+offsetx, stations[156].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[156].link = link;
    link = new Array()
    link[0] = new Link("曲阳路", "8号线");
    line(stations[157].x+offsetx, stations[157].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("西藏北路", "8号线");
    line(stations[157].x+offsetx, stations[157].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("赤峰路", "3号线");
    line(stations[157].x+offsetx, stations[157].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("东宝兴路", "3号线");
    line(stations[157].x+offsetx, stations[157].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[157].link = link;
    link = new Array()
    link[0] = new Link("四平路", "8号线");
    line(stations[158].x+offsetx, stations[158].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("虹口足球场", "8号线");
    line(stations[158].x+offsetx, stations[158].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[158].link = link;
    link = new Array()
    link[0] = new Link("鞍山新村", "8号线");
    line(stations[159].x+offsetx, stations[159].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("曲阳路", "8号线");
    line(stations[159].x+offsetx, stations[159].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("同济大学", "10号线");
    line(stations[159].x+offsetx, stations[159].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("邮电新村", "10号线");
    line(stations[159].x+offsetx, stations[159].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[159].link = link;
    link = new Array()
    link[0] = new Link("江浦路", "8号线");
    line(stations[160].x+offsetx, stations[160].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("四平路", "8号线");
    line(stations[160].x+offsetx, stations[160].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[160].link = link;
    link = new Array()
    link[0] = new Link("黄兴路", "8号线");
    line(stations[161].x+offsetx, stations[161].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("鞍山新村", "8号线");
    line(stations[161].x+offsetx, stations[161].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[161].link = link;
    link = new Array()
    link[0] = new Link("延吉中路", "8号线");
    line(stations[162].x+offsetx, stations[162].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("江浦路", "8号线");
    line(stations[162].x+offsetx, stations[162].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[162].link = link;
    link = new Array()
    link[0] = new Link("黄兴公园", "8号线");
    line(stations[163].x+offsetx, stations[163].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("黄兴路", "8号线");
    line(stations[163].x+offsetx, stations[163].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[163].link = link;
    link = new Array()
    link[0] = new Link("翔殷路", "8号线");
    line(stations[164].x+offsetx, stations[164].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("延吉中路", "8号线");
    line(stations[164].x+offsetx, stations[164].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[164].link = link;
    link = new Array()
    link[0] = new Link("黄兴公园", "8号线");
    line(stations[165].x+offsetx, stations[165].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("嫩江路", "8号线");
    line(stations[165].x+offsetx, stations[165].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[165].link = link;
    link = new Array()
    link[0] = new Link("市光路", "8号线");
    line(stations[166].x+offsetx, stations[166].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("翔殷路", "8号线");
    line(stations[166].x+offsetx, stations[166].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[166].link = link;
    link = new Array()
    link[0] = new Link("嫩江路", "8号线");
    line(stations[167].x+offsetx, stations[167].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[167].link = link;
    link = new Array()
    link[0] = new Link("人民广场", "8号线");
    line(stations[168].x+offsetx, stations[168].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("老西门", "8号线");
    line(stations[168].x+offsetx, stations[168].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[168].link = link;
    link = new Array()
    link[0] = new Link("大世界", "8号线");
    line(stations[169].x+offsetx, stations[169].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("陆家浜路", "8号线");
    line(stations[169].x+offsetx, stations[169].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("豫园", "10号线");
    line(stations[169].x+offsetx, stations[169].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    link[3] = new Link("新天地", "10号线");
    line(stations[169].x+offsetx, stations[169].y+offsety, link[3].x+offsetx, link[3].y+offsety,link[3].color);
    stations[169].link = link;
    link = new Array()
    link[0] = new Link("西藏南路", "8号线");
    line(stations[170].x+offsetx, stations[170].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("耀华路", "8号线");
    line(stations[170].x+offsetx, stations[170].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[170].link = link;
    link = new Array()
    link[0] = new Link("耀华路", "8号线");
    line(stations[171].x+offsetx, stations[171].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("杨思", "8号线");
    line(stations[171].x+offsetx, stations[171].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[171].link = link;
    link = new Array()
    link[0] = new Link("成山路", "8号线");
    line(stations[172].x+offsetx, stations[172].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("济阳路", "8号线");
    line(stations[172].x+offsetx, stations[172].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[172].link = link;
    link = new Array()
    link[0] = new Link("杨思", "8号线");
    line(stations[173].x+offsetx, stations[173].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("凌兆新村", "8号线");
    line(stations[173].x+offsetx, stations[173].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("灵岩南路", "6号线");
    line(stations[173].x+offsetx, stations[173].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    stations[173].link = link;
    link = new Array()
    link[0] = new Link("济阳路", "8号线");
    line(stations[174].x+offsetx, stations[174].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("芦恒路", "8号线");
    line(stations[174].x+offsetx, stations[174].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[174].link = link;
    link = new Array()
    link[0] = new Link("凌兆新村", "8号线");
    line(stations[175].x+offsetx, stations[175].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("浦江镇", "8号线");
    line(stations[175].x+offsetx, stations[175].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[175].link = link;
    link = new Array()
    link[0] = new Link("芦恒路", "8号线");
    line(stations[176].x+offsetx, stations[176].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("江月路", "8号线");
    line(stations[176].x+offsetx, stations[176].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[176].link = link;
    link = new Array()
    link[0] = new Link("浦江镇", "8号线");
    line(stations[177].x+offsetx, stations[177].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("联航路", "8号线");
    line(stations[177].x+offsetx, stations[177].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[177].link = link;
    link = new Array()
    link[0] = new Link("江月路", "8号线");
    line(stations[178].x+offsetx, stations[178].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("航天博物馆", "8号线");
    line(stations[178].x+offsetx, stations[178].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[178].link = link;
    link = new Array()
    link[0] = new Link("联航路", "8号线");
    line(stations[179].x+offsetx, stations[179].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[179].link = link;
    link = new Array()
    link[0] = new Link("国权路", "10号线");
    line(stations[180].x+offsetx, stations[180].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("四平路", "10号线");
    line(stations[180].x+offsetx, stations[180].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[180].link = link;
    link = new Array()
    link[0] = new Link("五角场", "10号线");
    line(stations[181].x+offsetx, stations[181].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("同济大学", "10号线");
    line(stations[181].x+offsetx, stations[181].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[181].link = link;
    link = new Array()
    link[0] = new Link("江湾体育场", "10号线");
    line(stations[182].x+offsetx, stations[182].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("国权路", "10号线");
    line(stations[182].x+offsetx, stations[182].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[182].link = link;
    link = new Array()
    link[0] = new Link("三门路", "10号线");
    line(stations[183].x+offsetx, stations[183].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("五角场", "10号线");
    line(stations[183].x+offsetx, stations[183].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[183].link = link;
    link = new Array()
    link[0] = new Link("江湾体育场", "10号线");
    line(stations[184].x+offsetx, stations[184].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("殷高东路", "10号线");
    line(stations[184].x+offsetx, stations[184].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[184].link = link;
    link = new Array()
    link[0] = new Link("新江湾城", "10号线");
    line(stations[185].x+offsetx, stations[185].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("三门路", "10号线");
    line(stations[185].x+offsetx, stations[185].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[185].link = link;
    link = new Array()
    link[0] = new Link("殷高东路", "10号线");
    line(stations[186].x+offsetx, stations[186].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[186].link = link;
    link = new Array()
    link[0] = new Link("四平路", "10号线");
    line(stations[187].x+offsetx, stations[187].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("海伦路", "10号线");
    line(stations[187].x+offsetx, stations[187].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[187].link = link;
    link = new Array()
    link[0] = new Link("海伦路", "10号线");
    line(stations[188].x+offsetx, stations[188].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("天潼路", "10号线");
    line(stations[188].x+offsetx, stations[188].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[188].link = link;
    link = new Array()
    link[0] = new Link("四川北路", "10号线");
    line(stations[189].x+offsetx, stations[189].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("南京东路", "10号线");
    line(stations[189].x+offsetx, stations[189].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[189].link = link;
    link = new Array()
    link[0] = new Link("南京东路", "10号线");
    line(stations[190].x+offsetx, stations[190].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("老西门", "10号线");
    line(stations[190].x+offsetx, stations[190].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[190].link = link;
    link = new Array()
    link[0] = new Link("老西门", "10号线");
    line(stations[191].x+offsetx, stations[191].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("陕西南路", "10号线");
    line(stations[191].x+offsetx, stations[191].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[191].link = link;
    link = new Array()
    link[0] = new Link("陕西南路", "10号线");
    line(stations[192].x+offsetx, stations[192].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("交通大学", "10号线");
    line(stations[192].x+offsetx, stations[192].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[192].link = link;
    link = new Array()
    link[0] = new Link("上海图书馆", "10号线");
    line(stations[193].x+offsetx, stations[193].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("虹桥路", "10号线");
    line(stations[193].x+offsetx, stations[193].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[193].link = link;
    link = new Array()
    link[0] = new Link("虹桥路", "10号线");
    line(stations[194].x+offsetx, stations[194].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("伊犁路", "10号线");
    line(stations[194].x+offsetx, stations[194].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[194].link = link;
    link = new Array()
    link[0] = new Link("宋园路", "10号线");
    line(stations[195].x+offsetx, stations[195].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("水城路", "10号线");
    line(stations[195].x+offsetx, stations[195].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[195].link = link;
    link = new Array()
    link[0] = new Link("伊犁路", "10号线");
    line(stations[196].x+offsetx, stations[196].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("龙溪路", "10号线");
    line(stations[196].x+offsetx, stations[196].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[196].link = link;
    link = new Array()
    link[0] = new Link("水城路", "10号线");
    line(stations[197].x+offsetx, stations[197].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海动物园", "10号线");
    line(stations[197].x+offsetx, stations[197].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    link[2] = new Link("龙柏新村", "10号线");
    line(stations[197].x+offsetx, stations[197].y+offsety, link[2].x+offsetx, link[2].y+offsety,link[2].color);
    stations[197].link = link;
    link = new Array()
    link[0] = new Link("龙溪路", "10号线");
    line(stations[198].x+offsetx, stations[198].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("虹桥1号航站楼", "10号线");
    line(stations[198].x+offsetx, stations[198].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[198].link = link;
    link = new Array()
    link[0] = new Link("虹桥2号航站楼", "10号线");
    line(stations[199].x+offsetx, stations[199].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海动物园", "10号线");
    line(stations[199].x+offsetx, stations[199].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[199].link = link;
    link = new Array()
    link[0] = new Link("龙溪路", "10号线");
    line(stations[200].x+offsetx, stations[200].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("紫藤路", "10号线");
    line(stations[200].x+offsetx, stations[200].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[200].link = link;
    link = new Array()
    link[0] = new Link("龙柏新村", "10号线");
    line(stations[201].x+offsetx, stations[201].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("航中路", "10号线");
    line(stations[201].x+offsetx, stations[201].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[201].link = link;
    link = new Array()
    link[0] = new Link("紫藤路", "10号线");
    line(stations[202].x+offsetx, stations[202].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[202].link = link;
    link = new Array()
    link[0] = new Link("五洲大道", "6号线");
    line(stations[203].x+offsetx, stations[203].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("巨峰路", "6号线");
    line(stations[203].x+offsetx, stations[203].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[203].link = link;
    link = new Array()
    link[0] = new Link("洲海路", "6号线");
    line(stations[204].x+offsetx, stations[204].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("东靖路", "6号线");
    line(stations[204].x+offsetx, stations[204].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[204].link = link;
    link = new Array()
    link[0] = new Link("外高桥保税区南站", "6号线");
    line(stations[205].x+offsetx, stations[205].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("五洲大道", "6号线");
    line(stations[205].x+offsetx, stations[205].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[205].link = link;
    link = new Array()
    link[0] = new Link("航津路", "6号线");
    line(stations[206].x+offsetx, stations[206].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("洲海路", "6号线");
    line(stations[206].x+offsetx, stations[206].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[206].link = link;
    link = new Array()
    link[0] = new Link("外高桥保税区南站", "6号线");
    line(stations[207].x+offsetx, stations[207].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("外高桥保税区北站", "6号线");
    line(stations[207].x+offsetx, stations[207].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[207].link = link;
    link = new Array()
    link[0] = new Link("港城路", "6号线");
    line(stations[208].x+offsetx, stations[208].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("航津路", "6号线");
    line(stations[208].x+offsetx, stations[208].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[208].link = link;
    link = new Array()
    link[0] = new Link("外高桥保税区北站", "6号线");
    line(stations[209].x+offsetx, stations[209].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[209].link = link;
    link = new Array()
    link[0] = new Link("东靖路", "6号线");
    line(stations[210].x+offsetx, stations[210].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("五莲路", "6号线");
    line(stations[210].x+offsetx, stations[210].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[210].link = link;
    link = new Array()
    link[0] = new Link("巨峰路", "6号线");
    line(stations[211].x+offsetx, stations[211].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("博兴路", "6号线");
    line(stations[211].x+offsetx, stations[211].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[211].link = link;
    link = new Array()
    link[0] = new Link("五莲路", "6号线");
    line(stations[212].x+offsetx, stations[212].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("金桥路", "6号线");
    line(stations[212].x+offsetx, stations[212].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[212].link = link;
    link = new Array()
    link[0] = new Link("博兴路", "6号线");
    line(stations[213].x+offsetx, stations[213].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("云山路", "6号线");
    line(stations[213].x+offsetx, stations[213].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[213].link = link;
    link = new Array()
    link[0] = new Link("金桥路", "6号线");
    line(stations[214].x+offsetx, stations[214].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("德平路", "6号线");
    line(stations[214].x+offsetx, stations[214].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[214].link = link;
    link = new Array()
    link[0] = new Link("云山路", "6号线");
    line(stations[215].x+offsetx, stations[215].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("北洋泾路", "6号线");
    line(stations[215].x+offsetx, stations[215].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[215].link = link;
    link = new Array()
    link[0] = new Link("德平路", "6号线");
    line(stations[216].x+offsetx, stations[216].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("民生路", "6号线");
    line(stations[216].x+offsetx, stations[216].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[216].link = link;
    link = new Array()
    link[0] = new Link("北洋泾路", "6号线");
    line(stations[217].x+offsetx, stations[217].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("源生体育中心", "6号线");
    line(stations[217].x+offsetx, stations[217].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[217].link = link;
    link = new Array()
    link[0] = new Link("民生路", "6号线");
    line(stations[218].x+offsetx, stations[218].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("世纪大道", "6号线");
    line(stations[218].x+offsetx, stations[218].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[218].link = link;
    link = new Array()
    link[0] = new Link("蓝村路", "6号线");
    line(stations[219].x+offsetx, stations[219].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("临沂新村", "6号线");
    line(stations[219].x+offsetx, stations[219].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[219].link = link;
    link = new Array()
    link[0] = new Link("上海儿童医学中心", "6号线");
    line(stations[220].x+offsetx, stations[220].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("高科西路", "6号线");
    line(stations[220].x+offsetx, stations[220].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[220].link = link;
    link = new Array()
    link[0] = new Link("高科西路", "6号线");
    line(stations[221].x+offsetx, stations[221].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("高青路", "6号线");
    line(stations[221].x+offsetx, stations[221].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[221].link = link;
    link = new Array()
    link[0] = new Link("东明路", "6号线");
    line(stations[222].x+offsetx, stations[222].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("华夏西路", "6号线");
    line(stations[222].x+offsetx, stations[222].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[222].link = link;
    link = new Array()
    link[0] = new Link("高青路", "6号线");
    line(stations[223].x+offsetx, stations[223].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上南路", "6号线");
    line(stations[223].x+offsetx, stations[223].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[223].link = link;
    link = new Array()
    link[0] = new Link("华夏西路", "6号线");
    line(stations[224].x+offsetx, stations[224].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("灵岩南路", "6号线");
    line(stations[224].x+offsetx, stations[224].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[224].link = link;
    link = new Array()
    link[0] = new Link("上南路", "6号线");
    line(stations[225].x+offsetx, stations[225].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("济阳路", "6号线");
    line(stations[225].x+offsetx, stations[225].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[225].link = link;
    link = new Array()
    link[0] = new Link("世纪大道", "6号线");
    line(stations[226].x+offsetx, stations[226].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("蓝村路", "6号线");
    line(stations[226].x+offsetx, stations[226].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[226].link = link;
    link = new Array()
    link[0] = new Link("铁力路", "3号线");
    line(stations[227].x+offsetx, stations[227].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    stations[227].link = link;
    link = new Array()
    link[0] = new Link("江杨北路", "3号线");
    line(stations[228].x+offsetx, stations[228].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("友谊路", "3号线");
    line(stations[228].x+offsetx, stations[228].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[228].link = link;
    link = new Array()
    link[0] = new Link("铁力路", "3号线");
    line(stations[229].x+offsetx, stations[229].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("宝杨路", "3号线");
    line(stations[229].x+offsetx, stations[229].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[229].link = link;
    link = new Array()
    link[0] = new Link("友谊路", "3号线");
    line(stations[230].x+offsetx, stations[230].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("水产路", "3号线");
    line(stations[230].x+offsetx, stations[230].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[230].link = link;
    link = new Array()
    link[0] = new Link("宝杨路", "3号线");
    line(stations[231].x+offsetx, stations[231].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("淞滨路", "3号线");
    line(stations[231].x+offsetx, stations[231].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[231].link = link;
    link = new Array()
    link[0] = new Link("水产路", "3号线");
    line(stations[232].x+offsetx, stations[232].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("张华浜", "3号线");
    line(stations[232].x+offsetx, stations[232].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[232].link = link;
    link = new Array()
    link[0] = new Link("淞滨路", "3号线");
    line(stations[233].x+offsetx, stations[233].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("淞发路", "3号线");
    line(stations[233].x+offsetx, stations[233].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[233].link = link;
    link = new Array()
    link[0] = new Link("张华浜", "3号线");
    line(stations[234].x+offsetx, stations[234].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("长江南路", "3号线");
    line(stations[234].x+offsetx, stations[234].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[234].link = link;
    link = new Array()
    link[0] = new Link("淞发路", "3号线");
    line(stations[235].x+offsetx, stations[235].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("殷高西路", "3号线");
    line(stations[235].x+offsetx, stations[235].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[235].link = link;
    link = new Array()
    link[0] = new Link("长江南路", "3号线");
    line(stations[236].x+offsetx, stations[236].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("江湾镇", "3号线");
    line(stations[236].x+offsetx, stations[236].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[236].link = link;
    link = new Array()
    link[0] = new Link("殷高西路", "3号线");
    line(stations[237].x+offsetx, stations[237].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("大柏树", "3号线");
    line(stations[237].x+offsetx, stations[237].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[237].link = link;
    link = new Array()
    link[0] = new Link("江湾镇", "3号线");
    line(stations[238].x+offsetx, stations[238].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("赤峰路", "3号线");
    line(stations[238].x+offsetx, stations[238].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[238].link = link;
    link = new Array()
    link[0] = new Link("大柏树", "3号线");
    line(stations[239].x+offsetx, stations[239].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("虹口足球场", "3号线");
    line(stations[239].x+offsetx, stations[239].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[239].link = link;
    link = new Array()
    link[0] = new Link("虹口足球场", "3号线");
    line(stations[240].x+offsetx, stations[240].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("宝山路", "3号线");
    line(stations[240].x+offsetx, stations[240].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[240].link = link;
    link = new Array()
    link[0] = new Link("宜山路", "3号线");
    line(stations[241].x+offsetx, stations[241].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("龙漕路", "3号线");
    line(stations[241].x+offsetx, stations[241].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[241].link = link;
    link = new Array()
    link[0] = new Link("漕溪路", "3号线");
    line(stations[242].x+offsetx, stations[242].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("石龙路", "3号线");
    line(stations[242].x+offsetx, stations[242].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[242].link = link;
    link = new Array()
    link[0] = new Link("龙漕路", "3号线");
    line(stations[243].x+offsetx, stations[243].y+offsety, link[0].x+offsetx, link[0].y+offsety,link[0].color);
    link[1] = new Link("上海南站", "3号线");
    line(stations[243].x+offsetx, stations[243].y+offsety, link[1].x+offsetx, link[1].y+offsety,link[1].color);
    stations[243].link = link;
}


function findStation(s){
    for(var i = 0; i < stationCount; i++){
        if(stations[i].text == s){
            return i;
        }
    }
    return -1;
}

function getColor(s){
    if(s == "1号线") return "#CC0000"
    if(s == "2号线") return "#009900"
    if(s == "3号线") return "#F9E100"
    if(s == "4号线") return "#660066"
    if(s == "5号线") return "#EE00EE"
    if(s == "6号线") return "#FF3366"
    if(s == "7号线") return "#FF7F00"
    if(s == "8号线") return "#0066CE"
    if(s == "9号线") return "#95D3DB"
    if(s == "10号线") return "#C9A7D5"
    if(s == "11号线") return "#800000"
    if(s == "12号线") return "#0C785E"
    if(s == "16号线") return "#77C8C8"
    if(s == 1) return "#CC0000"
    if(s == 2) return "#009900"
    if(s == 3) return "#F9E100"
    if(s == 4) return "#660066"
    if(s == 5) return "#EE00EE"
    if(s == 6) return "#FF3366"
    if(s == 7) return "#FF7F00"
    if(s == 8) return "#0066CE"
    if(s == 9) return "#95D3DB"
    if(s == 10) return "#C9A7D5"
    if(s == 11) return "#800000"
    if(s == 12) return "#0C785E"
    if(s == 16) return "#77C8C8"
    return "#000000"
}


function line(point1x,point1y,point2x,point2y,color){
    subway.drawline(point1x,point1y,point2x,point2y,color);
}

function showPath(source, dest){
    initStation();
    initLink();
    media.shortestPath(source,dest);
    var list = media.list;
    for(var i = 0; i < list.length - 1; i++){
        line(stations[findStation(list[i])].x+offsetx,stations[findStation(list[i])].y+offsety,stations[findStation(list[i+1])].x+offsetx,stations[findStation(list[i+1])].y+offsety,"black");
    }
}

function vertexList(preStation, postStation){
    initStation();
    initLink();
    var component = Qt.createComponent("addVertex.qml");
    if(component != Component.Ready){
        console.log(component.errorString());
    }

    component.createObject(subway, {"preStation":preStation, "postStation":postStation});
}
