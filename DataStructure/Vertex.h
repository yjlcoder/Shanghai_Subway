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
    List<Edge> linkedEdge;
    void addedLink(){
        inDegree++;
    }
public:
    //Constructor
    Vertex():outDegree(0),inDegree(0){};

    //Deconstuctor
    ~Vertex(){}

    //Get
    int getInDegree(){
        return inDegree;
    }

    int getOutDegree(){
        return outDegree;
    }

    void addLink(Vertex& other){
        this->outDegree++;
        other.addedLink();
    }
};

#endif //SHANGHAI_SUBWAY_VERTEX_H
