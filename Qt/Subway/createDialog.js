var component = null;
var dynamic = null;

function createDialog(x,y,text,color){
    component = Qt.createComponent("Dialog_my.qml");
    dynamic=component.createObject(subway, {"x":x-115,"y":y-85,"strokeStyle":color,"txt":text});
}

function destroy(){
    dynamic.toDestroy();
}

function defaultDialog(text){
    var dialogComponent = Qt.createComponent("SetStationDialog.qml");
    if(dialogComponent != Component.Ready){
        console.log(dialogComponent.errorString());
    }
    dialogComponent.createObject(subway,{"station":text});
}

function addVertexDialog(text){
    var dialogComponent = Qt.createComponent("addVertex.qml");
    if(dialogComponent != Component.Ready){
        console.log(dialogComponent.errorString());
    }
    dialogComponent.createObject(subway,{});
}
