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
        question : "Who did the first ollie?",
        choiceA : "Alan Gelfand",
        choiceB : "Tony Hawk",
        choiceC : "Rodney Mullen",
        correct : "A"
    },{
        question : "When were the first skateboards created?",
        choiceA : "1776",
        choiceB : "1950s",
        choiceC : "1985",
        correct : "B"
    },{
        question : "Who landed the first 900?",
        choiceA : "Torey Pudwell",
        choiceB : "Ben Franklin",
        choiceC : "Tony Hawk",
        correct : "C"
    },{
        question : "Who do skaters hate the most at a skatepark?",
        choiceA : "bmx",
        choiceB : "scooter riders",
        choiceC : "roller bladers",
        correct : "B"
    }
];
// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

start.addEventListener("click", startQuiz);
// start of quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

// render question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    //qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
// check Answer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
            // end the quiz and show the score
            scoreRender();
        }
    }
        
// score tally
// calculate total score percentage
// select image based on user score