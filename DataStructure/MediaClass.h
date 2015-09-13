#ifndef SHANGHAI_SUBWAY_MEDIACLASS_H
#define SHANGHAI_SUBWAY_MEDIACLASS_H

#include <QObject>
#include "Graph.h"

class MediaClass : public QObject{
    Q_OBJECT
    Q_PROPERTY(std::string source READ source WRITE setSource NOTIFY sourceChanged)
    Q_PROPERTY(std::string dest READ dest WRITE setDest NOTIFY destChanged)
    Q_PROPERTY(QList<QObject*> list READ list)

public:

    MediaClass(Graph * graph){
        subwayGraph = graph;
    }

    std::string source(){
        return src;
    }

    void setSource(std::string newsrc){
        src = newsrc;
    }

    std::string dest(){
        return des;
    }

    void setDest(std::string newdes){
        des = newdes;
    }

    QStringList list(){
        return m_list;
    }

    void setSubwayGraph(Graph * graph){
        subwayGraph = graph;
    }

    void shortestPath(){
    }

signals:
    void sourceChanged(std::string & source);
    void destChanged(std::string & dest);
private:
    std::string src;
    std::string des;
    Graph * subwayGraph = NULL;
    QStringList m_list;
};


#endif
