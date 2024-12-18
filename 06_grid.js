function createUpperRow(a) {
  let upperRow = '';

  for (let i = 0; i < a - 2; i++) {
    upperRow += "┳━━━━━━━";
  }

  return "┏━━━━━━━" + upperRow + "┳━━━━━━━┓"; // ┏ ━ ┓ ┗ ┛
}

function createSpaceRow(a) {
  let spaceRow = '';

  for (let i = 0; i < a - 1; i++) {
    spaceRow += "┃       ";
  }

  return spaceRow + "┃       ┃";
}

function createMiddleRow(a) {
  let middleRow = '';

  for (let i = 0; i < a - 2; i++) {
    middleRow += "╋━━━━━━━";
  }

  return "┣━━━━━━━" + middleRow + "╋━━━━━━━┫";
}

function createLowerRow(a) {
  let lowerRow = '';

  for (let i = 0; i < a - 2; i++) {
    lowerRow += "┻━━━━━━━";
  }

  return "┗━━━━━━━" + lowerRow + "┻━━━━━━━┛";
}

function makeDataElement(number) {
  if (number < 10) {
    number = '0' + number;
  }

  if (number > 99) {
    return "  " + number + "  ┃";
  }

  return "   " + number + "  ┃";
}

function createDataRow(a, number) {
  let dataRow = '';

  for (let i = 0; i < a - 1; i++) {
    dataRow += makeDataElement(number);
    number = number + 1;
  }

  return "┃" + dataRow + makeDataElement(number);
}

function createSquareTable(a, index, middleLiner, dataLiner, number) {
  if (index === 0) {
    console.log(createUpperRow(a));
  }

  if (index % 2 !== 0) {
    console.log(createSpaceRow(a));
  }

  if (index === a * 4 - 1) {
    console.log(createLowerRow(a));
    return 0;
  }

  if (index === middleLiner) {
    console.log(createMiddleRow(a));
    middleLiner += 4;
  }

  if (index === dataLiner) {
    console.log(createDataRow(a, number, 0));
    number += a;
    dataLiner += 4;
  }

  return createSquareTable(a, index + 1, middleLiner, dataLiner, number);
}

function squareTable(length) {
  return createSquareTable(length, 0, 4, 2, 1);
}

squareTable(4);