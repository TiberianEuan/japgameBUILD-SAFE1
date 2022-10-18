gdjs.raceCode = {};
gdjs.raceCode.GDplayer1Objects2_1final = [];

gdjs.raceCode.GDplayer2Objects2_1final = [];

gdjs.raceCode.forEachIndex2 = 0;

gdjs.raceCode.forEachObjects2 = [];

gdjs.raceCode.forEachTemporary2 = null;

gdjs.raceCode.forEachTotalCount2 = 0;

gdjs.raceCode.GDconnectObjects1= [];
gdjs.raceCode.GDconnectObjects2= [];
gdjs.raceCode.GDconnectObjects3= [];
gdjs.raceCode.GDconnectObjects4= [];
gdjs.raceCode.GDTextEntryObjects1= [];
gdjs.raceCode.GDTextEntryObjects2= [];
gdjs.raceCode.GDTextEntryObjects3= [];
gdjs.raceCode.GDTextEntryObjects4= [];
gdjs.raceCode.GDplayer1Objects1= [];
gdjs.raceCode.GDplayer1Objects2= [];
gdjs.raceCode.GDplayer1Objects3= [];
gdjs.raceCode.GDplayer1Objects4= [];
gdjs.raceCode.GDplayer2Objects1= [];
gdjs.raceCode.GDplayer2Objects2= [];
gdjs.raceCode.GDplayer2Objects3= [];
gdjs.raceCode.GDplayer2Objects4= [];
gdjs.raceCode.GDfloorObjects1= [];
gdjs.raceCode.GDfloorObjects2= [];
gdjs.raceCode.GDfloorObjects3= [];
gdjs.raceCode.GDfloorObjects4= [];
gdjs.raceCode.GDwinObjects1= [];
gdjs.raceCode.GDwinObjects2= [];
gdjs.raceCode.GDwinObjects3= [];
gdjs.raceCode.GDwinObjects4= [];
gdjs.raceCode.GDmarkingsObjects1= [];
gdjs.raceCode.GDmarkingsObjects2= [];
gdjs.raceCode.GDmarkingsObjects3= [];
gdjs.raceCode.GDmarkingsObjects4= [];
gdjs.raceCode.GDwhyareyouwastingchargesObjects1= [];
gdjs.raceCode.GDwhyareyouwastingchargesObjects2= [];
gdjs.raceCode.GDwhyareyouwastingchargesObjects3= [];
gdjs.raceCode.GDwhyareyouwastingchargesObjects4= [];
gdjs.raceCode.GDwhyareyouwastingcharges_95textObjects1= [];
gdjs.raceCode.GDwhyareyouwastingcharges_95textObjects2= [];
gdjs.raceCode.GDwhyareyouwastingcharges_95textObjects3= [];
gdjs.raceCode.GDwhyareyouwastingcharges_95textObjects4= [];
gdjs.raceCode.GDrelaxing_95workersObjects1= [];
gdjs.raceCode.GDrelaxing_95workersObjects2= [];
gdjs.raceCode.GDrelaxing_95workersObjects3= [];
gdjs.raceCode.GDrelaxing_95workersObjects4= [];
gdjs.raceCode.GDflyObjects1= [];
gdjs.raceCode.GDflyObjects2= [];
gdjs.raceCode.GDflyObjects3= [];
gdjs.raceCode.GDflyObjects4= [];

gdjs.raceCode.conditionTrue_0 = {val:false};
gdjs.raceCode.condition0IsTrue_0 = {val:false};
gdjs.raceCode.condition1IsTrue_0 = {val:false};
gdjs.raceCode.condition2IsTrue_0 = {val:false};
gdjs.raceCode.condition3IsTrue_0 = {val:false};
gdjs.raceCode.conditionTrue_1 = {val:false};
gdjs.raceCode.condition0IsTrue_1 = {val:false};
gdjs.raceCode.condition1IsTrue_1 = {val:false};
gdjs.raceCode.condition2IsTrue_1 = {val:false};
gdjs.raceCode.condition3IsTrue_1 = {val:false};


