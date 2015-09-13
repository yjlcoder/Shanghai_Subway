#ifndef SHANGHAI_SUBWAY_MEDIACLASS_H
#define SHANGHAI_SUBWAY_MEDIACLASS_H

#include <QObject>
#include "Graph.h"
#include "fstream"

class MediaClass : public QObject{
    Q_OBJECT
    Q_PROPERTY(std::string source READ source WRITE setSource NOTIFY sourceChanged)
    Q_PROPERTY(std::string dest READ dest WRITE setDest NOTIFY destChanged)
    Q_PROPERTY(QList<QString> list READ list)

public:

    void fileInput(Graph & subway, int i){
    std::string site1, site2;
    double power;
    std::fstream fin;
    char inputFile[50];
    sprintf(inputFile, "/home/liuyang/Code/Shanghai_Subway/Data/Line%d.dat", i);
    std::string filePath(inputFile);
    fin.open(inputFile);
    if (fin.is_open()) {
        fin >> site1;
        subway.addVertex(site1,subway.LINE[i]);
        while (!fin.eof()) {
            fin >> power >> site2;
            subway.addVertex(site2,subway.LINE[i]);
            subway.addEdge(site1,site2,power);
            site1 = site2;
        }
        fin.close();
    } else {
        std::cout << "File Open Failed, File:" << i << std::endl;
    }
}

void fileInput(Graph & subway, const char * inputFile, int i){
    std::string site1, site2;
    double power;
    std::fstream fin;
    std::string filePath(inputFile);
    fin.open(inputFile);
    if (fin.is_open()) {
        fin >> site1;
        subway.addVertex(site1,subway.LINE[i]);
        while (!fin.eof()) {
            fin >> power >> site2;
            subway.addVertex(site2,subway.LINE[i]);
            subway.addEdge(site1,site2,power);
            site1 = site2;
        }
        fin.close();
    } else {
        std::cout << "File Open Failed, File:" << i << std::endl;
    }
}

void buildVertex(Graph & subway) {
    fileInput(subway,1);
    fileInput(subway,2);
    fileInput(subway,3);
    fileInput(subway,4);
    fileInput(subway,5);
    fileInput(subway,6);
    fileInput(subway,7);
    fileInput(subway,8);
    fileInput(subway,9);
    fileInput(subway,10);
    fileInput(subway,11);
    fileInput(subway,12);
    fileInput(subway,13);
    fileInput(subway,16);
    fileInput(subway,"/home/liuyang/Code/Shanghai_Subway/Data/Line10_other.dat",10);
    fileInput(subway,"/home/liuyang/Code/Shanghai_Subway/Data/Line11_other.dat",11);
}

    MediaClass(){
        subwayGraph = new Graph();
        buildVertex(*subwayGraph);
    }

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

    QList<QString>list(){
        return m_list;
    }

    void setSubwayGraph(Graph * graph){
        subwayGraph = graph;
    }

    Q_INVOKABLE void shortestPath(QString dest, QString source){
        std::string left = dest.toUtf8().constData();
        std::string right = source.toUtf8().constData();
        List<VertexandEdge *> * result = subwayGraph->DijkstraShortestPath(&left, &right);

        m_list.clear();

        for(Node<VertexandEdge *> * pointer = result->frontPointer(); pointer != NULL; pointer = pointer->next){
            const char * str = pointer->value->vertex->getName().c_str();
            QString qstr(str);
            m_list.push_back(qstr);
        }
    }

signals:
    void sourceChanged(std::string & source);
    void destChanged(std::string & dest);
private:
    std::string src;
    std::string des;
    QList<QString>m_list;
    Graph * subwayGraph;
};


#endif
