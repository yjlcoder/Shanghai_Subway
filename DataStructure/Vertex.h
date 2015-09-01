//
// Created by liuyang on 15-8-31.
//

#ifndef SHANGHAI_SUBWAY_VERTEX_H
#define SHANGHAI_SUBWAY_VERTEX_H

#include "Edge.h"

class Vertex{
private:
    int outDegree;
    int inDegree;
    List<Edge *> linkedEdge;

    void addedLink(Edge * edge){
        inDegree++;
        linkedEdge.push_back(edge);
    }

    bool removed(Edge * edge){
        inDegree--;
        Node<Edge *> * node = linkedEdge.frontPointer();
        for(int i = 0; i < linkedEdge.length(); i++){
            if(node->value == edge){
                linkedEdge.remove(node);
                return true;
            }
        }
        return false;
    }

public:
    //Constructor
    Vertex():outDegree(0),inDegree(0){};

    //Deconstuctor
    ~Vertex(){}

    //Get
    Edge * isLinked(Vertex& other){
        for(int i = 0; i < linkedEdge.length(); i++){
            if(linkedEdge[i]->getLeft() == &other) return linkedEdge[i];
            if(linkedEdge[i]->getRight() == &other) return linkedEdge[i];
        }
        return NULL;
    }

    int getInDegree(){
        return inDegree;
    }

    int getOutDegree(){
        return outDegree;
    }

    //Modify
    Edge * addLink(Vertex& other){
        this->outDegree++;
        Edge * edge = new Edge;
        linkedEdge.push_back(edge);
        edge->addVertex(*this,other);
        other.addedLink(edge);
        return edge;
    }

    Edge * addLink(Vertex& other, double e_power){
        this->outDegree++;
        Edge * edge = new Edge;
        linkedEdge.push_back(edge);
        edge->addVertex(*this,other,e_power);
        other.addedLink(edge);
        return edge;
    }

    bool removeEdge(Edge * edge){
        if(edge->getLeft() == this){
            edge->getRight()->removed(edge);
            linkedEdge.remove(edge);
            return true;
        } else if(edge->getRight() == this){
            edge->getLeft()->removed(edge);
            linkedEdge.remove(edge);
            return true;
        } else return false;
    }

    bool removeAll(){
        for(int i = 0; i < linkedEdge.length(); i++){
            this->removeEdge(linkedEdge[i]);
        }
    }
};

#endif //SHANGHAI_SUBWAY_VERTEX_H
