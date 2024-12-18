const LINE_LENGTH = 60;
const NUMBER_OF_LINES = 10;
const CHARACTER = ' ';
const space = repeat(CHARACTER, LINE_LENGTH) + '\n';

let spaceBlock = repeat(space, NUMBER_OF_LINES); //value is manipulated by functions(generateSpaceBlock(), slideTheBlockToLeft())
let spaceLineRangeStartsAt = 0;                  //value is manipulated by functions(generateSpaceBlock(), slideTheBlockToLeft(), changeValueRange())
let newLineIndexOfSpaceLine = LINE_LENGTH;       //value is manipulated by functions(generateSpaceBlock(), slideTheBlockToLeft(), changeValueRange())

function repeat(string, nTimes) { // testcases in testAll()
  if (nTimes === 0) {
    return '';
  }

  return string + repeat(string, nTimes - 1);
}

function replaceCharAt(string, charToBeReplacedAt, replaceCharInIndex, index) { // testcases in testAll()
  if (index === replaceCharInIndex) {
    return charToBeReplacedAt + replaceCharAt(string, charToBeReplacedAt, replaceCharInIndex, index + 1);
  }

  if (index === string.length) {
    return '';
  }

  return string[index] + replaceCharAt(string, charToBeReplacedAt, replaceCharInIndex, index + 1);
}

function replaceCharAtIndex(string, charToBeReplacedAt, replaceCharInIndex) {
  return replaceCharAt(string, charToBeReplacedAt, replaceCharInIndex, 0);
}

function randomNumberInRange(from, to) { // testcases in testAll()
  return from + (Math.floor(Math.random() * (to - from)));
}

function leftShiftString(string, lineStartIndex, lineEndIndex, index) { // testcases in testAll()
  if (index === lineEndIndex) {
    return string[lineStartIndex];
  }

  return string[index] + leftShiftString(string, lineStartIndex, lineEndIndex, index + 1);
}

function leftShiftTheLine(string, lineStartIndex, lineEndIndex, index) { // testcases in testAll()
  if (index === string.length) {
    return '';
  }

  if (index === lineStartIndex) {
    const shiftedLine = leftShiftString(string, lineStartIndex, lineEndIndex, lineStartIndex + 1);

    return shiftedLine + leftShiftTheLine(string, lineStartIndex, lineEndIndex, lineStartIndex + LINE_LENGTH);
  }

  return string[index] + leftShiftTheLine(string, lineStartIndex, lineEndIndex, index + 1);
}

function leftShiftLine(string, lineStartIndex, lineEndIndex) {
  return leftShiftTheLine(string, lineStartIndex, lineEndIndex, 0);
}


function delay(delay) {
  for (let buffer = 0; buffer < delay; buffer++) { }
}

function display(value) {
  console.log(value);
}

function isThisTheLastNewLine(newLineIndex) {
  return newLineIndex === LINE_LENGTH * NUMBER_OF_LINES + NUMBER_OF_LINES - 1;
}

function getNextNewLineIndex(newLineIndex) {
  if (isThisTheLastNewLine(newLineIndex)) {
    return LINE_LENGTH;
  }

  return newLineIndex + LINE_LENGTH + 1;
}

function getNextLineRange(newLineIndex) {
  if (isThisTheLastNewLine(newLineIndex)) {
    return 0;
  }

  return newLineIndex + 1;
}

function changeLineRange() {
  spaceLineRangeStartsAt = getNextLineRange(newLineIndexOfSpaceLine);
  newLineIndexOfSpaceLine = getNextNewLineIndex(newLineIndexOfSpaceLine);
}

function slideTheBlockToLeft() {
  for (let counter = 0; counter < 1000; counter++) {
    console.clear();
    spaceBlock = leftShiftLine(spaceBlock, spaceLineRangeStartsAt, newLineIndexOfSpaceLine);

    changeLineRange(); //change
    display(spaceBlock);
    delay(6000000);
  }
}


function generateSpaceBlock() {
  for (let counter = 0; counter < spaceBlock.length; counter += 20) {
    console.clear();

    const randomIndex = randomNumberInRange(spaceLineRangeStartsAt, newLineIndexOfSpaceLine);

    spaceBlock = replaceCharAtIndex(spaceBlock, '.', randomIndex);

    changeLineRange();
    display(spaceBlock);
    delay(90000000);
  }
}

//testFragment Of individual functions 
function testAll() {
  console.log('------>repeatTestCases');
  console.log(repeat('hi', 3)); //hihihi
  console.log(repeat(' ', 5)); //5spaces
  console.log('------>replaceCharAtTestCases');
  console.log(replaceCharAtIndex('hello', 'k', 0)); //kello
  console.log(replaceCharAtIndex('hello', 'k', 3)); //helko
  console.log('------>generateRandomNumberInRangeTestCases');
  console.log(randomNumberInRange(5, 10));  //number from 5 to 10
  console.log(randomNumberInRange(90, 99)); // number from 90 to 99
  console.log('------>leftShiftStringTestCases');
  console.log(leftShiftString('line', 0, 4, 1)); //inel
  console.log(leftShiftString('11--22', 0, 6, 1));//1--221
  console.log('------>leftShiftTheLineTestCases');
  console.log(leftShiftLine('12345\n12345\n12345\n', 6, 11));
}


//main functions of the program.
generateSpaceBlock();
slideTheBlockToLeft();

// testAll();