//
// Created by liuyang on 15-8-29.
//

#ifndef SHANGHAI_SUBWAY_GRAPH_H
#define SHANGHAI_SUBWAY_GRAPH_H

#include <iostream>
#include <exception>
#include "Vector.h"

class Graph{
private:
    Vector< Vector<double> > Adjacency_Matrix;

public:
    //Constructor
    Graph(void);

    //

    //Operator
    Graph& operator= (Graph rhs);
};

#endif //SHANGHAI_SUBWAY_GRAPH_H
