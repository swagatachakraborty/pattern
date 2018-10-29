let assert = require("assert");
let { repeat, generateLine } = require("../src/utilLib.js");
let { joinLine, leftJustifier } = require("../src/utilLib.js");
let { rightJustifier, middleJustifier } = require("../src/utilLib.js");
let { recorrectHeight, createMidLine } = require("../src/utilLib.js");
let { flip, reverse } = require("../src/utilLib.js");
let { createUpperHalf, filledLine } = require("../src/utilLib.js");
let { hollowLine, createPatternDetails } = require("../src/utilLib.js");

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

const testJoinLine = function() {
  checkAssert(joinLine.name, ["***", "**", "\n"], joinLine("***", "**", "\n"), "***\n**");
  checkAssert(joinLine.name, ["**", "***", ""], joinLine("**", "***", ""), "*****");
  checkAssert(joinLine.name, [1, "***", "\n"], joinLine(1, "***", "\n"), "1\n***");
  checkAssert(joinLine.name, ["a", "*", "a"], joinLine("a", "*", "a"), "aa*");
  checkAssert(joinLine.name, ["*a", "a*", "\t"], joinLine("*a", "a*", "\t"), "*a\ta*");
}

const testLeftJustifier = function() {
  checkAssert(leftJustifier.name, ["abc", 10], leftJustifier("abc", 10), "abc       ");
  checkAssert(leftJustifier.name, ["a", 1], leftJustifier("a", 1), "a");
  checkAssert(leftJustifier.name, ["***", 4], leftJustifier("***", 4), "*** ");
}

const testRightJustifier = function() {
  checkAssert(rightJustifier.name, ["abc", 10], rightJustifier("abc", 10), "       abc");
  checkAssert(rightJustifier.name, ["a", 1], rightJustifier("a", 1), "a");
  checkAssert(rightJustifier.name, ["***", 4], rightJustifier("***", 4), " ***");
}

const testMiddleJustifier = function() {
  checkAssert(middleJustifier.name, ["abc", 10], middleJustifier("abc", 10), "   abc   ");
  checkAssert(middleJustifier.name, ["a", 1], middleJustifier("a", 1), "a");
  checkAssert(middleJustifier.name, ["a", 7], middleJustifier("a", 7), "   a   ");
  checkAssert(middleJustifier.name, ["***", 4], middleJustifier("***", 4), "***");
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
  checkAssert(flip.name, ["/"], flip("/"), "\\");
  checkAssert(flip.name, ["\\"], flip("\\"), "/");
  checkAssert(flip.name, ["**"], flip("**"), "**");
}

const testReverse = function() {
  checkAssert(reverse.name, ["*"], reverse("*"), "*");
  checkAssert(reverse.name, ["*\n /0"], reverse("*\n /0"), " \\0\n*");
  checkAssert(reverse.name, ["sw\n\\ag"], reverse("sw\n\\ag"), "/ag\nsw");
  checkAssert(reverse.name, ["**/*\\*"], reverse("**/*\\*"), "**\\*/*");
}

const testCreateUpperHalfForFilled = function() {
  checkAssert(createUpperHalf.name, [3,"filledLine('*')"], createUpperHalf(3, filledLine("*")), " * ");
  checkAssert(createUpperHalf.name, [5,"filledLine('*')"], createUpperHalf(5, filledLine("*")), "  *  \n *** ");
  checkAssert(createUpperHalf.name, [1,"filledLine('*')"], createUpperHalf(1, filledLine("*")), "*");
}

const testCreateUpperHalfForHollow = function() {
  checkAssert(createUpperHalf.name, [3,"hollowLine('*','*')"], createUpperHalf(3, hollowLine("*", "*")), " * ");
  checkAssert(createUpperHalf.name, [5,"hollowLine('*','*')"], createUpperHalf(5, hollowLine("*", "*")), "  *  \n * * ");
  checkAssert(createUpperHalf.name, [1,"hollowLine('*','*')"], createUpperHalf(1, hollowLine("*", "*")), "*");
}

const testCreateUpperHalfForAngled = function() {
  checkAssert(createUpperHalf.name, [3,"hollowLine('/','\\')"], createUpperHalf(3, hollowLine("/", "\\")), " * ");
  checkAssert(createUpperHalf.name, [5,"hollowLine('/','\\')"], createUpperHalf(5, hollowLine("/", "\\")), "  *  \n / \\ ");
  checkAssert(createUpperHalf.name, [1,"hollowLine('/','\\')"], createUpperHalf(1, hollowLine("/", "\\")), "*");
}

const runTest = function() {
  testRepeat();
  console.log("testRepeat() passing all tests.");

  testGenerateLine();
  console.log("generateLine() passing all tests.");

  testJoinLine();
  console.log("joinLine() passing all tests.");

  testLeftJustifier();
  console.log("leftJustifier() passing all tests.");

  testRightJustifier();
  console.log("rightJustifier() passing all tests.");

  testMiddleJustifier();
  console.log("middleJustifier() passing all tests.");

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

  testReverse();
  console.log("reverse() passing all tests.");

  testFilledLine();
  console.log("filledLine() passing all tests.");

  testHollowLineForSameStartingAndEndingCharacters();
  console.log("hollowLine() for same starting and ending characters passing all tests.");
  
  testHollowLineForDifferentStartingAndEndingCharacters();
  console.log("hollowLine() for different starting and ending characters passing all the tests.");

  testCreateUpperHalfForFilled();
  console.log("createUpperHalf() for filled diamond passing all tests.");
  
  testCreateUpperHalfForHollow();
  console.log("createUpperHalf() for hollow diamond passing all tests.");

  testCreateUpperHalfForAngled();
  console.log("createUpperHalf() for angled diamond passing all tests.");

  testCreatePatternDetailsForTwoArgs();
  console.log("createPatternDetails() for two arguments passing all tests.");

  testCreatePatternDetailsForThreeArgs();
  console.log("createPatternDetails() for three arguments passing all tests."); 

  console.log("\nAll functions of utilLib are passing the tests.");
}

runTest();
