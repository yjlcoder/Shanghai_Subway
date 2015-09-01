//
// Created by liuyang on 15-8-29.
//

#ifndef SHANGHAI_SUBWAY_GRAPH_H
#define SHANGHAI_SUBWAY_GRAPH_H

#define SUBWAY_COUNT 500

#include <iostream>
#include <exception>
#include "Vector.h"
#include "List.h"
#include "Vertex.h"

struct listNode{
    double power;
    Vertex * link;
};

class Graph{
private:
    Vector< Vector<double> > * AdjMatrix;
    Vector< List<listNode *> > * AdjList;
    int vertexCount;
    int edgeCount;
    List<Vertex *> vertexList;
    //List<Edge *> edgeList;
public:
    //Constructor
    Graph(void): vertexCount(0),edgeCount(0),AdjMatrix(NULL),AdjList(NULL){};

    //Modifier
    bool addVertex(){
        vertexList[vertexCount] = new Vertex;
        vertexCount++;
        return true;
    }

    bool addEdge(Vertex &v1, Vertex &v2, double power){
        v1.addLink(v2, power);
        return true;
    }

    bool removeVertex(int index){
        bool result = removeVertex(vertexList[index]);
        vertexList.remove(&(vertexList[index]));
        return result;
    }

    bool removeVertex(Vertex * m_vertex){
        m_vertex->removeAll();
        vertexList.remove(m_vertex);
        vertexCount--;
        return true;
    }

    bool buildMatrix(){
        if(AdjMatrix != NULL) delete AdjMatrix;
        AdjMatrix = new Vector< Vector<double> >;
        AdjMatrix->resize(vertexCount);
        for(int i = 0; i < vertexCount; i++){
            AdjMatrix[i].resize(vertexCount);
        }
        for(int i = 0; i < vertexCount; i++){
            for(int j = 0; j < vertexCount; j++){
                if(vertexList[i] != vertexList[j]){
                    if(Edge * pointer = vertexList[i]->isLinked(*vertexList[j])){
                        (*AdjMatrix)[i][j] = pointer->getPower();
                    }
                    else (*AdjMatrix)[i][j] = -1;
                }
            }
        }
        return true;
    }

    bool buildList(){
        if(AdjList != NULL) delete AdjList;
        AdjList = new Vector<List<listNode *> >;
        AdjList->resize(vertexCount);
        for(int i = 0; i < vertexCount; i++){
            for(int j = 0; j < vertexCount; j++){
                if(vertexList[i] != vertexList[j]){
                    if(Edge * pointer = vertexList[i]->isLinked(*vertexList[j])){
                        listNode * temp = new listNode;
                        temp->link = vertexList[j];
                        temp->power = pointer->getPower();
                        (*AdjList)[i].push_back(temp);
                    }
                }
            }
        }
        return true;
    }

    bool printAdjMatrix(){
        buildMatrix();
        for(int i = 0; i < AdjMatrix->length(); i++){
            for(int j = 0; j < AdjMatrix[i].length(); j++){
                std::cout << (*AdjMatrix)[i][j];
            }
            std::cout << std::endl;
        }
        std::cout << std::endl;
        return true;
    }

    bool printAdjList(){
        buildList();
        for(int i = 0; i < AdjList->length(); i++){
            for(Node<listNode *> * pointer = (*AdjList)[i].frontPointer(); pointer != NULL; pointer = pointer->next){
                std::cout << "  |" <<pointer->value->power << "," << pointer->value->link << std::endl;
            }
        }
        std::cout << std::endl;
    }
};

#endif //SHANGHAI_SUBWAY_GRAPH_H
