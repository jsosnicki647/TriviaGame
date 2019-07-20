var game = {

    timeRemaining: 30,
    intervalID: 0,
    currQuestion: 0,
    numCorrect: 0,
    questions: [{
        q: "According to episode 'Two for Tina', what did Bob enjoy doing as a child?",
        o: ["Leatherwork", "'Pissing Contests' with Jimmy Pesto", "Working at his dad's diner","Photography"],
        a: 0,
        isCorrect: false
    }],
    start: function(){
        $("#timer").html("<h2>Time Remaining: " + game.timeRemaining + "</h2>")
        $("#start").css("display","none")
        $("#title").css("margin-bottom","5%")
        $("#game-window").css("height","65%")
        $("#game-window").css("background","#A1A6AA")
        game.intervalID = setInterval(game.count, 1000)
        game.showQuestion()
    },
    showQuestion: function(){
        $("#question").html("<h2>" + game.questions[game.currQuestion].q + "</h2>")
        
        for(i = 0; i < game.questions[game.currQuestion].o.length; i++){
            
            $("#" + i).html("<h2>" + game.questions[game.currQuestion].o[i] + "</h2>")
        
        }
    },
    checkAnswer: function(e){
        console.log("FEFE")
        if(e == game.questions[game.currQuestion].a){
            game.numCorrect++
        }
    },

    count: function(){
        game.timeRemaining--
        var converted = game.timeConverter(game.timeRemaining)
        $("#timer").html("<h2>Time Remaining: " + game.timeRemaining + "</h2>")
        if(game.timeRemaining == 0){
            clearInterval(game.intervalID)
        }
        if(game.timeRemaining < 10){
            $("#timer").css("color","red")
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



$(document).ready(function(){
    $("#start").on("click", game.start)
    $(".option").on("click",function(){
        game.checkAnswer(this.id)
    })
    
})





