//-----Functions-----//

//Remove Start Button
$(".start").on("click", function () {
    $(".start").remove();  
    game.loadQuestion();

})

//Check page for correct answer by passing through event   https://api.jquery.com/click/#click-eventData-handler
$(document).on('click','.answer-button',function(e){
  console.log(e);
      game.clicked($(e.target).text());
})
                                //-----Game Questions/Answers-----//
var questions = [
  {
    question:"What food does Carl eat out of a can while sitting on the roof of a house?",
    answers: ["Corn", "Pudding", "Beans", "Applesauce"],
    correctAnswer: "Pudding"
  },
  {
    question: "What does Michonne stab the governor's eye with?",
    answers: ["Her Katana","A Shard of Glass","The Governor's Knife","A piece of Wood"],
    correctAnswer: "A Shard of Glass"
  },

  {
    question: "Who tells Rick she also has talked to a deceased loved one?",
    answers: ["Beth", "Andrea", "Carol", "Michonne"],
    correctAnswer: "Michonne"
  },
  {
    question: "Who gives Carol a cherokee rose?",
    answers: ["Daryl", "Dale", "Sophia", "Andrea"],
    correctAnswer: "Daryl"
  },
  {
    question: "Who lets all the walkers out of the Greene's barn?",
    answers: ["Hershel", "Carol", "Rick", "Shane"],
    correctAnswer: "Shane"
  },
  {
    question: "Who was killed by Negan in the first episode of season 8?",
    answers: ["Abraham and Maggie","Glenn and Maggie","Rick and Daryl", "Abraham and Glenn"],
    correctAnswer: "Abraham and Glenn"
  },
  {
    question: "What is Negan's bat called",
    answers: ["Betty", "Lucy", "Lucille", "Lucky"],
    correctAnswer: "Lucille"
  },
  {
    question: "What is the king called that carol and Morgan find?",
    answers: ["King Ezekiel", "King Lordroth", "King Sweden", "King Walkers"],
    correctAnswer: "King Ezekiel"
  },
  
  {
    question: "Who claimed to have worked on the Human Genome Project?",
    answers: ["Abraham", "Eugene", "Tara", "Rosita"],
    correctAnswer: "Eugene"
  },
  {
    question: "Which game do Beth and Daryl play while getting drunk on moonshine?",
    answers: ["Two truths and a lie", "Poker", "Never Have I ever", "Truth or Dare"],
    correctAnswer: "Never Have I Ever"
  },
  {
    question: "Who said this: 'Anger makes you stupid.Stupid gets you killed?''",
    answers: ["TCarol", "Daryl", "Rick", "Michonne"],
    correctAnswer: "Michonne"
  },


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
    game.counter = 15;
    $("#counter").html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();

    //Restart HTML
  },
  timeUp: function() {
    //Clear Timer
    clearInterval(timer);
    game.unanswered++;

    //HTML
    $(".trivia").html("<h1>Time is Up!</h1>");
    $(".trivia").append(
      "<h3>The correct Answer is:" +
        questions[game.currentQuestion].correctAnswer +
        " </h3>"
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

  answerCorrect: function () {
    console.log("You're Right!");
    clearInterval(timer);
    game.correct++;
    $(".trivia").html("<h2>You got it!</h2>");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 2*1000);
    } else {
      setTimeout(game.nextQuestion, 2*1000);
    }
  },

  answerIncorrect: function() {
    console.log("So Close! Try Again!");
    clearInterval(timer);
    game.incorrect++;
    $(".trivia").html("<h2>So Close! Try Again! </h2>");
    $(".trivia").append("<h3>The correct Answer is:" 
        + questions[game.currentQuestion].correctAnswer + " </h3>");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 2*1000);
    } else {
      setTimeout(game.nextQuestion, 2*1000);
    }
  },

  reset: function() {
    game.counter = 15;
    game.unanswered = 0;
    game.correct=0;
    game.incorrect=0;
    game.currentQuestion=0;
    game.loadQuestion();

  }
}

$(document).on('click', '#reset', function (){
  game.reset();
})


//--Console.log Testing--
console.log(game.counter)
console.log(game.currentQuestion)
console.log(game.correct)
console.log(game.incorrect)



//TA questions
//Correct answers are not working
