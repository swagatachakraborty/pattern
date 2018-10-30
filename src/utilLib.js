const arrayToString = function(patternArray) {
  return patternArray.join("\n");
}

const createPatternDetails  = function(details) {
  return { type : details[2], height : details[3], width : details[4] }; 
}

const repeat = function(times, string) {
  times = Math.max(times,0); 
  return new Array(times).fill(string).join("");
}

const computeCharsOnLine = function(justifierType) {
  let gap = 1;
  if(justifierType == "middle") { 
    gap = 2;
  }
  let presentRow = 1;
  return function(element) {
    let chars = presentRow;
    presentRow = chars + gap;
    return chars;
  }
}

const filledLine = function( char ) {
  return function(width) {
    return generateLine(width, char, char, char);
  }
}

const hollowLine = function(leftChar, rightChar) {
  return function(width){
    return generateLine(width,leftChar," ",rightChar);
  }
}

const generateLine = function(width,leftChar,middleChar,rightChar) {
  let line = leftChar.concat(repeat(width - 2, middleChar));
  return line.concat(repeat( width - line.length, rightChar));
}

const leftJustifyIn = function(width) {
  return function(string) {
    let endingSpaces = width - string.length;
    return string + repeat(endingSpaces, " ");
  }
}

const rightJustifyIn = function(width) {
  return function(string){
    let leadingSpaces = width - string.length;
    return repeat(leadingSpaces, " ") + string;
  }
}

const middleJustifyIn = function(width) {
  return function(string) {
    let endingSpaces = parseInt((width - string.length)/2);
    return repeat(endingSpaces, " ") + string + repeat(endingSpaces, " ");
  }
}

const setJustifierType = function(type) {
  switch(type) {
    case "left" : return leftJustifyIn;
    case "right" : return rightJustifyIn;
    case "middle" : return middleJustifyIn;
  }
}

const setLineType = function(type) {
  switch(type) {
    case "hollow" : return hollowLine("*","*");
    case "filled" : return filledLine("*");
    case "angled" : return hollowLine("/","\\");
  }
}

const recorrectHeight = function(height, type) {
  if(height % 2 != 0 ){
    return height;
  }
  switch ( type ) {
    case "angled" : return ++height;
    default : return --height;
  }
}

const flip = function(pattern) {
  let flippedPattern = pattern.toString().split("").reverse().join("");
  return flippedPattern;
}

const createMidLine = function(height,type) {
  if(type == "filled") {
    return filledLine("*")(height);
  }
  return hollowLine("*","*")(height);
}

exports.hollowLine = hollowLine;
exports.setJustifierType = setJustifierType;
exports.repeat = repeat;
exports.setLineType = setLineType;
exports.filledLine = filledLine;
exports.recorrectHeight = recorrectHeight;
exports.createMidLine = createMidLine;
exports.createPatternDetails = createPatternDetails;
exports.generateLine = generateLine;
exports.leftJustifyIn = leftJustifyIn;
exports.rightJustifyIn = rightJustifyIn;
exports.middleJustifyIn = middleJustifyIn;
exports.flip = flip;
exports.computeCharsOnLine = computeCharsOnLine;
exports.arrayToString = arrayToString;
