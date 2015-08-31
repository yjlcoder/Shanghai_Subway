//
// Created by liuyang on 15-8-31.
//

#ifndef SHANGHAI_SUBWAY_EDGE_H
#define SHANGHAI_SUBWAY_EDGE_H

#include "Vertex.h"


class Edge{
private:
    double power;
    Vector<Vertex> linkedVertex();
public:
    Edge():power(0){
        linkedVertex().resize(2);
    }
    double getPower(){
        return power;
    }
};

#endif //SHANGHAI_SUBWAY_EDGE_H
