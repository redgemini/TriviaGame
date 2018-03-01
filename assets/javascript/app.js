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
    counter:25,
    unanswered:0,
    correct:0,
    incorrect:0,
    currentQuestion:0,

    //Timer set up
    countdown: function(){
        game.counter--;

        $("#counter").html(game.counter);

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
        
        //HTML
        $(".trivia").html('<h2>Time Left: <span id="counter">10</span> Seconds!</h2>');
        $(".trivia").append("<h2>" + questions[game.currentQuestion].question + "</h2>");

        //Load Answers in buttons - https://api.jquery.com/event.data/
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
        $(".trivia").append('<button class="answer.button" id=button-' + i + 
        ' "data-name="' + questions[game.currentQuestion].answers[i] + '">' + 
        questions[game.currentQuestion].answers[i] + "</button>");
        }
    
    },
    nextQuestion: function () {
        //Restart
        game.counter=5;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

        //Restart HTML
     },
    timeUp: function (){
        //Clear Timer
        clearInterval (timer);

        //HTML
         $(".trivia").html("<h1>Time is Up!</h1>");
         $(".trivia").append("<h3>The correct Answer is:" + questions[game.currentQuestion].correctAnswer + " </h3>");
         $(".trivia").append("<span>" + questions[game.currentQuestion].image + "</span>");
         
         //
         if (game.currentQuestion == questions.length - 1) {
           setTimeout(game.results, 2 * 1000);
         } else {
           setTimeout(game.nextQuestion, 2 * 1000);
         }


    },
    results: function (){
        //Clear Timer
        clearInterval(timer);

        //HTML
        
                        },

    clicked: function (){
        //Clear timer
        clearInterval(timer);

        //Connect Clicked Button with correct answer - https://api.jquery.com/event.target/
        if($(e.target).data("name")===questions[game.currentQuestion].
        correctAnswer){
        game.answerCorrect();
        }else{
        game.answerIncorrect();
        }
    },

    answerCorrect: function(){
        console.log("You are correct");
        clearInterval(timer);
        game.correct++;
        $('.trivia').html('<h2>You are Correct!</h2>');

        if(game.currentQuestion===questions.length-1){
        setTimeout(game.results,1000);
        }else{
        setTimeout(game.nextQuestion,1000);
        }
    },

    answerIncorrect: function(){
        console.log("Ah! So Close! Try Again!")
        clearInterval(timer);
        game.incorrect++;
        $(".trivia").html('<h2>Ah! So Close! Try Again! </h2>');

        if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 1000);
        } else {
        setTimeout(game.nextQuestion, 1000);
        }
    },

    reset: function(){

    },

}




//--Console.log Testing--




