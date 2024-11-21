// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.
function generateSecretNumber(rangeStart, rangeEnd) {
  const possibleSecretNumbers = rangeEnd - rangeStart;
  const secretNumber = Math.round(Math.random() * possibleSecretNumbers);

  return rangeStart + secretNumber;
}

function welcomeMessage(rangeStart, rangeEnd, maxAttempts) {
  const messageSegment1 = "Welcome to Guess the Number!\n"
  const messageSegment2 = "The secret number is between " + rangeStart + " and " + rangeEnd + " You have " + maxAttempts + " attempts to find it.";

  return messageSegment1 + messageSegment2;
}

function prepareGuessStatusMessage(userGuess, secretNumber) {
  if (userGuess < secretNumber) {
    return userGuess + " Too low! Try a higher number."
  }

  return userGuess + " Too high! Try a smaller number."
}

function takeUserInput(secretNumber, maxAttempts) {
  console.log("\nTake a guess! (Remaining attempts:" + maxAttempts + ")");

  const userGuess = +prompt("Enter Your Guess: ");

  if (userGuess === secretNumber || maxAttempts === 1) {
    return userGuess === secretNumber;
  }

  console.log(prepareGuessStatusMessage(userGuess, secretNumber));

  return takeUserInput(secretNumber, maxAttempts - 1);
}

function prepareGameOverMessage(isUserGuessCorrect, secretNumber) {
  if (isUserGuessCorrect) {
    return "Bravo! You've nailed it. The number was [" + secretNumber + "]!";
  }

  return "Oh no! You've used all your attempts. Better luck next time!";
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  const secretNumber = generateSecretNumber(rangeStart, rangeEnd);

  console.log(welcomeMessage(rangeStart, rangeEnd, maxAttempts));

  const isUserGuessed = takeUserInput(secretNumber, maxAttempts);

  console.log(prepareGameOverMessage(isUserGuessed, secretNumber));

  if (confirm("\nDo you want to play again ?")) {
    startGame(rangeStart, rangeEnd, maxAttempts);
  } else {
    console.log("\nGoodbye");
  }

  return 0;
}

startGame(100, 200, 5);
