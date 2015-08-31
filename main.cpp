//
// Created by liuyang on 15-8-29.
//

#include "DataStructure/Vector.h"
#include "DataStructure/List.h"
#include "DataStructure/Vertex.h"
#include <cstring>

int main(){
    Vertex a;
    Vertex b;
    a.addLink(b);
    std::cout << a.getInDegree() << std::endl;
    std::cout << a.getOutDegree() << std::endl;
    std::cout << b.getInDegree() << std::endl;
    std::cout << b.getOutDegree() << std::endl;
    return 0;
}
