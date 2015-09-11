import QtQuick 2.0

Canvas{
    id:mydialog
    width: 250
    height: 100
    z:2

    property string	txt: "value"
    property int radius: 10
    property int rectx: 30
    property int recty: 30
    property int rectWidth: width - 2*rectx
    property int rectHeight: height - 2*recty
    property color strokeStyle:  "black"
    property color fillStyle: "#ffffff" // purple
    property int lineWidth: 3
    property bool fill: true
    property bool stroke: true
    property real alpha: 1.0

    onLineWidthChanged:requestPaint();
    onFillChanged:requestPaint();
    onStrokeChanged:requestPaint();
    onRadiusChanged:requestPaint();
    onRectxChanged: requestPaint();
    onRectyChanged: requestPaint();

    onPaint: {
        var ctx = getContext("2d");
        ctx.save();
        ctx.clearRect(0,0,mydialog.width, mydialog.height);
        ctx.strokeStyle = mydialog.strokeStyle;
        ctx.lineWidth = mydialog.lineWidth
        ctx.fillStyle = mydialog.fillStyle
        ctx.globalAlpha = mydialog.alpha

        ctx.beginPath();
        ctx.moveTo(rectx+radius,recty);                 // top side
        ctx.lineTo(rectx+rectWidth-radius,recty);
        // draw top right corner
        ctx.arcTo(rectx+rectWidth,recty,rectx+rectWidth,recty+radius,radius);
        ctx.lineTo(rectx+rectWidth,recty+rectHeight-radius);    // right side
        // draw bottom right corner
        ctx.arcTo(rectx+rectWidth,recty+rectHeight,rectx+rectWidth-radius,recty+rectHeight,radius);
//        ctx.lineTo(rectx+radius,recty+rectHeight);              // bottom side
        ctx.lineTo(rectx + rectWidth/2 + 15, recty+rectHeight);
        ctx.lineTo(rectx + rectWidth/2, recty + rectHeight + 10);
        ctx.lineTo(rectx + rectWidth/2 - 15, recty + rectHeight);
        ctx.lineTo(rectx+radius,recty+rectHeight);              // bottom side
        // draw bottom left corner
        ctx.arcTo(rectx,recty+rectHeight,rectx,recty+rectHeight-radius,radius);
        ctx.lineTo(rectx,recty+radius);                 // left side
        // draw top left corner
        ctx.arcTo(rectx,recty,rectx+radius,recty,radius);
        ctx.closePath();
        if (mydialog.fill)
            ctx.fill();
        if (mydialog.stroke)
            ctx.stroke();
        ctx.restore();
    }

    Text{
        anchors.centerIn: parent
        color: strokeStyle
        text:txt
        font.pixelSize: 20
    }

    function toDestroy(){
        mydialog.destroy();
    }
}
