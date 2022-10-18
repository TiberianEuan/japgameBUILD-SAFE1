gdjs.connectionCode = {};
gdjs.connectionCode.GDconnectObjects1= [];
gdjs.connectionCode.GDconnectObjects2= [];
gdjs.connectionCode.GDTextEntryObjects1= [];
gdjs.connectionCode.GDTextEntryObjects2= [];
gdjs.connectionCode.GDwarningObjects1= [];
gdjs.connectionCode.GDwarningObjects2= [];
gdjs.connectionCode.GDhost_95iconObjects1= [];
gdjs.connectionCode.GDhost_95iconObjects2= [];
gdjs.connectionCode.GDjoin_95iconObjects1= [];
gdjs.connectionCode.GDjoin_95iconObjects2= [];
gdjs.connectionCode.GDchargeupfortheraceObjects1= [];
gdjs.connectionCode.GDchargeupfortheraceObjects2= [];
gdjs.connectionCode.GDchargewarningObjects1= [];
gdjs.connectionCode.GDchargewarningObjects2= [];
gdjs.connectionCode.GDsecretObjects1= [];
gdjs.connectionCode.GDsecretObjects2= [];
gdjs.connectionCode.GDplay_95buttonObjects1= [];
gdjs.connectionCode.GDplay_95buttonObjects2= [];
gdjs.connectionCode.GDplay_95textObjects1= [];
gdjs.connectionCode.GDplay_95textObjects2= [];

gdjs.connectionCode.conditionTrue_0 = {val:false};
gdjs.connectionCode.condition0IsTrue_0 = {val:false};
gdjs.connectionCode.condition1IsTrue_0 = {val:false};
gdjs.connectionCode.condition2IsTrue_0 = {val:false};
gdjs.connectionCode.condition3IsTrue_0 = {val:false};


gdjs.connectionCode.mapOfGDgdjs_46connectionCode_46GDplay_9595buttonObjects1Objects = Hashtable.newFrom({"play_button": gdjs.connectionCode.GDplay_95buttonObjects1});
gdjs.connectionCode.mapOfGDgdjs_46connectionCode_46GDchargeupfortheraceObjects1Objects = Hashtable.newFrom({"chargeupfortherace": gdjs.connectionCode.GDchargeupfortheraceObjects1});
gdjs.connectionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.connectionCode.GDplay_95buttonObjects1);

gdjs.connectionCode.condition0IsTrue_0.val = false;
gdjs.connectionCode.condition1IsTrue_0.val = false;
gdjs.connectionCode.condition2IsTrue_0.val = false;
{
gdjs.connectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.connectionCode.mapOfGDgdjs_46connectionCode_46GDplay_9595buttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.connectionCode.condition0IsTrue_0.val ) {
{
gdjs.connectionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.connectionCode.condition1IsTrue_0.val ) {
{
gdjs.connectionCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 15;
}}
}
if (gdjs.connectionCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "race", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("chargeupfortherace"), gdjs.connectionCode.GDchargeupfortheraceObjects1);

gdjs.connectionCode.condition0IsTrue_0.val = false;
gdjs.connectionCode.condition1IsTrue_0.val = false;
{
gdjs.connectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.connectionCode.mapOfGDgdjs_46connectionCode_46GDchargeupfortheraceObjects1Objects, runtimeScene, true, false);
}if ( gdjs.connectionCode.condition0IsTrue_0.val ) {
{
gdjs.connectionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.connectionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "charge", false);
}}

}


{


gdjs.connectionCode.condition0IsTrue_0.val = false;
{
gdjs.connectionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 15;
}if (gdjs.connectionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("chargewarning"), gdjs.connectionCode.GDchargewarningObjects1);
{for(var i = 0, len = gdjs.connectionCode.GDchargewarningObjects1.length ;i < len;++i) {
    gdjs.connectionCode.GDchargewarningObjects1[i].hide(false);
}
}}

}


{


gdjs.connectionCode.condition0IsTrue_0.val = false;
{
gdjs.connectionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 15;
}if (gdjs.connectionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("chargewarning"), gdjs.connectionCode.GDchargewarningObjects1);
{for(var i = 0, len = gdjs.connectionCode.GDchargewarningObjects1.length ;i < len;++i) {
    gdjs.connectionCode.GDchargewarningObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("secret"), gdjs.connectionCode.GDsecretObjects1);

gdjs.connectionCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.connectionCode.GDsecretObjects1.length;i<l;++i) {
    if ( gdjs.connectionCode.GDsecretObjects1[i].getString() == "debug" ) {
        gdjs.connectionCode.condition0IsTrue_0.val = true;
        gdjs.connectionCode.GDsecretObjects1[k] = gdjs.connectionCode.GDsecretObjects1[i];
        ++k;
    }
}
gdjs.connectionCode.GDsecretObjects1.length = k;}if (gdjs.connectionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(30);
}}

}


};

gdjs.connectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.connectionCode.GDconnectObjects1.length = 0;
gdjs.connectionCode.GDconnectObjects2.length = 0;
gdjs.connectionCode.GDTextEntryObjects1.length = 0;
gdjs.connectionCode.GDTextEntryObjects2.length = 0;
gdjs.connectionCode.GDwarningObjects1.length = 0;
gdjs.connectionCode.GDwarningObjects2.length = 0;
gdjs.connectionCode.GDhost_95iconObjects1.length = 0;
gdjs.connectionCode.GDhost_95iconObjects2.length = 0;
gdjs.connectionCode.GDjoin_95iconObjects1.length = 0;
gdjs.connectionCode.GDjoin_95iconObjects2.length = 0;
gdjs.connectionCode.GDchargeupfortheraceObjects1.length = 0;
gdjs.connectionCode.GDchargeupfortheraceObjects2.length = 0;
gdjs.connectionCode.GDchargewarningObjects1.length = 0;
gdjs.connectionCode.GDchargewarningObjects2.length = 0;
gdjs.connectionCode.GDsecretObjects1.length = 0;
gdjs.connectionCode.GDsecretObjects2.length = 0;
gdjs.connectionCode.GDplay_95buttonObjects1.length = 0;
gdjs.connectionCode.GDplay_95buttonObjects2.length = 0;
gdjs.connectionCode.GDplay_95textObjects1.length = 0;
gdjs.connectionCode.GDplay_95textObjects2.length = 0;

gdjs.connectionCode.eventsList0(runtimeScene);
return;

}

gdjs['connectionCode'] = gdjs.connectionCode;
