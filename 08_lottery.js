const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";     //used in createlotteryNumber function
const NUMBER = "0123456789";
const NUM_OF_LOTTERY_CHARS = 10;
const NUM_OF_UNIQUE_CHARS = 6;                          //used in createUserTicket function.
const GAP = '\n                   ┃';               // space variable.
const MONEY = 500;                                  //used in runLottery
const TICKET_PRICE = 20;
const PRIZE_MONEY = 1000;

const path1 = "⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️ 0%";                //used in playLoading
const path2 = "⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️🟢 10%";
const path3 = "⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️🟢🟢 20%";
const path4 = "⚪️⚪️⚪️⚪️⚪️⚪️⚪️🟢🟢🟢 30%";
const path5 = "⚪️⚪️⚪️⚪️⚪️⚪️🟢🟢🟢🟢 40%";
const path6 = "⚪️⚪️⚪️⚪️⚪️🟢🟢🟢🟢🟢 50%";
const path7 = "⚪️⚪️⚪️⚪️🟢🟢🟢🟢🟢🟢 60%";
const path8 = "⚪️⚪️⚪️🟢🟢🟢🟢🟢🟢🟢 70%";
const path9 = "⚪️⚪️🟢🟢🟢🟢🟢🟢🟢🟢 80%";
const path10 = "⚪️🟢🟢🟢🟢🟢🟢🟢🟢🟢 90%";
const path11 = "🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 100%";

function printAfterDelay(path, message) {
  console.clear();
  console.log(GAP + 'WELCOME TO LOTTERY GAME');
  console.log(GAP + message);

  for (let i = 0; i < 10000000; i++) { }

  console.log(GAP + path);

  if (path === path10) { for (let i = 0; i < 7000000000; i++) { } }

  for (let i = 0; i < 800000000; i++) { }
}

function moveDion() {
  const message1 = "GENERATING LOTTERY";
  const message2 = "GENERATING LOTTERY";
  const message3 = "GENERATING LOTTERY";

  printAfterDelay(path1, message1);
  printAfterDelay(path2, message1);
  printAfterDelay(path3, message1);
  printAfterDelay(path4, message1);
  printAfterDelay(path5, message2); // message 2
  printAfterDelay(path6, message3); // message 3
  printAfterDelay(path7, message1);
  printAfterDelay(path8, message1);
  printAfterDelay(path9, message1);
  printAfterDelay(path10, message1);
  printAfterDelay(path11, message1);
}

function playLoadingPicture() {
  console.clear();
  console.log(GAP + 'WELCOME TO LOTTERY GAME');
  moveDion();
  console.clear();
  console.log(GAP + 'WELCOME TO LOTTERY GAME');

  return 0;
}

function isSubStringPresentAt(string, subString, index) {
  for (let subIndex = 0; subIndex < subString.length; subIndex++) {
    if (string[index] !== subString[subIndex]) {
      return false;
    }

    index += 1;
  }

  return true;
}

function calculateEndIndex(string, subString) {
  if (string === '' || subString === '') {
    return 0;
  }

  return string.length - subString.length + 1;
}

