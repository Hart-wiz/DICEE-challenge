let countTwo = 0;
let countOne = 0;
let count = 0;

const incrementPlayerOne = () => {
  countOne++;
  document.querySelector("#one").textContent = countOne;
};
const incrementPlayerTwo = () => {
  countTwo++;
  document.querySelector("#two").textContent = countTwo;
};
const incrementCount = () => {
  count++;
  document.querySelector("#plays").textContent = count;
};

function rollDice() {
  // for first dice
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;

  let randomImageSource = "images/dice" + randomNumber1 + ".png";

  document.querySelector(".img1").setAttribute("src", randomImageSource);

  // for second dice
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomImageSource2);

  // conditional for wins, lose & draw
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " &#128681 player 1, wins";
    incrementPlayerOne();
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "  player 2, wins &#128681 ";
    incrementPlayerTwo();
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = " &#127884 draw &#127884 ";
  } else {
    document.querySelector("h1").innerHTML =
      " cheated selection, please refresh page";
  }
  // overall count
  incrementCount();
}
