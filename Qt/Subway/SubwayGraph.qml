import QtQuick 2.3
import QtQuick.Controls 1.2
import "shanghaigraph.js" as SHG

Rectangle {
    property double real: 1.0
    property double zoom: 1.0
    id: subway
    scale: zoom
    color:"transparent"
    width: 1000
    height: 1000

    Component.onCompleted:{
        SHG.initStations()
        SHG.initLink1()
        SHG.initLink2()
        SHG.initLink3()
        SHG.initLink4()
        SHG.initLink5()
        SHG.initLink6()

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
    }

}

