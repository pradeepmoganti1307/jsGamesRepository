const path1 = "🏡____𐂷___🦕";
const path2 = "🏡____𐂷__🦕_";
const path3 = "🏡____𐂷_🦕__";
const path4 = "🏡____𐂷🦕___";
const path5 = "🏡____𐂷____";
const path6 = "🏡___🦕𐂷____";
const path7 = "🏡__🦕_𐂷____";
const path8 = "🏡_🦕__𐂷____";
const path9 = "🏡🦕___𐂷____";
const path10 = "🏡_____𐂷____";

function printAfterDelay(path, message) {
  console.clear();
  console.log(message);

  for (let i = 0; i < 10000000; i++) { }

  console.log(path);

  for (let i = 0; i < 1400000000; i++) { }
}

function moveDion() {
  const message1 = "Please Watch Dion!";
  const message2 = "Oh!, Where is Dion? 😨😱😭";
  const message3 = "wow! Dion is Back,🥹🥰😁";

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

  console.log("THANKS Dion reached Home 🥳");
}

function playDion() {
  if (confirm("Dion is Scared To Go Alone To HOME, Can You Please Help? ")) {
    moveDion();
  } else {
    console.log("Dion is not moving! 😥");
  }
}

playDion();