//
// Created by liuyang on 15-8-29.
//

#include "DataStructure/Graph.h"
#include <cstring>
#include <fstream>

void fileInput(Graph & subway, int i){
    std::string site1, site2;
    double power;
    std::fstream fin;
    char inputFile[50];
    sprintf(inputFile, "/home/liuyang/Code/Shanghai_Subway/Data/Line%d.dat", i);
    std::string filePath(inputFile);
    fin.open(filePath, std::ios::in);
    if (fin.is_open()) {
        fin >> site1;
        subway.addVertex(site1,subway.LINE[i]);
        while (!fin.eof()) {
            fin >> power >> site2;
            subway.addVertex(site2,subway.LINE[i]);
            subway.addEdge(site1,site2,power);
            site1 = site2;
        }
        fin.close();
    } else {
        std::cout << "File Open Failed, File:" << i << std::endl;
    }
}

void buildVertex(Graph & subway) {
    fileInput(subway,1);
    fileInput(subway,2);
    fileInput(subway,3);
    fileInput(subway,4);
    fileInput(subway,5);
    fileInput(subway,6);
    fileInput(subway,7);
    fileInput(subway,8);
    fileInput(subway,9);
    fileInput(subway,10);
    fileInput(subway,11);
    fileInput(subway,12);
    fileInput(subway,13);
    fileInput(subway,16);
}

int main(){
    Graph subway;
    buildVertex(subway);
    List<VertexandEdge *> * result = subway.DijkstraShortestPath(new std::string("同济大学"),new std::string("人民广场"));
    for(Node<VertexandEdge *> * i = result->frontPointer(); i != NULL; i=i->next){
        std::cout << i->value->vertex->getName() << " --> ";
    }
    std::cout << " END "<< std::endl;
}
