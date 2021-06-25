var randomNumber1;
var randomNumber2;

randomNumber1 = Math.floor(Math.random() * 6 + 1);
randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";


document.getElementById("dice1").setAttribute("src", randomDiceImage1);
document.getElementById("dice2").setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerText = "🚩 Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerText = "😢 Tie 😢";
}
