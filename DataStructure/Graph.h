//
// Created by liuyang on 15-8-29.
//

#ifndef SHANGHAI_SUBWAY_GRAPH_H
#define SHANGHAI_SUBWAY_GRAPH_H

#include <iostream>
#include <exception>
#include "Vector.h"
#include "List.h"
#include "Vertex.h"
#include "subway.h"

//struct VertexNode{
//    uint32_t line;
//    std::string name;
//    Vertex * vertex;
//};
//
struct listNode{
    Edge * edge;
    Vertex * vertex;
};

//struct VertexandEdge {
//    VertexNode * myVertexnode;
//    Edge * myEdge;
//    VertexandEdge * next;
//    int distance;
//};

class Graph {
private:
    Vector<Vector<double> *> *AdjMatrix;
    Vector<List<listNode *> > *AdjList;
    List<Vertex *> *vertexList;
    //List<Edge *> edgeList;

private :
//    int findInList(std::string name){
//        for(int i = 0; i < vertexCount; i++){
//            if(vertexList[i]->name == name){
//                return i;
//            }
//        }
//        return -1;
//    }

//    int findInList(Vertex * m_vertex){
//        for(int i = 0;i < vertexCount; i++){
//            if(vertexList[i]->vertex == m_vertex){
//                return i;
//            }
//        }
//        return -1;
//    }

public:
    const uint32_t LINE[17] = {0, 0x00000001, 0x00000002, 0x00000004, 0x00000008, 0x00000010, 0x00000020, 0x00000040,
                               0x00000080, 0x00000100, 0x00000200, 0x00000400, 0x00001000, 0x00002000, 0x00004000,
                               0x00008000, 0x00010000};

    //Constructor
    Graph(void) :AdjMatrix(NULL), AdjList(NULL) {
        vertexList = new List<Vertex *>;
    };

    //Modifier
    bool addVertex(std::string Name, uint32_t Line) {
        Node<Vertex *> *pointer = vertexList->frontPointer();
        for (int i = 0; i < vertexList->length(); i++) {
            if (pointer->value->getName() == Name)
                return addLine(Line, pointer->value);
            pointer = pointer->next;
        }
        vertexList->push_back(new SubwayVertex(Name,Line));
//        vertexCount++;
        return true;
    }

    bool addLine(uint32_t Line, Vertex *pointer) {
        SubwayVertex *temp = (SubwayVertex *) pointer;
        temp->addLine(Line);
        return true;
    }

    bool addEdge(Vertex *v1, Vertex *v2, double power) {
        v1->addLink(v2, power);
        return true;
    }

    bool addEdge(std::string name1, std::string name2, double power) {
        if (name1 == name2) return false;
        Vertex *v1 = NULL;
        Vertex *v2 = NULL;
        for (Node<Vertex *> *pointer = vertexList->frontPointer(); pointer != NULL; pointer = pointer->next) {
            if (pointer->value->getName() == name1) v1 = pointer->value;
            if (pointer->value->getName() == name2) v2 = pointer->value;
        }
        if (v1 == NULL || v2 == NULL) return false;
        else return addEdge(v1, v2, power);
    }

    bool removeVertex(int index) {
        bool result = removeVertex((*vertexList)[index]);
        vertexList->remove((*vertexList)[index]);
        return result;
    }

    bool removeVertex(Vertex *m_vertex) {
        m_vertex->removeAll();
        vertexList->remove(m_vertex);
        return true;
    }

    bool buildList() {
        if (AdjList != NULL) delete AdjList;
        AdjList = new Vector<List<listNode *> >;
        AdjList->resize(vertexList->length());
        for (Node<Vertex *> *pointer = vertexList->frontPointer(); pointer != NULL; pointer = pointer->next) {
            List<listNode *> *list = new List<listNode *>;
            for (Node<Vertex *> *temp = vertexList->frontPointer(); temp != NULL; temp = temp->next)
                if (pointer != temp) {
                    Edge *p = pointer->value->isLinked(temp->value);
                    if (p != NULL) {
                        listNode *node = new listNode;
                        node->edge = p;
                        node->vertex = temp->value;
                        list->push_back(node);
                    }
                }
            AdjList->push_back(*list);
        }
        return true;
    }

    bool printAdjList() {
        buildList();
        for (int i = 0; i < AdjList->length(); i++) {
            std::cout << (*vertexList)[i]->getName();
            for (Node<listNode *> *pointer = (*AdjList)[i].frontPointer(); pointer != NULL; pointer = pointer->next) {
                std::cout << "  |" << pointer->value->edge->getPower() << "," << pointer->value->vertex->getName() <<
                "|  -->";
            }
            std::cout << "  NULL" << std::endl;
        }
        std::cout << std::endl;
        return true;
    }

//    Graph Algorithm
//    Vector<VertexandEdge *> * DijkstraShortestPath(VertexNode * source, VertexNode * dest){
//        Vector<VertexandEdge *> * result = new Vector<VertexandEdge *>;
//        List<VertexandEdge *> tempList;
//
//        VertexandEdge * sourceNode = new VertexandEdge;
//        sourceNode->myVertexnode = source;
//        sourceNode->myEdge = NULL;
//        sourceNode->next = NULL;
//        sourceNode->distance= 0;
//
//        Vector<int> isGet;
//        for(int i = 0; i < vertexCount; i++){
//            isGet.push_back(0);
//        }
//        while(!tempList.length() || isGet[findInList(dest->name)]){
//            VertexandEdge * now = tempList.pop_front();
//            List<Edge *> * link = now->myVertexnode->vertex->getLinkList();
//            for(int i = 0; i < now->myVertexnode->vertex->getLinkNum(); i++){
//                if(!isGet[findInList((*link)[i]->getOther(now->myVertexnode->vertex))]) continue;
//                VertexandEdge * newVE = new VertexandEdge;
//                newVE->myVertexnode = vertexList[findInList((*link)[i]->getOther(now->myVertexnode->vertex))];
//                newVE->myEdge = (*link)[i];
//                newVE->next = now;
//                newVE->distance = now->distance+1;
//                isGet[findInList(newVE->myVertexnode->name)] = 1;
//                tempList.push_back(newVE);
//            }
//        }
//        if(!tempList.length()){
//            VertexandEdge * pointer = tempList.pop_back();
//            while(pointer->next != NULL){
//                result->push_back(pointer);
//                pointer = pointer->next;
//            }
//        }
//        return result;
//    }
//
//    Vector<VertexandEdge *> * DijkstraShortestPath(std::string & source, std::string & dest){
//        return DijkstraShortestPath(vertexList[findInList(source)],vertexList[findInList(dest)]);
//    }
};

#endif //SHANGHAI_SUBWAY_GRAPH_H
