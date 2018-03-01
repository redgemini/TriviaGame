//-----Functions-----

//Remove Start Button
$(".start").on("click", function () {
    $(".start").remove();  
    game.loadQuestion();

})

//Check page for correct answer by passing through event   https://api.jquery.com/click/#click-eventData-handler
$(document).on('click','.answer-button',function(e){
      game.clicked(e);
})
//Game Questions/Answers
var questions = [
  {
    question:
      "What food does Carl eat out of a can while sitting on the roof of a house?",
    answers: [
        "Corn",
        "Pudding",
        "Beans",
        "Applesauce"
    ],
    correctAnswer: "Pudding"
  },

  {
    question: "What does Michonne stab the governor's eye with?",
    answers: [
      "Her Katana",
      "A Shard of Glass",
      "The Governor's Knife",
      "A piece of Wood"
    ],
    correctAnswer: "A Shard of Glass"
  },

  {
    question: "Who tells Rick she also has talked to a deceased loved one?",
    answers: [
        "Beth",
        "Andrea",
        "Carol",
        "Michonne"
    ],
    correctAnswer: "Michonne"
  },
  {
    question: "Who gives Carol a cherokee rose?",
    answers: [
        "Daryl",
        "Dale",
        "Sophia",
        "Andrea"
    ],
    correctAnswer: "Daryl"
  },
  {
    question: "Who lets all the walkers out of the Greene's barn?",
    answers: [
        "Hershel",
        "Carol",
        "Rick",
        "Shane"
    ],
    correctAnswer: "Shane"
  }
];

var game ={
    questions:questions,
    currentQuestion:0,
    counter:25,
    correct:0,
    incorrect:0,

    countdown: function(){
        game.counter--;
        $(".counter").html(game.counter);
        if(game.counter===0){
            console.log("Out of Time! Try Again");
            game.timeUp();
        }

    },
    loadQuestion: function(){
        //Set Timer
        timer = setInterval(game.countdown, 1000);

        //Load Question
        $(".trivia").html("<h2>" + questions[game.currentQuestion].question + "</h2>");

        //Load Answers in buttons - https://api.jquery.com/event.data/
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
        $(".trivia").append('<button class="answer.button" id=button-' + i + 
        ' "data-name="' + questions[game.currentQuestion].answers[i] + '">' + 
        questions[game.currentQuestion].answers[i] + "</button>");
        }
         
    },
    nextQuestion: function () {
        
    },
    timeUp: function (){

    },
    results: function (){

    },

    clicked: function (){
        //Clear timer
        clearInterval(timer);

        //Ifhttps://api.jquery.com/event.target/
        if($(e.target).data("name")===questions[game.currentQueston].
        correctAnswer){
            game.answerCorrect();
        }
        else {
            game.answerIncorrect();
            }
    },

    answerCorrect: function(){
        console.log("You are correct");
        clearInterval(timer);
        game.correct++;

    },

    answerIncorrect: function(){
        console.log("Eh,not this time! Try Again!")
        clearInterval(timer);
        game.incorrect++;

    },

    reset: function(){

    },

}




//--Console.log Testing--




