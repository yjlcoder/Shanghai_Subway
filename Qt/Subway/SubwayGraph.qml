import QtQuick 2.3
import QtQuick.Controls 1.2
//import "shanghaigraph.js" as SHG
import "Drawline.js" as DrawLine

Canvas{
    property double real: 1.0
    property double zoom: 1.0

    id: subway
    scale: zoom
    width: 800
    height: 600

    Component.onCompleted:{
        //        SHG.initStations()
        //        SHG.initLink1()
        //        SHG.initLink2()
        //        SHG.initLink3()
        //        SHG.initLink4()
        //        SHG.initLink5()
        //        SHG.initLink6()
        //        SHG.initStations()
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
    Circle{
        id:station1
        text:"STATION1"
        x:parent.width/2
        y:parent.height/2
    }

    function drawline(point1x,point1y,point2x,point2y){
        var ctx = subway.getContext("2d");
        if(ctx == null) console.log("NO");
        else console.log("YES");
        ctx.beginPath();
        ctx.lineWidth=5;
        ctx.fillStyle="red"
        ctx.strokeStyle="orange"
        ctx.moveTo(point1x,point1y);
        ctx.lineTo(point2x,point2y);
        ctx.fill();
        ctx.stroke();
    }

    onPaint: {
    }
}

