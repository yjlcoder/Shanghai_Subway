import QtQuick 2.0
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.1
import QtQuick.Controls 1.4
import "shanghaigraph.js" as SHG


Dialog {
    property string preStation: "同济大学"
    property string postStation: "国权路"
    id: addVertex
    visible: true
    title: "添加站点"
    property string station: "value"

    contentItem: Rectangle {
        color: "#EEE"
        implicitWidth: 400
        implicitHeight: 200
        Text {
            height:parent.height*0.75
            width: parent.width
            text: "添加站点:\n 前站为:"+preStation+"\n后站为:"+postStation
            horizontalAlignment: Text.AlignHCenter
            verticalAlignment: Text.AlignHCenter
            anchors.centerIn: parent
            font.pixelSize: 20
        }

        Rectangle{
            width: parent.width
            height: 50
            anchors.bottom: parent.bottom
            anchors.horizontalCenter: parent.horizontalCenter


            TextArea{
                id: ta
                width: parent.width * 0.75
                height: parent.height * 0.75
                anchors.verticalCenter: parent.Center
                anchors.left:parent.left
                text: "站点名称"
            }

            Button{
                text: "确定"
                width: parent.width * 0.25
                height: parent.height * 0.75
                anchors.right: parent.right
                onClicked: {
                    addVertex.destroy();
                    SHG.addVertex(ta.text,preStation,postStation);
                }
            }
        }
    }

}
