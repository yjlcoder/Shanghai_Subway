//
// Created by liuyang on 15-8-29.
//

#ifndef SHANGHAI_SUBWAY_GRAPH_H
#define SHANGHAI_SUBWAY_GRAPH_H

#include <iostream>
#include <exception>
#include "Vector.h"
#include "List.h"

class Graph{
private:
    Vector< Vector<double> > AdjMatrix;
    Vector< List<double> > AdjList;
    int NodeCount;
public:
    //Constructor
    Graph(void):NodeCount(0){};

    //Modifier
    addVertex()

    //Operator
    Graph& operator= (Graph rhs);
};

#endif //SHANGHAI_SUBWAY_GRAPH_H
