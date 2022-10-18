gdjs.joinCode = {};
gdjs.joinCode.GDconnectObjects1= [];
gdjs.joinCode.GDconnectObjects2= [];
gdjs.joinCode.GDTextEntryObjects1= [];
gdjs.joinCode.GDTextEntryObjects2= [];
gdjs.joinCode.GDpasteObjects1= [];
gdjs.joinCode.GDpasteObjects2= [];
gdjs.joinCode.GDID_95ENTEREDObjects1= [];
gdjs.joinCode.GDID_95ENTEREDObjects2= [];
gdjs.joinCode.GDnot_95connectedObjects1= [];
gdjs.joinCode.GDnot_95connectedObjects2= [];

gdjs.joinCode.conditionTrue_0 = {val:false};
gdjs.joinCode.condition0IsTrue_0 = {val:false};
gdjs.joinCode.condition1IsTrue_0 = {val:false};
gdjs.joinCode.condition2IsTrue_0 = {val:false};


gdjs.joinCode.mapOfGDgdjs_46joinCode_46GDconnectObjects1Objects = Hashtable.newFrom({"connect": gdjs.joinCode.GDconnectObjects1});
gdjs.joinCode.eventsList0 = function(runtimeScene) {

{


gdjs.joinCode.condition0IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onError();
}if (gdjs.joinCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


};gdjs.joinCode.mapOfGDgdjs_46joinCode_46GDpasteObjects1Objects = Hashtable.newFrom({"paste": gdjs.joinCode.GDpasteObjects1});
gdjs.joinCode.eventsList1 = function(runtimeScene) {

{


gdjs.joinCode.condition0IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onError();
}if (gdjs.joinCode.condition0IsTrue_0.val) {
/* Reuse gdjs.joinCode.GDnot_95connectedObjects1 */
{for(var i = 0, len = gdjs.joinCode.GDnot_95connectedObjects1.length ;i < len;++i) {
    gdjs.joinCode.GDnot_95connectedObjects1[i].setString(gdjs.evtTools.p2p.getLastError());
}
}}

}


};gdjs.joinCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.joinCode.condition0IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.joinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("connect"), gdjs.joinCode.GDconnectObjects1);

gdjs.joinCode.condition0IsTrue_0.val = false;
gdjs.joinCode.condition1IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.joinCode.mapOfGDgdjs_46joinCode_46GDconnectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.joinCode.condition0IsTrue_0.val ) {
{
gdjs.joinCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.joinCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TextEntry"), gdjs.joinCode.GDTextEntryObjects1);
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}{gdjs.evtTools.p2p.connect((( gdjs.joinCode.GDTextEntryObjects1.length === 0 ) ? "" :gdjs.joinCode.GDTextEntryObjects1[0].getString()));
}}

}


{


gdjs.joinCode.condition0IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("connected", true);
}if (gdjs.joinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "race", false);
}}

}


{


gdjs.joinCode.condition0IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = !(gdjs.evtTools.p2p.isReady());
}if (gdjs.joinCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.joinCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ID_ENTERED"), gdjs.joinCode.GDID_95ENTEREDObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextEntry"), gdjs.joinCode.GDTextEntryObjects1);

gdjs.joinCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.joinCode.GDTextEntryObjects1.length;i<l;++i) {
    if ( gdjs.joinCode.GDTextEntryObjects1[i].getString() != (( gdjs.joinCode.GDID_95ENTEREDObjects1.length === 0 ) ? "" :gdjs.joinCode.GDID_95ENTEREDObjects1[0].getString()) ) {
        gdjs.joinCode.condition0IsTrue_0.val = true;
        gdjs.joinCode.GDTextEntryObjects1[k] = gdjs.joinCode.GDTextEntryObjects1[i];
        ++k;
    }
}
gdjs.joinCode.GDTextEntryObjects1.length = k;}if (gdjs.joinCode.condition0IsTrue_0.val) {
/* Reuse gdjs.joinCode.GDID_95ENTEREDObjects1 */
/* Reuse gdjs.joinCode.GDTextEntryObjects1 */
{for(var i = 0, len = gdjs.joinCode.GDID_95ENTEREDObjects1.length ;i < len;++i) {
    gdjs.joinCode.GDID_95ENTEREDObjects1[i].setString((( gdjs.joinCode.GDTextEntryObjects1.length === 0 ) ? "" :gdjs.joinCode.GDTextEntryObjects1[0].getString()));
}
}}

}


{


gdjs.joinCode.condition0IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.joinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("paste"), gdjs.joinCode.GDpasteObjects1);

gdjs.joinCode.condition0IsTrue_0.val = false;
gdjs.joinCode.condition1IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.joinCode.mapOfGDgdjs_46joinCode_46GDpasteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.joinCode.condition0IsTrue_0.val ) {
{
gdjs.joinCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.joinCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TextEntry"), gdjs.joinCode.GDTextEntryObjects1);
{for(var i = 0, len = gdjs.joinCode.GDTextEntryObjects1.length ;i < len;++i) {
    gdjs.joinCode.GDTextEntryObjects1[i].setString(gdjs.evtsExt__Clipboard__ReadText.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.joinCode.condition0IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.isReady();
}if (gdjs.joinCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("not_connected"), gdjs.joinCode.GDnot_95connectedObjects1);
{for(var i = 0, len = gdjs.joinCode.GDnot_95connectedObjects1.length ;i < len;++i) {
    gdjs.joinCode.GDnot_95connectedObjects1[i].setString("connected to server.");
}
}{for(var i = 0, len = gdjs.joinCode.GDnot_95connectedObjects1.length ;i < len;++i) {
    gdjs.joinCode.GDnot_95connectedObjects1[i].setColor("0;200;0");
}
}}

}


{


gdjs.joinCode.condition0IsTrue_0.val = false;
{
gdjs.joinCode.condition0IsTrue_0.val = !(gdjs.evtTools.p2p.isReady());
}if (gdjs.joinCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("not_connected"), gdjs.joinCode.GDnot_95connectedObjects1);
{for(var i = 0, len = gdjs.joinCode.GDnot_95connectedObjects1.length ;i < len;++i) {
    gdjs.joinCode.GDnot_95connectedObjects1[i].setString("connecting to server.");
}
}{for(var i = 0, len = gdjs.joinCode.GDnot_95connectedObjects1.length ;i < len;++i) {
    gdjs.joinCode.GDnot_95connectedObjects1[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.joinCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.joinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.joinCode.GDconnectObjects1.length = 0;
gdjs.joinCode.GDconnectObjects2.length = 0;
gdjs.joinCode.GDTextEntryObjects1.length = 0;
gdjs.joinCode.GDTextEntryObjects2.length = 0;
gdjs.joinCode.GDpasteObjects1.length = 0;
gdjs.joinCode.GDpasteObjects2.length = 0;
gdjs.joinCode.GDID_95ENTEREDObjects1.length = 0;
gdjs.joinCode.GDID_95ENTEREDObjects2.length = 0;
gdjs.joinCode.GDnot_95connectedObjects1.length = 0;
gdjs.joinCode.GDnot_95connectedObjects2.length = 0;

gdjs.joinCode.eventsList2(runtimeScene);
return;

}

gdjs['joinCode'] = gdjs.joinCode;
