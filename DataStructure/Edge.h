//
// Created by liuyang on 15-8-31.
//

#ifndef SHANGHAI_SUBWAY_EDGE_H
#define SHANGHAI_SUBWAY_EDGE_H

#include "Vector.h"

class Vertex;

class Edge{
private:
    double power;
    Vertex * left;
    Vertex * right;
public:
    Edge():power(0){
        left = right = NULL;
    }

    double getPower(){
        return power;
    }

    Vertex * getOther(Vertex * one){
        if(one == left) return right;
        if(one == right) return left;
        return NULL;
    }

    Vertex * getLeft(){
        return left;
    }

    Vertex * getRight(){
        return right;
    }

    bool addVertex(Vertex & v_left, Vertex & v_right){
        left = &v_left;
        right = &v_right;
        return true;
    }

    bool addVertex(Vertex & v_left, Vertex & v_right, double e_power){
        left = &v_left;
        right = &v_right;
        power = e_power;
        return true;
    }
};

#endif //SHANGHAI_SUBWAY_EDGE_H
