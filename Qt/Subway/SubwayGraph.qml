import QtQuick 2.3
import QtQuick.Controls 1.2
import "shanghaigraph.js" as SHG

Rectangle {
    property double real: 1.0
    property double zoom: 1.0
    id: subway
    scale: zoom
    color:"#EEEEEE"
    width: 1000
    height: 1000

    Component.onCompleted: SHG.initStations();

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

        onClicked: {
            SHG.initStations();
        }

        onWheel: {
            subway.zoom += wheel.angleDelta.y / 2000
        }

//        Station {
//            id:station1
//            x:70
//            y:195
//            text:"嘉定北"
//            link1:"嘉定西"
//        }

//        PathDraw{
//            lineColor: "red"
//            point1x: station1.link1.x
//            point1y: station1.link1.y
//            point2x: 104 + 14
//            point2y: 195 + 14
//            z:1
//        }

//        Station {
//            x:104
//            y:195
//            text:"嘉定西"
//        }

//        PathDraw{
//            lineColor: "red"
//            point1x: 104 + 14
//            point1y: 195 + 14
//            point2x: 129 + 14
//            point2y: 195 + 14
//            z:1
//        }

//        Station {
//            x:129
//            y:195
//            text:"白银路"
//        }

//        Station {
//            x:150
//            y:217
//            text:"嘉定新城"
//        }

//        Station {
//            x:128
//            y:240
//            text:"上海赛车场"
//        }

//        Station {
//            x:101
//            y:240
//            text:"昌吉东路"
//        }

//        Station {
//            x:70
//            y:240
//            text:"上海汽车城"
//        }

//        Station {
//            x:46
//            y:240
//            text:"安亭"
//        }

//        Station {
//            x:177
//            y:217
//            text:"马陆"
//        }

//        Station {
//            x:195
//            y:217
//            text:"南翔"
//        }

//        Station {
//            x:216
//            y:217
//            text:"桃浦新村"
//        }

//        Station {
//            x:238
//            y:217
//            text:"武威路"
//        }

//        Station {
//            x:266
//            y:217
//            text:"祁连山路"
//        }

//        Station {
//            x:289
//            y:217
//            text:"李子园"
//        }

//        Station {
//            x:311
//            y:217
//            text:"上海西站"
//        }

//        Station {
//            x:311
//            y:254
//            text:"真如"
//        }

//        Station {
//            x:311
//            y:278
//            text:"枫桥路"
//        }

//        Station {
//            x:311
//            y:302
//            text:"曹杨路"
//        }

//        Station {
//            x:311
//            y:326
//            text:"隆德路"
//        }

//        Station {
//            x:311
//            y:350
//            text:"江苏路"
//        }

//        Station {
//            x:269
//            y:5
//            text:"美兰湖"
//        }

//        Station {
//            x:269
//            y:28
//            text:"罗南新村"
//        }

//        Station {
//            x:269
//            y:52
//            text:"潘广路"
//        }

//        Station {
//            x:269
//            y:75
//            text:"刘行"
//        }

//        Station {
//            x:269
//            y:99
//            text:"顾村公园"
//        }

//        Station {
//            x:269
//            y:120
//            text:"祁华路"
//        }

//        Station {
//            x:304
//            y:120
//            text:"上海大学"
//        }

//        Station {
//            x:336
//            y:120
//            text:"南陈路"
//        }

//        Station {
//            x:336
//            y:142
//            text:"上大路"
//        }

//        Station {
//            x:336
//            y:163
//            text:"场中路"
//        }

//        Station {
//            x:336
//            y:184
//            text:"大场镇"
//        }

//        Station {
//            x:336
//            y:205
//            text:"行知路"
//        }

//        Station {
//            x:336
//            y:226
//            text:"大华三路"
//        }

//        Station {
//            x:336
//            y:250
//            text:"新村路"
//        }

//        Station {
//            x:336
//            y:278
//            text:"岚皋路"
//        }

//        Station {
//            x:336
//            y:302
//            text:"镇坪路"
//        }

//        Station {
//            x:336
//            y:326
//            text:"长寿路"
//        }

//        Station {
//            x:336
//            y:350
//            text:"昌平路"
//        }

//        Station {
//            x:336
//            y:372
//            text:"静安寺"
//        }

//        Station {
//            x:336
//            y:394
//            text:"常熟路"
//        }

//        Station {
//            x:337
//            y:438
//            text:"肇家浜路"
//        }

//        Station {
//            x:336
//            y:462
//            text:"东安路"
//        }

//        Station {
//            x:336
//            y:506
//            text:"船厂路"
//        }

//        Station {
//            x:360
//            y:506
//            text:"后滩"
//        }

//        Station {
//            x:393
//            y:506
//            text:"长清路"
//        }

//        Station {
//            x:423
//            y:506
//            text:"耀华路"
//        }

//        Station {
//            x:454
//            y:506
//            text:"云台路"
//        }

//        Station {
//            x:487
//            y:506
//            text:"高科西路"
//        }

//        Station {
//            x:520
//            y:506
//            text:"杨高南路"
//        }

//        Station {
//            x:556
//            y:506
//            text:"锦绣路"
//        }

//        Station {
//            x:601
//            y:506
//            text:"芳华路"
//        }

//        Station {
//            x:601
//            y:443
//            text:"龙阳路"
//        }

//        Station {
//            x:601
//            y:417
//            text:"花木路"
//        }

//        Station {
//            x:362
//            y:302
//            text:"中潭路"
//        }

//        Station {
//            x:402
//            y:302
//            text:"上海火车站"
//        }

//        Station {
//            x:455
//            y:302
//            text:"宝山路"
//        }

//        Station {
//            x:481
//            y:302
//            text:"海伦路"
//        }

//        Station {
//            x:501
//            y:302
//            text:"临平路"
//        }

//        Station {
//            x:521
//            y:302
//            text:"大连路"
//        }

//        Station {
//            x:521
//            y:328
//            text:"杨树浦路"
//        }

//        Station {
//            x:521
//            y:348
//            text:"浦东大道"
//        }

//        Station {
//            x:521
//            y:372
//            text:"世纪大道"
//        }

//        Station {
//            x:521
//            y:416
//            text:"浦电路"
//        }

//        Station {
//            x:521
//            y:462
//            text:"蓝村路"
//        }

//        Station {
//            x:487
//            y:462
//            text:"塘桥"
//        }

//        Station {
//            x:450
//            y:462
//            text:"南浦大桥"
//        }

//        Station {
//            x:423
//            y:462
//            text:"西藏南路"
//        }

//        Station {
//            x:394
//            y:462
//            text:"鲁班路"
//        }

//        Station {
//            x:364
//            y:462
//            text:"大木桥路"
//        }

//        Station {
//            x:307
//            y:462
//            text:"上海体育场"
//        }

//        Station {
//            x:263
//            y:462
//            text:"上海体育馆"
//        }

//        Station {
//            x:263
//            y:438
//            text:"宜山路"
//        }

//        Station {
//            x:263
//            y:388
//            text:"虹桥路"
//        }

//        Station {
//            x:263
//            y:358
//            text:"延安西路"
//        }

//        Station {
//            x:263
//            y:335
//            text:"中山公园"
//        }

//        Station {
//            x:263
//            y:302
//            text:"金沙江路"
//        }

//        Station {
//            x:362
//            y:372
//            text:"南京西路"
//        }

//        Station {
//            x:401
//            y:372
//            text:"人民广场"
//        }

//        Station {
//            x:442
//            y:372
//            text:"南京东路"
//        }

//        Station {
//            x:470
//            y:372
//            text:"陆家嘴"
//        }

//        Station {
//            x:492
//            y:372
//            text:"东昌路"
//        }

//        Station {
//            x:234
//            y:335
//            text:"娄山关路"
//        }

//        Station {
//            x:213
//            y:335
//            text:"威宁路"
//        }

//        Station {
//            x:189
//            y:335
//            text:"北新泾"
//        }

//        Station {
//            x:150
//            y:335
//            text:"淞虹路"
//        }

//        Station {
//            x:113
//            y:335
//            text:"虹桥2号航站楼"
//        }

//        Station {
//            x:76
//            y:335
//            text:"虹桥火车站"
//        }

//        Station {
//            x:46
//            y:335
//            text:"徐泾东"
//        }

//        Station {
//            x:557
//            y:417
//            text:"上海科技馆"
//        }

//        Station {
//            x:558
//            y:443
//            text:"世纪公园"
//        }

//        Station {
//            x:629
//            y:443
//            text:"张江高科"
//        }

//        Station {
//            x:659
//            y:443
//            text:"金科路"
//        }

//        Station {
//            x:711
//            y:443
//            text:"唐镇"
//        }

//        Station {
//            x:684
//            y:443
//            text:"广兰路"
//        }

//        Station {
//            x:736
//            y:443
//            text:"创新中路"
//        }

//        Station {
//            x:736
//            y:467
//            text:"华夏东路"
//        }

//        Station {
//            x:736
//            y:488
//            text:"川沙"
//        }

//        Station {
//            x:765
//            y:488
//            text:"凌空路"
//        }

//        Station {
//            x:794
//            y:488
//            text:"远东大道"
//        }

//        Station {
//            x:823
//            y:488
//            text:"海天三路"
//        }

//        Station {
//            x:858
//            y:488
//            text:"浦东国际机场"
//        }

//        Station {
//            x:402
//            y:5
//            text:"富锦路"
//        }

//        Station {
//            x:402
//            y:29
//            text:"友谊西路"
//        }

//        Station {
//            x:402
//            y:54
//            text:"宝安公路"
//        }

//        Station {
//            x:402
//            y:78
//            text:"共富新村"
//        }

//        Station {
//            x:402
//            y:103
//            text:"呼兰路"
//        }

//        Station {
//            x:402
//            y:127
//            text:"通河新村"
//        }

//        Station {
//            x:402
//            y:152
//            text:"共康路"
//        }

//        Station {
//            x:402
//            y:176
//            text:"彭浦新村"
//        }

//        Station {
//            x:402
//            y:201
//            text:"汶水路"
//        }

//        Station {
//            x:402
//            y:225
//            text:"上海马戏城"
//        }

//        Station {
//            x:402
//            y:250
//            text:"延长路"
//        }

//        Station {
//            x:402
//            y:274
//            text:"中山北路"
//        }

//        Station {
//            x:402
//            y:324
//            text:"汉中路"
//        }

//        Station {
//            x:402
//            y:345
//            text:"新闸路"
//        }

//        Station {
//            x:400
//            y:394
//            text:"黄陂南路"
//        }

//        Station {
//            x:368
//            y:394
//            text:"陕西南路"
//        }

//        Station {
//            x:308
//            y:394
//            text:"衡山路"
//        }

//        Station {
//            x:308
//            y:438
//            text:"徐家汇"
//        }

//        Station {
//            x:248
//            y:483
//            text:"漕宝路"
//        }

//        Station {
//            x:227
//            y:506
//            text:"上海南站"
//        }

//        Station {
//            x:207
//            y:524
//            text:"锦江乐园"
//        }

//        Station {
//            x:187
//            y:543
//            text:"莲花路"
//        }

//        Station {
//            x:167
//            y:560
//            text:"外环路"
//        }

//        Station {
//            x:147
//            y:578
//            text:"莘庄"
//        }

//        Station {
//            x:360
//            y:438
//            text:"嘉善路"
//        }

//        Station {
//            x:382
//            y:438
//            text:"打浦桥"
//        }

//        Station {
//            x:401
//            y:438
//            text:"马当路"
//        }

//        Station {
//            x:423
//            y:438
//            text:"陆家浜路"
//        }

//        Station {
//            x:448
//            y:438
//            text:"小南门"
//        }

//        Station {
//            x:472
//            y:415
//            text:"商城路"
//        }

//        Station {
//            x:237
//            y:438
//            text:"桂林路"
//        }

//        Station {
//            x:210
//            y:438
//            text:"漕河泾开发区"
//        }

//        Station {
//            x:183
//            y:438
//            text:"合川路"
//        }

//        Station {
//            x:156
//            y:438
//            text:"星中路"
//        }

//        Station {
//            x:129
//            y:438
//            text:"七宝"
//        }

//        Station {
//            x:102
//            y:438
//            text:"中春路"
//        }

//        Station {
//            x:75
//            y:438
//            text:"九亭"
//        }

//        Station {
//            x:48
//            y:438
//            text:"泗泾"
//        }

//        Station {
//            x:48
//            y:470
//            text:"佘山"
//        }

//        Station {
//            x:48
//            y:492
//            text:"洞泾"
//        }

//        Station {
//            x:48
//            y:521
//            text:"松江大学城"
//        }

//        Station {
//            x:48
//            y:556
//            text:"松江新城"
//        }

//        Station {
//            x:122
//            y:578
//            text:"春申路"
//        }

//        Station {
//            x:122
//            y:598
//            text:"银都路"
//        }

//        Station {
//            x:122
//            y:622
//            text:"颛桥"
//        }

//        Station {
//            x:122
//            y:642
//            text:"北桥"
//        }

//        Station {
//            x:122
//            y:666
//            text:"剑川路"
//        }

//        Station {
//            x:122
//            y:689
//            text:"东川路"
//        }

//        Station {
//            x:97
//            y:689
//            text:"金平路"
//        }

//        Station {
//            x:71
//            y:689
//            text:"华宁路"
//        }

//        Station {
//            x:20
//            y:689
//            text:"闵行开发区"
//        }

//        Station {
//            x:46
//            y:689
//            text:"文井路"
//        }

//        Station {
//            x:557
//            y:390
//            text:"杨高中路"
//        }

//        Station {
//            x:425
//            y:285
//            text:"中兴路"
//        }

//        Station {
//            x:424
//            y:268
//            text:"西藏北路"
//        }

//        Station {
//            x:425
//            y:330
//            text:"曲阜路"
//        }

//        Station {
//            x:455
//            y:268
//            text:"虹口足球场"
//        }

//        Station {
//            x:488
//            y:268
//            text:"曲阳路"
//        }

//        Station {
//            x:516
//            y:268
//            text:"四平路"
//        }

//        Station {
//            x:548
//            y:302
//            text:"鞍山新村"
//        }

//        Station {
//            x:573
//            y:302
//            text:"江浦路"
//        }

//        Station {
//            x:600
//            y:302
//            text:"黄兴路"
//        }

//        Station {
//            x:600
//            y:275
//            text:"延吉中路"
//        }

//        Station {
//            x:600
//            y:248
//            text:"黄兴公园"
//        }

//        Station {
//            x:600
//            y:221
//            text:"翔殷路"
//        }

//        Station {
//            x:600
//            y:197
//            text:"嫩江路"
//        }

//        Station {
//            x:600
//            y:169
//            text:"市光路"
//        }

//        Station {
//            x:423
//            y:394
//            text:"大世界"
//        }

//        Station {
//            x:423
//            y:416
//            text:"老西门"
//        }

//        Station {
//            x:423
//            y:482
//            text:"周家渡"
//        }

//        Station {
//            x:422
//            y:525
//            text:"成山路"
//        }

//        Station {
//            x:422
//            y:548
//            text:"杨思"
//        }

//        Station {
//            x:422
//            y:568
//            text:"济阳路"
//        }

//        Station {
//            x:422
//            y:593
//            text:"凌兆新村"
//        }

//        Station {
//            x:422
//            y:616
//            text:"芦恒路"
//        }

//        Station {
//            x:422
//            y:636
//            text:"浦江镇"
//        }

//        Station {
//            x:422
//            y:658
//            text:"江月路"
//        }

//        Station {
//            x:422
//            y:680
//            text:"联航路"
//        }

//        Station {
//            x:422
//            y:702
//            text:"航天博物馆"
//        }

//        Station {
//            x:548
//            y:268
//            text:"同济大学"
//        }

//        Station {
//            x:548
//            y:242
//            text:"国权路"
//        }

//        Station {
//            x:548
//            y:216
//            text:"五角场"
//        }

//        Station {
//            x:548
//            y:190
//            text:"江湾体育场"
//        }

//        Station {
//            x:548
//            y:164
//            text:"三门路"
//        }

//        Station {
//            x:548
//            y:138
//            text:"殷高东路"
//        }

//        Station {
//            x:548
//            y:112
//            text:"新江湾城"
//        }

//        Station {
//            x:502
//            y:285
//            text:"邮电新村"
//        }

//        Station {
//            x:481
//            y:347
//            text:"四川北路"
//        }

//        Station {
//            x:442
//            y:347
//            text:"天潼路"
//        }

//        Station {
//            x:443
//            y:416
//            text:"豫园"
//        }

//        Station {
//            x:385
//            y:416
//            text:"新天地"
//        }

//        Station {
//            x:347
//            y:416
//            text:"上海图书馆"
//        }

//        Station {
//            x:284
//            y:416
//            text:"交通大学"
//        }

//        Station {
//            x:237
//            y:388
//            text:"宋园路"
//        }

//        Station {
//            x:215
//            y:388
//            text:"伊犁路"
//        }

//        Station {
//            x:194
//            y:388
//            text:"水城路"
//        }

//        Station {
//            x:173
//            y:388
//            text:"龙溪路"
//        }

//        Station {
//            x:147
//            y:388
//            text:"上海动物园"
//        }

//        Station {
//            x:113
//            y:388
//            text:"虹桥1号航站楼"
//        }

//        Station {
//            x:173
//            y:411
//            text:"龙柏新村"
//        }

//        Station {
//            x:144
//            y:411
//            text:"紫藤路"
//        }

//        Station {
//            x:113
//            y:411
//            text:"航中路"
//        }

//        Station {
//            x:718
//            y:287
//            text:"东靖路"
//        }

//        Station {
//            x:718
//            y:260
//            text:"五洲大道"
//        }

//        Station {
//            x:718
//            y:233
//            text:"洲海路"
//        }

//        Station {
//            x:718
//            y:206
//            text:"外高桥保税区南站"
//        }

//        Station {
//            x:718
//            y:179
//            text:"航津路"
//        }

//        Station {
//            x:718
//            y:152
//            text:"外高桥保税区北站"
//        }

//        Station {
//            x:718
//            y:125
//            text:"港城路"
//        }

//        Station {
//            x:718
//            y:314
//            text:"巨峰路"
//        }

//        Station {
//            x:718
//            y:345
//            text:"五莲路"
//        }

//        Station {
//            x:718
//            y:372
//            text:"博兴路"
//        }

//        Station {
//            x:697
//            y:372
//            text:"金桥路"
//        }

//        Station {
//            x:671
//            y:372
//            text:"云山路"
//        }

//        Station {
//            x:647
//            y:372
//            text:"德平路"
//        }

//        Station {
//            x:617
//            y:372
//            text:"北洋泾路"
//        }

//        Station {
//            x:590
//            y:372
//            text:"民生路"
//        }

//        Station {
//            x:557
//            y:372
//            text:"源生体育中心"
//        }

//        Station {
//            x:532
//            y:482
//            text:"上海儿童医学中心"
//        }

//        Station {
//            x:487
//            y:482
//            text:"临沂新村"
//        }

//        Station {
//            x:487
//            y:527
//            text:"东明路"
//        }

//        Station {
//            x:487
//            y:545
//            text:"高青路"
//        }

//        Station {
//            x:487
//            y:568
//            text:"华夏西路"
//        }

//        Station {
//            x:469
//            y:568
//            text:"上南路"
//        }

//        Station {
//            x:447
//            y:568
//            text:"灵岩南路"
//        }

//        Station {
//            x:494
//            y:416
//            text:"浦电 路"
//        }

//        Station {
//            x:493
//            y:4
//            text:"江杨北路"
//        }

//        Station {
//            x:493
//            y:27
//            text:"铁力路"
//        }

//        Station {
//            x:493
//            y:51
//            text:"友谊路"
//        }

//        Station {
//            x:493
//            y:73
//            text:"宝杨路"
//        }

//        Station {
//            x:493
//            y:91
//            text:"水产路"
//        }

//        Station {
//            x:493
//            y:111
//            text:"淞滨路"
//        }

//        Station {
//            x:493
//            y:136
//            text:"张华浜"
//        }

//        Station {
//            x:456
//            y:136
//            text:"淞发路"
//        }

//        Station {
//            x:455
//            y:158
//            text:"长江南路"
//        }

//        Station {
//            x:455
//            y:179
//            text:"殷高西路"
//        }

//        Station {
//            x:455
//            y:200
//            text:"江湾镇"
//        }

//        Station {
//            x:455
//            y:224
//            text:"大柏树"
//        }

//        Station {
//            x:455
//            y:242
//            text:"赤峰路"
//        }

//        Station {
//            x:455
//            y:285
//            text:"东宝兴路"
//        }

//        Station {
//            x:288
//            y:482
//            text:"漕溪路"
//        }

//        Station {
//            x:288
//            y:506
//            text:"龙漕路"
//        }

//        Station {
//            x:260
//            y:506
//            text:"石龙路"
//        }
    }

}

