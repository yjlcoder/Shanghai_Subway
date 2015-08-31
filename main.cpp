//
// Created by liuyang on 15-8-29.
//

#include "DataStructure/Vector.h"
#include "DataStructure/List.h"
#include <cstring>

int main(){
    List<int> a;
    a.push_front(50);
    a.push_back(30);
    a.push_back(20);
    a.push_front(50);
    std::cout << a[2] << std::endl;
    return 0;
}
