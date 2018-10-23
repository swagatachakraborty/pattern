let {generateTriangle} = require("./src/trianglePattern");

const main = function(){
  let triangleType = process.argv[2];
  let triangleHeight = +process.argv[3];
  console.log(generateTriangle(triangleHeight, triangleType));
}
 
main();
