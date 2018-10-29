let { createUpperHalf, middleJustifier } = require("./utilLib.js");
let { reverse, recorrectHeight } = require("./utilLib.js");
let { filledLine, setLineType } = require("./utilLib.js");
let { joinLine } = require("./utilLib.js");
let { createMidLine, setJustifierType } = require("./utilLib.js");

const generateRectangle = function(type, height, width) {
  let borderLine = filledLine("*")(width);
  let createLine = setLineType(type);
  let delimiter = "\n";
  let rectangle = borderLine;
  for(row = 1; row <= height - 2; row++) {
    rectangle = joinLine(rectangle, createLine(width), delimiter);
  }
  rectangle = joinLine(rectangle, borderLine, delimiter);
  return rectangle;
}

const generateTriangle = function(alignType, height, lineType = "filled") {
  let justifier = setJustifierType(alignType);
  let createLine = setLineType(lineType);
  let triangle = "";
  let delimiter = "";
  for(let row = 1; row <= height; row++) {
    let line = justifier(createLine(row), height);
    triangle = joinLine(triangle, line, delimiter);
    delimiter = "\n";
  }
  return triangle;
}

const generateDiamond = function(type, height) {
  height = recorrectHeight(height, type);
  let createLine = setLineType(type);
  let upperHalf = createUpperHalf(height, createLine);
  let lowerHalf = reverse(upperHalf);
  let middleLine = createMidLine(height, type);
  upperHalf = joinLine(upperHalf, middleLine, "\n");
  return joinLine(upperHalf, lowerHalf, "\n");
}

exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
