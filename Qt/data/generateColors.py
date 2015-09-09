#!/usr/bin/python
import xml.etree.ElementTree as ET
tree = ET.parse('./data.xml')
root = tree.getroot()
Lines = root[0]
Nodes = root[1]
i = 0
    # print "Station {"
    # print "    id:station" + str(i)
    # i += 1
    # print "    x:" +str(int(Node.attrib['X'])/2)
    # print "    y:" +str(int(Node.attrib['Y'])/2)
    # print '    text:"' +Node.attrib['Name']+'"'
    # print "}"
    # print ""
    

    # print 'stations[stationCount] = component.createObject(subway,{"x":'+str(int(Node.attrib['X'])/2) + ',"y":' + str(int(Node.attrib['Y'])/2) + ',"text":' +'"' + Node.attrib['Name'] +'"'+ ',"count":'+str(i)+ "})"
    # print "stationCount++"
    #i += 1

for line in Lines:
    print 'if(s == "'+line.attrib["Name"] +'") return "'+line.attrib["Color"]+'"'
