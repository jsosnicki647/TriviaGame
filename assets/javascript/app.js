var game = {

    timeRemaining: 30,
    intervalID: 0,
    currQuestion: 0,
    numCorrect: 0,
    questions: [{
        q: "According to episode 'Two for Tina', what did Bob enjoy doing as a child?",
        o: ["Leatherwork", "'Pissing Contests' with Jimmy Pesto", "Working at his dad's diner","Photography"],
        a: 0,
        isCorrect: "unanswered : |"
    },
    {
        q: "What is the wealthy island a ferry-ride away from where the Belchers live?",
        o: ["Royal Island", "Kings Head Island", "Ruby Road Island","Isle of Rich"],
        a: 1,
        isCorrect: "unanswered : |"
    },
    {
        q: "What kind of business is next door to Bob's Burgers and comes into the spotlight a bit during this first episode?",
        o: ["Funeral Home", "Rival Burger Restaurant", "Prosthetics Clinic","Locksmith"],
        a: 0,
        isCorrect: "unanswered : |"
    },
    {
        q: "Which of these is NOT one of Bob and Linda's children?",
        o: ["Louise", "Gene", "Henry","Tina"],
        a: 2,
        isCorrect: "unanswered : |"
    },
    {
        q: "When did 'Bob's Burgers' first air?",
        o: ["2009", "2010", "2011","2012"],
        a: 2,
        isCorrect: "unanswered : |"
    },
    {
        q: "What holidy is Bob obsessed with?",
        o: ["Thanksgiving", "Christmas", "Memorial Day","Halloween"],
        a: 0,
        isCorrect: "unanswered : |"
    },
    {
        q: "What is the name of Linda's sister?",
        o: ["Gretchen", "Gayle", "Lauren","Julia"],
        a: 1,
        isCorrect: "unanswered : |"
    },
    {
        q: "Which of these characters is not a Pesto child?",
        o: ["Andy", "Jimmy Jr", "Ollie","Tammy"],
        a: 3,
        isCorrect: "unanswered : |"
    },
     {
        q: "What is the name of the school the Belcher Children attend?",
        o: ["Huxley", "Wagstaff", "Schooner","Glencrest"],
        a: 1,
        isCorrect: "unanswered : |"
    },
    {
        q: "How do Linda and Hugo, the health inspector, know each other?",
        o: ["They are cousins", "They go to the same YMCA", "They met during a wild night in Las Vegas","They were engaged"],
        a: 3,
        isCorrect: "unanswered : |"
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
        console.log(game.questions[game.currQuestion].q)
        $("#question").html("<h2>" + game.questions[game.currQuestion].q + "</h2>")
        
        for(i = 0; i < game.questions[game.currQuestion].o.length; i++){
            $("#" + i).html("<h2>" + game.questions[game.currQuestion].o[i] + "</h2>")
        }
    },
    checkAnswer: function(e){
        if(e == game.questions[game.currQuestion].a){
            game.numCorrect++
            game.questions[game.currQuestion].isCorrect = "correct :)"
        }
        else{
            game.questions[game.currQuestion].isCorrect = "incorrect :("
        }
        game.currQuestion++
        if(game.currQuestion < game.questions.length){
            game.showQuestion()
        }
        else{
            game.gameOver()
        }
    },
    gameOver: function(){
        $("#game-window").html("<h2>Game Over</h2>")
        var tr = $("<tr>")
        var tbody = $("<tbody>")
        var table = $("<table>")
        var thead = $("<thead>")
        var th = $("<th>")
        th.text("Question")
        tr.append(th)
        var th = $("<th>")
        th.text("Result")
        tr.append(th)
        thead.append(tr)
        table.append(thead)


        for(i = 0; i < game.questions.length; i++){
            var tr = $("<tr>")
            var result = $("<td>")
            result.text(i + 1)
            tr.append(result)
            var result = $("<td>")
            result.text(game.questions[i].isCorrect)
            tr.append(result)
            table.append(tr)
        }
        var tr = $("<tr>")
        var td = $("<td>")
        td.text("Score:")
        tr.append(td)
        var td = $("<td>")
        td.text(game.numCorrect * 10 + "%")
        tr.append(td)
        table.append(tr)
        

        table.addClass("table table-dark")
        $("#game-window").append(table)
        table.css("margin-top", "5%")
        table.css("margin-left", "5%")
        table.css("margin-right", "5%")
        table.css("width", "50%")
        table.css("margin","auto")
        table.css("background", "#4F8CD1")
        var div = $("<div>")
        if (game.numCorrect > 7){
            div.html("<h2>Good job! Keep watching Bob's!</h2>")
        }
        else if(game.numCorrect >5){
            div.html("<h2>Average. Try watching more Bob's.</h2>")
        }
        else{
            div.html("<h2>Do you even watch Bob's?!</h2>")
        }
        $("#game-window").append(div)
    },
    flash: function(){
        $("#timer").css("color","#C13B3A")
            console.log("red")
        setTimeout(function(){
            $("#timer").css("color","white")
            console.log("white")
        },500)
        
            
        
    },
    
    

    count: function(){
        game.timeRemaining--
        var converted = game.timeConverter(game.timeRemaining)
        $("#timer").html("<h2>Time Remaining: " + game.timeRemaining + "</h2>")
        var intervalID
        if(game.timeRemaining == 0){
            clearInterval(game.intervalID)
            game.gameOver()
        }

        
        if(game.timeRemaining == 10){
            setInterval(game.flash, 1000)
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
        if(game.timeRemaining != 0){
            game.checkAnswer(this.id)
        }
    })
    
})





