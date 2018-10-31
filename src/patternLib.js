let { middleJustifyIn, createBorder } = require("./utilLib.js");
let { flip, recorrectHeight } = require("./utilLib.js");
let { generateListOfStarsInTriangle, createMiddlePart } = require("./utilLib.js");
let { createMidLine, setJustifierType } = require("./utilLib.js");

const generateRectangle = function(type = "filled", height = 1, width = 1) {
  let numberOfMiddleLines = Math.max(0, height - 2);
  let listOfNumberOfStars = new Array(numberOfMiddleLines).fill(width);
  let upperBorder = createBorder(1, width);
  let lowerBorder = createBorder(Math.min(1,height - 1), width);
  let middlePart = createMiddlePart(listOfNumberOfStars, type);
  return upperBorder.concat(middlePart).concat(lowerBorder);
}

const generateTriangle = function( alignType = "left", height = 1, lineType = "filled" ) {
  let justifier = setJustifierType(alignType);
  let listOfNumberOfStars = generateListOfStarsInTriangle(height, alignType);
  let minWidth = listOfNumberOfStars.shift();
  let maxWidth = (listOfNumberOfStars.length > 0) ? listOfNumberOfStars.pop() : 0;
  let justiWithWidth = justifier( maxWidth );
  let upperBorder = createBorder(1, minWidth );
  let lowerBorder = createBorder(Math.min(1, height-1), maxWidth ); 
  let middlePart = createMiddlePart(listOfNumberOfStars, lineType);
  let triangle = upperBorder.concat(middlePart).concat(lowerBorder);
  return triangle.map(justiWithWidth);
}

const generateDiamond = function(type = "filled" , height = "1") {
  height = recorrectHeight(height, type);
  let middleJustifier = middleJustifyIn(height);
  let upperHalfHeight = (height - 1) / 2 + 1;
  let upperHalf = generateTriangle("middle",upperHalfHeight ,type);
  let middleLine = createMidLine(height, type);
  upperHalf.pop();
  let lowerHalf = upperHalf.map(flip).reverse();
  let diamond = upperHalf.concat(middleLine).concat(lowerHalf);
  return diamond.map(middleJustifier);
}

exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
