var stations = new Array();
var stationCount = 0;
var links = new Array();
var linkCount = 0;
var lineComponent = Qt.createComponent("PathDraw.qml")
var offsetx = 13
var offsety = 13

function initStations(){
    var component = Qt.createComponent("Station.qml");
    if(component.status == Component.Ready){
        stations[stationCount] = component.createObject(subway,{"x":70,"y":195,"text":"嘉定北","count":0})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":104,"y":195,"text":"嘉定西","count":1})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":129,"y":195,"text":"白银路","count":2})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":150,"y":217,"text":"嘉定新城","count":3})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":128,"y":240,"text":"上海赛车场","count":4})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":101,"y":240,"text":"昌吉东路","count":5})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":70,"y":240,"text":"上海汽车城","count":6})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":46,"y":240,"text":"安亭","count":7})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":177,"y":217,"text":"马陆","count":8})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":195,"y":217,"text":"南翔","count":9})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":216,"y":217,"text":"桃浦新村","count":10})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":238,"y":217,"text":"武威路","count":11})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":266,"y":217,"text":"祁连山路","count":12})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":289,"y":217,"text":"李子园","count":13})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":311,"y":217,"text":"上海西站","count":14})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":311,"y":254,"text":"真如","count":15})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":311,"y":278,"text":"枫桥路","count":16})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":311,"y":302,"text":"曹杨路","count":17})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":311,"y":326,"text":"隆德路","count":18})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":311,"y":350,"text":"江苏路","count":19})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":269,"y":5,"text":"美兰湖","count":20})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":269,"y":28,"text":"罗南新村","count":21})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":269,"y":52,"text":"潘广路","count":22})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":269,"y":75,"text":"刘行","count":23})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":269,"y":99,"text":"顾村公园","count":24})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":269,"y":120,"text":"祁华路","count":25})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":304,"y":120,"text":"上海大学","count":26})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":120,"text":"南陈路","count":27})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":142,"text":"上大路","count":28})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":163,"text":"场中路","count":29})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":184,"text":"大场镇","count":30})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":205,"text":"行知路","count":31})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":226,"text":"大华三路","count":32})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":250,"text":"新村路","count":33})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":278,"text":"岚皋路","count":34})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":302,"text":"镇坪路","count":35})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":326,"text":"长寿路","count":36})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":350,"text":"昌平路","count":37})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":372,"text":"静安寺","count":38})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":394,"text":"常熟路","count":39})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":337,"y":438,"text":"肇家浜路","count":40})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":462,"text":"东安路","count":41})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":336,"y":506,"text":"船厂路","count":42})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":360,"y":506,"text":"后滩","count":43})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":393,"y":506,"text":"长清路","count":44})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":423,"y":506,"text":"耀华路","count":45})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":454,"y":506,"text":"云台路","count":46})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":487,"y":506,"text":"高科西路","count":47})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":520,"y":506,"text":"杨高南路","count":48})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":556,"y":506,"text":"锦绣路","count":49})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":601,"y":506,"text":"芳华路","count":50})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":601,"y":443,"text":"龙阳路","count":51})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":601,"y":417,"text":"花木路","count":52})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":362,"y":302,"text":"中潭路","count":53})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":302,"text":"上海火车站","count":54})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":455,"y":302,"text":"宝山路","count":55})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":481,"y":302,"text":"海伦路","count":56})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":501,"y":302,"text":"临平路","count":57})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":521,"y":302,"text":"大连路","count":58})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":521,"y":328,"text":"杨树浦路","count":59})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":521,"y":348,"text":"浦东大道","count":60})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":521,"y":372,"text":"世纪大道","count":61})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":521,"y":416,"text":"浦电路","count":62})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":521,"y":462,"text":"蓝村路","count":63})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":487,"y":462,"text":"塘桥","count":64})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":450,"y":462,"text":"南浦大桥","count":65})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":423,"y":462,"text":"西藏南路","count":66})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":394,"y":462,"text":"鲁班路","count":67})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":364,"y":462,"text":"大木桥路","count":68})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":307,"y":462,"text":"上海体育场","count":69})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":263,"y":462,"text":"上海体育馆","count":70})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":263,"y":438,"text":"宜山路","count":71})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":263,"y":388,"text":"虹桥路","count":72})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":263,"y":358,"text":"延安西路","count":73})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":263,"y":335,"text":"中山公园","count":74})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":263,"y":302,"text":"金沙江路","count":75})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":362,"y":372,"text":"南京西路","count":76})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":401,"y":372,"text":"人民广场","count":77})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":442,"y":372,"text":"南京东路","count":78})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":470,"y":372,"text":"陆家嘴","count":79})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":492,"y":372,"text":"东昌路","count":80})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":234,"y":335,"text":"娄山关路","count":81})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":213,"y":335,"text":"威宁路","count":82})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":189,"y":335,"text":"北新泾","count":83})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":150,"y":335,"text":"淞虹路","count":84})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":113,"y":335,"text":"虹桥2号航站楼","count":85})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":76,"y":335,"text":"虹桥火车站","count":86})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":46,"y":335,"text":"徐泾东","count":87})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":557,"y":417,"text":"上海科技馆","count":88})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":558,"y":443,"text":"世纪公园","count":89})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":629,"y":443,"text":"张江高科","count":90})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":659,"y":443,"text":"金科路","count":91})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":711,"y":443,"text":"唐镇","count":92})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":684,"y":443,"text":"广兰路","count":93})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":736,"y":443,"text":"创新中路","count":94})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":736,"y":467,"text":"华夏东路","count":95})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":736,"y":488,"text":"川沙","count":96})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":765,"y":488,"text":"凌空路","count":97})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":794,"y":488,"text":"远东大道","count":98})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":823,"y":488,"text":"海天三路","count":99})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":858,"y":488,"text":"浦东国际机场","count":100})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":5,"text":"富锦路","count":101})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":29,"text":"友谊西路","count":102})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":54,"text":"宝安公路","count":103})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":78,"text":"共富新村","count":104})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":103,"text":"呼兰路","count":105})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":127,"text":"通河新村","count":106})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":152,"text":"共康路","count":107})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":176,"text":"彭浦新村","count":108})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":201,"text":"汶水路","count":109})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":225,"text":"上海马戏城","count":110})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":250,"text":"延长路","count":111})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":274,"text":"中山北路","count":112})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":324,"text":"汉中路","count":113})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":402,"y":345,"text":"新闸路","count":114})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":400,"y":394,"text":"黄陂南路","count":115})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":368,"y":394,"text":"陕西南路","count":116})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":308,"y":394,"text":"衡山路","count":117})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":308,"y":438,"text":"徐家汇","count":118})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":248,"y":483,"text":"漕宝路","count":119})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":227,"y":506,"text":"上海南站","count":120})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":207,"y":524,"text":"锦江乐园","count":121})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":187,"y":543,"text":"莲花路","count":122})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":167,"y":560,"text":"外环路","count":123})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":147,"y":578,"text":"莘庄","count":124})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":360,"y":438,"text":"嘉善路","count":125})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":382,"y":438,"text":"打浦桥","count":126})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":401,"y":438,"text":"马当路","count":127})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":423,"y":438,"text":"陆家浜路","count":128})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":448,"y":438,"text":"小南门","count":129})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":472,"y":415,"text":"商城路","count":130})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":237,"y":438,"text":"桂林路","count":131})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":210,"y":438,"text":"漕河泾开发区","count":132})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":183,"y":438,"text":"合川路","count":133})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":156,"y":438,"text":"星中路","count":134})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":129,"y":438,"text":"七宝","count":135})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":102,"y":438,"text":"中春路","count":136})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":75,"y":438,"text":"九亭","count":137})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":48,"y":438,"text":"泗泾","count":138})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":48,"y":470,"text":"佘山","count":139})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":48,"y":492,"text":"洞泾","count":140})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":48,"y":521,"text":"松江大学城","count":141})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":48,"y":556,"text":"松江新城","count":142})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":122,"y":578,"text":"春申路","count":143})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":122,"y":598,"text":"银都路","count":144})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":122,"y":622,"text":"颛桥","count":145})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":122,"y":642,"text":"北桥","count":146})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":122,"y":666,"text":"剑川路","count":147})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":122,"y":689,"text":"东川路","count":148})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":97,"y":689,"text":"金平路","count":149})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":71,"y":689,"text":"华宁路","count":150})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":20,"y":689,"text":"闵行开发区","count":151})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":46,"y":689,"text":"文井路","count":152})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":557,"y":390,"text":"杨高中路","count":153})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":425,"y":285,"text":"中兴路","count":154})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":424,"y":268,"text":"西藏北路","count":155})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":425,"y":330,"text":"曲阜路","count":156})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":455,"y":268,"text":"虹口足球场","count":157})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":488,"y":268,"text":"曲阳路","count":158})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":516,"y":268,"text":"四平路","count":159})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":548,"y":302,"text":"鞍山新村","count":160})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":573,"y":302,"text":"江浦路","count":161})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":600,"y":302,"text":"黄兴路","count":162})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":600,"y":275,"text":"延吉中路","count":163})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":600,"y":248,"text":"黄兴公园","count":164})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":600,"y":221,"text":"翔殷路","count":165})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":600,"y":197,"text":"嫩江路","count":166})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":600,"y":169,"text":"市光路","count":167})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":423,"y":394,"text":"大世界","count":168})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":423,"y":416,"text":"老西门","count":169})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":423,"y":482,"text":"周家渡","count":170})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":422,"y":525,"text":"成山路","count":171})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":422,"y":548,"text":"杨思","count":172})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":422,"y":568,"text":"济阳路","count":173})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":422,"y":593,"text":"凌兆新村","count":174})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":422,"y":616,"text":"芦恒路","count":175})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":422,"y":636,"text":"浦江镇","count":176})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":422,"y":658,"text":"江月路","count":177})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":422,"y":680,"text":"联航路","count":178})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":422,"y":702,"text":"航天博物馆","count":179})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":548,"y":268,"text":"同济大学","count":180})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":548,"y":242,"text":"国权路","count":181})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":548,"y":216,"text":"五角场","count":182})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":548,"y":190,"text":"江湾体育场","count":183})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":548,"y":164,"text":"三门路","count":184})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":548,"y":138,"text":"殷高东路","count":185})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":548,"y":112,"text":"新江湾城","count":186})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":502,"y":285,"text":"邮电新村","count":187})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":481,"y":347,"text":"四川北路","count":188})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":442,"y":347,"text":"天潼路","count":189})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":443,"y":416,"text":"豫园","count":190})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":385,"y":416,"text":"新天地","count":191})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":347,"y":416,"text":"上海图书馆","count":192})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":284,"y":416,"text":"交通大学","count":193})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":237,"y":388,"text":"宋园路","count":194})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":215,"y":388,"text":"伊犁路","count":195})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":194,"y":388,"text":"水城路","count":196})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":173,"y":388,"text":"龙溪路","count":197})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":147,"y":388,"text":"上海动物园","count":198})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":113,"y":388,"text":"虹桥1号航站楼","count":199})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":173,"y":411,"text":"龙柏新村","count":200})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":144,"y":411,"text":"紫藤路","count":201})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":113,"y":411,"text":"航中路","count":202})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":287,"text":"东靖路","count":203})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":260,"text":"五洲大道","count":204})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":233,"text":"洲海路","count":205})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":206,"text":"外高桥保税区南站","count":206})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":179,"text":"航津路","count":207})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":152,"text":"外高桥保税区北站","count":208})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":125,"text":"港城路","count":209})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":314,"text":"巨峰路","count":210})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":345,"text":"五莲路","count":211})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":718,"y":372,"text":"博兴路","count":212})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":697,"y":372,"text":"金桥路","count":213})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":671,"y":372,"text":"云山路","count":214})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":647,"y":372,"text":"德平路","count":215})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":617,"y":372,"text":"北洋泾路","count":216})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":590,"y":372,"text":"民生路","count":217})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":557,"y":372,"text":"源生体育中心","count":218})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":532,"y":482,"text":"上海儿童医学中心","count":219})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":487,"y":482,"text":"临沂新村","count":220})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":487,"y":527,"text":"东明路","count":221})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":487,"y":545,"text":"高青路","count":222})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":487,"y":568,"text":"华夏西路","count":223})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":469,"y":568,"text":"上南路","count":224})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":447,"y":568,"text":"灵岩南路","count":225})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":494,"y":416,"text":"浦电 路","count":226})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":493,"y":4,"text":"江杨北路","count":227})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":493,"y":27,"text":"铁力路","count":228})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":493,"y":51,"text":"友谊路","count":229})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":493,"y":73,"text":"宝杨路","count":230})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":493,"y":91,"text":"水产路","count":231})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":493,"y":111,"text":"淞滨路","count":232})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":493,"y":136,"text":"张华浜","count":233})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":456,"y":136,"text":"淞发路","count":234})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":455,"y":158,"text":"长江南路","count":235})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":455,"y":179,"text":"殷高西路","count":236})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":455,"y":200,"text":"江湾镇","count":237})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":455,"y":224,"text":"大柏树","count":238})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":455,"y":242,"text":"赤峰路","count":239})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":455,"y":285,"text":"东宝兴路","count":240})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":288,"y":482,"text":"漕溪路","count":241})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":288,"y":506,"text":"龙漕路","count":242})
        stationCount++
        stations[stationCount] = component.createObject(subway,{"x":260,"y":506,"text":"石龙路","count":243})
        stationCount++
    }
    else{
        if(component.status == Component.Error) console.log("Error" + component.errorString());
    }
}

