var colors = ["red", "green", "yellow", "blue"];
var sequence = [];
var userSequence = [];
var level = 1,
  started = false;


$("#start").click(function() {
  $("#start").fadeOut(600);
  setTimeout(function(){

    $(".board").fadeIn(600);
    if (!started)
      next_move();
  },600);

});





$(".board-button").click(function() {
  if (started) {
    var btnPressed = $(this).attr("id");
    userSequence.push(btnPressed);
    animatePress(btnPressed);
    checkUserSeq(userSequence.length - 1);
  }
});


function next_move() {

  userSequence = [];

  $("h1").text("Level " + level);
  $("h2").text("Memorize and repeat the sequence!");
  var randomNumber = Math.floor(Math.random() * 4);
  var newColor = colors[randomNumber];
  sequence.push(newColor);

  setTimeout(function(){
    $('#' + newColor).fadeOut(400).fadeIn(400);
  }, 300);
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
        next_move, 300
      );
    }
  } else {

    $("h1").text("GAME OVER");
    $("h2").text("Press the Start button to play again");
    $("body").addClass("gameOver");
    setTimeout(function() {
      $("body").removeClass("gameOver")
    }, 200);

    sequence = [];
    level = 1;
    started = false;

    $(".board").fadeOut(600);
    setTimeout(function(){
      $("#start").fadeIn(600);
    },600);
  }

}
