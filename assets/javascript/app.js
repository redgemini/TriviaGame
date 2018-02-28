//Pseudocoding
//HW Instructions:  
    //You'll create a trivia game that shows only one question until the player answers it or their time runs out.
    //If the player selects the correct answer, show a screen congratulating them for choosing the right option.
        //After a few seconds, display the next question -- do this without user input.
    //The scenario is similar for wrong answers and time-outs.
    //If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
    //If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, 
        //then show the next question.
    //On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
//Elements Needed:
//Set of questions/answers
//25 second timer for each question - next question populates when time runs out
//click function to select correct answer
//If statements:  
    //If player is correct - 1) Show congratulatuons 2)Go to next question
    //If player runs out of time - 1) Tell Player "Time is up" 2) Display correct answer 3) Go to next question
    //If player is wrong - 1) Tell Player "Selected wrong answer" 2) Display correct
//window.onload = function () {
//$("#round").on("click", stopwatch.recordround);
//$("#reset").on("click", stopwatch.reset);
//$("#start").on("click", stopwatch.start);
//};

$(".start").on("click", function() {
    for(var i=0;i<questions.length;i++){
        $(".trivia").append("<h2>" + questions[i].questions+"</h2>");
         for (var a = 0; a<questions[i].answers.length;a++) {
             $(".trivia").append ("input type='radio' name='question-"+i+"' value='"+questions[i].answers[a]+"'>"+questions[i].answers[a])
         }
        }
})

var questions = [{
        question: "What food does Carl eat out of a can while sitting on the roof of a house?",
        choices: ["Corn", "Pudding", "Beans", "Applesauce"],
        correctAnswer: 1
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: 0
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: 0
    },
]
