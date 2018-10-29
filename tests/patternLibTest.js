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
  let expectedOutput = " * \n***\n * ";
  checkAssert(generateDiamond.name,"filled,4",actualOutput,expectedOutput);
  actualOutput = generateDiamond("filled",5);
  expectedOutput = "  *  \n *** \n*****\n *** \n  *  ";
  checkAssert(generateDiamond.name,"filled,5",actualOutput,expectedOutput);
  actualOutput = generateDiamond("filled",10);
  expectedOutput = "    *    \n   ***   \n  *****  \n ******* \n*********\n ******* \n  *****  \n   ***   \n    *    ";
  checkAssert(generateDiamond.name,"filled,10",actualOutput,expectedOutput);
  actualOutput = generateDiamond("filled",9);
  expectedOutput = "    *    \n   ***   \n  *****  \n ******* \n*********\n ******* \n  *****  \n   ***   \n    *    ";
  checkAssert(generateDiamond.name,"filled,9",actualOutput,expectedOutput);
}

const testForHollowDiamond = function() {
  let actualOutput = generateDiamond("hollow",4);
  let expectedOutput = " * \n* *\n * ";
  checkAssert(generateDiamond.name,"hollow,4",actualOutput,expectedOutput);
  actualOutput = generateDiamond("hollow",5);
  expectedOutput = "  *  \n * * \n*   *\n * * \n  *  ";
  checkAssert(generateDiamond.name,"hollow,5",actualOutput,expectedOutput);
  actualOutput = generateDiamond("hollow",10);
  expectedOutput = "    *    \n   * *   \n  *   *  \n *     * \n*       *\n *     * \n  *   *  \n   * *   \n    *    ";
  checkAssert(generateDiamond.name,"hollow,10",actualOutput,expectedOutput);
  actualOutput = generateDiamond("hollow",9);
  expectedOutput = "    *    \n   * *   \n  *   *  \n *     * \n*       *\n *     * \n  *   *  \n   * *   \n    *    ";
  checkAssert(generateDiamond.name,"hollow,9",actualOutput,expectedOutput);
}

const testForAngedDiamond = function() {
  let actualOutput = generateDiamond("angled",4);
  let expectedOutput = "  *  \n / \\ \n*   *\n \\ / \n  *  ";
  checkAssert(generateDiamond.name,"angled,4",actualOutput,expectedOutput);
  actualOutput = generateDiamond("angled",5);
  expectedOutput = "  *  \n / \\ \n*   *\n \\ / \n  *  ";
  checkAssert(generateDiamond.name,"angled,5",actualOutput,expectedOutput);
  actualOutput = generateDiamond("angled",10);
  expectedOutput = "     *     \n    / \\    \n   /   \\   \n  /     \\  \n /       \\ \n*         *\n \\       / \n  \\     /  \n   \\   /   \n    \\ /    \n     *     ";
  checkAssert(generateDiamond.name,"angled,10",actualOutput,expectedOutput);
}


const testForFilledRectangle = function() {
  let actualOutput = generateRectangle("filled",3,2);
  let expectedOutput = "**\n**\n**";
  checkAssert(generateRectangle.name,"filled,2,3",actualOutput,expectedOutput);
  actualOutput = generateRectangle("filled",3,3);
  expectedOutput = "***\n***\n***";
  checkAssert(generateRectangle.name,"filled,3,3",actualOutput,expectedOutput);
  actualOutput = generateRectangle("filled",4,3);
  expectedOutput = "***\n***\n***\n***";
  checkAssert(generateRectangle.name,"filled,4,3",actualOutput,expectedOutput);
}

const testForhollowRectangle = function() {
  let actualOutput = generateRectangle("hollow",2,2);
  let expectedOutput = "**\n**";
  checkAssert(generateRectangle.name,"hollow,2,2",actualOutput,expectedOutput);
  actualOutput = generateRectangle("hollow",4,3);
  expectedOutput = "***\n* *\n* *\n***";
  checkAssert(generateRectangle.name,"hollow,4,3",actualOutput,expectedOutput);
  actualOutput = generateRectangle("hollow",2,4);
  expectedOutput = "****\n****";
  checkAssert(generateRectangle.name,"hollow,2,4",actualOutput,expectedOutput);
  actualOutput = generateRectangle("hollow",3,4);
  expectedOutput = "****\n*  *\n****";
  checkAssert(generateRectangle.name,"hollow,3,4",actualOutput,expectedOutput);
}

const testForLeftTriangle = function() {
  let actualOutput = generateTriangle("left",2);
  let expectedOutput = "* \n**";
  checkAssert(generateTriangle.name,"left,2",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",3);
  expectedOutput = "*  \n** \n***";
  checkAssert(generateTriangle.name,"left,3",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",6);
  expectedOutput = "*     \n**    \n***   \n****  \n***** \n******";
  checkAssert(generateTriangle.name,"left,6",actualOutput,expectedOutput);
  actualOutput = generateTriangle("left",9);
  expectedOutput = "*        \n**       \n***      \n****     \n*****    \n******   \n*******  \n******** \n*********";
  checkAssert(generateTriangle.name,"left,9",actualOutput,expectedOutput);
}

const testForRightTriangle = function() {
  let actualOutput = generateTriangle("right",2);
  let expectedOutput = " *\n**";
  checkAssert(generateTriangle.name,"right,2",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",3);
  expectedOutput = "  *\n **\n***";
  checkAssert(generateTriangle.name,"right,3",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",6);
  expectedOutput = "     *\n    **\n   ***\n  ****\n *****\n******";
  checkAssert(generateTriangle.name,"right,6",actualOutput,expectedOutput);
  actualOutput = generateTriangle("right",9);
  expectedOutput = "        *\n       **\n      ***\n     ****\n    *****\n   ******\n  *******\n ********\n*********";
  checkAssert(generateTriangle.name,"right,9",actualOutput,expectedOutput);
}

const runTest = function() {
  testForFilledRectangle(); 
  testForhollowRectangle();
  testForLeftTriangle();
  testForRightTriangle();
  testForFilledDiamond();
  testForHollowDiamond();
  testForAngedDiamond();
  console.log("All tests are passing");
}

runTest();
