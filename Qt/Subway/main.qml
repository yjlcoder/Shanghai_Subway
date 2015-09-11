import QtQuick 2.4
import QtQuick.Controls 1.3
import QtQuick.Window 2.2
import QtQuick.Dialogs 1.2

ApplicationWindow {
    title: qsTr("Shanghai Subway")
    width: 1024
    height: 768
    visible: true

    menuBar: MenuBar {
        Menu {
            title: qsTr("&Start")
            MenuItem {
                text: qsTr("Set &Start Point")
//                onTriggered: messageDialog.show(qsTr("Open action triggered"));
            }
            MenuItem {
                text: qsTr("Set &End Point")
//                onTriggered: Qt.quit();
            }
            MenuItem {
                text: qsTr("&Information")
//                onTriggered:
            }
            MenuItem{
                text: qsTr("&Quit")
                onTriggered: Qt.quit()
            }
        }
    }

    SubwayGraph{
        anchors.fill: parent
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
