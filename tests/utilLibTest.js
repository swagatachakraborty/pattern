let assert = require("assert");
let { repeat, generateLine } = require("../src/utilLib.js");
let { leftJustifyIn, flip } = require("../src/utilLib.js");
let { rightJustifyIn, middleJustifyIn } = require("../src/utilLib.js");
let { recorrectHeight, createMidLine } = require("../src/utilLib.js");
let { filledLine, hollowLine } = require("../src/utilLib.js");
let { arrayToString, createPatternDetails } = require("../src/utilLib.js");

const checkAssert = function(func, inputs, actualOutput, expectedOutput) {
  let errorMessage = "Error in "+func+"()";
  console.log("", func, "is testing for inputs - ", inputs);
  console.log("Actual output :\n"+JSON.stringify(actualOutput));
  console.log("Expected output :\n"+JSON.stringify(expectedOutput));
  assert.deepEqual(expectedOutput, actualOutput);
  console.log("-------------------------------------------------------------------------------------------------------");
}

const testCreatePatternDetailsForTwoArgs = function() {
  checkAssert(createPatternDetails.name, [,, "filled", "10"], createPatternDetails([,,"filled", 10]), { type : "filled", height : 10, width : null});
  checkAssert(createPatternDetails.name, [,, "hollow", "10"], createPatternDetails([,,"hollow", 10]), { type : "hollow", height : 10, width : null});
  checkAssert(createPatternDetails.name, [,, "angled", "10"], createPatternDetails([,,"angled", 10]), { type : "angled", height : 10, width : null});
}

const testCreatePatternDetailsForThreeArgs = function() {
  checkAssert(createPatternDetails.name, [,, "filled", "10", "7"], createPatternDetails([,,"filled", 10, 7]), { type : "filled", height : 10, width : 7});
  checkAssert(createPatternDetails.name, [,, "hollow", "10", "7"], createPatternDetails([,,"hollow", 10, 7]), { type : "hollow", height : 10, width : 7});
}

const testRepeat = function() {
  checkAssert(repeat.name, [0, "*"], repeat(0, "*"), "");
  checkAssert(repeat.name, [1, "*"], repeat(1, "*"), "*");
  checkAssert(repeat.name, [9, "a"], repeat(9, "a"), "aaaaaaaaa");
  checkAssert(repeat.name, [4, "@"], repeat(4, "@"), "@@@@");
  checkAssert(repeat.name, [4, "2"], repeat(4, "2"), "2222");
}

const testFilledLine = function() {
  const filledStarLine = filledLine("*");
  const filledHashLine = filledLine("#");
  checkAssert(filledLine.name,  ["('*')",  "(5)"],  filledStarLine(5),  "*****");
  checkAssert(filledLine.name,  ["('#')",  "(2)"],  filledHashLine(2),  "##");
  checkAssert(filledLine.name,  ["('#')",  "(1)"],  filledHashLine(1),  "#");
}

const testHollowLineForSameStartingAndEndingCharacters = function() {
  const hollowStarLine = hollowLine("*", "*");
  const hollowHashLine = hollowLine("#", "#");
  checkAssert(hollowLine.name, ["('*', '*')", "(2)"], hollowStarLine(2), "**");
  checkAssert(hollowLine.name, ["('#', '#')", "(4)"], hollowHashLine(4), "#  #");
}

const testHollowLineForDifferentStartingAndEndingCharacters = function() {
  const hollowStarHashLine = hollowLine("*", "#");
  checkAssert(hollowLine.name, ["('*', '#')", "(4)"], hollowStarHashLine(4), "*  #");
  checkAssert(hollowLine.name, ["('*', '#')", "(5)"], hollowStarHashLine(5), "*   #");
}

const testGenerateLine = function() {
  checkAssert(generateLine.name, [0, "*", "*", "*"], generateLine(0, "*", "*", "*"), "*");
  checkAssert(generateLine.name, [1, "*", "*", "*"], generateLine(1, "*", "*", "*"), "*");
  checkAssert(generateLine.name, [9, "a", "*", "a"], generateLine(9, "a", "*", "a"), "a*******a");
  checkAssert(generateLine.name, [2, "*", "*", "*"], generateLine(2, "*", "*", "*"), "**");
  checkAssert(generateLine.name, [4, "*", " ", "#"], generateLine(4, "*", " ", "#"), "*  #");
  checkAssert(generateLine.name, [5, "@", "$", "!"], generateLine(5, "@", "$", "!"), "@$$$!");
}

const testLeftJustifyIn = function() {
  let leftJustifier = leftJustifyIn(10);
  checkAssert(leftJustifyIn.name, ["abc", 10], leftJustifier("abc"), "abc       ");
  leftJustifier = leftJustifyIn(1);
  checkAssert(leftJustifyIn.name, ["a", 1], leftJustifier("a"), "a");
  leftJustifier = leftJustifyIn(4);
  checkAssert(leftJustifyIn.name, ["***", 4], leftJustifier("***"), "*** ");
}

