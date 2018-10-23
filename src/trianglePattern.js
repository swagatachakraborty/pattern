const repeatStrings = function(numberOfRepeatition, string) {
  let repeatedStrings = "";
  for(let charCount=1; charCount<=numberOfRepeatition; charCount++) {
    repeatedStrings += string;
  }
  return repeatedStrings;
}

const generateRow = function(triangleType, rowLength, height) {
  let prefix, suffix;
  if(triangleType == "left") {
    prefix = repeatStrings(rowLength,"*");
    suffix = repeatStrings(height - rowLength," ");
  }
  if(triangleType == "right") {
    prefix = repeatStrings(height - rowLength," ");
    suffix = repeatStrings(rowLength,"*");
  }
  return prefix + suffix;
}

const generateTriangle = function(height, triangleType) {
  let delimeter = "";
  let triangle = "";
  for(let rowNumber=1; rowNumber <= height; rowNumber++) {
    let row = generateRow(triangleType, rowNumber, height);
    triangle += delimeter + row;
    delimeter = "\n";
  }
  return triangle;
}

exports.generateTriangle = generateTriangle;
