let { generateTriangle } = require("./src/patternLib.js");

const main = function(){
  let triangleType = process.argv[2];
  let triangleHeight = +process.argv[3];
  let triangle = generateTriangle(triangleType, triangleHeight); 
  console.log(triangle);
}
 
main();
exports.triangleMain = main;
