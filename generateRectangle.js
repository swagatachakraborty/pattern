let {createRectangle} = require("./src/rectanglePattern.js");

const main = function (){
  let rectangleType = process.argv[2]
  let rectangleHeight = +process.argv[3];
  let rectangleWidth = +process.argv[4];
  let rectangle = createRectangle(rectangleHeight,rectangleWidth,rectangleType);
  console.log( rectangle );
}

main();
