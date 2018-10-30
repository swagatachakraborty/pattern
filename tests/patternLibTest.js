let { generateDiamond, generateTriangle, generateRectangle } = require("../src/patternLib.js");
let assert = require("assert");

const checkAssert = function(func, inputs, actualOutput, expectedOutput) {
  let errorMessage = "Error in "+func+"()";
  console.log("",func,"is testing for inputs - ",inputs);
  console.log("Actual output :\n"+actualOutput);
  console.log("Expected output :\n"+expectedOutput);
  assert.deepEqual(expectedOutput,actualOutput,errorMessage);
  console.log("------------------------------------------------------------------------------------------------------ ");
}

const testForFilledDiamond = function() {
  let actualOutput = generateDiamond("filled",4);
  let expectedOutput = [" * ","***"," * "];
  checkAssert(generateDiamond.name,"filled,4",actualOutput,expectedOutput);
  actualOutput = generateDiamond("filled",5);
  expectedOutput = ["  *  "," *** ","*****"," *** ","  *  "];
  checkAssert(generateDiamond.name,"filled,5",actualOutput,expectedOutput);
  actualOutput = generateDiamond("filled",10);
  expectedOutput = ["    *    ","   ***   ","  *****  "," ******* ","*********"," ******* ","  *****  ","   ***   ","    *    "];
  checkAssert(generateDiamond.name,"filled,10",actualOutput,expectedOutput);
  actualOutput = generateDiamond("filled",9);
  expectedOutput = ["    *    ","   ***   ","  *****  "," ******* ","*********"," ******* ","  *****  ","   ***   ","    *    "];
  checkAssert(generateDiamond.name,"filled,9",actualOutput,expectedOutput);
}

//_______________________________________________________________________________________________________________________________

const testDiamondForHeightOne = function() {
  let actualOutput = generateDiamond("filled",1);
  let expectedOutput = ["*"];
  checkAssert(generateDiamond.name,"filled,4",actualOutput,expectedOutput);
  actualOutput = generateDiamond("hollow",1);
  expectedOutput = ["*"];
  checkAssert(generateDiamond.name,"hollow,1",actualOutput,expectedOutput);
  actualOutput = generateDiamond("angled",1);
  expectedOutput = ["*"];
  checkAssert(generateDiamond.name,"angled,1",actualOutput,expectedOutput);
}

const testForHollowDiamond = function() {
  let actualOutput = generateDiamond("hollow",4);
  let expectedOutput = [" * ","* *"," * "];
  checkAssert(generateDiamond.name,"hollow,4",actualOutput,expectedOutput);
  actualOutput = generateDiamond("hollow",5);
  expectedOutput = ["  *  "," * * ","*   *"," * * ","  *  "];
  checkAssert(generateDiamond.name,"hollow,5",actualOutput,expectedOutput);
  actualOutput = generateDiamond("hollow",10);
  expectedOutput = ["    *    ","   * *   ","  *   *  "," *     * ","*       *"," *     * ","  *   *  ","   * *   ","    *    "];
  checkAssert(generateDiamond.name,"hollow,10",actualOutput,expectedOutput);
  actualOutput = generateDiamond("hollow",9);
  expectedOutput = ["    *    ","   * *   ","  *   *  "," *     * ","*       *"," *     * ","  *   *  ","   * *   ","    *    "];
  checkAssert(generateDiamond.name,"hollow,9",actualOutput,expectedOutput);
}

const testForAngedDiamond = function() {
  let actualOutput = generateDiamond("angled",4);
  let expectedOutput = ["  *  "," / \\ ","*   *"," \\ / ","  *  "];
  checkAssert(generateDiamond.name,"angled,4",actualOutput,expectedOutput);
  actualOutput = generateDiamond("angled",5);
  expectedOutput = ["  *  "," / \\ ","*   *"," \\ / ","  *  "];
  checkAssert(generateDiamond.name,"angled,5",actualOutput,expectedOutput);
  actualOutput = generateDiamond("angled",10);
  expectedOutput = ["     *     ","    / \\    ","   /   \\   ","  /     \\  "," /       \\ ","*         *"," \\       / ","  \\     /  ","   \\   /   ","    \\ /    ","     *     "];
  checkAssert(generateDiamond.name,"angled,10",actualOutput,expectedOutput);
}

