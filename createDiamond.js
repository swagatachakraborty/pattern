let { generateDiamond } = require("./src/patternLib.js");
let { createPatternDetails, arrayToString } = require("./src/utilLib.js");

const main = function(){
  let properties = createPatternDetails(process.argv);
  let diamond = generateDiamond(properties[1], properties[2]);
  diamond = arrayToString(diamond);
  console.log(diamond);
}

main();
exports.diamondMain = main;
