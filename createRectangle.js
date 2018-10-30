let { generateRectangle } = require("./src/patternLib.js");
let { createPatternDetails, arrayToString } = require("./src/utilLib.js");

const main = function (){
  let details = createPatternDetails(process.argv);
  let rectangle = generateRectangle(details.type, details.height,details.width);
  rectangle = arrayToString(rectangle);
  console.log( rectangle );
}

main();

exports.rectangleMain = main;
