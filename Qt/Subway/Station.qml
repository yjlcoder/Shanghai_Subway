
import QtQuick 2.0


Rectangle{
//    property alias text: name.text
    property string  text: "value"
    property int count:0

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