gdjs.raceCode.asyncCallback9203044 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "connection", true);
}}
gdjs.raceCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.raceCode.asyncCallback9203044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDplayer1Objects2Objects = Hashtable.newFrom({"player1": gdjs.raceCode.GDplayer1Objects2});
gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDwinObjects2Objects = Hashtable.newFrom({"win": gdjs.raceCode.GDwinObjects2});
gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDplayer2Objects2Objects = Hashtable.newFrom({"player2": gdjs.raceCode.GDplayer2Objects2});
gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDwinObjects2Objects = Hashtable.newFrom({"win": gdjs.raceCode.GDwinObjects2});
gdjs.raceCode.eventsList1 = function(runtimeScene) {

{


{
}

}


{

gdjs.raceCode.GDplayer1Objects2.length = 0;

gdjs.raceCode.GDplayer2Objects2.length = 0;


gdjs.raceCode.condition0IsTrue_0.val = false;
{
{gdjs.raceCode.conditionTrue_1 = gdjs.raceCode.condition0IsTrue_0;
gdjs.raceCode.GDplayer1Objects2_1final.length = 0;gdjs.raceCode.GDplayer2Objects2_1final.length = 0;gdjs.raceCode.condition0IsTrue_1.val = false;
gdjs.raceCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.raceCode.GDplayer1Objects3);
for(var i = 0, k = 0, l = gdjs.raceCode.GDplayer1Objects3.length;i<l;++i) {
    if ( gdjs.raceCode.GDplayer1Objects3[i].isCurrentAnimationName("plyr1fallen") ) {
        gdjs.raceCode.condition0IsTrue_1.val = true;
        gdjs.raceCode.GDplayer1Objects3[k] = gdjs.raceCode.GDplayer1Objects3[i];
        ++k;
    }
}
gdjs.raceCode.GDplayer1Objects3.length = k;if( gdjs.raceCode.condition0IsTrue_1.val ) {
    gdjs.raceCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.raceCode.GDplayer1Objects3.length;j<jLen;++j) {
        if ( gdjs.raceCode.GDplayer1Objects2_1final.indexOf(gdjs.raceCode.GDplayer1Objects3[j]) === -1 )
            gdjs.raceCode.GDplayer1Objects2_1final.push(gdjs.raceCode.GDplayer1Objects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.raceCode.GDplayer2Objects3);
for(var i = 0, k = 0, l = gdjs.raceCode.GDplayer2Objects3.length;i<l;++i) {
    if ( gdjs.raceCode.GDplayer2Objects3[i].isCurrentAnimationName("plyr1fallen") ) {
        gdjs.raceCode.condition1IsTrue_1.val = true;
        gdjs.raceCode.GDplayer2Objects3[k] = gdjs.raceCode.GDplayer2Objects3[i];
        ++k;
    }
}
gdjs.raceCode.GDplayer2Objects3.length = k;if( gdjs.raceCode.condition1IsTrue_1.val ) {
    gdjs.raceCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.raceCode.GDplayer2Objects3.length;j<jLen;++j) {
        if ( gdjs.raceCode.GDplayer2Objects2_1final.indexOf(gdjs.raceCode.GDplayer2Objects3[j]) === -1 )
            gdjs.raceCode.GDplayer2Objects2_1final.push(gdjs.raceCode.GDplayer2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.raceCode.GDplayer1Objects2_1final, gdjs.raceCode.GDplayer1Objects2);
gdjs.copyArray(gdjs.raceCode.GDplayer2Objects2_1final, gdjs.raceCode.GDplayer2Objects2);
}
}
}if (gdjs.raceCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.raceCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.raceCode.GDplayer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.raceCode.GDwinObjects2);

gdjs.raceCode.condition0IsTrue_0.val = false;
gdjs.raceCode.condition1IsTrue_0.val = false;
{
gdjs.raceCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDplayer1Objects2Objects, gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDwinObjects2Objects, false, runtimeScene, false);
}if ( gdjs.raceCode.condition0IsTrue_0.val ) {
{
{gdjs.raceCode.conditionTrue_1 = gdjs.raceCode.condition1IsTrue_0;
gdjs.raceCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9203748);
}
}}
if (gdjs.raceCode.condition1IsTrue_0.val) {
/* Reuse gdjs.raceCode.GDplayer1Objects2 */
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.raceCode.GDplayer2Objects2);
{for(var i = 0, len = gdjs.raceCode.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.raceCode.GDplayer2Objects2[i].setAnimationName("plyr1fallen");
}
}{for(var i = 0, len = gdjs.raceCode.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.raceCode.GDplayer1Objects2[i].setAnimationName("plyr1victory");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.raceCode.GDplayer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.raceCode.GDwinObjects2);

gdjs.raceCode.condition0IsTrue_0.val = false;
gdjs.raceCode.condition1IsTrue_0.val = false;
{
gdjs.raceCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDplayer2Objects2Objects, gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDwinObjects2Objects, false, runtimeScene, false);
}if ( gdjs.raceCode.condition0IsTrue_0.val ) {
{
{gdjs.raceCode.conditionTrue_1 = gdjs.raceCode.condition1IsTrue_0;
gdjs.raceCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9204588);
}
}}
if (gdjs.raceCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.raceCode.GDplayer1Objects2);
/* Reuse gdjs.raceCode.GDplayer2Objects2 */
{for(var i = 0, len = gdjs.raceCode.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.raceCode.GDplayer1Objects2[i].setAnimationName("plyr1fallen");
}
}{for(var i = 0, len = gdjs.raceCode.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.raceCode.GDplayer2Objects2[i].setAnimationName("plyr1victory");
}
}}

}


