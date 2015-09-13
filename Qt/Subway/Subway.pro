TEMPLATE = app

QT += qml quick widgets

SOURCES += main.cpp

RESOURCES += qml.qrc

# Additional import path used to resolve QML modules in Qt Creator's code model
QML_IMPORT_PATH =

# Default rules for deployment.
include(deployment.pri)

HEADERS += \
    Edge.h \
    Graph.h \
    List.h \
    MediaClass.h \
    meida.h \
    Node.h \
    subway.h \
    Vector.h \
    Vertex.h

DISTFILES += \
    ../../Data/Line1.dat \
    ../../Data/Line2.dat \
    ../../Data/Line3.dat \
    ../../Data/Line4.dat \
    ../../Data/Line5.dat \
    ../../Data/Line6.dat \
    ../../Data/Line7.dat \
    ../../Data/Line8.dat \
    ../../Data/Line9.dat \
    ../../Data/Line10.dat \
    ../../Data/Line10_other.dat \
    ../../Data/Line11.dat \
    ../../Data/Line11_other.dat \
    ../../Data/Line12.dat \
    ../../Data/Line13.dat \
    ../../Data/Line16.dat \
    Subway.pro.user \
    generalStations.xml \
    Link.qml