function isSubstring(string, subString) {
  const endIndex = calculateEndIndex(string, subString);

  for (let index = 0; index < endIndex; index++) {
    if (isSubStringPresentAt(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function removeLetter(word, targetIndex, index) {
  if (index === word.length) {
    return "";
  }

  if (index === targetIndex) {
    return "" + removeLetter(word, targetIndex, index + 1);
  }

  return word[index] + removeLetter(word, targetIndex, index + 1);
}

function shuffleWord(word, shuffledWord, noOfchars) {
  if (word.length === 0 || noOfchars === 0) {
    return shuffledWord;
  }

  const randomIndex = Math.floor(Math.random() * word.length);

  shuffledWord += word[randomIndex];
  word = removeLetter(word, randomIndex, 0);

  return shuffleWord(word, shuffledWord, noOfchars - 1);
}

function createLotteryNumber(validChars, noOfchars) {
  return shuffleWord(validChars, "", noOfchars);
}

function createDifferChars(lotteryNumber, index, differDigits) {
  if (differDigits === 0) {
    return "";
  }

  return createDifferChars(lotteryNumber, index - 1, differDigits - 1) + lotteryNumber[index];
}

function createSameChars(lotteryNumber, index, differDigits) {
  if (index === differDigits) {
    return "";
  }

  return lotteryNumber[index] + createSameChars(lotteryNumber, index + 1, differDigits);
}

function createUserTicket(lotteryNumber) {
  const differChars = createDifferChars(lotteryNumber, lotteryNumber.length - 1, NUM_OF_UNIQUE_CHARS);
  const sameChars = createSameChars(lotteryNumber, 0, lotteryNumber.length - NUM_OF_UNIQUE_CHARS);


  const userTicketNumber = createLotteryNumber(differChars, differChars.length);
  return sameChars + userTicketNumber;
}

function createUniqueUserTicket(lotteryNumber, ticketsPlayed) {
  const userTicketNumber = createUserTicket(lotteryNumber);

  if (isSubstring(ticketsPlayed, userTicketNumber)) {
    return createUniqueUserTicket(lotteryNumber, ticketsPlayed);
  }

  return userTicketNumber;
}

function consolePlayer() {
  console.log(GAP + '😭sorry , Better Luck Next Time!!');
}

function congratulatePlayer(currentMoney) {
  console.log(GAP + 'WOW YOU WON LOTTERY NOW YOU HAVE ' + currentMoney + '💵 DOLLERS');
  console.log(GAP + 'DION IS CONGRAGULATING YOU 👍🏻🦕');
}

function generateTicketMessage(playerTicketNumber) {
  return GAP + 'YOUR LOTTERY NUMBER:   ' + playerTicketNumber;
}

function playerWantsToQuit() {
  return !confirm(GAP + 'DO YOU WANT TO BUY LOTTERY TICKET FOR JUST ' + TICKET_PRICE + '$?');
}

function displayWallet(money) {
  console.log(GAP + 'YOU HAVE ' + money + '$ DOLLERS!!');
}

function displayLotteryConfirmMessage(lotteryNumber) {
  console.log(GAP, lotteryNumber);
  console.log(GAP + 'LOTTERY NUMBER IS CONFIRMED,TEST YOUR LUCK!! TO BECOME RICH!!!');
}

function confirmContinuation() {
  return confirm(GAP + 'OR DO YOU WANT TO ENTER NEW LOTTERY?');
}


function welcomeMessage() {
  console.log(GAP + 'WELCOME TO LOTTERY GAME');

  prompt(GAP + 'PRESS ENTER TO GENERATE LOTTERY NUMBER!!!', '');

  playLoadingPicture();

  return 0;
}

function disqualifyPlayer() {
  console.log(GAP + 'YOU DONT HAVE ENOUGH MONEY TO PLAY, BYE BYE!!');
}

function playLottery(winningLotteryNumber, ticketsPlayed, money) {
  let currentMoney = money;
  displayWallet(currentMoney);

  if (playerWantsToQuit()) {
    return currentMoney;
  }

  const playerTicketNumber = createUniqueUserTicket(winningLotteryNumber, ticketsPlayed);

  if (currentMoney < TICKET_PRICE) {
    disqualifyPlayer();
    return currentMoney;
  }

  currentMoney -= TICKET_PRICE;

  const hasPlayerWon = winningLotteryNumber === playerTicketNumber;

  console.log(generateTicketMessage(playerTicketNumber));

  if (hasPlayerWon) {
    currentMoney += PRIZE_MONEY;
    congratulatePlayer(currentMoney);

  } else {
    consolePlayer();
    currentMoney = playLottery(winningLotteryNumber, ticketsPlayed + ' ' + playerTicketNumber, currentMoney); // return Money;
  }

  return currentMoney;
}

function startLottery(money) {
  const lotteryNumber = createLotteryNumber(ALPHABETS, NUM_OF_LOTTERY_CHARS);
  let currentMoney = money;

  displayLotteryConfirmMessage(lotteryNumber);
  currentMoney = playLottery(lotteryNumber, '', currentMoney);

  if (confirmContinuation()) {
    welcomeMessage();
    currentMoney = startLottery(currentMoney);
  }

  return currentMoney;
}

function runLottery() {
  welcomeMessage();
  let currentMoney = startLottery(MONEY);

  console.log('THANKYOU!!! NOW YOU HAVE :', currentMoney);
  return 0;
}

runLottery();