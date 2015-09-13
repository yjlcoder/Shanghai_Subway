#include <QApplication>
#include <QQmlApplicationEngine>
#include <QtQml>
#include <cstring>
#include <fstream>
#include "Graph.h"
#include "MediaClass.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QQmlApplicationEngine engine;

    //Register
    qmlRegisterType<MediaClass>("liuyang.Media", 1, 0, "MediaClass");

    //
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

    return app.exec();
}