{


gdjs.raceCode.condition0IsTrue_0.val = false;
{
gdjs.raceCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.raceCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.raceCode.GDplayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.raceCode.GDplayer2Objects1);
{for(var i = 0, len = gdjs.raceCode.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.raceCode.GDplayer1Objects1[i].setColor("176;186;255");
}
}{for(var i = 0, len = gdjs.raceCode.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.raceCode.GDplayer2Objects1[i].setColor("219;0;0");
}
}}

}


};gdjs.raceCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.raceCode.GDplayer1Objects2 */

gdjs.raceCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.raceCode.GDplayer1Objects2.length;i<l;++i) {
    if ( gdjs.raceCode.GDplayer1Objects2[i].getX() < 19950 ) {
        gdjs.raceCode.condition0IsTrue_0.val = true;
        gdjs.raceCode.GDplayer1Objects2[k] = gdjs.raceCode.GDplayer1Objects2[i];
        ++k;
    }
}
gdjs.raceCode.GDplayer1Objects2.length = k;}if (gdjs.raceCode.condition0IsTrue_0.val) {
/* Reuse gdjs.raceCode.GDplayer1Objects2 */
{for(var i = 0, len = gdjs.raceCode.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.raceCode.GDplayer1Objects2[i].setX(gdjs.raceCode.GDplayer1Objects2[i].getX() + ((gdjs.raceCode.GDplayer1Objects2[i].getWidth())));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "walk_metal1.ogg", false, 25, 1);
}}

}


};gdjs.raceCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.raceCode.GDplayer1Objects1, gdjs.raceCode.GDplayer1Objects2);


