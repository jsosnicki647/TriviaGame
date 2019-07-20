var timeRemaining = 30
var intervalID

window.onload = function(){
    $("#start").on("click", start)
}

function start(){
    $("#timer").text(timeRemaining)
    $("#start").css("display","none")
    $("#title").css("margin-bottom","5%")
}


function count() {

  // DONE: increment time by 1, remember we cant use "this" here.
  timeRemaining--;

  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(timeRemaining);
  console.log(converted);
}

function timeConverter(t) {

  var minutes = Math.floor(t / 60)
  var seconds = t - (minutes * 60)

  if (seconds < 10) {
    seconds = "0" + seconds
  }

  if (minutes === 0) {
    minutes = "00"
  }
  else if (minutes < 10) {
    minutes = "0" + minutes
  }

  return minutes + ":" + seconds
}