const testRightJustifyIn = function() {
  let rightJustifier = rightJustifyIn(10);
  checkAssert(rightJustifyIn.name, ["abc", 10], rightJustifier("abc"), "       abc");
  rightJustifier = rightJustifyIn(1);
  checkAssert(rightJustifyIn.name, ["a", 1], rightJustifier("a"), "a");
  rightJustifier = rightJustifyIn(4);
  checkAssert(rightJustifyIn.name, ["***", 4], rightJustifier("***"), " ***");
}

const testMiddleJustifyIn = function() {
  let middleJustifier = middleJustifyIn(10);
  checkAssert(middleJustifyIn.name, ["abc", 10], middleJustifier("abc"), "   abc   ");
  middleJustifier = middleJustifyIn(1);
  checkAssert(middleJustifyIn.name, ["a", 1], middleJustifier("a"), "a");
  middleJustifier = middleJustifyIn(7);
  checkAssert(middleJustifyIn.name, ["a", 7], middleJustifier("a"), "   a   ");
  middleJustifier = middleJustifyIn(4);
  checkAssert(middleJustifyIn.name, ["***", 4], middleJustifier("***"), "***");
}

const testCreateMidLineForFilledLine = function() {
  checkAssert(createMidLine.name, [9, "filled"], createMidLine(9, "filled"), "*********");
  checkAssert(createMidLine.name, [5, "filled"], createMidLine(5, "filled"), "*****");
}

const testCreateMidLineForHollowLine = function(){
  checkAssert(createMidLine.name, [2, "hollow"], createMidLine(2, "hollow"), "**");
  checkAssert(createMidLine.name, [4, "angled"], createMidLine(4, "angled"), "*  *");
  checkAssert(createMidLine.name, [10, "hollow"], createMidLine(10, "hollow"), "*        *");
}

const testRecorrectHeightForFilledAndHollow = function() {
  checkAssert(recorrectHeight.name, [9, "filled"], recorrectHeight(9, "filled"), 9);
  checkAssert(recorrectHeight.name, [8, "filled"], recorrectHeight(8, "filled"), 7);
  checkAssert(recorrectHeight.name, [3, "hollow"], recorrectHeight(3, "hollow"), 3);
  checkAssert(recorrectHeight.name, [10, "hollow"], recorrectHeight(10, "hollow"), 9);
}

const testRecorrectHeightForAngled = function() {
  checkAssert(recorrectHeight.name, [5, "angled"], recorrectHeight(5, "angled"), 5);
  checkAssert(recorrectHeight.name, [4, "angled"], recorrectHeight(4, "angled"), 5);
}

const testFlip = function() {
  checkAssert(flip.name, ["*"], flip("*"), "*");
  checkAssert(flip.name, [9], flip(9), 9);
  checkAssert(flip.name, ["/"], flip("/"), "/");
  checkAssert(flip.name, ["\\"], flip("\\"), "\\");
  checkAssert(flip.name, ["**\\"], flip("**\\"), "\\**");
}

const testArrayToSrting = function() {
  checkAssert(arrayToString.name, [1,2,3], arrayToString([1,2,3]), "1\n2\n3");
  checkAssert(arrayToString.name, ["*","***","**"], arrayToString(["*","***","**"]), "*\n***\n**");
  checkAssert(arrayToString.name, ["*##*"], arrayToString(["*##*"]), "*##*");
  checkAssert(arrayToString.name, [,"*#",], arrayToString([,"*##*",]), "\n*##*");
}

const runTest = function() {
  testRepeat();
  console.log("testRepeat() passing all tests.");

  testGenerateLine();
  console.log("generateLine() passing all tests.");

  testLeftJustifyIn();
  console.log("leftJustifyIn() passing all tests.");

  testRightJustifyIn();
  console.log("rightJustifyIn() passing all tests.");

  testMiddleJustifyIn();
  console.log("middleJustifyIn() passing all tests.");

  testCreateMidLineForFilledLine();
  console.log("createMidLine() for filled line type passing all tests.");

  testCreateMidLineForHollowLine();
  console.log("createMidLine() for hollow line type passing all tests.");

  testRecorrectHeightForFilledAndHollow();
  console.log("recorrectHeight() for filled and hollow types passing all tests.");

  testRecorrectHeightForAngled();
  console.log("recorrectHeight() for angle types passing all tests.");

  testFlip();
  console.log("flip() passing all tests.");

  testFilledLine();
  console.log("filledLine() passing all tests.");

  testHollowLineForSameStartingAndEndingCharacters();
  console.log("hollowLine() for same starting and ending characters passing all tests.");
  
  testHollowLineForDifferentStartingAndEndingCharacters();
  console.log("hollowLine() for different starting and ending characters passing all the tests.");

  testCreatePatternDetailsForTwoArgs();
  console.log("createPatternDetails() for two arguments passing all tests.");

  testCreatePatternDetailsForThreeArgs();
  console.log("createPatternDetails() for three arguments passing all tests."); 

  testArrayToSrting();
  console.log("testArrayToSrting() passing all the rest.");

  console.log("\nAll functions of utilLib are passing the tests.");
}

runTest();
