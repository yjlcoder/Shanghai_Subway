//
// Created by liuyang on 15-9-4.
//

#ifndef SHANGHAI_SUBWAY_SUBWAY_H
#define SHANGHAI_SUBWAY_SUBWAY_H

#include "Vertex.h"

class SubwayVertex : public Vertex{
protected:
    uint32_t line;
    double distance;
public:
    SubwayVertex(std::string str, uint32_t Line):Vertex(str), line(Line){}

    SubwayVertex(uint32_t Line, double Distance):line(Line), distance(Distance){}

    ~SubwayVertex(){}

    uint32_t getLine(){
        return this->line;
    }

    uint32_t addLine(uint32_t newLine){
        line |= newLine;
        return line;
    }

    double getDistance(){
        return this->distance;
    }

    void setDistance(double newDistance){
        this->distance = newDistance;
    }
};

class SubwayEdge : public Edge{
};

#endif //SHANGHAI_SUBWAY_SUBWAY_H
