cmake_minimum_required(VERSION 3.3)
project(Shanghai_Subway)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

set(SOURCE_FILES
        DataStructure/Vector.h
        DataStructure/Graph.h
        main.cpp
        DataStructure/List.h
        DataStructure/Node.h
        DataStructure/Vertex.h
        DataStructure/Edge.h)

add_executable(Shanghai_Subway ${SOURCE_FILES})