// Data
// Blobalvariables for application state
//HTML elements
var startScreenEl = document.getElementsById(start - screen);
var startBtn = document.getElementById("start");
var questions [
    { 
        text: "My question 1",
        choices: ["answer 1","ans2","ans3"],
        answer: "answer 1"
    },
    {
        text: "My question 1",
        choices: ["answer 1","ans2","ans3"],
        answer: "answer 1"
     },
    {
        text: "My question 1",
        choices: ["answer 1","ans2","ans3"],
        answer: "answer 1"
     },
]


function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
}

console.log(questions[1].text);
console.log(questions[0].answer);

for (var i=0; i < questions.length; i++) (
    console.log(questions[i].text);
    console.log(questions[i].choices);
    console.log(questions[i].answer);
)

startBtn.addEventListener("click", startQuiz);

