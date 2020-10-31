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
// start of quiz
// render question
// check Answer
// score tally
// calculate total score percentage
// select image based on user score