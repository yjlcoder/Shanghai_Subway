var component = null;
var dynamic = null;

function createDialog(x,y,text,color){
    component = Qt.createComponent("Dialog_my.qml");
    dynamic=component.createObject(subway, {"x":x-115,"y":y-85,"strokeStyle":color,"txt":text});
}

function destroy(){
    dynamic.toDestroy();
}
