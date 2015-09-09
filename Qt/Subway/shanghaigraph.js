var stations = new Array();
var stationCount = 0;

function initStations(){
    var component = Qt.createComponent("Station.qml");
    stations[stationCount] = component.createObject(subway,{"x":20 * stationCount,"y": 10 * stationCount});
    stationCount++;
    if(stations[stationCount-1] == null){
        console.log("Error creating object");
    }
}