gdjs.raceCode.condition0IsTrue_0.val = false;
gdjs.raceCode.condition1IsTrue_0.val = false;
gdjs.raceCode.condition2IsTrue_0.val = false;
{
gdjs.raceCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.raceCode.condition0IsTrue_0.val ) {
{
gdjs.raceCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 1;
}if ( gdjs.raceCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.raceCode.GDplayer1Objects2.length;i<l;++i) {
    if ( gdjs.raceCode.GDplayer1Objects2[i].isCurrentAnimationName("plyr1stand") ) {
        gdjs.raceCode.condition2IsTrue_0.val = true;
        gdjs.raceCode.GDplayer1Objects2[k] = gdjs.raceCode.GDplayer1Objects2[i];
        ++k;
    }
}
gdjs.raceCode.GDplayer1Objects2.length = k;}}
}
if (gdjs.raceCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.raceCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.raceCode.GDplayer2Objects1);

gdjs.raceCode.condition0IsTrue_0.val = false;
gdjs.raceCode.condition1IsTrue_0.val = false;
gdjs.raceCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.raceCode.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.raceCode.GDplayer2Objects1[i].isCurrentAnimationName("plyr1stand") ) {
        gdjs.raceCode.condition0IsTrue_0.val = true;
        gdjs.raceCode.GDplayer2Objects1[k] = gdjs.raceCode.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.raceCode.GDplayer2Objects1.length = k;}if ( gdjs.raceCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.raceCode.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.raceCode.GDplayer2Objects1[i].getX() < 19950 ) {
        gdjs.raceCode.condition1IsTrue_0.val = true;
        gdjs.raceCode.GDplayer2Objects1[k] = gdjs.raceCode.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.raceCode.GDplayer2Objects1.length = k;}if ( gdjs.raceCode.condition1IsTrue_0.val ) {
{
{gdjs.raceCode.conditionTrue_1 = gdjs.raceCode.condition2IsTrue_0;
gdjs.raceCode.conditionTrue_1.val = (gdjs.randomInRange(1, 10) == 1);
}
}}
}
if (gdjs.raceCode.condition2IsTrue_0.val) {
/* Reuse gdjs.raceCode.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.raceCode.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.raceCode.GDplayer2Objects1[i].setX(gdjs.raceCode.GDplayer2Objects1[i].getX() + ((gdjs.raceCode.GDplayer2Objects1[i].getWidth())));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "walk_metal1.ogg", false, 25, 1);
}}

}


};gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDmarkingsObjects3Objects = Hashtable.newFrom({"markings": gdjs.raceCode.GDmarkingsObjects3});
gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDwinObjects3Objects = Hashtable.newFrom({"win": gdjs.raceCode.GDwinObjects3});
gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDmarkingsObjects3Objects = Hashtable.newFrom({"markings": gdjs.raceCode.GDmarkingsObjects3});
gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDwinObjects3Objects = Hashtable.newFrom({"win": gdjs.raceCode.GDwinObjects3});
gdjs.raceCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.raceCode.GDmarkingsObjects2, gdjs.raceCode.GDmarkingsObjects3);

gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.raceCode.GDwinObjects3);

gdjs.raceCode.condition0IsTrue_0.val = false;
{
gdjs.raceCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDmarkingsObjects3Objects, gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDwinObjects3Objects, true, runtimeScene, false);
}if (gdjs.raceCode.condition0IsTrue_0.val) {
/* Reuse gdjs.raceCode.GDmarkingsObjects3 */
/* Reuse gdjs.raceCode.GDwinObjects3 */
{for(var i = 0, len = gdjs.raceCode.GDmarkingsObjects3.length ;i < len;++i) {
    gdjs.raceCode.GDmarkingsObjects3[i].setString("| " + gdjs.evtTools.common.toString(gdjs.evtTools.common.distanceBetweenPositions((gdjs.raceCode.GDmarkingsObjects3[i].getX()), (gdjs.raceCode.GDmarkingsObjects3[i].getY()), (( gdjs.raceCode.GDwinObjects3.length === 0 ) ? 0 :gdjs.raceCode.GDwinObjects3[0].getPointX("")), (( gdjs.raceCode.GDwinObjects3.length === 0 ) ? 0 :gdjs.raceCode.GDwinObjects3[0].getPointY("")))));
}
}}

}


