//
// Created by liuyang on 15-8-30.
//

#ifndef SHANGHAI_SUBWAY_LIST_H
#define SHANGHAI_SUBWAY_LIST_H

#include <iostream>
#include <exception>
#include "Node.h"

template <class E>
class List{
private:
    Node<E> *m_front;
    Node<E> *m_back;
    int m_length;
public:
    //Constructor
    List(): m_front(NULL), m_back(NULL), m_length(0){};

    //Deconstructor
    ~List(){
        //erase();
    }

    //Capacity
    bool empty(){
        return !m_length;
    }

    int length(){
        return m_length;
    }

    //Element
    E front(){
        if(!m_length){
            std::exception e;
            throw e;
        }
        return m_front-> value;
    }
    E back(){
        return m_back -> value;
    }

    Node<E> * frontPointer(){
        return m_front;
    }

    Node<E> * backPointer(){
        return m_back;
    }

    //Modifier
    bool assign(int size, const E value){
        for(int i = 0; i < size; i++){
            this->push_back(value);
        }
    }

    bool push_front(const E value){
        if(!m_length) {
            m_front = m_back = new Node<E>(value);
        } else {
            Node<E> * pointer = new Node<E>(value);
            pointer->next = m_front;
            m_front->prev = pointer;
            m_front = pointer;
        }
        m_length++;
        return true;
    }

    E pop_front(){
        if(!m_length){
            std::exception e;
            throw e;
        }
        Node<E> * pointer = m_front;
        m_front = pointer->next;
        if(m_front) m_front->prev = NULL;
        E temp = pointer->value;
        m_length--;
        delete pointer;
        return temp;
    }

    bool push_back(const E value){
        if(m_length==0){
            m_front = m_back = new Node<E>(value);
            m_length++;
        }
        else {
            m_back->next = new Node<E>(value);
            m_back->next->prev = m_back;
            m_back = m_back->next;
            m_length++;
        }
        return true;
    }

    E pop_back(){
        if(!m_length) return NULL;
        Node<E> * pointer = m_back;
        m_back = pointer->prev;
        pointer -> next = NULL;
        E temp = pointer->value;
        delete pointer;
        m_length--;
        return temp;
    }

    bool insert(int index, E value){
        if(index > m_length){
            std::exception e;
            throw e;
        }
        Node<E> * pointer = m_front;
        try {
            for (int i = 1; i < index; i++)
                pointer = pointer->next;
            Node<E> * added = new Node<E>(value);
            added->prev = pointer;
            added->next = pointer->next;
            pointer->next = added;
            m_length++;
        } catch(std::exception &e){
            std::cout << "Log: Exception" << e.what() << std::endl;
        }
        return true;
    }

    bool remove(Node<E> * pointer){
        if(pointer == m_front){
            m_front = pointer->next;
            delete pointer;
            return true;
        }
        if(pointer == m_back){
            m_back = pointer->prev;
            delete pointer;
            return true;
        }
        pointer->prev->next = pointer->next;
        pointer->next->prev = pointer->prev;
        delete pointer;
        return true;
    }

    bool remove(E value){
        Node<E> * pointer = m_front;
        for(int i = 0; i < m_length; i++){
            if(pointer->value == value){
                remove(pointer);
                return true;
            }
        }
        return false;
    }

    bool erase(){
        Node<E> * pointer = m_front;
        if(m_front == NULL) return true;
        Node<E> * next = m_front->next;
        while(pointer != m_back){
            delete pointer;
            pointer = next;
            next = pointer->next;
        }
        delete next;
        return true;
    }

    //operator
    //List& operator= (const List& x){
    //    List copy;
    //    for(int i = 0; i < m_length; i++){
    //        copy.push_back(x[i]);
    //    }
    //    return copy;
    //}

    E & operator[] (int index){
        Node<E> * pointer = m_front;
        if(index >= m_length || index < 0){
            std::exception e;
            throw e;
        }
        try{
            for(int i = 0; i < index; i++)
                pointer = pointer -> next;
            return pointer -> value;
        } catch(std::exception &e){
            std::cout << "Log: Exception" << e.what() << std::endl;
        }
        return pointer->value;
    }
};

#endif //SHANGHAI_SUBWAY_LIST_H
