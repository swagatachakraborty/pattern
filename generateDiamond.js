let { generateDiamond } = require("./src/diamondPattern.js");

const main = function(){
  let diamondType = process.argv[2];
  let diamondHeight = +process.argv[3];
  let diamond = "*";
  if(diamondHeight > 1) {
    diamond = generateDiamond(diamondType, diamondHeight);
  }
  console.log(diamond);
}

main();
