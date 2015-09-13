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

struct VertexandEdge {
    Vertex * vertex = NULL;
    Edge * edge = NULL;
    int distance = 0;
    VertexandEdge * next;
};

class Graph{
private:
    Vector<Vector<double> *> *AdjMatrix;
    Vector<List<listNode *> > *AdjList;
    List<Vertex *> *vertexList;
    //List<Edge *> edgeList;

    Vertex * findInList(std::string * Name){
        for(Node<Vertex*> * i = vertexList->frontPointer(); i != NULL; i=i->next){
            if(i->value->getName() == *Name) return i->value;
        }
        return NULL;
    }

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
    List<VertexandEdge *> * DijkstraShortestPath(SubwayVertex * dest, SubwayVertex * source){
        List<VertexandEdge *> * result = new List<VertexandEdge *>;
        List<VertexandEdge *> tempList;

        for(Node<Vertex *> *i = vertexList->frontPointer(); i != NULL; i=i->next){
            i->value->isGet = false;
        }

        VertexandEdge * sourceNode = new VertexandEdge;
        sourceNode->vertex = dest;
        sourceNode->edge = NULL;
        sourceNode->distance = 0;
        sourceNode->next = NULL;
        tempList.push_back(sourceNode);

        while(tempList.length() && !source->isGet){
            VertexandEdge * now = tempList.pop_front();
            List<Edge *> * link = now->vertex->getLinkList();
            for(Node<Edge *> * i = link->frontPointer(); i != NULL; i = i->next){
                if(i->value->getOther(now->vertex)->isGet) continue;
                VertexandEdge * newVE = new VertexandEdge;
                newVE->vertex = i->value->getOther(now->vertex);
                newVE->edge = i->value;
                newVE->next = now;
                newVE->distance = now->distance+1;
                newVE->vertex->isGet = true;
                tempList.push_back(newVE);
                if(source->isGet) break;
            }
        }
        if(tempList.length()){
            VertexandEdge * pointer = tempList.pop_back();
            while(pointer != NULL){
                result->push_back(pointer);
                pointer = pointer->next;
            }
        }
        return result;
    }

    List<VertexandEdge *> * DijkstraShortestPath(std::string * dest, std::string * source){
        return DijkstraShortestPath((SubwayVertex*)findInList(source),(SubwayVertex*)findInList(dest));
    }
};

#endif //SHANGHAI_SUBWAY_GRAPH_H
