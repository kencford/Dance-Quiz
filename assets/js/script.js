var timerDisplay = document.getElementById("timer-display");
var timerValue = 100;
console.log(timerDisplay.textContent);
timerDisplay.textContent = timerValue;
var timerId;

var questionsPageEl = document.getElementById("questionsPage");
var startQuizEl = document.getElementById("startQuiz");
var strtBtn = document.getElementById("startButton");

function oneSecondHandler() {
    timerValue--;
    timerDisplay.textContent = timerValue;
}

//start button when clicked calls beginQuiz

function beginQuiz() {
    timerId = setInterval(oneSecondHandler, 1000);
    console.log(startQuizEl.classList);
    startQuizEl.setAttribute("class", "hidden") ;
    console.log(startQuizEl.classList);
    questionsPageEl.removeAttribute("class");
}
// above calls "oneSecondHandler" every 1000 mS

// beginQuiz();

// strtBtn.addEventListener("click", beginQuiz);

// alternative method
strtBtn.onclick = beginQuiz;
