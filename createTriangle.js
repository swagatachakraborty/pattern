let { generateTriangle } = require("./src/patternLib.js");
let { createPatternDetails, arrayToString } = require("./src/utilLib.js");

const main = function(){
  let properties = createPatternDetails(process.argv);
  let triangle = generateTriangle(properties[1], +properties[2], properties[3]); 
  triangle = arrayToString(triangle);
  console.log(triangle);
}
 
main();
exports.triangleMain = main;
