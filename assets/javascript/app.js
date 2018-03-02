//-----Functions-----//

//Remove Start Button
$(".start").on("click", function () {
    $(".start").remove();  
    game.loadQuestion();

})

//Check page for correct answer by passing through event   https://api.jquery.com/click/#click-eventData-handler
$(document).on('click','.answer-button',function(e){
      game.clicked(e);
})
                                //-----Game Questions/Answers-----//
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
    correctAnswer: 1
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

var game = {
  questions: questions,
  counter:15,
  unanswered: 0,
  correct: 0,
  incorrect: 0,
  currentQuestion: 0,

  //Timer set up
  countdown: function() {
    game.counter--;

    $("#counter").html(game.counter);

    if (game.counter === 0) {
      console.log("Out of Time! Try Again");
      game.timeUp();
    }
  },

  //------LOAD QUESTION-----//
  loadQuestion: function() {
    //Set Timer
    timer = setInterval(game.countdown, 1000);

    //HTML
    $(".trivia").html(
      "<h2>" + questions[game.currentQuestion].question + "</h2>"
    );

    $(".trivia").html(
      '<h2>Time Left: <span id="counter">15</span> Seconds!</h2>'
    );
    //Load Question

    $(".trivia").append(
      "<h2>" + questions[game.currentQuestion].question + "</h2>"
    );

    //Load Answers in buttons - https://api.jquery.com/event.data/
    for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
      $(".trivia").append(
        '<button class="answer-button" id=button-' +
          i +
          ' "data-name="' +
          questions[game.currentQuestion].answers[i] +
          '">' +
          questions[game.currentQuestion].answers[i] +
          "</button>"
      );
    }
  },
                                //-----Next Question-----//
  nextQuestion: function() {
    //Restart
    game.counter = 5;
    $("#counter").html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();

    //Restart HTML
  },
  timeUp: function() {
    //Clear Timer
    clearInterval(timer);

    //HTML
    $(".trivia").html("<h1>Time is Up!</h1>");
    $(".trivia").append(
      "<h3>The correct Answer is:" +
        questions[game.currentQuestion].correctAnswer +
        " </h3>"
    );
    $(".trivia").append(
      "<span>" + questions[game.currentQuestion].image + "</span>"
    );

    //
    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 2 * 1000);
    } else {
      setTimeout(game.nextQuestion, 2 * 1000);
    }
  },

                                //-----RESULTS-----//
  results: function() {
    clearInterval(timer);

    //HTML
    $(".trivia").html("<h1>Game Complete!</h1>");
    $(".trivia").append("<h2>CORRECT: " + game.correct + "</h2>");
    $(".trivia").append("<h2>INCORRECT: " + game.incorrect + "</h2>");
    $(".trivia").append("<h2>UNANSWERED: " + game.unanswered + "</h2>");

    //Button Reset
    $(".trivia").append("<button id='reset'>RESET</button>");

  },

  clicked: function(value) {
    //Clear timer
    clearInterval(timer);

    //Connect Clicked Button with correct answer - https://api.jquery.com/event.target/
    if (value === questions[game.currentQuestion].correctAnswer) {
      game.answerCorrect();
    } else {
      game.answerIncorrect();
    }
  },

  answerCorrect: function() {
    console.log("You are correct");
    clearInterval(timer);
    game.correct++;
    $(".trivia").html("<h2>You are Correct!</h2>");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 1000);
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },

  answerIncorrect: function() {
    console.log("Ah! So Close! Try Again!");
    clearInterval(timer);
    game.incorrect++;
    $(".trivia").html("<h2>Ah! So Close! Try Again! </h2>");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 1000);
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },

  reset: function() {
    game.counter = 15;
    game.unanswered = 0;
    game.correct=0;
    game.incorrect=0;
    game.currentQuestion=0;

  }
}




//--Console.log Testing--
console.log(game.counter)
console.log(game.currentQuestion)
console.log(game.correct)
console.log(game.incorrect)



