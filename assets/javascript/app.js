var game = {

    timeRemaining: 30,
    intervalID: 0,
    start: function(){
        $("#timer").html("<h2>Time Remaining: " + game.timeRemaining + "</h2>")
        $("#start").css("display","none")
        $("#title").css("margin-bottom","5%")
        $("#game-window").css("height","65%")
        $("#game-window").css("background","#6C757D")
        game.intervalID = setInterval(game.count, 1000)
    },
    count: function(){
        game.timeRemaining--
        var converted = game.timeConverter(game.timeRemaining)
        $("#timer").html("<h2>Time Remaining: " + game.timeRemaining + "</h2>")
        if(game.timeRemaining == 0){
            clearInterval(game.intervalID)
        }
    },
    timeConverter: function(t){
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
}



window.onload = function(){
    $("#start").on("click", game.start)
}






