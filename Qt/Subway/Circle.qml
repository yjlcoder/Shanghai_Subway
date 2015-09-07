import QtQuick 2.0

Rectangle {
    id: rectangle1
    width: 20
    height: 20
    color: "red"
    border.color: "blue"
    border.width: 1
    radius: width*0.5
    states: [
        State {
            name: "State1"

            PropertyChanges {
                target: rectangle1
                width: 25
                height: 25
                radius: 12
            }
        }
    ]
}
