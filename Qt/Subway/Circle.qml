import QtQuick 2.0
import "createDialog.js" as MyDialog

Canvas{

    property string fillColor: "red"
    property string strokeColor: "black"
    property int strokeWidth: 2
    property int radius: 8
    property int inRadius : radius - 4
    property string text: "text"


    id:circle
    width: 20
    height: 20
    antialiasing: true
    z: 1


    onFillColorChanged: requestPaint();
    onStrokeColorChanged: requestPaint();
    onStrokeWidthChanged: requestPaint();
    onRadiusChanged: requestPaint();
    onInRadiusChanged: requestPaint();

    onPaint: {

        var ctx = circle.getContext("2d")

        ctx.beginPath();
        ctx.fillStyle=fillColor
        ctx.lineWidth=strokeWidth
        ctx.moveTo(width/2, height/2);

        ctx.arc(width/2, height/2, radius, 0, 2*Math.PI, false);
        console.log(radius);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle="black"
        ctx.arc(width/2, height/2, inRadius,0, 2*Math.PI, false);
        console.log(inRadius);
        ctx.fill();
    }

    states: [
        State {
            name: "State1"
            PropertyChanges {
                target: circle
                inRadius:6
            }
        },
        State {
            name: "State2"
            PropertyChanges {
                target:circle
                inRadius:4
            }
        }
    ]
    MouseArea{
        id:circle_mouse
        hoverEnabled: true
        anchors.fill: parent
        onEntered: {
            MyDialog.createDialog(parent.x, parent.y, text,strokeColor);
            circle.state = "State1"
        }

        onExited:{
            MyDialog.destroy();
            circle.state = "State2"
        }
        onClicked: console.log("Clicked"+text);
    }
}
