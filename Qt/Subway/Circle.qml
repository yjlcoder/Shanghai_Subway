import QtQuick 2.0

Canvas{

    property string fillColor: "red"
    property string strokeColor: "black"
    property int strokeWidth: 2
    property int radius: 7
    property string text: "text"

    id:canvas
    width: 20
    height: 20
    antialiasing: true

    onFillColorChanged: requestPaint()
    onStrokeColorChanged: requestPaint()
    onStrokeWidthChanged: requestPaint()
    onRadiusChanged: requestPaint()

    onPaint: {

        var ctx = canvas.getContext("2d")

        ctx.beginPath();
        ctx.fillStyle=fillColor
        ctx.lineWidth=strokeWidth
        ctx.moveTo(width/2, height/2);
        ctx.arc(width/2, height/2, radius, 0, 2*Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle="black"
        ctx.arc(width/2, height/2, radius-3,0, 2*Math.PI, false);
        ctx.fill();
    }

    states: [
        State {
            name: "State1"
            PropertyChanges {
                target: canvas
                radius:9
            }
        },
        State {
            name: "State2"
            PropertyChanges {
                target:canvas
                radius:7
            }
        }
    ]
}
