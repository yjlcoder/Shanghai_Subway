import QtQuick 2.3
import QtQuick.Controls 1.2
//import "shanghaigraph.js" as SHG
import "Drawline.js" as DrawLine
import "shanghaigraph.js" as SHG
import liuyang.Media 1.0

Canvas{
    property double real: 1.0
    property double zoom: 1.0
    property string	source: "同济大学"
    property string dest: "上海汽车城"

    id: subway
    scale: zoom
    width: 1024
    height: 768

    Component.onCompleted:{
        SHG.initStation();
        SHG.initLink();
    }

    MouseArea{
        anchors.fill: parent
        id:zoomMouseArea
        anchors.rightMargin: -295
        anchors.bottomMargin: -7
        anchors.leftMargin: 296
        anchors.topMargin: 8

        onDoubleClicked: {
            subway.zoom = real
        }

        onWheel: {
            subway.zoom += wheel.angleDelta.y / 2000
        }

        onClicked: subway.requestPaint();

    }

    Circle {
        id:station0
        x:70
        y:195
        text:"嘉定北"
    }

    Circle {
        id:station1
        x:104
        y:195
        text:"嘉定西"
    }

    Circle {
        id:station2
        x:129
        y:195
        text:"白银路"
    }

    Circle {
        id:station3
        x:150
        y:217
        text:"嘉定新城"
    }

    Circle {
        id:station4
        x:128
        y:240
        text:"上海赛车场"
    }

    Circle {
        id:station5
        x:101
        y:240
        text:"昌吉东路"
    }

    Circle {
        id:station6
        x:70
        y:240
        text:"上海汽车城"
    }

    Circle {
        id:station7
        x:46
        y:240
        text:"安亭"
    }

    Circle {
        id:station8
        x:177
        y:217
        text:"马陆"
    }

    Circle {
        id:station9
        x:195
        y:217
        text:"南翔"
    }

    Circle {
        id:station10
        x:216
        y:217
        text:"桃浦新村"
    }

    Circle {
        id:station11
        x:238
        y:217
        text:"武威路"
    }

    Circle {
        id:station12
        x:266
        y:217
        text:"祁连山路"
    }

    Circle {
        id:station13
        x:289
        y:217
        text:"李子园"
    }

    Circle {
        id:station14
        x:311
        y:217
        text:"上海西站"
    }

    Circle {
        id:station15
        x:311
        y:254
        text:"真如"
    }

    Circle {
        id:station16
        x:311
        y:278
        text:"枫桥路"
    }

    Circle {
        id:station17
        x:311
        y:302
        text:"曹杨路"
    }

    Circle {
        id:station18
        x:311
        y:326
        text:"隆德路"
    }

    Circle {
        id:station19
        x:311
        y:350
        text:"江苏路"
    }

    Circle {
        id:station20
        x:269
        y:5
        text:"美兰湖"
    }

    Circle {
        id:station21
        x:269
        y:28
        text:"罗南新村"
    }

    Circle {
        id:station22
        x:269
        y:52
        text:"潘广路"
    }

    Circle {
        id:station23
        x:269
        y:75
        text:"刘行"
    }

    Circle {
        id:station24
        x:269
        y:99
        text:"顾村公园"
    }

    Circle {
        id:station25
        x:269
        y:120
        text:"祁华路"
    }

    Circle {
        id:station26
        x:304
        y:120
        text:"上海大学"
    }

    Circle {
        id:station27
        x:336
        y:120
        text:"南陈路"
    }

    Circle {
        id:station28
        x:336
        y:142
        text:"上大路"
    }

    Circle {
        id:station29
        x:336
        y:163
        text:"场中路"
    }

    Circle {
        id:station30
        x:336
        y:184
        text:"大场镇"
    }

    Circle {
        id:station31
        x:336
        y:205
        text:"行知路"
    }

    Circle {
        id:station32
        x:336
        y:226
        text:"大华三路"
    }

    Circle {
        id:station33
        x:336
        y:250
        text:"新村路"
    }

    Circle {
        id:station34
        x:336
        y:278
        text:"岚皋路"
    }

    Circle {
        id:station35
        x:336
        y:302
        text:"镇坪路"
    }

    Circle {
        id:station36
        x:336
        y:326
        text:"长寿路"
    }

    Circle {
        id:station37
        x:336
        y:350
        text:"昌平路"
    }

    Circle {
        id:station38
        x:336
        y:372
        text:"静安寺"
    }

    Circle {
        id:station39
        x:336
        y:394
        text:"常熟路"
    }

    Circle {
        id:station40
        x:337
        y:438
        text:"肇家浜路"
    }

    Circle {
        id:station41
        x:336
        y:462
        text:"东安路"
    }

    Circle {
        id:station42
        x:336
        y:506
        text:"船厂路"
    }

    Circle {
        id:station43
        x:360
        y:506
        text:"后滩"
    }

    Circle {
        id:station44
        x:393
        y:506
        text:"长清路"
    }

    Circle {
        id:station45
        x:423
        y:506
        text:"耀华路"
    }

    Circle {
        id:station46
        x:454
        y:506
        text:"云台路"
    }

    Circle {
        id:station47
        x:487
        y:506
        text:"高科西路"
    }

    Circle {
        id:station48
        x:520
        y:506
        text:"杨高南路"
    }

    Circle {
        id:station49
        x:556
        y:506
        text:"锦绣路"
    }

    Circle {
        id:station50
        x:601
        y:506
        text:"芳华路"
    }

    Circle {
        id:station51
        x:601
        y:443
        text:"龙阳路"
    }

    Circle {
        id:station52
        x:601
        y:417
        text:"花木路"
    }

    Circle {
        id:station53
        x:362
        y:302
        text:"中潭路"
    }

    Circle {
        id:station54
        x:402
        y:302
        text:"上海火车站"
    }

    Circle {
        id:station55
        x:455
        y:302
        text:"宝山路"
    }

    Circle {
        id:station56
        x:481
        y:302
        text:"海伦路"
    }

    Circle {
        id:station57
        x:501
        y:302
        text:"临平路"
    }

    Circle {
        id:station58
        x:521
        y:302
        text:"大连路"
    }

    Circle {
        id:station59
        x:521
        y:328
        text:"杨树浦路"
    }

    Circle {
        id:station60
        x:521
        y:348
        text:"浦东大道"
    }

    Circle {
        id:station61
        x:521
        y:372
        text:"世纪大道"
    }

    Circle {
        id:station62
        x:521
        y:416
        text:"浦电路"
    }

    Circle {
        id:station63
        x:521
        y:462
        text:"蓝村路"
    }

    Circle {
        id:station64
        x:487
        y:462
        text:"塘桥"
    }

    Circle {
        id:station65
        x:450
        y:462
        text:"南浦大桥"
    }

    Circle {
        id:station66
        x:423
        y:462
        text:"西藏南路"
    }

    Circle {
        id:station67
        x:394
        y:462
        text:"鲁班路"
    }

    Circle {
        id:station68
        x:364
        y:462
        text:"大木桥路"
    }

    Circle {
        id:station69
        x:307
        y:462
        text:"上海体育场"
    }

    Circle {
        id:station70
        x:263
        y:462
        text:"上海体育馆"
    }

    Circle {
        id:station71
        x:263
        y:438
        text:"宜山路"
    }

    Circle {
        id:station72
        x:263
        y:388
        text:"虹桥路"
    }

    Circle {
        id:station73
        x:263
        y:358
        text:"延安西路"
    }

    Circle {
        id:station74
        x:263
        y:335
        text:"中山公园"
    }

    Circle {
        id:station75
        x:263
        y:302
        text:"金沙江路"
    }

    Circle {
        id:station76
        x:362
        y:372
        text:"南京西路"
    }

    Circle {
        id:station77
        x:401
        y:372
        text:"人民广场"
    }

    Circle {
        id:station78
        x:442
        y:372
        text:"南京东路"
    }

    Circle {
        id:station79
        x:470
        y:372
        text:"陆家嘴"
    }

    Circle {
        id:station80
        x:492
        y:372
        text:"东昌路"
    }

    Circle {
        id:station81
        x:234
        y:335
        text:"娄山关路"
    }

    Circle {
        id:station82
        x:213
        y:335
        text:"威宁路"
    }

    Circle {
        id:station83
        x:189
        y:335
        text:"北新泾"
    }

    Circle {
        id:station84
        x:150
        y:335
        text:"淞虹路"
    }

    Circle {
        id:station85
        x:113
        y:335
        text:"虹桥2号航站楼"
    }

    Circle {
        id:station86
        x:76
        y:335
        text:"虹桥火车站"
    }

    Circle {
        id:station87
        x:46
        y:335
        text:"徐泾东"
    }

    Circle {
        id:station88
        x:557
        y:417
        text:"上海科技馆"
    }

    Circle {
        id:station89
        x:558
        y:443
        text:"世纪公园"
    }

    Circle {
        id:station90
        x:629
        y:443
        text:"张江高科"
    }

    Circle {
        id:station91
        x:659
        y:443
        text:"金科路"
    }

    Circle {
        id:station92
        x:711
        y:443
        text:"唐镇"
    }

    Circle {
        id:station93
        x:684
        y:443
        text:"广兰路"
    }

    Circle {
        id:station94
        x:736
        y:443
        text:"创新中路"
    }

    Circle {
        id:station95
        x:736
        y:467
        text:"华夏东路"
    }

    Circle {
        id:station96
        x:736
        y:488
        text:"川沙"
    }

    Circle {
        id:station97
        x:765
        y:488
        text:"凌空路"
    }

    Circle {
        id:station98
        x:794
        y:488
        text:"远东大道"
    }

    Circle {
        id:station99
        x:823
        y:488
        text:"海天三路"
    }

    Circle {
        id:station100
        x:858
        y:488
        text:"浦东国际机场"
    }

    Circle {
        id:station101
        x:402
        y:5
        text:"富锦路"
    }

    Circle {
        id:station102
        x:402
        y:29
        text:"友谊西路"
    }

    Circle {
        id:station103
        x:402
        y:54
        text:"宝安公路"
    }

    Circle {
        id:station104
        x:402
        y:78
        text:"共富新村"
    }

    Circle {
        id:station105
        x:402
        y:103
        text:"呼兰路"
    }

    Circle {
        id:station106
        x:402
        y:127
        text:"通河新村"
    }

    Circle {
        id:station107
        x:402
        y:152
        text:"共康路"
    }

    Circle {
        id:station108
        x:402
        y:176
        text:"彭浦新村"
    }

    Circle {
        id:station109
        x:402
        y:201
        text:"汶水路"
    }

    Circle {
        id:station110
        x:402
        y:225
        text:"上海马戏城"
    }

    Circle {
        id:station111
        x:402
        y:250
        text:"延长路"
    }

    Circle {
        id:station112
        x:402
        y:274
        text:"中山北路"
    }

    Circle {
        id:station113
        x:402
        y:324
        text:"汉中路"
    }

    Circle {
        id:station114
        x:402
        y:345
        text:"新闸路"
    }

    Circle {
        id:station115
        x:400
        y:394
        text:"黄陂南路"
    }

    Circle {
        id:station116
        x:368
        y:394
        text:"陕西南路"
    }

    Circle {
        id:station117
        x:308
        y:394
        text:"衡山路"
    }

    Circle {
        id:station118
        x:308
        y:438
        text:"徐家汇"
    }

    Circle {
        id:station119
        x:248
        y:483
        text:"漕宝路"
    }

    Circle {
        id:station120
        x:227
        y:506
        text:"上海南站"
    }

    Circle {
        id:station121
        x:207
        y:524
        text:"锦江乐园"
    }

    Circle {
        id:station122
        x:187
        y:543
        text:"莲花路"
    }

    Circle {
        id:station123
        x:167
        y:560
        text:"外环路"
    }

    Circle {
        id:station124
        x:147
        y:578
        text:"莘庄"
    }

    Circle {
        id:station125
        x:360
        y:438
        text:"嘉善路"
    }

    Circle {
        id:station126
        x:382
        y:438
        text:"打浦桥"
    }

    Circle {
        id:station127
        x:401
        y:438
        text:"马当路"
    }

    Circle {
        id:station128
        x:423
        y:438
        text:"陆家浜路"
    }

    Circle {
        id:station129
        x:448
        y:438
        text:"小南门"
    }

    Circle {
        id:station130
        x:472
        y:415
        text:"商城路"
    }

    Circle {
        id:station131
        x:237
        y:438
        text:"桂林路"
    }

    Circle {
        id:station132
        x:210
        y:438
        text:"漕河泾开发区"
    }

    Circle {
        id:station133
        x:183
        y:438
        text:"合川路"
    }

    Circle {
        id:station134
        x:156
        y:438
        text:"星中路"
    }

    Circle {
        id:station135
        x:129
        y:438
        text:"七宝"
    }

    Circle {
        id:station136
        x:102
        y:438
        text:"中春路"
    }

    Circle {
        id:station137
        x:75
        y:438
        text:"九亭"
    }

    Circle {
        id:station138
        x:48
        y:438
        text:"泗泾"
    }

    Circle {
        id:station139
        x:48
        y:470
        text:"佘山"
    }

    Circle {
        id:station140
        x:48
        y:492
        text:"洞泾"
    }

    Circle {
        id:station141
        x:48
        y:521
        text:"松江大学城"
    }

    Circle {
        id:station142
        x:48
        y:556
        text:"松江新城"
    }

    Circle {
        id:station143
        x:122
        y:578
        text:"春申路"
    }

    Circle {
        id:station144
        x:122
        y:598
        text:"银都路"
    }

    Circle {
        id:station145
        x:122
        y:622
        text:"颛桥"
    }

    Circle {
        id:station146
        x:122
        y:642
        text:"北桥"
    }

    Circle {
        id:station147
        x:122
        y:666
        text:"剑川路"
    }

    Circle {
        id:station148
        x:122
        y:689
        text:"东川路"
    }

    Circle {
        id:station149
        x:97
        y:689
        text:"金平路"
    }

    Circle {
        id:station150
        x:71
        y:689
        text:"华宁路"
    }

    Circle {
        id:station151
        x:20
        y:689
        text:"闵行开发区"
    }

    Circle {
        id:station152
        x:46
        y:689
        text:"文井路"
    }

    Circle {
        id:station153
        x:557
        y:390
        text:"杨高中路"
    }

    Circle {
        id:station154
        x:425
        y:285
        text:"中兴路"
    }

    Circle {
        id:station155
        x:424
        y:268
        text:"西藏北路"
    }

    Circle {
        id:station156
        x:425
        y:330
        text:"曲阜路"
    }

    Circle {
        id:station157
        x:455
        y:268
        text:"虹口足球场"
    }

    Circle {
        id:station158
        x:488
        y:268
        text:"曲阳路"
    }

    Circle {
        id:station159
        x:516
        y:268
        text:"四平路"
    }

    Circle {
        id:station160
        x:548
        y:302
        text:"鞍山新村"
    }

    Circle {
        id:station161
        x:573
        y:302
        text:"江浦路"
    }

    Circle {
        id:station162
        x:600
        y:302
        text:"黄兴路"
    }

    Circle {
        id:station163
        x:600
        y:275
        text:"延吉中路"
    }

    Circle {
        id:station164
        x:600
        y:248
        text:"黄兴公园"
    }

    Circle {
        id:station165
        x:600
        y:221
        text:"翔殷路"
    }

    Circle {
        id:station166
        x:600
        y:197
        text:"嫩江路"
    }

    Circle {
        id:station167
        x:600
        y:169
        text:"市光路"
    }

    Circle {
        id:station168
        x:423
        y:394
        text:"大世界"
    }

    Circle {
        id:station169
        x:423
        y:416
        text:"老西门"
    }

    Circle {
        id:station170
        x:423
        y:482
        text:"周家渡"
    }

    Circle {
        id:station171
        x:422
        y:525
        text:"成山路"
    }

    Circle {
        id:station172
        x:422
        y:548
        text:"杨思"
    }

    Circle {
        id:station173
        x:422
        y:568
        text:"济阳路"
    }

    Circle {
        id:station174
        x:422
        y:593
        text:"凌兆新村"
    }

    Circle {
        id:station175
        x:422
        y:616
        text:"芦恒路"
    }

    Circle {
        id:station176
        x:422
        y:636
        text:"浦江镇"
    }

    Circle {
        id:station177
        x:422
        y:658
        text:"江月路"
    }

    Circle {
        id:station178
        x:422
        y:680
        text:"联航路"
    }

    Circle {
        id:station179
        x:422
        y:702
        text:"航天博物馆"
    }

    Circle {
        id:station180
        x:548
        y:268
        text:"同济大学"
    }

    Circle {
        id:station181
        x:548
        y:242
        text:"国权路"
    }

    Circle {
        id:station182
        x:548
        y:216
        text:"五角场"
    }

    Circle {
        id:station183
        x:548
        y:190
        text:"江湾体育场"
    }

    Circle {
        id:station184
        x:548
        y:164
        text:"三门路"
    }

    Circle {
        id:station185
        x:548
        y:138
        text:"殷高东路"
    }

    Circle {
        id:station186
        x:548
        y:112
        text:"新江湾城"
    }

    Circle {
        id:station187
        x:502
        y:285
        text:"邮电新村"
    }

    Circle {
        id:station188
        x:481
        y:347
        text:"四川北路"
    }

    Circle {
        id:station189
        x:442
        y:347
        text:"天潼路"
    }

    Circle {
        id:station190
        x:443
        y:416
        text:"豫园"
    }

    Circle {
        id:station191
        x:385
        y:416
        text:"新天地"
    }

    Circle {
        id:station192
        x:347
        y:416
        text:"上海图书馆"
    }

    Circle {
        id:station193
        x:284
        y:416
        text:"交通大学"
    }

    Circle {
        id:station194
        x:237
        y:388
        text:"宋园路"
    }

    Circle {
        id:station195
        x:215
        y:388
        text:"伊犁路"
    }

    Circle {
        id:station196
        x:194
        y:388
        text:"水城路"
    }

    Circle {
        id:station197
        x:173
        y:388
        text:"龙溪路"
    }

    Circle {
        id:station198
        x:147
        y:388
        text:"上海动物园"
    }

    Circle {
        id:station199
        x:113
        y:388
        text:"虹桥1号航站楼"
    }

    Circle {
        id:station200
        x:173
        y:411
        text:"龙柏新村"
    }

    Circle {
        id:station201
        x:144
        y:411
        text:"紫藤路"
    }

    Circle {
        id:station202
        x:113
        y:411
        text:"航中路"
    }

    Circle {
        id:station203
        x:718
        y:287
        text:"东靖路"
    }

    Circle {
        id:station204
        x:718
        y:260
        text:"五洲大道"
    }

    Circle {
        id:station205
        x:718
        y:233
        text:"洲海路"
    }

    Circle {
        id:station206
        x:718
        y:206
        text:"外高桥保税区南站"
    }

    Circle {
        id:station207
        x:718
        y:179
        text:"航津路"
    }

    Circle {
        id:station208
        x:718
        y:152
        text:"外高桥保税区北站"
    }

    Circle {
        id:station209
        x:718
        y:125
        text:"港城路"
    }

    Circle {
        id:station210
        x:718
        y:314
        text:"巨峰路"
    }

    Circle {
        id:station211
        x:718
        y:345
        text:"五莲路"
    }

    Circle {
        id:station212
        x:718
        y:372
        text:"博兴路"
    }

    Circle {
        id:station213
        x:697
        y:372
        text:"金桥路"
    }

    Circle {
        id:station214
        x:671
        y:372
        text:"云山路"
    }

    Circle {
        id:station215
        x:647
        y:372
        text:"德平路"
    }

    Circle {
        id:station216
        x:617
        y:372
        text:"北洋泾路"
    }

    Circle {
        id:station217
        x:590
        y:372
        text:"民生路"
    }

    Circle {
        id:station218
        x:557
        y:372
        text:"源生体育中心"
    }

    Circle {
        id:station219
        x:532
        y:482
        text:"上海儿童医学中心"
    }

    Circle {
        id:station220
        x:487
        y:482
        text:"临沂新村"
    }

    Circle {
        id:station221
        x:487
        y:527
        text:"东明路"
    }

    Circle {
        id:station222
        x:487
        y:545
        text:"高青路"
    }

    Circle {
        id:station223
        x:487
        y:568
        text:"华夏西路"
    }

    Circle {
        id:station224
        x:469
        y:568
        text:"上南路"
    }

    Circle {
        id:station225
        x:447
        y:568
        text:"灵岩南路"
    }

    Circle {
        id:station226
        x:494
        y:416
        text:"浦电 路"
    }

    Circle {
        id:station227
        x:493
        y:4
        text:"江杨北路"
    }

    Circle {
        id:station228
        x:493
        y:27
        text:"铁力路"
    }

    Circle {
        id:station229
        x:493
        y:51
        text:"友谊路"
    }

    Circle {
        id:station230
        x:493
        y:73
        text:"宝杨路"
    }

    Circle {
        id:station231
        x:493
        y:91
        text:"水产路"
    }

    Circle {
        id:station232
        x:493
        y:111
        text:"淞滨路"
    }

    Circle {
        id:station233
        x:493
        y:136
        text:"张华浜"
    }

    Circle {
        id:station234
        x:456
        y:136
        text:"淞发路"
    }

    Circle {
        id:station235
        x:455
        y:158
        text:"长江南路"
    }

    Circle {
        id:station236
        x:455
        y:179
        text:"殷高西路"
    }

    Circle {
        id:station237
        x:455
        y:200
        text:"江湾镇"
    }

    Circle {
        id:station238
        x:455
        y:224
        text:"大柏树"
    }

    Circle {
        id:station239
        x:455
        y:242
        text:"赤峰路"
    }

    Circle {
        id:station240
        x:455
        y:285
        text:"东宝兴路"
    }

    Circle {
        id:station241
        x:288
        y:482
        text:"漕溪路"
    }

    Circle {
        id:station242
        x:288
        y:506
        text:"龙漕路"
    }

    Circle {
        id:station243
        x:260
        y:506
        text:"石龙路"
    }

    function drawline(point1x,point1y,point2x,point2y,color){
        var ctx = subway.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth=5;
        ctx.fillStyle="red"
        ctx.strokeStyle=color
        ctx.moveTo(point1x,point1y);
        ctx.lineTo(point2x,point2y);
        ctx.fill();
        ctx.stroke();
    }

    onPaint: {
    }

    Button{
        width: 100
        height:40
        text: "最短路径"
        x:30
        y:40
        onClicked: {
            SHG.showPath(source, dest);
            requestPaint();
        }
    }
    Button{
        width: 100
        height:40
        text: "添加站点"
        x:30
        y:100
        onClicked: {
            requestPaint();
        }
    }
}

