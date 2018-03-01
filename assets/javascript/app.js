//-----Functions-----
  //Generate questions Loop
  $(".start").on("click", function () {
    $(".start").remove();  
    game.loadQuestion();
  })

//Game Questions/Choices
var questions = [
  {
    question1:
      "What food does Carl eat out of a can while sitting on the roof of a house?",
    choices: [
        "Corn",
        "Pudding",
        "Beans",
        "Applesauce"
    ],
    correct: "pudding"
  },

  {
    question2: "What does Michonne stab the governor's eye with?",
    choices: [
      "Her Katana",
      "A Shard of Glass",
      "The Governor's Knife",
      "A piece of Wood"
    ],
    correct: "A Shard of Glass"
  },

  {
    question3: "Who tells Rick she also has talked to a deceased loved one?",
    choices: [
        "Beth",
        "Andrea",
        "Carol",
        "Michonne"
    ],
    correct: "Michonne"
  },
  {
    question4: "Who gives Carol a cherokee rose?",
    choices: [
        "Daryl",
        "Dale",
        "Sophia",
        "Andrea"
    ],
    correct: "Daryl"
  },
  {
    question5: "Who lets all the walkers out of the Greene's barn?",
    choices: [
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
        for (var i=0; i<questions[game.currentQuestion].answers.length;i++){
            $('trivia').append('<button class="answer.button" id=button-'+i+'"data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
        }
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



