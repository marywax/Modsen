const questions = [
    {
        question:"How many planets are in the solar system?",
        answer:["8", "9", "10"],
        correct: "8",
    },
    
    {
        question:"What is the freezing point of water?",
        answer:["0", "-5", "-6"],
        correct: "0",
    },

    {
        question:"What is the longest river in the world?",
        answer:["Nile", "Amazon", "Yangtze"],
        correct: "Amazon",
    },

    {
        question:"How many chromosomes are in the human genome?",
        answer:["42","44","46"],
        correct: "46",
    },

    {
        question:"Which of these characters are friends with Harry Potter?",
        answer:["Ron Weasley","Draco Malfoy","Hermione Granger"],
        correct: ["Ron Weasley","Hermione Granger"]
    },

    {
        question:"What is the capital of Canada",
        answer:["Toronto","Ottawa","Vancouver"],
        correct: "Ottawa",
    },

    {
        question:"What is the Jewish New Year called?",
        answer:["Hanukkah","Yom Kippur","Kwanzaa"],
        correct: "Yom Kippur",
    }
]

const titleContainer = document.querySelector(".title");
const answersContainer = document.querySelector(".answers");
const submitButton = document.querySelector(".submit");
const hintTContainer = document.querySelector(".hint");



let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitButton.onclick=checkAnswer;


function clearPage(){
    titleContainer.innerHTML = "";
    answersContainer.innerHTML="";
    hintTContainer.innerHTML="";
};

function showQuestion(){
    //Question
    const headerTemplate = ` <h1 class="title">%title%</h1>`;
    const title = headerTemplate.replace("%title%",questions[questionIndex]['question']);
    titleContainer.innerHTML=title;

    //Answers
    for(let item of (questions[questionIndex]['answer'])){
        const answerTemplate =`
        <li>
        <label>
            <input type="checkbox" class="answer">
            <span>%answer%</span>
        </label>
        </li>`;
        const answerHTML = answerTemplate.replace("%answer%",item);
        answersContainer.innerHTML += answerHTML;
    }
}

function checkAnswer(){
    const checkedCheckbox = answersContainer.querySelector('input:checked');
    console.log(checkedCheckbox);
    if(!checkedCheckbox){
        submitButton.blur();
        return;
    }
}