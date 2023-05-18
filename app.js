const quizArray = [
    {
        question: "How many planets are in the solar system?",
        options: ["8", "9", "10"],
        correct: "8",
    },

    {
        question: "What is the freezing point of water?",
        options: ["0", "-5", "-6"],
        correct: "0",
    },

    {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze"],
        correct: "Amazon",
    },

    {
        question: "How many chromosomes are in the human genome?",
        options: ["42", "44", "46"],
        correct: "46",
    },

    {
        question: "Which of these characters are friends with Harry Potter?",
        options: ["Ron Weasley", "Draco Malfoy", "Hermione Granger"],
        correct: ["Ron Weasley",  "Hermione Granger"]
    },

    {
        question: "What is the capital of Canada",
        options: ["Toronto", "Ottawa", "Vancouver"],
        correct: "Ottawa",
    },

    {
        question: "What is the Jewish New Year called?",
        options: ["Hanukkah", "Yom Kippur", "Kwanzaa"],
        correct: "Yom Kippur",
    }
]

let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let questionCount;
let scoreCount = 0;

nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        questionCount += 1;
        if (questionCount == quizArray.length) {
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            countOfQuestion.innerHTML =
                questionCount + 1 + " / " + quizArray.length + " Question";
            quizDisplay(questionCount);
            count = 11;
        }
    })
);

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
    for (let i of quizArray) {
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        countOfQuestion.innerHTML = 1 + " / " + quizArray.length + " Question";
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options [0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options [1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options [2]}</button>
    `;
        quizContainer.appendChild(div);
    }
}
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
      document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
      userOption.classList.add("correct");
      scoreCount++;
    } else {
      userOption.classList.add("incorrect");
      options.forEach((element) => {
        if (element.innerText == quizArray[questionCount].correct) {
          element.classList.add("correct");
        }
      });
    }
}
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    quizCreator();
    quizDisplay(questionCount);
}
initial();
