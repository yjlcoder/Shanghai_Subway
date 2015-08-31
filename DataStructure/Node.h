//
// Created by liuyang on 15-8-30.
//

#ifndef SHANGHAI_SUBWAY_NODE_H
#define SHANGHAI_SUBWAY_NODE_H

#include <iostream>

template <class E>
class Node{
public:
    //Constructor
    Node():prev(NULL), next(NULL){};
    Node(E const m_value):prev(NULL), next(NULL), value(m_value){};
    Node * prev;
    Node * next;
    E value;
};

#endif //SHANGHAI_SUBWAY_NODE_H
