// select all elements 
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("scoreReport");
// create questions
let questions = [
    {
        question: "Who did the first ollie?",
        choiceA: "Alan Gelfand",
        choiceB: "Tony Hawk",
        choiceC: "Rodney Mullen",
        correct: "A"
    }, {
        question: "When were the first skateboards created?",
        choiceA: "1776",
        choiceB: "1950s",
        choiceC: "1985",
        correct: "B"
    }, {
        question: "Who landed the first 900?",
        choiceA: "Torey Pudwell",
        choiceB: "Ben Franklin",
        choiceC: "Tony Hawk",
        correct: "C"
    }, {
        question: "Who do skaters hate the most at a skatepark?",
        choiceA: "bmx",
        choiceB: "scooter riders",
        choiceC: "roller bladers",
        correct: "B"
    }
];
// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

start.addEventListener("click", startQuiz);
// start of quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    document.getElementById('timer').innerHTML =
        001 + ":" + 01;
    startTimer();
}

function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    document.getElementById('timer').innerHTML =
        m + ":" + s;
    console.log(m)
    setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec };
    if (sec < 0) { sec = "59" };
    return sec;
}

// render question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    //qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
// check Answer
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        scoreRender();
    }
}
// score render
function scoreRender() {
    scoreDiv.style.display = "block";


    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "assets/img/5.png" :
        (scorePerCent >= 60) ? "assets/img/4.png" :
            (scorePerCent >= 40) ? "assets/img/3.png" :
                (scorePerCent >= 20) ? "assets/img/2.png" :
                    "img/1.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