{

gdjs.copyArray(gdjs.raceCode.GDmarkingsObjects2, gdjs.raceCode.GDmarkingsObjects3);

gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.raceCode.GDwinObjects3);

gdjs.raceCode.condition0IsTrue_0.val = false;
{
gdjs.raceCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDmarkingsObjects3Objects, gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDwinObjects3Objects, false, runtimeScene, false);
}if (gdjs.raceCode.condition0IsTrue_0.val) {
/* Reuse gdjs.raceCode.GDmarkingsObjects3 */
{for(var i = 0, len = gdjs.raceCode.GDmarkingsObjects3.length ;i < len;++i) {
    gdjs.raceCode.GDmarkingsObjects3[i].setString("Right here!");
}
}}

}


};gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDplayer1Objects2Objects = Hashtable.newFrom({"player1": gdjs.raceCode.GDplayer1Objects2});
gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDplayer2Objects2Objects = Hashtable.newFrom({"player2": gdjs.raceCode.GDplayer2Objects2});
gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDfloorObjects2Objects = Hashtable.newFrom({"floor": gdjs.raceCode.GDfloorObjects2});
gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDfloorObjects2Objects = Hashtable.newFrom({"floor": gdjs.raceCode.GDfloorObjects2});
gdjs.raceCode.eventsList5 = function(runtimeScene) {

};gdjs.raceCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fly"), gdjs.raceCode.GDflyObjects1);

for(gdjs.raceCode.forEachIndex2 = 0;gdjs.raceCode.forEachIndex2 < gdjs.raceCode.GDflyObjects1.length;++gdjs.raceCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.raceCode.GDfloorObjects2);
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.raceCode.GDplayer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.raceCode.GDplayer2Objects2);
gdjs.raceCode.GDflyObjects2.length = 0;


