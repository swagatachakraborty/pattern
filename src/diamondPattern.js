const repeatStrings = function(noOfRepeatition, string) {
  let row = "";
  for(let charCount=0; charCount<noOfRepeatition; charCount++){
    row += string;
  }
  return row;
}

const splitLine = function(startingIndex, pattern) {
  let charCount = startingIndex;
  let line = "";
  while(pattern[charCount] != "\n" && charCount < pattern.length){
    line += pattern[charCount];
    charCount++;
  }
  return line;
}

const reverseTriangle = function(pattern) {
  let reversePattern = "";
  let charCount = 0;
  while(charCount < pattern.length) {
    let line = splitLine(charCount, pattern);
    reversePattern = "\n" + line + reversePattern;
    charCount += line.length + 1;
  }
  return reversePattern;
}

const createFilledDiamond = function (height) {
  let triangle = createTriangle((height - 1)/2);
  let middleLine = repeatStrings(height, "*") ;
  let diamond = triangle + "\n" + middleLine;
  diamond += reverseTriangle(triangle);
  return diamond;
}

const createHollowDiamond = function(height) {
  let triangle = createHollowTriangle((height - 1)/2, "*", "*");
  let middleLine = "*" + repeatStrings(height-2, " ") + "*";
  let diamond = triangle + "\n" + middleLine;
  diamond += reverseTriangle(triangle);
  return diamond;
}

const createAngledDiamond = function(height) {
  let upperTriangle = createHollowTriangle((height - 1)/2, "\\", "/");
  let lowerTriangle = createHollowTriangle((height - 1)/2, "/" , "\\");
  let middleLine = "*" + repeatStrings(height-2, " ") + "*";
  let diamond = upperTriangle + "\n" + middleLine;
  diamond += reverseTriangle(lowerTriangle);
  return diamond;
}

const createHollowTriangle = function(height, beginChar, endChar) {
  let delimeter = "\n";
  let endSpaces = height;
  let triangle = repeatStrings(endSpaces," ") + "*";
  let midSpace = 1;
  for(let rowNo = 2; rowNo <= height; rowNo++) {
    endSpaces --;
    let line = createHollowLine(endSpaces, midSpace, endChar, beginChar);
    triangle += delimeter + line;
    midSpace += 2;
  }
  return triangle;
}

const createHollowLine = function(endSpaces, midSpaces, endChar, beginChar) {
  let line = repeatStrings(endSpaces," ") + endChar;
  line += repeatStrings(midSpaces," ") + beginChar;
  return line;
}

const createTriangle = function(height) {
  let delimeter = "";
  let endSpaces = height;
  let triangle = "";
  let numberOfStars = 1;
  for(let rowNumber = 1; rowNumber <= height; rowNumber++) {
    let row = repeatStrings(endSpaces," ") ;
    row += repeatStrings(numberOfStars,"*");
    triangle += delimeter + row; 
    numberOfStars += 2;
    endSpaces --;
    delimeter = "\n";
  }
  return triangle;
}

const isEven = function ( inputHeight ) {
  return inputHeight%2 == 0;
}

const recorrectHeight = function(inputHeight, diamondType) {
  if(diamondType == "angled") {
    return ++inputHeight;
  }
  return --inputHeight;
}

const generateDiamond = function(diamondType, diamondHeight){
  if(isEven(diamondHeight)) {
    diamondHeight = recorrectHeight(diamondHeight, diamondType);
  }
  if(diamondType == "filled") { 
    return createFilledDiamond(diamondHeight);
  }
  if(diamondType == "hollow") {
    return createHollowDiamond(diamondHeight);
  }
  if(diamondType == "angled") {
    return createAngledDiamond(diamondHeight);
  }
}

exports.generateDiamond = generateDiamond;