function initLink1(){
    if(lineComponent.status == Component.Ready){
        console.log("Ready")

        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嘉定北"),"rightNode":findStation("嘉定西"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嘉定西"),"rightNode":findStation("嘉定北"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嘉定西"),"rightNode":findStation("白银路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("白银路"),"rightNode":findStation("嘉定西"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("白银路"),"rightNode":findStation("嘉定新城"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嘉定新城"),"rightNode":findStation("白银路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嘉定新城"),"rightNode":findStation("上海赛车场"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嘉定新城"),"rightNode":findStation("马陆"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海赛车场"),"rightNode":findStation("昌吉东路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海赛车场"),"rightNode":findStation("嘉定新城"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("昌吉东路"),"rightNode":findStation("上海汽车城"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("昌吉东路"),"rightNode":findStation("上海赛车场"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海汽车城"),"rightNode":findStation("安亭"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海汽车城"),"rightNode":findStation("昌吉东路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("安亭"),"rightNode":findStation("上海汽车城"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("马陆"),"rightNode":findStation("嘉定新城"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("马陆"),"rightNode":findStation("南翔"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南翔"),"rightNode":findStation("马陆"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南翔"),"rightNode":findStation("桃浦新村"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("桃浦新村"),"rightNode":findStation("南翔"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("桃浦新村"),"rightNode":findStation("武威路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("武威路"),"rightNode":findStation("桃浦新村"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("武威路"),"rightNode":findStation("祁连山路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("祁连山路"),"rightNode":findStation("武威路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("祁连山路"),"rightNode":findStation("李子园"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("李子园"),"rightNode":findStation("祁连山路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("李子园"),"rightNode":findStation("上海西站"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海西站"),"rightNode":findStation("李子园"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海西站"),"rightNode":findStation("真如"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("真如"),"rightNode":findStation("上海西站"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("真如"),"rightNode":findStation("枫桥路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("枫桥路"),"rightNode":findStation("真如"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("枫桥路"),"rightNode":findStation("曹杨路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曹杨路"),"rightNode":findStation("枫桥路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曹杨路"),"rightNode":findStation("隆德路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1

        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曹杨路"),"rightNode":findStation("镇坪路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
    }
    else if(lineComponent.status == Component.Error) console.log("Error" + component.errorString());
}

function initLink2(){
    if(lineComponent.status == Component.Ready){
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曹杨路"),"rightNode":findStation("金沙江路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曹杨路"),"rightNode":findStation("镇坪路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曹杨路"),"rightNode":findStation("金沙江路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("隆德路"),"rightNode":findStation("曹杨路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("隆德路"),"rightNode":findStation("江苏路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江苏路"),"rightNode":findStation("隆德路"), "lineColor": getColor("11号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江苏路"),"rightNode":findStation("中山公园"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江苏路"),"rightNode":findStation("静安寺"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("美兰湖"),"rightNode":findStation("罗南新村"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("罗南新村"),"rightNode":findStation("美兰湖"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("罗南新村"),"rightNode":findStation("潘广路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("潘广路"),"rightNode":findStation("罗南新村"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("潘广路"),"rightNode":findStation("刘行"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("刘行"),"rightNode":findStation("潘广路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("刘行"),"rightNode":findStation("顾村公园"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("顾村公园"),"rightNode":findStation("刘行"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("顾村公园"),"rightNode":findStation("祁华路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("祁华路"),"rightNode":findStation("顾村公园"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("祁华路"),"rightNode":findStation("上海大学"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海大学"),"rightNode":findStation("祁华路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海大学"),"rightNode":findStation("南陈路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南陈路"),"rightNode":findStation("上海大学"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南陈路"),"rightNode":findStation("上大路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上大路"),"rightNode":findStation("南陈路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上大路"),"rightNode":findStation("场中路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("场中路"),"rightNode":findStation("上大路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("场中路"),"rightNode":findStation("大场镇"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大场镇"),"rightNode":findStation("场中路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1

        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大场镇"),"rightNode":findStation("行知路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("行知路"),"rightNode":findStation("大场镇"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("行知路"),"rightNode":findStation("大华三路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大华三路"),"rightNode":findStation("行知路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大华三路"),"rightNode":findStation("新村路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("新村路"),"rightNode":findStation("大华三路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("新村路"),"rightNode":findStation("岚皋路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("岚皋路"),"rightNode":findStation("新村路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("岚皋路"),"rightNode":findStation("镇坪路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("镇坪路"),"rightNode":findStation("岚皋路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("镇坪路"),"rightNode":findStation("长寿路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("镇坪路"),"rightNode":findStation("曹杨路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("镇坪路"),"rightNode":findStation("曹杨路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("镇坪路"),"rightNode":findStation("中潭路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("镇坪路"),"rightNode":findStation("中潭路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("长寿路"),"rightNode":findStation("镇坪路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("长寿路"),"rightNode":findStation("昌平路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("昌平路"),"rightNode":findStation("长寿路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("昌平路"),"rightNode":findStation("静安寺"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("静安寺"),"rightNode":findStation("昌平路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("静安寺"),"rightNode":findStation("常熟路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("静安寺"),"rightNode":findStation("江苏路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("静安寺"),"rightNode":findStation("南京西路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("常熟路"),"rightNode":findStation("静安寺"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("常熟路"),"rightNode":findStation("肇家浜路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("常熟路"),"rightNode":findStation("陕西南路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("常熟路"),"rightNode":findStation("衡山路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("肇家浜路"),"rightNode":findStation("常熟路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("肇家浜路"),"rightNode":findStation("东安路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("肇家浜路"),"rightNode":findStation("徐家汇"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("肇家浜路"),"rightNode":findStation("嘉善路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东安路"),"rightNode":findStation("肇家浜路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东安路"),"rightNode":findStation("船厂路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东安路"),"rightNode":findStation("大木桥路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东安路"),"rightNode":findStation("上海体育场"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("船厂路"),"rightNode":findStation("东安路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("船厂路"),"rightNode":findStation("后滩"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
    }
}

function initLink3(){
    if(lineComponent.status == Component.Ready){
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("后滩"),"rightNode":findStation("船厂路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("后滩"),"rightNode":findStation("长清路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("长清路"),"rightNode":findStation("后滩"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("长清路"),"rightNode":findStation("耀华路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("耀华路"),"rightNode":findStation("长清路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("耀华路"),"rightNode":findStation("云台路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("耀华路"),"rightNode":findStation("周家渡"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("耀华路"),"rightNode":findStation("成山路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("云台路"),"rightNode":findStation("耀华路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("云台路"),"rightNode":findStation("高科西路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("高科西路"),"rightNode":findStation("云台路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("高科西路"),"rightNode":findStation("杨高南路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("高科西路"),"rightNode":findStation("临沂新村"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("高科西路"),"rightNode":findStation("东明路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("杨高南路"),"rightNode":findStation("高科西路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("杨高南路"),"rightNode":findStation("锦绣路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("锦绣路"),"rightNode":findStation("杨高南路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("锦绣路"),"rightNode":findStation("芳华路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("芳华路"),"rightNode":findStation("锦绣路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("芳华路"),"rightNode":findStation("龙阳路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙阳路"),"rightNode":findStation("芳华路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙阳路"),"rightNode":findStation("花木路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙阳路"),"rightNode":findStation("世纪公园"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙阳路"),"rightNode":findStation("张江高科"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("花木路"),"rightNode":findStation("龙阳路"), "lineColor": getColor("7号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中潭路"),"rightNode":findStation("镇坪路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中潭路"),"rightNode":findStation("镇坪路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中潭路"),"rightNode":findStation("上海火车站"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中潭路"),"rightNode":findStation("上海火车站"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海火车站"),"rightNode":findStation("宝山路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海火车站"),"rightNode":findStation("中山北路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海火车站"),"rightNode":findStation("汉中路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海火车站"),"rightNode":findStation("宝山路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海火车站"),"rightNode":findStation("中潭路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海火车站"),"rightNode":findStation("中潭路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宝山路"),"rightNode":findStation("上海火车站"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宝山路"),"rightNode":findStation("海伦路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宝山路"),"rightNode":findStation("东宝兴路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宝山路"),"rightNode":findStation("上海火车站"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("海伦路"),"rightNode":findStation("宝山路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("海伦路"),"rightNode":findStation("临平路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("海伦路"),"rightNode":findStation("邮电新村"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("海伦路"),"rightNode":findStation("四川北路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("临平路"),"rightNode":findStation("海伦路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("临平路"),"rightNode":findStation("大连路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大连路"),"rightNode":findStation("临平路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大连路"),"rightNode":findStation("杨树浦路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("杨树浦路"),"rightNode":findStation("大连路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("杨树浦路"),"rightNode":findStation("浦东大道"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("浦东大道"),"rightNode":findStation("杨树浦路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("浦东大道"),"rightNode":findStation("世纪大道"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪大道"),"rightNode":findStation("浦东大道"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪大道"),"rightNode":findStation("浦电路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪大道"),"rightNode":findStation("东昌路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪大道"),"rightNode":findStation("上海科技馆"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪大道"),"rightNode":findStation("商城路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪大道"),"rightNode":findStation("杨高中路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪大道"),"rightNode":findStation("源生体育中心"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪大道"),"rightNode":findStation("浦电 路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("浦电路"),"rightNode":findStation("世纪大道"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("浦电路"),"rightNode":findStation("蓝村路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("蓝村路"),"rightNode":findStation("浦电路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("蓝村路"),"rightNode":findStation("塘桥"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("蓝村路"),"rightNode":findStation("上海儿童医学中心"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("蓝村路"),"rightNode":findStation("浦电 路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("塘桥"),"rightNode":findStation("蓝村路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("塘桥"),"rightNode":findStation("南浦大桥"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南浦大桥"),"rightNode":findStation("塘桥"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南浦大桥"),"rightNode":findStation("西藏南路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("西藏南路"),"rightNode":findStation("南浦大桥"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("西藏南路"),"rightNode":findStation("鲁班路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("西藏南路"),"rightNode":findStation("陆家浜路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("西藏南路"),"rightNode":findStation("周家渡"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("鲁班路"),"rightNode":findStation("西藏南路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("鲁班路"),"rightNode":findStation("大木桥路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大木桥路"),"rightNode":findStation("鲁班路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大木桥路"),"rightNode":findStation("东安路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海体育场"),"rightNode":findStation("东安路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海体育场"),"rightNode":findStation("上海体育馆"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海体育馆"),"rightNode":findStation("上海体育场"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海体育馆"),"rightNode":findStation("宜山路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海体育馆"),"rightNode":findStation("徐家汇"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海体育馆"),"rightNode":findStation("漕宝路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宜山路"),"rightNode":findStation("上海体育馆"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宜山路"),"rightNode":findStation("虹桥路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宜山路"),"rightNode":findStation("徐家汇"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宜山路"),"rightNode":findStation("桂林路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宜山路"),"rightNode":findStation("漕溪路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宜山路"),"rightNode":findStation("虹桥路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥路"),"rightNode":findStation("宜山路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥路"),"rightNode":findStation("延安西路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥路"),"rightNode":findStation("交通大学"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥路"),"rightNode":findStation("宋园路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥路"),"rightNode":findStation("延安西路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥路"),"rightNode":findStation("宜山路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("延安西路"),"rightNode":findStation("虹桥路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("延安西路"),"rightNode":findStation("中山公园"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("延安西路"),"rightNode":findStation("虹桥路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("延安西路"),"rightNode":findStation("中山公园"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中山公园"),"rightNode":findStation("延安西路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中山公园"),"rightNode":findStation("金沙江路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中山公园"),"rightNode":findStation("江苏路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中山公园"),"rightNode":findStation("娄山关路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中山公园"),"rightNode":findStation("金沙江路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中山公园"),"rightNode":findStation("延安西路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金沙江路"),"rightNode":findStation("中山公园"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金沙江路"),"rightNode":findStation("曹杨路"), "lineColor": getColor("4号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金沙江路"),"rightNode":findStation("曹杨路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金沙江路"),"rightNode":findStation("中山公园"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南京西路"),"rightNode":findStation("静安寺"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南京西路"),"rightNode":findStation("人民广场"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("人民广场"),"rightNode":findStation("南京西路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("人民广场"),"rightNode":findStation("南京东路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("人民广场"),"rightNode":findStation("新闸路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("人民广场"),"rightNode":findStation("黄陂南路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("人民广场"),"rightNode":findStation("曲阜路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("人民广场"),"rightNode":findStation("大世界"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南京东路"),"rightNode":findStation("人民广场"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南京东路"),"rightNode":findStation("陆家嘴"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南京东路"),"rightNode":findStation("天潼路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("南京东路"),"rightNode":findStation("豫园"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陆家嘴"),"rightNode":findStation("南京东路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陆家嘴"),"rightNode":findStation("东昌路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东昌路"),"rightNode":findStation("陆家嘴"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东昌路"),"rightNode":findStation("世纪大道"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("娄山关路"),"rightNode":findStation("威宁路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
    }
}

function initLink4(){
    if(lineComponent.status == Component.Ready){

        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("娄山关路"),"rightNode":findStation("中山公园"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("威宁路"),"rightNode":findStation("北新泾"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("威宁路"),"rightNode":findStation("娄山关路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("北新泾"),"rightNode":findStation("淞虹路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("北新泾"),"rightNode":findStation("威宁路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("淞虹路"),"rightNode":findStation("虹桥2号航站楼"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("淞虹路"),"rightNode":findStation("北新泾"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥2号航站楼"),"rightNode":findStation("虹桥火车站"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥2号航站楼"),"rightNode":findStation("淞虹路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥2号航站楼"),"rightNode":findStation("虹桥1号航站楼"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥火车站"),"rightNode":findStation("徐泾东"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥火车站"),"rightNode":findStation("虹桥2号航站楼"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("徐泾东"),"rightNode":findStation("虹桥火车站"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海科技馆"),"rightNode":findStation("世纪大道"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海科技馆"),"rightNode":findStation("世纪公园"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪公园"),"rightNode":findStation("上海科技馆"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("世纪公园"),"rightNode":findStation("龙阳路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("张江高科"),"rightNode":findStation("龙阳路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("张江高科"),"rightNode":findStation("金科路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金科路"),"rightNode":findStation("张江高科"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金科路"),"rightNode":findStation("广兰路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("唐镇"),"rightNode":findStation("广兰路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("唐镇"),"rightNode":findStation("创新中路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("广兰路"),"rightNode":findStation("金科路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("广兰路"),"rightNode":findStation("唐镇"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("创新中路"),"rightNode":findStation("唐镇"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("创新中路"),"rightNode":findStation("华夏东路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("华夏东路"),"rightNode":findStation("创新中路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("华夏东路"),"rightNode":findStation("川沙"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("川沙"),"rightNode":findStation("华夏东路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("川沙"),"rightNode":findStation("凌空路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("凌空路"),"rightNode":findStation("川沙"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("凌空路"),"rightNode":findStation("远东大道"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("远东大道"),"rightNode":findStation("凌空路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("远东大道"),"rightNode":findStation("海天三路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("海天三路"),"rightNode":findStation("远东大道"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("海天三路"),"rightNode":findStation("浦东国际机场"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("浦东国际机场"),"rightNode":findStation("海天三路"), "lineColor": getColor("2号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("富锦路"),"rightNode":findStation("友谊西路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("友谊西路"),"rightNode":findStation("富锦路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("友谊西路"),"rightNode":findStation("宝安公路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宝安公路"),"rightNode":findStation("友谊西路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宝安公路"),"rightNode":findStation("共富新村"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("共富新村"),"rightNode":findStation("宝安公路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("共富新村"),"rightNode":findStation("呼兰路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("呼兰路"),"rightNode":findStation("共富新村"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("呼兰路"),"rightNode":findStation("通河新村"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("通河新村"),"rightNode":findStation("呼兰路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("通河新村"),"rightNode":findStation("共康路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("共康路"),"rightNode":findStation("通河新村"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("共康路"),"rightNode":findStation("彭浦新村"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("彭浦新村"),"rightNode":findStation("共康路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("彭浦新村"),"rightNode":findStation("汶水路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("汶水路"),"rightNode":findStation("彭浦新村"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("汶水路"),"rightNode":findStation("上海马戏城"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海马戏城"),"rightNode":findStation("汶水路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海马戏城"),"rightNode":findStation("延长路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("延长路"),"rightNode":findStation("上海马戏城"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("延长路"),"rightNode":findStation("中山北路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中山北路"),"rightNode":findStation("延长路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中山北路"),"rightNode":findStation("上海火车站"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("汉中路"),"rightNode":findStation("上海火车站"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("汉中路"),"rightNode":findStation("新闸路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("新闸路"),"rightNode":findStation("汉中路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("新闸路"),"rightNode":findStation("人民广场"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("黄陂南路"),"rightNode":findStation("人民广场"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("黄陂南路"),"rightNode":findStation("陕西南路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陕西南路"),"rightNode":findStation("黄陂南路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陕西南路"),"rightNode":findStation("常熟路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陕西南路"),"rightNode":findStation("新天地"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陕西南路"),"rightNode":findStation("上海图书馆"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("衡山路"),"rightNode":findStation("常熟路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("衡山路"),"rightNode":findStation("徐家汇"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("徐家汇"),"rightNode":findStation("衡山路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("徐家汇"),"rightNode":findStation("上海体育馆"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("徐家汇"),"rightNode":findStation("宜山路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("徐家汇"),"rightNode":findStation("肇家浜路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("漕宝路"),"rightNode":findStation("上海体育馆"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("漕宝路"),"rightNode":findStation("上海南站"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海南站"),"rightNode":findStation("漕宝路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海南站"),"rightNode":findStation("锦江乐园"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海南站"),"rightNode":findStation("石龙路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("锦江乐园"),"rightNode":findStation("上海南站"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("锦江乐园"),"rightNode":findStation("莲花路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("莲花路"),"rightNode":findStation("锦江乐园"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("莲花路"),"rightNode":findStation("外环路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("外环路"),"rightNode":findStation("莲花路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("外环路"),"rightNode":findStation("莘庄"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("莘庄"),"rightNode":findStation("外环路"), "lineColor": getColor("1号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("莘庄"),"rightNode":findStation("春申路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嘉善路"),"rightNode":findStation("肇家浜路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嘉善路"),"rightNode":findStation("打浦桥"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("打浦桥"),"rightNode":findStation("嘉善路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("打浦桥"),"rightNode":findStation("马当路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("马当路"),"rightNode":findStation("打浦桥"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("马当路"),"rightNode":findStation("陆家浜路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陆家浜路"),"rightNode":findStation("马当路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
    }
}

function initLink5(){
    if(lineComponent.status == Component.Ready){
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陆家浜路"),"rightNode":findStation("小南门"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陆家浜路"),"rightNode":findStation("老西门"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("陆家浜路"),"rightNode":findStation("西藏南路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("小南门"),"rightNode":findStation("陆家浜路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("小南门"),"rightNode":findStation("商城路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("商城路"),"rightNode":findStation("小南门"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("商城路"),"rightNode":findStation("世纪大道"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("桂林路"),"rightNode":findStation("漕河泾开发区"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("桂林路"),"rightNode":findStation("宜山路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("漕河泾开发区"),"rightNode":findStation("合川路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("漕河泾开发区"),"rightNode":findStation("桂林路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("合川路"),"rightNode":findStation("星中路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("合川路"),"rightNode":findStation("漕河泾开发区"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("星中路"),"rightNode":findStation("七宝"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("星中路"),"rightNode":findStation("合川路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("七宝"),"rightNode":findStation("中春路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("七宝"),"rightNode":findStation("星中路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中春路"),"rightNode":findStation("九亭"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中春路"),"rightNode":findStation("七宝"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("九亭"),"rightNode":findStation("泗泾"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("九亭"),"rightNode":findStation("中春路"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("泗泾"),"rightNode":findStation("佘山"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("泗泾"),"rightNode":findStation("九亭"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("佘山"),"rightNode":findStation("洞泾"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("佘山"),"rightNode":findStation("泗泾"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("洞泾"),"rightNode":findStation("松江大学城"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("洞泾"),"rightNode":findStation("佘山"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("松江大学城"),"rightNode":findStation("松江新城"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("松江大学城"),"rightNode":findStation("洞泾"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("松江新城"),"rightNode":findStation("松江大学城"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("春申路"),"rightNode":findStation("莘庄"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("春申路"),"rightNode":findStation("银都路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("银都路"),"rightNode":findStation("春申路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("银都路"),"rightNode":findStation("颛桥"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("颛桥"),"rightNode":findStation("银都路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("颛桥"),"rightNode":findStation("北桥"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("北桥"),"rightNode":findStation("颛桥"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("北桥"),"rightNode":findStation("剑川路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("剑川路"),"rightNode":findStation("北桥"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("剑川路"),"rightNode":findStation("东川路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东川路"),"rightNode":findStation("剑川路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东川路"),"rightNode":findStation("金平路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金平路"),"rightNode":findStation("东川路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金平路"),"rightNode":findStation("华宁路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("华宁路"),"rightNode":findStation("金平路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("华宁路"),"rightNode":findStation("文井路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("闵行开发区"),"rightNode":findStation("文井路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("文井路"),"rightNode":findStation("华宁路"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("文井路"),"rightNode":findStation("闵行开发区"), "lineColor": getColor("5号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("杨高中路"),"rightNode":findStation("世纪大道"), "lineColor": getColor("9号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中兴路"),"rightNode":findStation("西藏北路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("中兴路"),"rightNode":findStation("曲阜路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("西藏北路"),"rightNode":findStation("虹口足球场"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("西藏北路"),"rightNode":findStation("中兴路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曲阜路"),"rightNode":findStation("中兴路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曲阜路"),"rightNode":findStation("人民广场"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹口足球场"),"rightNode":findStation("曲阳路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹口足球场"),"rightNode":findStation("西藏北路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹口足球场"),"rightNode":findStation("赤峰路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹口足球场"),"rightNode":findStation("东宝兴路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曲阳路"),"rightNode":findStation("四平路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("曲阳路"),"rightNode":findStation("虹口足球场"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("四平路"),"rightNode":findStation("鞍山新村"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("四平路"),"rightNode":findStation("曲阳路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("四平路"),"rightNode":findStation("同济大学"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("四平路"),"rightNode":findStation("邮电新村"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("鞍山新村"),"rightNode":findStation("江浦路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("鞍山新村"),"rightNode":findStation("四平路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江浦路"),"rightNode":findStation("黄兴路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江浦路"),"rightNode":findStation("鞍山新村"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("黄兴路"),"rightNode":findStation("延吉中路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("黄兴路"),"rightNode":findStation("江浦路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("延吉中路"),"rightNode":findStation("黄兴公园"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("延吉中路"),"rightNode":findStation("黄兴路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("黄兴公园"),"rightNode":findStation("翔殷路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("黄兴公园"),"rightNode":findStation("延吉中路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("翔殷路"),"rightNode":findStation("黄兴公园"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("翔殷路"),"rightNode":findStation("嫩江路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嫩江路"),"rightNode":findStation("市光路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("嫩江路"),"rightNode":findStation("翔殷路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("市光路"),"rightNode":findStation("嫩江路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大世界"),"rightNode":findStation("人民广场"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大世界"),"rightNode":findStation("老西门"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("老西门"),"rightNode":findStation("大世界"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("老西门"),"rightNode":findStation("陆家浜路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("老西门"),"rightNode":findStation("豫园"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("老西门"),"rightNode":findStation("新天地"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("周家渡"),"rightNode":findStation("西藏南路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("周家渡"),"rightNode":findStation("耀华路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("成山路"),"rightNode":findStation("耀华路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("成山路"),"rightNode":findStation("杨思"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("杨思"),"rightNode":findStation("成山路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("杨思"),"rightNode":findStation("济阳路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("济阳路"),"rightNode":findStation("杨思"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("济阳路"),"rightNode":findStation("凌兆新村"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("济阳路"),"rightNode":findStation("灵岩南路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("凌兆新村"),"rightNode":findStation("济阳路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("凌兆新村"),"rightNode":findStation("芦恒路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("芦恒路"),"rightNode":findStation("凌兆新村"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("芦恒路"),"rightNode":findStation("浦江镇"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
    }
}

function initLink6(){
    if(lineComponent.status == Component.Ready){

        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("浦江镇"),"rightNode":findStation("芦恒路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("浦江镇"),"rightNode":findStation("江月路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江月路"),"rightNode":findStation("浦江镇"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江月路"),"rightNode":findStation("联航路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("联航路"),"rightNode":findStation("江月路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("联航路"),"rightNode":findStation("航天博物馆"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("航天博物馆"),"rightNode":findStation("联航路"), "lineColor": getColor("8号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("同济大学"),"rightNode":findStation("国权路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("同济大学"),"rightNode":findStation("四平路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("国权路"),"rightNode":findStation("五角场"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("国权路"),"rightNode":findStation("同济大学"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("五角场"),"rightNode":findStation("江湾体育场"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("五角场"),"rightNode":findStation("国权路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江湾体育场"),"rightNode":findStation("三门路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江湾体育场"),"rightNode":findStation("五角场"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("三门路"),"rightNode":findStation("江湾体育场"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("三门路"),"rightNode":findStation("殷高东路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("殷高东路"),"rightNode":findStation("新江湾城"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("殷高东路"),"rightNode":findStation("三门路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("新江湾城"),"rightNode":findStation("殷高东路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("邮电新村"),"rightNode":findStation("四平路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("邮电新村"),"rightNode":findStation("海伦路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("四川北路"),"rightNode":findStation("海伦路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("四川北路"),"rightNode":findStation("天潼路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("天潼路"),"rightNode":findStation("四川北路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("天潼路"),"rightNode":findStation("南京东路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("豫园"),"rightNode":findStation("南京东路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("豫园"),"rightNode":findStation("老西门"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("新天地"),"rightNode":findStation("老西门"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("新天地"),"rightNode":findStation("陕西南路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海图书馆"),"rightNode":findStation("陕西南路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海图书馆"),"rightNode":findStation("交通大学"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("交通大学"),"rightNode":findStation("上海图书馆"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("交通大学"),"rightNode":findStation("虹桥路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宋园路"),"rightNode":findStation("虹桥路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宋园路"),"rightNode":findStation("伊犁路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("伊犁路"),"rightNode":findStation("宋园路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("伊犁路"),"rightNode":findStation("水城路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("水城路"),"rightNode":findStation("伊犁路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("水城路"),"rightNode":findStation("龙溪路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙溪路"),"rightNode":findStation("水城路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙溪路"),"rightNode":findStation("上海动物园"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙溪路"),"rightNode":findStation("龙柏新村"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海动物园"),"rightNode":findStation("龙溪路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海动物园"),"rightNode":findStation("虹桥1号航站楼"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥1号航站楼"),"rightNode":findStation("虹桥2号航站楼"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("虹桥1号航站楼"),"rightNode":findStation("上海动物园"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙柏新村"),"rightNode":findStation("龙溪路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙柏新村"),"rightNode":findStation("紫藤路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("紫藤路"),"rightNode":findStation("龙柏新村"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("紫藤路"),"rightNode":findStation("航中路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("航中路"),"rightNode":findStation("紫藤路"), "lineColor": getColor("10号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东靖路"),"rightNode":findStation("五洲大道"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东靖路"),"rightNode":findStation("巨峰路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("五洲大道"),"rightNode":findStation("洲海路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("五洲大道"),"rightNode":findStation("东靖路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("洲海路"),"rightNode":findStation("外高桥保税区南站"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("洲海路"),"rightNode":findStation("五洲大道"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("外高桥保税区南站"),"rightNode":findStation("航津路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("外高桥保税区南站"),"rightNode":findStation("洲海路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("航津路"),"rightNode":findStation("外高桥保税区南站"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("航津路"),"rightNode":findStation("外高桥保税区北站"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("外高桥保税区北站"),"rightNode":findStation("港城路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("外高桥保税区北站"),"rightNode":findStation("航津路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("港城路"),"rightNode":findStation("外高桥保税区北站"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("巨峰路"),"rightNode":findStation("东靖路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("巨峰路"),"rightNode":findStation("五莲路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("五莲路"),"rightNode":findStation("巨峰路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("五莲路"),"rightNode":findStation("博兴路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("博兴路"),"rightNode":findStation("五莲路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("博兴路"),"rightNode":findStation("金桥路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金桥路"),"rightNode":findStation("博兴路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("金桥路"),"rightNode":findStation("云山路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("云山路"),"rightNode":findStation("金桥路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("云山路"),"rightNode":findStation("德平路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("德平路"),"rightNode":findStation("云山路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("德平路"),"rightNode":findStation("北洋泾路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("北洋泾路"),"rightNode":findStation("德平路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("北洋泾路"),"rightNode":findStation("民生路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("民生路"),"rightNode":findStation("北洋泾路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("民生路"),"rightNode":findStation("源生体育中心"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("源生体育中心"),"rightNode":findStation("民生路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("源生体育中心"),"rightNode":findStation("世纪大道"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海儿童医学中心"),"rightNode":findStation("蓝村路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上海儿童医学中心"),"rightNode":findStation("临沂新村"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("临沂新村"),"rightNode":findStation("上海儿童医学中心"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("临沂新村"),"rightNode":findStation("高科西路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东明路"),"rightNode":findStation("高科西路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东明路"),"rightNode":findStation("高青路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("高青路"),"rightNode":findStation("东明路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("高青路"),"rightNode":findStation("华夏西路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("华夏西路"),"rightNode":findStation("高青路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("华夏西路"),"rightNode":findStation("上南路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上南路"),"rightNode":findStation("华夏西路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("上南路"),"rightNode":findStation("灵岩南路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("灵岩南路"),"rightNode":findStation("上南路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("灵岩南路"),"rightNode":findStation("济阳路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("浦电 路"),"rightNode":findStation("世纪大道"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("浦电 路"),"rightNode":findStation("蓝村路"), "lineColor": getColor("6号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江杨北路"),"rightNode":findStation("铁力路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("铁力路"),"rightNode":findStation("江杨北路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("铁力路"),"rightNode":findStation("友谊路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("友谊路"),"rightNode":findStation("铁力路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("友谊路"),"rightNode":findStation("宝杨路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宝杨路"),"rightNode":findStation("友谊路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("宝杨路"),"rightNode":findStation("水产路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("水产路"),"rightNode":findStation("宝杨路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("水产路"),"rightNode":findStation("淞滨路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("淞滨路"),"rightNode":findStation("水产路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("淞滨路"),"rightNode":findStation("张华浜"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("张华浜"),"rightNode":findStation("淞滨路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("张华浜"),"rightNode":findStation("淞发路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("淞发路"),"rightNode":findStation("张华浜"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("淞发路"),"rightNode":findStation("长江南路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("长江南路"),"rightNode":findStation("淞发路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("长江南路"),"rightNode":findStation("殷高西路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("殷高西路"),"rightNode":findStation("长江南路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("殷高西路"),"rightNode":findStation("江湾镇"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江湾镇"),"rightNode":findStation("殷高西路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("江湾镇"),"rightNode":findStation("大柏树"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大柏树"),"rightNode":findStation("江湾镇"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("大柏树"),"rightNode":findStation("赤峰路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("赤峰路"),"rightNode":findStation("大柏树"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("赤峰路"),"rightNode":findStation("虹口足球场"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东宝兴路"),"rightNode":findStation("虹口足球场"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("东宝兴路"),"rightNode":findStation("宝山路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("漕溪路"),"rightNode":findStation("宜山路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("漕溪路"),"rightNode":findStation("龙漕路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙漕路"),"rightNode":findStation("漕溪路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("龙漕路"),"rightNode":findStation("石龙路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("石龙路"),"rightNode":findStation("龙漕路"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
        links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("石龙路"),"rightNode":findStation("上海南站"), "lineColor": getColor("3号线")})
        links[linkCount].point1x = stations[links[linkCount].leftNode].x+offsetx
        links[linkCount].point1y = stations[links[linkCount].leftNode].y+offsety
        links[linkCount].point2x = stations[links[linkCount].rightNode].x+offsetx
        links[linkCount].point2y = stations[links[linkCount].rightNode].y+offsety
        console.log(links[linkCount].lineColor)
        linkCount+=1
    }
}

function findStation(s){
    for(var i = 0; i < stationCount; i++){
        if(stations[i].text == s){
            return i;
        }
    }
    return 0
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
    return "#000000"
}
