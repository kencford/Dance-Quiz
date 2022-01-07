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
var timeLeft = questions.length * 20;
var score = 0;

// HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var timeDiv = document.querySelector('.timer')

var questionTextEl = document.getElementById("question-text");
// console.log("questionTextEl: ", questionTextEl);
var choicesEl = document.getElementById("choices");
var endScreenEl = document.getElementById("end-screen");
var scoreEl = document.getElementById("score");

//=================
//MAIN PROCESS
//=================


// initialize timer display
timerEl.textContent = timeLeft;
startBtn.addEventListener("click", startQuiz);

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
    if (this.value !== questions[quizQuestionsIndex].answer) {
        //wrong answer
        console.log('wrong!');
        // deduct time 
        timeLeft -= 5;
    } else {
        //right answer
        console.log('correct!');
        //add to score
        score++
    }

    // Increment index for the next question
    quizQuestionsIndex++
    if (quizQuestionsIndex >= questions.length) {
        handleTicks()
        endOfQuiz();
    } else {
        askQuestions();
    }
}
function askQuestions() {
    // object that is selected by "quizQuestionsIndex"
    var currentQuestion = questions[quizQuestionsIndex];
    var question = currentQuestion.text;

    // presenting question to user
    questionTextEl.innerHTML = question;
    // button choices
    var choices = currentQuestion.choices;

    choicesEl.innerHTML = "";

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

}

// console.log(questions[1].text);
// console.log(questions[0].answer);

function handleTicks() {
    //Document time count
   
    timeLeft--;
    //Displa time count
    if (timeLeft < 0) {
        timeLeft = 0
    }
    timerEl.textContent = timeLeft;
    //0 --> false
    if (timeLeft < 0) {
      //  console.log("time is up");
        //stop timer with handle "timerId"
      //  clearInterval(timerId);
        
        //quiz ends
        endOfQuiz();
    }
    // if timed out, quiz ends
}

function endOfQuiz() {
    clearInterval(timerId);
    questionsEl.setAttribute("class", "hide");
    endScreenEl.setAttribute("class", "show");
    timerEl.textContent = "";

    console.log('in endOfQuiz');
    console.log('score :', score);

    scoreEl.textContent = score;
}
