import QtQuick 2.0

Rectangle {
    property string m_color: "#555555"

    id: rectangle1
    width: 20
    height: 20
    color: m_color
    border.color: "blue"
    border.width: 1
    radius: width*0.5
    states: [
        State {
            name: "State1"

            PropertyChanges {
                target: rectangle1
                width: 28
                height: 28
                color: "#91e9ee"
                radius: 14
            }
        }
    ]
}
