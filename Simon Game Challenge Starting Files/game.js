
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function newRand(){
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
};