//_______________________________________________________________________________________________________________________________

const testRectangleForHeightAndWidthOne = function() {
  let actualOutput = generateRectangle("filled",1,1);
  let expectedOutput = ["*"];
  checkAssert(generateRectangle.name,"filled,1,1",actualOutput,expectedOutput);
  actualOutput = generateRectangle("hollow",1,1);
  expectedOutput = ["*"];
  checkAssert(generateRectangle.name,"hollow,1,1",actualOutput,expectedOutput);
  actualOutput = generateRectangle("filled",1,2);
  expectedOutput = ["**"];
  checkAssert(generateRectangle.name,"filled,1,2",actualOutput,expectedOutput);
  actualOutput = generateRectangle("filled",2,1);
  expectedOutput = ["*","*"];
  checkAssert(generateRectangle.name,"filled,2,1",actualOutput,expectedOutput);
}

const testForFilledRectangle = function() {
  let actualOutput = generateRectangle("filled",3,2);
  let expectedOutput = ["**","**","**"];
  checkAssert(generateRectangle.name,"filled,3,2",actualOutput,expectedOutput);
  actualOutput = generateRectangle("filled",3,3);
  expectedOutput = ["***","***","***"];
  checkAssert(generateRectangle.name,"filled,3,3",actualOutput,expectedOutput);
  actualOutput = generateRectangle("filled",4,3);
  expectedOutput = ["***","***","***","***"];
  checkAssert(generateRectangle.name,"filled,4,3",actualOutput,expectedOutput);
}

const testForhollowRectangle = function() {
  let actualOutput = generateRectangle("hollow",2,2);
  let expectedOutput = ["**","**"];
  checkAssert(generateRectangle.name,"hollow,2,2",actualOutput,expectedOutput);
  actualOutput = generateRectangle("hollow",4,3);
  expectedOutput = ["***","* *","* *","***"];
  checkAssert(generateRectangle.name,"hollow,4,3",actualOutput,expectedOutput);
  actualOutput = generateRectangle("hollow",2,4);
  expectedOutput = ["****","****"];
  checkAssert(generateRectangle.name,"hollow,2,4",actualOutput,expectedOutput);
  actualOutput = generateRectangle("hollow",3,4);
  expectedOutput = ["****","*  *","****"];
  checkAssert(generateRectangle.name,"hollow,3,4",actualOutput,expectedOutput);
}
 
//_______________________________________________________________________________________________________________________________

const testFilledTriangleForHeightOne = function() {
  let actualOutput = generateTriangle("middle",1,"filled");
  let expectedOutput = ["*"];
  checkAssert(generateTriangle.name,"middle,1,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",1,"filled");
  expectedOutput = ["*"];
  checkAssert(generateTriangle.name,"right,1,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",1,"filled");
  expectedOutput = ["*"];
  checkAssert(generateTriangle.name,"left,1,filled",actualOutput,expectedOutput);
}

const testHollowTriangleForHeightOne = function() {
  let actualOutput = generateTriangle("left",1,"hollow");
  let expectedOutput = ["*"];
  checkAssert(generateTriangle.name,"left,1,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",1,"hollow");
  expectedOutput = ["*"];
  checkAssert(generateTriangle.name,"middle,1,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",1,"hollow");
  expectedOutput = ["*"];
  checkAssert(generateTriangle.name,"right,1,hollow",actualOutput,expectedOutput);
}

const testAngledTriangleForHeightOne = function() {
  let actualOutput = generateTriangle("left",1,"angled");
  let expectedOutput = ["*"];
  checkAssert(generateTriangle.name,"left,1,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",1,"angled");
  expectedOutput = ["*"];
  checkAssert(generateTriangle.name,"right,1,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",1,"angled");
  expectedOutput = ["*"];
  checkAssert(generateTriangle.name,"middle,1,angled",actualOutput,expectedOutput);
}

