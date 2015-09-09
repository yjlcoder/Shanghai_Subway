#!/usr/bin/python
#encoding: utf-8
import xml.etree.ElementTree as ET
tree = ET.parse('./data.xml')
root = tree.getroot()
Nodes = root[1]
i = 0
for Node in Nodes:
    # print "Station {"
    # print "    id:station" + str(i)
    # i += 1
    # print "    x:" +str(int(Node.attrib['X'])/2)
    # print "    y:" +str(int(Node.attrib['Y'])/2)
    # print '    text:"' +Node.attrib['Name']+'"'
    # print "}"
    # print ""
    

    #print 'stations[stationCount] = component.createObject(subway,{"x":'+str(int(Node.attrib['X'])/2) + ',"y":' + str(int(Node.attrib['Y'])/2) + ',"text":' +'"' + Node.attrib['Name'] +'"'+ ',"count":'+str(i)+ "})"
    #print "stationCount++"
    #i += 1

    for linkedNode in Node:
        print 'links[linkCount] = lineComponent.createObject(subway,{"leftNode":findStation("'+Node.attrib['Name']+'"),"rightNode":findStation("'+linkedNode.attrib['To']+'"), "lineColor": getColor("'+linkedNode.attrib['Line']+'")})'
        print 'links[linkCount].point1x = stations[links[linkCount].leftNode].x + 15'
        print 'links[linkCount].point1y = stations[links[linkCount].leftNode].y + 15'
        print 'links[linkCount].point2x = stations[links[linkCount].rightNode].x + 15'
        print 'links[linkCount].point2y = stations[links[linkCount].rightNode].y + 15'
        print 'console.log(links[linkCount].lineColor)'
        print "linkCount+=1"
