const repeatStrings = function(noOfRepetition, string) {
  let row = "";
  for(let charCount=0; charCount<noOfRepetition; charCount++){
    row += string;
  }
  return row;
}

const joinLine = function(prevLine, lineToJoin, lineSepareter) {
  return prevLine + lineSepareter + lineToJoin;
}

const generateLine = function(width,leftChar,middleChar,rightChar) {
  let line = leftChar;
  line = joinLine(line, repeatStrings(width-2,middleChar), "");
  let widthOfLastChar = width - line.length;
  line = joinLine(line, repeatStrings(widthOfLastChar,rightChar), "");
  return line;
}

const filledLine=function(width) {
  return generateLine(width,"*","*","*");
}

const hollowLine=function(width) {
  return generateLine(width,"*"," ","*");
}

const justify=function(text,width) {
  return joinLine(repeatStrings(width-text.length," "),text,"");
}

const generateRectangle=function(height,width,topGenerator,middleGenerator,bottomGenerator) {
  if (height == 1 && width == 1) {
    return "*";
  }
  let lines=topGenerator(width);
  let delimiter="\n";
  for(let row=0;row<height-2;row++) {
    lines+=delimiter+middleGenerator(width);
  }
  lines+=delimiter+bottomGenerator(width);
  return lines;
}

const createRectangle = function(rectangleHeight, rectangleWidth, rectangleType) {
  let rectangle;
  switch(rectangleType){
    case "filled" :
      rectangle = generateRectangle(rectangleHeight,rectangleWidth,filledLine,filledLine,filledLine);
      break;
    case "empty" : 
      rectangle = generateRectangle(rectangleHeight,rectangleWidth,filledLine,hollowLine,filledLine);
      break;
    default : 
      console.log("Wrong input ");
  }
  return rectangle;
}

exports.createRectangle = createRectangle;
