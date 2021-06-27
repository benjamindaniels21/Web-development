
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


$(document).keypress(function(){
if(!started){
$("#level-title").text("Level " + level);
nextSequence();
started = true;
}
});

$(".btn").click(function(){

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){
  if( gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    // console.log("success");
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  }else{
    // console.log("wrong");
    playSound("wrong");
    // $(".row").hide();
    // $("#level-title").text("Game Over").attr("id", "big-title");
    $("body").addClass("game-over")
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function nextSequence(){
  userClickedPattern = [];
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  level++;
  playSound(randomChosenColor);
  $("#level-title").text("Level " + level);


}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");

setTimeout(function(){
  $("#" + currentColor).removeClass("pressed");
}, 100);
}
