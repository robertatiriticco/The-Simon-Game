var colors = ["red", "green", "yellow", "blue"];
var sequence = [];
var userSequence = [];
var level = 1, gameOver = false, started = false;




$(document).keypress(function() {
  if (!started)
    next_move();
});


$(".board-button").click(function() {
  if(started){
    var btnPressed = $(this).attr("id");
    userSequence.push(btnPressed);
    animatePress(btnPressed);
    checkUserSeq(userSequence.length - 1);
  }
});


function next_move() {
  if(gameOver)
    $("h1").removeClass("gameOver-title");

  userSequence = [];

  $("h1").text("Level " + level);
  $("h2").text("Memorize the sequence and repeat the same moves!");
  var randomNumber = Math.floor(Math.random() * 4);
  var newColor = colors[randomNumber];
  sequence.push(newColor);

  $('#' + newColor).fadeOut(400).fadeIn(400);
  level++;
  started = true;
}

function animatePress(buttonPressed) {
  $("#" + buttonPressed).addClass("pressed");
  setTimeout(function() {
    $("#" + buttonPressed).removeClass("pressed")
  }, 100);
}


function checkUserSeq(currentUserLevel) {
  if (userSequence[currentUserLevel] === sequence[currentUserLevel]) {
    if (userSequence.length === sequence.length) {
      setTimeout(
        next_move, 1000
      );
    }
  } else {

    $("h1").text("GAME OVER").addClass("gameOver-title");
    $("h2").text("Press any key to restart");
    $("body").addClass("gameOver");
    setTimeout(function() {
      $("body").removeClass("gameOver")
    }, 200);

    sequence = [];
    level = 1;
    gameOver = true;
    started = false;
  }

}
