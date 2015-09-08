import QtQuick 2.0

Rectangle {
    id:container
    signal clicked
    function show(text){
        console.log("show()")
        dialogText.text = text
        container.opacity = 1
        z = 100
    }

    function hide(){
        console.log("hide()")
        container.opacity = 0
        z = -1
    }
    width: dialogText.width + 20
    height: dialogText.height + 20
    z: -1

    Text{
        id: dialogText
        anchors.centerIn: parent
        text:""
    }

    MouseArea{
        anchors.fill:parent
        onClicked: hide()
    }
}
