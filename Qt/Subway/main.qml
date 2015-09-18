import QtQuick 2.4
import QtQuick.Controls 1.3
import QtQuick.Window 2.2
import QtQuick.Dialogs 1.2
import liuyang.Media 1.0
import "shanghaigraph.js" as GRAPH
import "Drawline.js" as LINE

ApplicationWindow {
    title: qsTr("Shanghai Subway")
    width: 1200
    height: 800
    visible: true

    menuBar: MenuBar {
        Menu {
            title: qsTr("&Start")
            MenuItem{
                text: qsTr("&Quit")
                onTriggered: Qt.quit()
            }
        }
    }

    SubwayGraph{
        anchors.centerIn: parent;
    }

    MediaClass{
        id:media
    }

    MessageDialog {
        id: messageDialog
        title: qsTr("May I have your attention, please?")

        function show(caption) {
            messageDialog.text = caption;
            messageDialog.open();
        }
    }

}