const testForLeftFilledTriangle = function() {
  let actualOutput = generateTriangle("left",2,"filled");
  let expectedOutput = ["* ","**"];
  checkAssert(generateTriangle.name,"left,2,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",3,"filled");
  expectedOutput = ["*  ","** ","***"];
  checkAssert(generateTriangle.name,"left,3,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",6,"filled");
  expectedOutput = ["*     ","**    ","***   ","****  ","***** ","******"];
  checkAssert(generateTriangle.name,"left,6,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",9,"filled");
  expectedOutput = ["*        ","**       ","***      ","****     ","*****    ","******   ","*******  ","******** ","*********"];
  checkAssert(generateTriangle.name,"left,9,filled",actualOutput,expectedOutput);
}

const testForLeftHollowTriangle = function() {
  let actualOutput = generateTriangle("left",2,"hollow");
  let expectedOutput = ["* ","**"];
  checkAssert(generateTriangle.name,"left,2,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",3,"hollow");
  expectedOutput = ["*  ","** ","***"];
  checkAssert(generateTriangle.name,"left,3,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",6,"hollow");
  expectedOutput = ["*     ","**    ","* *   ","*  *  ","*   * ","******"];
  checkAssert(generateTriangle.name,"left,6,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",9,"hollow");
  expectedOutput = ["*        ","**       ","* *      ","*  *     ","*   *    ","*    *   ","*     *  ","*      * ","*********"];
  checkAssert(generateTriangle.name,"left,9,hollow",actualOutput,expectedOutput);
}

const testForLeftAngledTriangle = function() {
  let actualOutput = generateTriangle("left",2,"angled");
  let expectedOutput = ["* ","**"];
  checkAssert(generateTriangle.name,"left,2,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",3,"angled");
  expectedOutput = ["*  ","/\\ ","***"];
  checkAssert(generateTriangle.name,"left,3,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",6,"angled");
  expectedOutput = ["*     ","/\\    ","/ \\   ","/  \\  ","/   \\ ","******"];
  checkAssert(generateTriangle.name,"left,6,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",9,"angled");
  expectedOutput = ["*        ","/\\       ","/ \\      ","/  \\     ","/   \\    ","/    \\   ","/     \\  ","/      \\ ","*********"];
  checkAssert(generateTriangle.name,"left,9,angled",actualOutput,expectedOutput);
}

const testForRightFilledTriangle = function() {
  let actualOutput = generateTriangle("right",2,"filled");
  let expectedOutput = [" *","**"];
  checkAssert(generateTriangle.name,"right,2,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",3,"filled");
  expectedOutput = ["  *"," **","***"];
  checkAssert(generateTriangle.name,"right,3,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",6,"filled");
  expectedOutput = ["     *","    **","   ***","  ****"," *****","******"];
  checkAssert(generateTriangle.name,"right,6,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",9,"filled");
  expectedOutput = ["        *","       **","      ***","     ****","    *****","   ******","  *******"," ********","*********"];
  checkAssert(generateTriangle.name,"right,9,filled",actualOutput,expectedOutput);
}

const testForRightHollowTriangle = function() {
  let actualOutput = generateTriangle("right",2,"hollow");
  let expectedOutput = [" *","**"];
  checkAssert(generateTriangle.name,"right,2,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",3,"hollow");
  expectedOutput = ["  *"," **","***"];
  checkAssert(generateTriangle.name,"right,3,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",6,"hollow");
  expectedOutput = ["     *","    **","   * *","  *  *"," *   *","******"];
  checkAssert(generateTriangle.name,"right,6,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",9,"hollow");
  expectedOutput = ["        *","       **","      * *","     *  *","    *   *","   *    *","  *     *"," *      *","*********"];
  checkAssert(generateTriangle.name,"right,9,hollow",actualOutput,expectedOutput);
}

