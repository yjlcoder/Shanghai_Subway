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

struct VertexNode{
    uint32_t line;
    std::string name;
    Vertex * vertex;
};

struct listNode{
    double power;
    VertexNode * link;
};

struct VertexandEdge {
    VertexNode * myVertexnode;
    Edge * myEdge;
    VertexandEdge * next;
    int distance;
};

class Graph{
private:
    Vector< Vector<double> *> * AdjMatrix;
    Vector< List<listNode *> > * AdjList;
    int vertexCount;
    List<VertexNode *> vertexList;
    //List<Edge *> edgeList;

private :
    int findInList(std::string name){
        for(int i = 0; i < vertexCount; i++){
            if(vertexList[i]->name == name){
                return i;
            }
        }
        return -1;
    }

    int findInList(Vertex * m_vertex){
        for(int i = 0;i < vertexCount; i++){
            if(vertexList[i]->vertex == m_vertex){
                return i;
            }
        }
        return -1;
    }
public:
    const uint32_t LINE[17]={0,0x00000001,0x00000002,0x00000004,0x00000008,0x00000010,0x00000020,0x00000040,0x00000080,0x00000100,0x00000200,0x00000400,0x00001000,0x00002000,0x00004000,0x00008000,0x00010000};
    //Constructor
    Graph(void): vertexCount(0),AdjMatrix(NULL),AdjList(NULL){};

    //Modifier
    bool addVertex(std::string Name, uint32_t Line){
        for(int i = 0;i < vertexCount; i++){
            if(vertexList[i]->name == Name){
                return addLine(Name, Line, i);
            }
        }
        VertexNode * temp = new VertexNode;
        temp->name = Name;
        temp->line = Line;
        temp->vertex = new Vertex;
        vertexList.push_back(temp);
        vertexCount++;
        return true;
    }

    bool addLine(std::string Name, uint32_t Line, int VertexNum){
        vertexList[VertexNum]->line |= Line;
        return true;
    }

    bool addEdge(Vertex &v1, Vertex &v2, double power){
        v1.addLink(v2, power);
        return true;
    }

    bool addEdge(std::string name1, std::string name2, double power){
        if(name1 == name2) return false;
        Vertex * v1 = NULL;
        Vertex * v2 = NULL;
        for(Node<VertexNode *> * pointer = vertexList.frontPointer(); pointer != NULL; pointer = pointer->next ){
            if(pointer->value->name == name1) v1 = pointer->value->vertex;
            if(pointer->value->name == name2) v2 = pointer->value->vertex;
        }
        if(v1 == NULL || v2 == NULL) return false;
        else return addEdge(*v1,*v2,power);
    }

    bool removeVertex(int index){
        bool result = removeVertex(vertexList[index]);
        vertexList.remove(vertexList[index]);
        return result;
    }

    bool removeVertex(VertexNode * m_vertex){
        m_vertex->vertex->removeAll();
        vertexList.remove(m_vertex);
        vertexCount--;
        return true;
    }
    bool buildMatrix(){
        if(AdjMatrix != NULL) delete AdjMatrix;
        AdjMatrix = new Vector< Vector<double> *>;
        AdjMatrix->resize(vertexCount);
        for(int i = 0; i < vertexCount; i++){
            (*AdjMatrix)[i] = new Vector<double>;
            (*AdjMatrix)[i]->resize(vertexCount);
        }
        for(int i = 0; i < vertexCount; i++){
            for(int j = 0; j < vertexCount; j++){
                (*(*AdjMatrix)[i])[j] = -1;
            }
        }
        for(int i = 0; i < vertexCount; i++){
            for(int j = 0; j < vertexCount; j++){
                if(vertexList[i] != vertexList[j]){
                    if(Edge * pointer = vertexList[i]->vertex->isLinked(*vertexList[j]->vertex)){
                        (*(*AdjMatrix)[i])[j] = pointer->getPower();
                    }
                    else (*(*AdjMatrix)[i])[j] = -1;
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
            List<listNode *> list;
            for(int j = 0; j < vertexCount; j++){
                if(vertexList[i] != vertexList[j]){
                    //debug
                    VertexNode * temp1 = vertexList[i];
                    Vertex * temp2 = temp1->vertex;
                    Edge * pointer = temp2->isLinked(*(vertexList[j])->vertex);
                    if(pointer != NULL){
                        listNode * temp = new listNode;
                        temp->link = vertexList[j];
                        temp->power = pointer->getPower();
                        list.push_back(temp);
                    }
                }
            }
            AdjList->push_back(list);
        }
        return true;
    }

    bool printAdjMatrix(){
        buildMatrix();
        for(int i = 0; i < vertexCount; i++){
            for(int j = 0; j < vertexCount; j++){
                std::cout << (*(*AdjMatrix)[i])[j] << ' ';
            }
            std::cout << std::endl;
        }
        std::cout << std::endl;
        return true;
    }

    bool printAdjList(){
        buildList();
        for(int i = 0; i < AdjList->length(); i++){
            std::cout << vertexList[i]->name;
            for(Node<listNode *> *pointer = (*AdjList)[i].frontPointer(); pointer != NULL; pointer = pointer->next){
                std::cout << "  |" << pointer->value->power << "," << pointer->value->link->name;
            }
            std::cout << std::endl;
        }
        std::cout << std::endl;
    }

    //Graph Algorithm
    Vector<VertexandEdge *> * DijkstraShortestPath(VertexNode * source, VertexNode * dest){
        Vector<VertexandEdge *> * result = new Vector<VertexandEdge *>;
        List<VertexandEdge *> tempList;

        VertexandEdge * sourceNode = new VertexandEdge;
        sourceNode->myVertexnode = source;
        sourceNode->myEdge = NULL;
        sourceNode->next = NULL;
        sourceNode->distance= 0;

        Vector<int> isGet;
        for(int i = 0; i < vertexCount; i++){
            isGet.push_back(0);
        }
        while(!tempList.length() || isGet[findInList(dest->name)]){
            VertexandEdge * now = tempList.pop_front();
            List<Edge *> * link = now->myVertexnode->vertex->getLinkList();
            for(int i = 0; i < now->myVertexnode->vertex->getLinkNum(); i++){
                if(!isGet[findInList((*link)[i]->getOther(now->myVertexnode->vertex))]) continue;
                VertexandEdge * newVE = new VertexandEdge;
                newVE->myVertexnode = vertexList[findInList((*link)[i]->getOther(now->myVertexnode->vertex))];
                newVE->myEdge = (*link)[i];
                newVE->next = now;
                newVE->distance = now->distance+1;
                isGet[findInList(newVE->myVertexnode->name)] = 1;
                tempList.push_back(newVE);
            }
        }
        if(!tempList.length()){
            VertexandEdge * pointer = tempList.pop_back();
            while(pointer->next != NULL){
                result->push_back(pointer);
                pointer = pointer->next;
            }
        }
        return result;
    }
};

#endif //SHANGHAI_SUBWAY_GRAPH_H
