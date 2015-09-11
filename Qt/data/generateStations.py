#!/usr/bin/python
import xml.etree.ElementTree as ET
tree = ET.parse('./data.xml')
root = tree.getroot()
Nodes = root[1]
i = 0
for Node in Nodes:
    # print "Station {"
    # print "    id:station" + str(i)
    # print "    x:" +str(int(Node.attrib['X'])/2)
    # print "    y:" +str(int(Node.attrib['Y'])/2)
    # print '    text:"' +Node.attrib['Name']+'"'
    # print "}"
    # print ""
    

#    print 'stations[stationCount] = component.createObject(subway,{"x":'+str(int(Node.attrib['X'])/2) + ',"y":' + str(int(Node.attrib['Y'])/2) + ',"text":' +'"' + Node.attrib['Name'] +'"'+ ',"count":'+str(i)+ "})"
#    print "stationCount++"
#    i += 1

    print 'stations['+str(i)+'] = new Station('+ str(int(Node.attrib['X'])/2)+', '+str(int(Node.attrib['Y'])/2)+', '+'"'+Node.attrib['Name']+'", null);'
    i += 1
