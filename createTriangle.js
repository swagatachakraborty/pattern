let { generateTriangle } = require("./src/patternLib.js");
let { createPatternDetails, arrayToString } = require("./src/utilLib.js");

const main = function(){
  let details = createPatternDetails(process.argv);
  let triangle = generateTriangle(details.type, +details.height, details.width); 
  triangle = arrayToString(triangle);
  console.log(triangle);
}
 
main();
exports.triangleMain = main;
