//-----Functions-----
  //Generate questions Loop

  //Remove Start Button
  $(".start").on("click", function () {
    $(".start").remove();  
    game.loadQuestion();
  })
//Check page for correct answer by passing through event   https://api.jquery.com/click/#click-eventData-handler
  $(document).on('click','.answer-button', functon(e){
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
    correct: "pudding"
  },

  {
    question: "What does Michonne stab the governor's eye with?",
    answers: [
      "Her Katana",
      "A Shard of Glass",
      "The Governor's Knife",
      "A piece of Wood"
    ],
    correct: "A Shard of Glass"
  },

  {
    question: "Who tells Rick she also has talked to a deceased loved one?",
    answers: [
        "Beth",
        "Andrea",
        "Carol",
        "Michonne"
    ],
    correct: "Michonne"
  },
  {
    question: "Who gives Carol a cherokee rose?",
    answers: [
        "Daryl",
        "Dale",
        "Sophia",
        "Andrea"
    ],
    correct: "Daryl"
  },
  {
    question: "Who lets all the walkers out of the Greene's barn?",
    answers: [
        "Hershel",
        "Carol",
        "Rick",
        "Shane"
    ],
    correct: "Shane"
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
                              timer = setInterval(game.countdown, 2000);
                              //Load Question
                              $(".trivia").html("<h2>" + questions[game.currentQuestion].question + "</h2>");
                              //Load Answers in buttons - https://api.jquery.com/event.data/
                              for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                                $(".trivia").append('<button class="answers.button" id=button-' + i + ' "data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + "</button>");
                              }

                              //Generate answers loop with Radio button
                              for (var a = 0; a < questions[i].answers.length; a++) {
                                $(".trivia").append("<input type='radio' name='question-" + i + "'value='" + questions[i].answers[a] + "'>" + questions[i].answers[a]);
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

        //https://api.jquery.com/event.target/
        if($(e.target).data("name")==questions[game.correctQueston].
        correctAnswers){
            game.answerCorrect();
        }
        else {
                game.answerIncorrect();
            }
    },

    answerCorrect: function(){
        console.log("You are correct");

    },

    answerIncorrect: function(){
        console.log("Eh,not this time! Try Again!")

    },

    reset: function(){

    },

}




//--Console.log Testing--
console.log(questions);
console.log(questions.q1);
console.log(timer);



