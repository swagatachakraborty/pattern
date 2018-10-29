const createPatternDetails  = function(details) {
  return { type : details[2], height : details[3], width : details[4] }; 
}

const repeat = function(times, string) {
  let repeatedStrings = "";
  for(let charCount = 1; charCount <= times; charCount++) {
    repeatedStrings = joinLine(repeatedStrings, string,"");
  }
  return repeatedStrings;
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
  let line = leftChar;
  line = joinLine(line, repeat(width-2,middleChar), "");
  let widthOfLastChar = width - line.length;
  line = joinLine(line, repeat(widthOfLastChar,rightChar), "");
  return line;
}

const joinLine = function(prevLine, lineToJoin, lineSepareter) {
  return prevLine + lineSepareter + lineToJoin;
}

const leftJustifier = function(string, width) {
  let endingSpaces = width - string.length;
  return string + repeat(endingSpaces, " ");
}

const rightJustifier = function(string, width) {
  let leadingSpaces = width - string.length;
  return repeat(leadingSpaces, " ") + string;
}

const middleJustifier = function(string, width) {
  let endingSpaces = parseInt((width - string.length)/2);
  return repeat(endingSpaces, " ") + string + repeat(endingSpaces, " ");
}

const setJustifierType = function(type) {
  switch(type) {
    case "left" : return leftJustifier;
    case "right" : return rightJustifier;
    case "middle" : return middleJustifier;
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

const flip = function(element) {
  switch( element ) {
    case '\\' : return '/';
    case  '/' : return '\\';
    default : return element;
  }
}

const reverse = function(pattern) {
  let flipedPattern = pattern.split("").map(flip).join("");
  let reversePattern = flipedPattern.split("\n").reverse().join("\n");
  return reversePattern;
}

const createUpperHalf = function(height, lineGenerator) {
  let upperTriangle = middleJustifier("*", height);
  let delimiter = "\n";
  let width = 3;
  for(let row = 1; row <= (height - 1)/2 - 1; row++) {
    let line = lineGenerator(width);
    line = middleJustifier(line, height);
    upperTriangle = joinLine(upperTriangle, line, delimiter);
    width += 2;
  }
  return upperTriangle;
}

const createMidLine = function(height,type) {
  if(type == "filled") {
    return filledLine("*")(height);
  }
  return hollowLine("*","*")(height);
}

exports.filledLine = filledLine;
exports.hollowLine = hollowLine;
exports.setJustifierType = setJustifierType;
exports.repeat = repeat;
exports.joinLine = joinLine;
exports.setLineType = setLineType;
exports.filledLine = filledLine;
exports.recorrectHeight = recorrectHeight;
exports.reverse = reverse;
exports.middleJustifier = middleJustifier;
exports.createUpperHalf = createUpperHalf;
exports.createMidLine = createMidLine;
exports.createPatternDetails = createPatternDetails;
exports.generateLine = generateLine;
exports.leftJustifier = leftJustifier;
exports.rightJustifier = rightJustifier;
exports.middleJustifier = middleJustifier;
exports.flip = flip;
exports.reverse = reverse;
exports.createUpperHalf = createUpperHalf;
exports.createPatternDetails = createPatternDetails;
