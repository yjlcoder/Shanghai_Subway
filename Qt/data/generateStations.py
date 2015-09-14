#!/usr/bin/python
#encoding=utf-8
def getColor(i) :
    if i == u"1号线":
        return "#CC0000"
    if i == u"2号线"  :
        return "#009900"
    if i == u"3号线"  :
        return "#F9E100"
    if i == u"4号线"  :
        return "#660066"
    if i == u"5号线"  :
        return "#EE00EE"
    if i == u"6号线"  :
        return "#FF3366"
    if i == u"7号线"  :
        return "#FF7F00"
    if i == u"8号线"  :
        return "#0066CE"
    if i == u"9号线"  :
        return "#95D3DB"
    if i == u"10号线" :
        return "#C9A7D5"
    if i == u"11号线" :
        return "#800000"
    if i == u"12号线" :
        return "#0C785E"
    if i == u"13号线" :
        return "#000000"
    if i == u"16号线" :
        return "#77C8C8"
    return "HELLO"
import xml.etree.ElementTree as ET
tree = ET.parse('./data.xml')
root = tree.getroot()
Nodes = root[1]
i = 0
for Node in Nodes:
    print "Circle{"
    print "    id:station" + str(i)
    print "    x:" +str(int(Node.attrib['X'])/2)
    print "    y:" +str(int(Node.attrib['Y'])/2)
    print '    text:"' +Node.attrib['Name']+'"'
    print '    strokeColor:"'+getColor(Node[0].attrib['Line'])+'"'
    print "}"
    print ""
    

#    print 'stations[stationCount] = component.createObject(subway,{"x":'+str(int(Node.attrib['X'])/2) + ',"y":' + str(int(Node.attrib['Y'])/2) + ',"text":' +'"' + Node.attrib['Name'] +'"'+ ',"count":'+str(i)+ "})"
#    print "stationCount++"
#    i += 1

#    print 'stations['+str(i)+'] = new Station('+ str(int(Node.attrib['X'])/2)+', '+str(int(Node.attrib['Y'])/2)+', '+'"'+Node.attrib['Name']+'", null);'
    i += 1


