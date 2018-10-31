let { generateRectangle } = require("./src/patternLib.js");
let { createPatternDetails, arrayToString } = require("./src/utilLib.js");

const main = function (){
  let properies = createPatternDetails(process.argv);
  let rectangle = generateRectangle(properies[1], properies[2], properies[3]);
  rectangle = arrayToString(rectangle);
  console.log( rectangle );
}

main();

exports.rectangleMain = main;
