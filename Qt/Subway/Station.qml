
import QtQuick 2.0


Rectangle{
//    property alias text: name.text
    property string  text: "value"
    property string link1: ""
    property string link2: ""
    property string link3: ""
    property string link4: ""
    property string link5: ""
    property string link6: ""
    property string link7: ""
    property string link8: ""
    property string link9: ""

    width: 28
    height: 28
    id: station
    color:"transparent"

    Circle{
        id: circle
        anchors.centerIn: parent
    }

    MouseArea{
        id: mouse
        anchors.fill: parent
    }
}
