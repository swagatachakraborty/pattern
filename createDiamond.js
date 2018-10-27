let { generateDiamond } = require("./src/patternLib.js");

const main = function(){
  let diamondType = process.argv[2];
  let diamondHeight = +process.argv[3];
  let diamond = generateDiamond(diamondType, diamondHeight);
  console.log(diamond);
}

main();
exports.diamondMain = main;
