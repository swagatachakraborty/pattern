let { generateRectangle } = require("./src/patternLib.js");
let { createPatternDetails } = require("./src/utilLib.js");

const main = function (){
  let details = createPatternDetails(process.argv);
  let rectangle = generateRectangle(details.type, details.height,details.width);
  console.log( rectangle );
}

main();

exports.rectangleMain = main;
