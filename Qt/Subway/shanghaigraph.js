var stations;

function Station_js(name){
    this.name = name;
    this.link = new Array();
    this.component = Qt.createComponent("Station.qml");
    var i = 0;
}

function Link(left,right,lineNum){
    this.left = left
    this.right = right
    this.lineNum = lineNum
}

function initGraph(){
    stations = new Array();
    var i = 0
    stations[i] = new Station_js("jiadingxincheng");
    stations[i].component.x = 40
    stations[i].component.y = 50
}