const testForRightAngledTriangle = function() {
  let actualOutput = generateTriangle("right",2,"angled");
  let expectedOutput = [" *","**"];
  checkAssert(generateTriangle.name,"right,2,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",3,"angled");
  expectedOutput = ["  *"," /\\","***"];
  checkAssert(generateTriangle.name,"right,3,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",6,"angled");
  expectedOutput = ["     *","    /\\","   / \\","  /  \\"," /   \\","******"];
  checkAssert(generateTriangle.name,"right,6,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",9,"angled");
  expectedOutput = ["        *","       /\\","      / \\","     /  \\","    /   \\","   /    \\","  /     \\"," /      \\","*********"];
  checkAssert(generateTriangle.name,"right,9,angled",actualOutput,expectedOutput);
}

const testForMiddleFilledTriangle = function() {
  let actualOutput = generateTriangle("middle",2,"filled");
  let expectedOutput = [" * ","***"];
  checkAssert(generateTriangle.name,"middle,2,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",3,"filled");
  expectedOutput = ["  *  "," *** ","*****"];
  checkAssert(generateTriangle.name,"middle,3,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",6,"filled");
  expectedOutput = ["     *     ","    ***    ","   *****   ","  *******  "," ********* ","***********"];
  checkAssert(generateTriangle.name,"middle,6,filled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",9,"filled");
  expectedOutput = ["        *        ","       ***       ","      *****      ","     *******     ","    *********    ","   ***********   ","  *************  "," *************** ","*****************"];
  checkAssert(generateTriangle.name,"middle,9,filled",actualOutput,expectedOutput);
}

const testForMiddleHollowTriangle = function() {
  let actualOutput = generateTriangle("middle",2,"hollow");
  let expectedOutput = [" * ","***"];
  checkAssert(generateTriangle.name,"middle,2,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",3,"hollow");
  expectedOutput = ["  *  "," * * ","*****"];
  checkAssert(generateTriangle.name,"middle,3,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",6,"hollow");
  expectedOutput = ["     *     ","    * *    ","   *   *   ","  *     *  "," *       * ","***********"];
  checkAssert(generateTriangle.name,"middle,6,hollow",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",9,"hollow");
  expectedOutput = ["        *        ","       * *       ","      *   *      ","     *     *     ","    *       *    ","   *         *   ","  *           *  "," *             * ","*****************"];
  checkAssert(generateTriangle.name,"middle,9,hollow",actualOutput,expectedOutput);
}

const testForMiddleAngledTriangle = function() {
  let actualOutput = generateTriangle("middle",2,"angled");
  let expectedOutput = [" * ","***"];
  checkAssert(generateTriangle.name,"middle,2,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",3,"angled");
  expectedOutput = ["  *  "," / \\ ","*****"];
  checkAssert(generateTriangle.name,"middle,3,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",6,"angled");
  expectedOutput = ["     *     ","    / \\    ","   /   \\   ","  /     \\  "," /       \\ ","***********"];
  checkAssert(generateTriangle.name,"middle,6,angled",actualOutput,expectedOutput);
  actualOutput = generateTriangle("middle",9,"angled");
  expectedOutput = ["        *        ","       / \\       ","      /   \\      ","     /     \\     ","    /       \\    ","   /         \\   ","  /           \\  "," /             \\ ","*****************"];
  checkAssert(generateTriangle.name,"middle,9,angled",actualOutput,expectedOutput);
}
 
//----------------------------------------------------------------------------------------------------------------------------

const runTest = function() {
  testForFilledRectangle(); 
  testForhollowRectangle();
  testRectangleForHeightAndWidthOne();

  testFilledTriangleForHeightOne();
  testHollowTriangleForHeightOne();
  testAngledTriangleForHeightOne();

  testForLeftHollowTriangle();
  testForLeftFilledTriangle();
  testForLeftAngledTriangle();

  testForMiddleFilledTriangle();
  testForMiddleHollowTriangle();
  testForMiddleAngledTriangle();
  
  testForRightFilledTriangle();
  testForRightHollowTriangle();
  testForRightAngledTriangle();
  

  testForFilledDiamond();
  testForHollowDiamond();
  testForAngedDiamond();
  testDiamondForHeightOne();

  console.log("All tests are passing");
}

runTest();
