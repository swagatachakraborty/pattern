let { generateDiamond } = require("./src/patternLib.js");
let { createPatternDetails, arrayToString } = require("./src/utilLib.js");

const main = function(){
  let details = createPatternDetails(process.argv);
  let diamond = generateDiamond(details.type, details.height);
  diamond = arrayToString(diamond);
  console.log(diamond);
}

main();
exports.diamondMain = main;
