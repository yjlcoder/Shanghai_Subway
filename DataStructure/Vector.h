//
// Created by liuyang on 15-8-29.
//

#ifndef SHANGHAI_SUBWAY_VECTOR_H
#define SHANGHAI_SUBWAY_VECTOR_H
#define VECTOR_INIT_LENGTH 20

#include <iostream>
#include <exception>

template <class T>
class Vector{
private:
    T *m_vector;
    int m_length;
    int m_size;

public:
    Vector(int m_size = VECTOR_INIT_LENGTH): m_length(0), m_size(m_size){
        m_vector = new T[VECTOR_INIT_LENGTH];
    }
    ~Vector(){
        delete[] m_vector;
    }

    int size(){
        return m_size;
    }

    int capacity(){
        return m_size;
    }

    bool empty(){
        return m_length == 0;
    }

    bool resize(int newSize){
        int len = m_length > newSize ? newSize : m_length;
        T * newVector = new T[newSize];
        if(newVector == NULL) return false;
        for(int i = 0; i < len; i++){
            newVector[i] = m_vector[i];
        }
        delete m_vector;
        m_vector = newVector;
        m_length = len;
        m_size = newSize;
        return true;
    }

    bool push_back(T value){
        if(m_length < m_size){
            m_vector[m_length] = value;
            m_length++;
            return true;
        } else {
            if(resize(m_size * 2)) {
                push_back(value);
                return true;
            }
            else return false;
        }
    }

    T pop_back(){
        if(empty()) {
            std::exception e;
            throw(e);
        }
        m_length--;
        return m_vector[m_length];
    }

    bool insert(int index, T value){
        if(index == m_length){
            m_vector[index] = value;
            m_length++;
            return true;
        }
        if(index > m_length || index < 0) {
            std::exception e;
            throw e;
        }
        if(index < m_length){
            for(int i = m_length; i != index; i--){
                m_vector[i] = m_vector[i-1];
            }
            m_vector[index] = value;
            m_length++;
            return true;
        }
        return true;
    }

    bool erase(int index){
        if(index >= m_length || index < 0){
            std::exception e;
            throw e;
        }
        m_length--;
        for(int i = index; i < m_length; i++){
            m_vector[i] = m_vector[i+1];
        }
        return true;
    }

    T & operator[](int index){
        return m_vector[index];
    }

    T operator[](int index) const{
        return m_vector[index];
    }

    T operator=(const Vector<T> rhs){
        Vector<T> * temp = new Vector(rhs.m_size);
        temp -> m_length = rhs.m_length;
        for(int i = 0; i < temp -> m_length; i++){
            temp -> m_vector[i] = rhs.m_vector[i];
        }
        return &temp;
    }

    int length(){
        return m_length;
    }
};


#endif //SHANGHAI_SUBWAY_VECTOR_H
