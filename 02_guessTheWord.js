function createClueWord(word, index, clue, clueCharIndex) {
  if (index === word.length) {
    return '';
  }

  if (index === clueCharIndex) {
    return word[index] + createClueWord(word, index + 1, clue, clueCharIndex);
  }

  return clue[index] + createClueWord(word, index + 1, clue, clueCharIndex);
}

function getRandomClueWord(word, index, clueWord, clueIndex) {
  const randomIndex = Math.floor((Math.random() * word.length));

  if (clueWord[randomIndex] === '_') {
    return createClueWord(word, 0, clueWord, randomIndex);
  }

  return getRandomClueWord(word, index, clueWord, clueIndex);
}

function createHiddenWord(word, index) {
  if (index === word.length) {
    return '';
  }

  return '_' + createHiddenWord(word, index + 1);
}

function printRemainingChances(isChanceUsed, chances) {
  if (isChanceUsed) {
    chances -= 1;
    console.log('\n   ❌ Nope!TRY with this New Clue 👇🏻  ChanCes Left:', chances);

  } else {
    console.log('\n   Can YOu!TRY with this New Clue 👇🏻  ChanCes Left:', chances);
  }

  return chances;
}

function isWordGuessed(word, guess, clueWord, index, chances) {
  const gap = "                            ";
  let isChanceUsed = false;

  console.log(gap, clueWord, "     ------: WOrd Length: ", clueWord.length);

  if (confirm("\n   Do you want to Guess the WOrd from Clue?")) {
    guess = prompt("   Enter you Answer:", "");
    isChanceUsed = true;
  }

  if (guess === word || index === word.length - 1 || chances === 0) {
    return guess === word;
  } else {
    chances = printRemainingChances(isChanceUsed, chances);
  }

  clueWord = getRandomClueWord(word, 0, clueWord, index);

  return isWordGuessed(word, guess, clueWord, index + 1, chances);
}

function guessWord(word) {
  const hiddenWord = createHiddenWord(word, 0);
  const clueWord = createClueWord(word, 0, hiddenWord, 0);
  const guess = '';

  if (isWordGuessed(word, guess, clueWord, 1, 3)) {
    console.log('\n   🤩 🥳 ✅ CORRECT ✅ 🥳 🤩');
  } else {
    console.log('\n   😱 😞 😥  Oh! YOu Failed to Guess The Word Try AGain!😎');
  }

  console.log("\n   --------(:    The HiDDen WOrd Is --->  ", word);
  return 0;
}

function prepareWelcomeMessage() {
  console.log("   ----------GUESS THE WORD----------");
  console.log("   The program will give you a HIDDEN WORD with open firstchar");
  console.log("   you have To answer the correct word to open the HIDDEN WORD");
  console.log("   you have to the guess the word in  3 chances, If you feel");
  console.log("   difficulty you can Say N(no) to guess to Save chance.");
}

function playGuessWord() {
  prepareWelcomeMessage();
  guessWord('carrot');

  if (confirm('\n   Do you want one more word?')) {
    guessWord('observe');
  } else {
    console.log('    coolThankYOu');
  }
}

playGuessWord();  
