//
// Created by liuyang on 15-8-31.
//

#ifndef SHANGHAI_SUBWAY_VERTEX_H
#define SHANGHAI_SUBWAY_VERTEX_H

#include "Edge.h"
#include "List.h"
#include "Graph.h"

class Vertex{
protected:
    std::string name = "";
    List<Edge *> * linkedEdge;

    void addedLink(Edge * edge){
        linkedEdge->push_back(edge);
    }

    bool removed(Edge * edge){
        Node<Edge *> * node = linkedEdge->frontPointer();
        for(int i = 0; i < linkedEdge->length(); i++, node = node->next){
            if(node->value == edge){
                linkedEdge->remove(node);
                return true;
            }
        }
        return false;
    }

public:

    bool isGet;
    //Constructor
    Vertex(){
        linkedEdge = new List<Edge *>;
    };

    Vertex(std::string str){
        name = str;
        linkedEdge = new List<Edge *>;
    }

    //Deconstuctor
    ~Vertex(){}

    //Get
    Edge * isLinked(Vertex * other){
        Node<Edge *> * pointer = linkedEdge->frontPointer();
        for(int i = 0; i < linkedEdge->length(); i++){
            if(pointer->value->getLeft() == other) return pointer->value;
            if(pointer->value->getRight() == other) return pointer->value;
            pointer = pointer->next;
        }
        return NULL;
    }

    std::string getName(){
        return this->name;
    }

    int getLinkNum(){
        return linkedEdge->length();
    }

    List<Edge *> * getLinkList(){
        return linkedEdge;
    }

    //Modify
//    Edge * addLink(Vertex * other){
//        Edge * edge = new Edge;
//        linkedEdge->push_back(edge);
//        edge->addVertex(this,other);
//        other->addedLink(edge);
//        return edge;
//    }

    Edge * addLink(Vertex * other, double e_power){
        Edge * edge = new Edge;
        linkedEdge->push_back(edge);
        edge->addVertex(this,other,e_power);
        other->addedLink(edge);
        return edge;
    }

    bool removeEdge(Edge * edge){
        if(edge->getLeft() == this){
            edge->getRight()->removed(edge);
            linkedEdge->remove(edge);
            return true;
        } else if(edge->getRight() == this){
            edge->getLeft()->removed(edge);
            linkedEdge->remove(edge);
            return true;
        } else return false;
    }

    bool removeAll(){
        Node<Edge *> * pointer = linkedEdge->frontPointer();
        for(int i = 0; i < linkedEdge->length(); i++){
            this->removeEdge(pointer->value);
            pointer = pointer->next;
        }
    }
};

#endif //SHANGHAI_SUBWAY_VERTEX_H
