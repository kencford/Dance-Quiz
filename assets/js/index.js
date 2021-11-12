//================
// DATA
// Global variable for applicatoin state

var questions = [
    { 
        text: "Which of these dance musicians/musician groups did not provide music for Public Television's Civil War Series?",
        choices: ["Jay Unger and Molly Mason","Benjamin Franklin","Larry Ungar"],
        answer: "Benjamin Franklin"
    },
    {
        text: "Which of these is a latin dance?",
        choices: ["West Coast Swing","Foxtrot","Salsa"],
        answer: "Salsa"
     },
    {
        text: "Which of these dances uses three-quarter music",
        choices: ["Waltz","Rumba","Swing"],
        answer: "Waltz"
     },
]

// for looping through questions
var quizQuestionsIndex = 0;
var timerId;
var timeCount = questions.length * 15;

// HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");

var questionTextEl = document.getElementById("question-text");
console.log("questionTextEl: ", questionTextEl);
var choicesEl = document.getElementById("choices");

//=================
//MAIN PROCESS
//=================

function startQuiz() {
    console.log("startQuiz functn")
    startScreenEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "show");
    // start timer
    timerId = setInterval(handleTicks, 1000);
    // display question text
    var questionTextEl = document.getElementById("question-text");
    // display choices

    // ask questions
    askQuestions();
}

function questionClick() {
    //tbd
}
function askQuestions() {
    var currentQuestion = questions[quizQuestionsIndex];
    var question = currentQuestion.text;

    // presenting question to user
    questionTextEl.innerHTML = question;
    // button choices
    var choices = currentQuestion.choices;

    //forEach --> increments"num"
    choices.forEach (function (eachChoice, num) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class" ,"choice");
        choiceButton.setAttribute("value" , eachChoice);
        choiceButton.textContent = num + 1 + ". " + eachChoice;

        // click listener attached to each button choice
        choiceButton.onclick = questionClick;

        // add new button to parent
        choicesEl.appendChild(choiceButton);
    } );
    // Increment index for the next question
    quizQuestionsIndex++
}

console.log(questions[1].text);
console.log(questions[0].answer);

for (var i=0; i < questions.length; i++) {
    console.log(questions[i].text);
    console.log(questions[i].choices);
    console.log(questions[i].answer);
}

function handleTicks() {
    //Document time count
    timeCount--;
    //Displa time count
    timerEl.textContent = timeCount;
    //Check time count if it reaches 0 //boolean checks time count != 0
    if (!timeCount) {
        console.log("time is up");
        clearInterval(timerId);
        //quiz ends
    }
    // if timed out, quiz ends
}

startBtn.addEventListener("click", startQuiz);

