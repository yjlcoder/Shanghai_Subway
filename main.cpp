//
// Created by liuyang on 15-8-29.
//

#include "DataStructure/Vector.h"
#include <cstring>

int main(int argc, char ** argv){
    Vector<std::string> a(50);
    try {
        a.insert(20,"HEllo");
    } catch (std::exception e){
        std::cout << e.what() << std::endl;
    }
    std::cout << "Complete" << std::endl;
    return 0;
}