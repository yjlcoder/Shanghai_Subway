import QtQuick 2.0
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.1
import QtQuick.Controls 1.2
import "shanghaigraph.js" as SHG

Dialog {
    id:setStationDialog
    visible: true
    title: "请设置站点"
    property string station: "value"

    contentItem: Rectangle {
        color: "#EEEEEE"
        implicitWidth: 400
        implicitHeight: 200
        Text {
            height:parent.height*0.75
            width: parent.width
            text: "此站为"+station
            horizontalAlignment: Text.left
            verticalAlignment: Text.AlignHCenter
            anchors.centerIn: parent
            font.pixelSize: 20
        }

        Rectangle{
            width: 0.25 * parent.width
            height: parent.height
            anchors.right:parent.right
            ColumnLayout{
                Button{
                    text: "设置为前站"
                    onClicked: {
                        subway.preStation = station;
                        console.log(text+":"+station);
                        setStationDialog.destroy();
                    }
                }
                Button{
                    text: "设置为后站"
                    onClicked: {
                        subway.postStation = station;
                        console.log(text+":"+station);
                        setStationDialog.destroy();
                    }
                }
            }
        }

        Rectangle{
            width: parent.width
            height: 50
            anchors.bottom: parent.bottom
            anchors.horizontalCenter: parent.horizontalCenter
            RowLayout{
                Button{
                    text: qsTr("设置为出发站");
                    onClicked:{
                        subway.source = station;
                        console.log("设置为出发站:"+station);
                        setStationDialog.destroy();
                    }
                }
                Button{
                    text: qsTr("设置为目的地");
                    onClicked: {
                        subway.dest= station;
                        console.log("设置为目的地:"+station);
                        setStationDialog.destroy();
                    }
                }
                Button{
                    text:qsTr("取消");
                    onClicked: setStationDialog.destroy();
                }
            }
        }
    }
}
