let { createPatternDetails, generateTriangle } = require("./src/patternLib.js");
let { createPatternDetails } = require("./src/utilLib.js");

const main = function(){
  let details = createPatternDetails(process.argv);
  let triangle = generateTriangle(details.type, details.height); 
  console.log(triangle);
}
 
main();
exports.triangleMain = main;
