let { createUpperHalf, middleJustifyIn } = require("./utilLib.js");
let { flip, recorrectHeight } = require("./utilLib.js");
let { filledLine, setLineType } = require("./utilLib.js");
let { joinLine, computeCharsOnLine } = require("./utilLib.js");
let { createMidLine, setJustifierType } = require("./utilLib.js");

const generateRectangle = function(type, height, width) {
  let createLine = setLineType(type);
  let createBorder = filledLine("*");
  let numberOfMiddleLines = Math.max(0, height - 2);
  let upperBorder = new Array(1).fill(width).map(createBorder);
  let lowerBorder = new Array( Math.min(1, height - 1) ).fill(width).map(createBorder);
  let middlePart = new Array(numberOfMiddleLines).fill(width).map(createLine);
  return upperBorder.concat(middlePart).concat(lowerBorder);
}

const generateTriangle = function( alignType, height, lineType ) {
  let justifier = setJustifierType(alignType);
  let createLine = setLineType(lineType);
  let createBorder = filledLine("*");
  let computeStarsInRow = computeCharsOnLine(alignType);
  let triangle = new Array(height).fill(0).map(computeStarsInRow);
  let middleJustifier = justifier( triangle[triangle.length - 1] );
  let upperBorder = new Array(1).fill( triangle.shift() ).map(createBorder);
  let lowerBorder = new Array( Math.min(1, height - 1 ) ).fill( triangle.pop() ).map(createBorder);
  let middlePart = triangle.map(createLine);
  triangle = upperBorder.concat(middlePart).concat(lowerBorder);
  return triangle.map(middleJustifier);
}

const generateDiamond = function(type, height) {
  height = recorrectHeight(height, type);
  let createLine = setLineType(type);
  let middleJustifier = middleJustifyIn(height);
  let upperHalf = generateTriangle("middle",(height - 1)/2 + 1,type);
  let middleLine = createMidLine(height, type);
  upperHalf.pop();
  let lowerHalf = upperHalf.map(flip).reverse();
  return upperHalf.concat(middleLine,lowerHalf).map(middleJustifier);
}

exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
