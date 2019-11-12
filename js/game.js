var colors = ["red", "green", "yellow", "blue"];
var sequence = [];
var userSequence = [];
var level = 0,
  started = false;


$("#start").click(function() {
  $(".start-board").fadeOut(600);
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
  level++;

  $("h1").text("Level " + level);
  $("h2").text("Memorize and repeat the sequence!");
  var randomNumber = Math.floor(Math.random() * 4);
  var newColor = colors[randomNumber];
  sequence.push(newColor);

  setTimeout(function(){
    $('#' + newColor).fadeOut(400).fadeIn(400);
  }, 300);
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
    console.log("else: " + level);

    $("h1").text("GAME OVER");
    $("h2").text("Press the button to play again");
    $("body").addClass("gameOver");
    setTimeout(function() {
      $("body").removeClass("gameOver")
    }, 200);

    $(".board").fadeOut(600);
    setTimeout(function(){
      $(".info-text").text("Your score: " + (level-1));
      $("#start").text("RESTART");
      $(".start-board").fadeIn(600);
    },600);

    setTimeout(function(){
        sequence = [];
        level = 0;
        started = false;
      }, 650);
  }
}
