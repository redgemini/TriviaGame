//-----Functions-----
  //Generate questions Loop
  $(".start").on("click", function () {
    $(".start").remove();  
  })

//Game Questions/Choices
var questions = [{
    q1: "What food does Carl eat out of a can while sitting on the roof of a house?",
    choices: ["     Corn     ", "     Pudding     ", "     Beans     ", "     Applesauce     "],
    correctAnswer: "Pudding",
}];

var game ={
    questions:questions,
    currentQuestion:0,
    counter:25,
    correct:0,
    incorrect:0,
    countdown: function(){
        gameBoard.counter--;
        $(".counter").html(game.counter);
        if(game.counter===0){
            console.log("Out of Time! Try Again");
            game.timeUp();
        }


    },
    loadQuestion: function(){
        timer =setInterval(game.countdown,2000);
        $('trivia').html('<h2>'+question[game.currentQuestion].question + '</h2>');
    },
    nextQuestion: function () {
        
    },
    timeUp: function (){

    },
    results: function (){

    },

    clicked: function (){

    },

    answerCorrect: function(){

    },

    answerIncorrect: function(){

    },

    reset: function(){

    },

}




//--Console.log Testing--
console.log(questions);
console.log(questions.q1);



