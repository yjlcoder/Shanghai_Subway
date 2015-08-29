//
// Created by liuyang on 15-8-29.
//

#ifndef SHANGHAI_SUBWAY_VECTOR_H
#define SHANGHAI_SUBWAY_VECTOR_H
#define VECTOR_INIT_LENGTH 20

#ifndef IOSTREAM_H
#include <iostream>
#define IOSTREAM_H
#endif

template <class T>
class Vector{
private:
    T * m_Vector;
    int m_length;
    int m_size;

public:
    Vector(int m_size = VECTOR_INIT_LENGTH): m_length(0), m_size(m_size){
        m_Vector = new T[VECTOR_INIT_LENGTH];
    }
    ~Vector(){
        delete m_Vector;
    }
    //T getValue(int index){
    //    try {
    //        return m_Vector[index];
    //    }
    //    catch (...){
    //        std::cout << "Out of range" << std::endl;
    //    }
    //}

    int size(){
        return m_size;
    }

    int capacity(){
        return m_size;
    }

    bool empty(){
        if(m_length == 0) return true;
        else return false;
    }

    bool resize(int newSize){

    }

    bool push_back(T value){
    }

    T pop_back();
    bool insert(int index, T value);
    bool erase(int index);

    T & operator[](int index);
    T operator[](int index) const;
    T operator=(const Vector<T> rhs);

};


#endif //SHANGHAI_SUBWAY_VECTOR_H
