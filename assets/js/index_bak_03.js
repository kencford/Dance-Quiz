//================
// DATA
// Global variable for applicatoin state

var questions = [
    {
        text: "Which of these dance musicians did not provide music for Public Television's Civil War Series?",
        choices: ["Jay Unger and Molly Mason", "Benjamin Franklin", "Larry Ungar"],
        answer: "Benjamin Franklin"
    },
    {
        text: "Which of these is a latin dance?",
        choices: ["West Coast Swing", "Foxtrot", "Salsa"],
        answer: "Salsa"
    },
    {
        text: "Which of these dances uses three-quarter music",
        choices: ["Waltz", "Rumba", "Swing"],
        answer: "Waltz"
    },
]

// for (var i=0; i < questions.length; i++) {
//     console.log(questions[i].text);
//     console.log(questions[i].choices);
//     console.log(questions[i].answer);
// }

// for looping through questions
var quizQuestionsIndex = 0;
var timeLeft = questions.length * 3;

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
    // start timer and gives it a handle "timerId"
    timerId = setInterval(handleTicks, 1000);
    // display question text
    var questionTextEl = document.getElementById("question-text");
    // display choices
    
    // ask questions
    askQuestions();
}

function questionClick() {
    //tbd
    console.log("inside questionClick");
    console.log('selected answer: ' + this.value);
    // apparently quizQuestionINdes was already incremented
    // in choices
    console.log('answer is: ' + questions[quizQuestionsIndex].answer);
    if (this.value !== questions[quizQuestionsIndex - 1 ].answer) {
        //wrong answer
        console.log('wrong!');
        // deduct time 
        timeLeft
    } else {
        //right answer
        console.log('correct!');    
        //add to score
    }
    askQuestions();
}
function askQuestions() {
    // object that is selected by "quizQuestionsIndex"
    var currentQuestion = questions[quizQuestionsIndex];
    var question = currentQuestion.text;

    // presenting question to user
    questionTextEl.innerHTML = question;
    // button choices
    var choices = currentQuestion.choices;

    //forEach --> increments"num"
    choices.forEach(function (eachChoice, num) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", eachChoice);
        choiceButton.textContent = num + 1 + ". " + eachChoice;

        // click listener attached to each button choice
        choiceButton.onclick = questionClick;

        // add new button to parent
        choicesEl.appendChild(choiceButton);
    });
    // Increment index for the next question
    quizQuestionsIndex++

    if (quizQuestionsIndex >= questions.length) {
        endOfQuiz(); 
    }
}

// console.log(questions[1].text);
// console.log(questions[0].answer);

function endOfQuiz() {

}

function handleTicks() {
    //Document time count
    timeLeft--;
    //Displa time count
    timerEl.textContent = timeLeft;
    //0 --> false
    if (!timeLeft) {
        console.log("time is up");
        //stop timer with handle "timerId"
        clearInterval(timerId);
        //quiz ends
    }
    // if timed out, quiz ends
}

// initialize timer display
timerEl.textContent = timeLeft;
startBtn.addEventListener("click", startQuiz);

