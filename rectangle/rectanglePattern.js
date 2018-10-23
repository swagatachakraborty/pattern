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
  let lines=topGenerator(width);
  let delimiter="\n";
  for(let row=0;row<height-2;row++) {
    lines+=delimiter+middleGenerator(width);
  }
  lines+=delimiter+bottomGenerator(width);
  return lines;
}

const printRectangle = function (){
  let rectangleType = process.argv[2]
  let rectangleHeight = +process.argv[3];
  let rectangleWidth = +process.argv[4];
  let rectangle = "*";
  if (rectangleHeight == 1 && rectangleWidth == 1) {
    return rectangle;
  }
  if(rectangleType == "filled") {
    rectangle = generateRectangle(rectangleHeight,rectangleWidth,filledLine,filledLine,filledLine);
  }
  if(rectangleType == "empty") { 
    rectangle = (generateRectangle(rectangleHeight,rectangleWidth,filledLine,hollowLine,filledLine));
  }
    return rectangle;
}

console.log(printRectangle());
