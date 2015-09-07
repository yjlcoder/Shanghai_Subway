import QtQuick 2.0

Rectangle{
    width: 35
    height: 35
    id: station

    Circle{
        id: circle
        anchors.top: parent.top
        anchors.horizontalCenter: parent.horizontalCenter
    }
    Text{
        height: 10
        anchors.top: circle.bottom
        text: "Site"
    }
}
