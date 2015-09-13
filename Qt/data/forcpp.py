#!/usr/bin/python
#encoding=utf-8

def line(i) :
    if i == u"1号线":
        return "subway.LINE[1]"
    if i == u"2号线"  :
        return "subway.LINE[2]"
    if i == u"3号线"  :
        return "subway.LINE[3]"
    if i == u"4号线"  :
        return "subway.LINE[4]"
    if i == u"5号线"  :
        return "subway.LINE[5]"
    if i == u"6号线"  :
        return "subway.LINE[6]"
    if i == u"7号线"  :
        return "subway.LINE[7]"
    if i == u"8号线"  :
        return "subway.LINE[8]"
    if i == u"9号线"  :
        return "subway.LINE[9]"
    if i == u"10号线" :
        return "subway.LINE[10]"
    if i == u"11号线" :
        return "subway.LINE[11]"
    if i == u"12号线" :
        return "subway.LINE[12]"
    if i == u"13号线" :
        return "subway.LINE[13]"
    if i == u"16号线" :
        return "subway.LINE[16]"
    return "HELLO"

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
    for i in Node:
        #print 'subway.addVertex("'+Node.attrib['Name']+'",'+line(i.attrib['Line'])+');'
        print 'subway.addEdge("'+Node.attrib['Name']+'","'+i.attrib['To']+'",'+str(1)+');'
