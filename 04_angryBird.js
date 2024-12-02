const WIDTH = 120;
const HEIGHT = 40;
let spaceBlock = repeat(' ', WIDTH * HEIGHT);

function repeat(string, nTimes) {
  if (nTimes <= 0) {
    return '';
  }

  return string + repeat(string, nTimes - 1);
}

function display(value) {
  console.log(value);
}

function delay(number) {
  for (let buffer = 0; buffer < number; buffer++) { }
}

function editSpaceBlock(position, index, spaceBlock) {
  if (index === spaceBlock.length) {
    return '';
  }

  if (spaceBlock[index] === '*') {
    return '.' + editSpaceBlock(position, index + 1, spaceBlock);
  }

  if (index === position) {
    return '*' + editSpaceBlock(position, index + 1, spaceBlock);
  }

  return spaceBlock[index] + editSpaceBlock(position, index + 1, spaceBlock);
}

function sliceOfString(string, start, end) {
  if (start > end) {
    return '';
  }

  return string[start] + sliceOfString(string, start + 1, end);
}

function slice(string, start, end) {
  start = Math.max(start, 0);
  end = Math.min(end, string.length - 1);

  return sliceOfString(string, start, end);
}

function displaySpaceBlock(spaceBlock, row) {
  if (row < 0) {
    return '';
  }

  console.log(slice(spaceBlock, row, row + WIDTH - 1));
  // console.log(spaceBlock.slice(row, row + WIDTH));

  return displaySpaceBlock(spaceBlock, row - WIDTH);
}

function screen(position) {
  console.clear();
  spaceBlock = editSpaceBlock(position, 0, spaceBlock);
  displaySpaceBlock(spaceBlock, WIDTH * (HEIGHT - 1));
  delay(400000000);
}

function testCases() {
  console.log('----------------------testCasesForSlice()');
  console.log(slice('hello', 0, 4)); //hello
  console.log(slice('hello', 1, 3)); //ell
}

function drawProjectile(velocity, angle) {
  const tOfFlight = (velocity * Math.sin(angle)) / 4.9;

  for (let time = 0; time <= Math.ceil(tOfFlight) + 1; time += 0.1) {
    const x = Math.floor(velocity * Math.cos(angle) * time); //v * cosø * t
    const y = Math.floor(-4.9 * Math.pow(time, 2) + velocity * Math.sin(angle) * time); //v * sinø * t - (1/2)gt2;
    const index = x + WIDTH * y + 0;
    
    if (index >= 0 && index < WIDTH * HEIGHT) {
      screen(index);
    }
  }
}

function play() {
  const givenAngle = prompt('enter Angle: ', 0);
  const givenVelocity = prompt('enter velocity:', 0);

  const angle = givenAngle * Math.PI / 180;
  const velocity = givenVelocity; //Max Velocity is 37 to fit into screen. for angle 30.
  
  drawProjectile(velocity, angle);

  if (confirm('tryAgain:')) {
    return play();
  }

  return 0;
}

play();
// testCases();
