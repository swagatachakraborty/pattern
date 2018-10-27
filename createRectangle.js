let { generateRectangle } = require("./src/patternLib.js");

const main = function (){
  let rectangleType = process.argv[2]
  let rectangleHeight = +process.argv[3];
  let rectangleWidth = +process.argv[4];
  let rectangle = generateRectangle(rectangleType, rectangleHeight,rectangleWidth);
  console.log( rectangle );
}

main();

exports.rectangleMain = main;