gdjs.raceCode.forEachTemporary2 = gdjs.raceCode.GDflyObjects1[gdjs.raceCode.forEachIndex2];
gdjs.raceCode.GDflyObjects2.push(gdjs.raceCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.raceCode.GDflyObjects2.length ;i < len;++i) {
    gdjs.raceCode.GDflyObjects2[i].getBehavior("BoidsMovement").MoveToObject(gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDplayer1Objects2Objects, 0.075, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.raceCode.GDflyObjects2.length ;i < len;++i) {
    gdjs.raceCode.GDflyObjects2[i].getBehavior("BoidsMovement").MoveToObject(gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDplayer2Objects2Objects, 0.075, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.raceCode.GDflyObjects2.length ;i < len;++i) {
    gdjs.raceCode.GDflyObjects2[i].separateFromObjectsList(gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDfloorObjects2Objects, true);
}
}{for(var i = 0, len = gdjs.raceCode.GDflyObjects2.length ;i < len;++i) {
    gdjs.raceCode.GDflyObjects2[i].getBehavior("BoidsMovement").AvoidObject(gdjs.raceCode.mapOfGDgdjs_46raceCode_46GDfloorObjects2Objects, 100, 50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


};gdjs.raceCode.eventsList7 = function(runtimeScene) {

{


gdjs.raceCode.eventsList1(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.raceCode.GDplayer1Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.raceCode.GDplayer1Objects1.length !== 0 ? gdjs.raceCode.GDplayer1Objects1[0] : null), true, "", 0);
}
{ //Subevents
gdjs.raceCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("markings"), gdjs.raceCode.GDmarkingsObjects1);

for(gdjs.raceCode.forEachIndex2 = 0;gdjs.raceCode.forEachIndex2 < gdjs.raceCode.GDmarkingsObjects1.length;++gdjs.raceCode.forEachIndex2) {
gdjs.raceCode.GDmarkingsObjects2.length = 0;


gdjs.raceCode.forEachTemporary2 = gdjs.raceCode.GDmarkingsObjects1[gdjs.raceCode.forEachIndex2];
gdjs.raceCode.GDmarkingsObjects2.push(gdjs.raceCode.forEachTemporary2);
gdjs.raceCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.raceCode.GDmarkingsObjects2.length;i<l;++i) {
    if ( gdjs.raceCode.GDmarkingsObjects2[i].getString() == "Distance Here!" ) {
        gdjs.raceCode.condition0IsTrue_0.val = true;
        gdjs.raceCode.GDmarkingsObjects2[k] = gdjs.raceCode.GDmarkingsObjects2[i];
        ++k;
    }
}
gdjs.raceCode.GDmarkingsObjects2.length = k;}if (gdjs.raceCode.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.raceCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


{


{

{ //Subevents
gdjs.raceCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.raceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.raceCode.GDconnectObjects1.length = 0;
gdjs.raceCode.GDconnectObjects2.length = 0;
gdjs.raceCode.GDconnectObjects3.length = 0;
gdjs.raceCode.GDconnectObjects4.length = 0;
gdjs.raceCode.GDTextEntryObjects1.length = 0;
gdjs.raceCode.GDTextEntryObjects2.length = 0;
gdjs.raceCode.GDTextEntryObjects3.length = 0;
gdjs.raceCode.GDTextEntryObjects4.length = 0;
gdjs.raceCode.GDplayer1Objects1.length = 0;
gdjs.raceCode.GDplayer1Objects2.length = 0;
gdjs.raceCode.GDplayer1Objects3.length = 0;
gdjs.raceCode.GDplayer1Objects4.length = 0;
gdjs.raceCode.GDplayer2Objects1.length = 0;
gdjs.raceCode.GDplayer2Objects2.length = 0;
gdjs.raceCode.GDplayer2Objects3.length = 0;
gdjs.raceCode.GDplayer2Objects4.length = 0;
gdjs.raceCode.GDfloorObjects1.length = 0;
gdjs.raceCode.GDfloorObjects2.length = 0;
gdjs.raceCode.GDfloorObjects3.length = 0;
gdjs.raceCode.GDfloorObjects4.length = 0;
gdjs.raceCode.GDwinObjects1.length = 0;
gdjs.raceCode.GDwinObjects2.length = 0;
gdjs.raceCode.GDwinObjects3.length = 0;
gdjs.raceCode.GDwinObjects4.length = 0;
gdjs.raceCode.GDmarkingsObjects1.length = 0;
gdjs.raceCode.GDmarkingsObjects2.length = 0;
gdjs.raceCode.GDmarkingsObjects3.length = 0;
gdjs.raceCode.GDmarkingsObjects4.length = 0;
gdjs.raceCode.GDwhyareyouwastingchargesObjects1.length = 0;
gdjs.raceCode.GDwhyareyouwastingchargesObjects2.length = 0;
gdjs.raceCode.GDwhyareyouwastingchargesObjects3.length = 0;
gdjs.raceCode.GDwhyareyouwastingchargesObjects4.length = 0;
gdjs.raceCode.GDwhyareyouwastingcharges_95textObjects1.length = 0;
gdjs.raceCode.GDwhyareyouwastingcharges_95textObjects2.length = 0;
gdjs.raceCode.GDwhyareyouwastingcharges_95textObjects3.length = 0;
gdjs.raceCode.GDwhyareyouwastingcharges_95textObjects4.length = 0;
gdjs.raceCode.GDrelaxing_95workersObjects1.length = 0;
gdjs.raceCode.GDrelaxing_95workersObjects2.length = 0;
gdjs.raceCode.GDrelaxing_95workersObjects3.length = 0;
gdjs.raceCode.GDrelaxing_95workersObjects4.length = 0;
gdjs.raceCode.GDflyObjects1.length = 0;
gdjs.raceCode.GDflyObjects2.length = 0;
gdjs.raceCode.GDflyObjects3.length = 0;
gdjs.raceCode.GDflyObjects4.length = 0;

gdjs.raceCode.eventsList7(runtimeScene);
return;

}

gdjs['raceCode'] = gdjs.raceCode;
