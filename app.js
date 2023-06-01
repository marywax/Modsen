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

    // {
    //     question: "Which of these characters are friends with Harry Potter?",
    //     options: ["Ron Weasley", "Draco Malfoy", "Hermione Granger"],
    //     correct: "Ron Weasley",  "Hermione Granger",
    // },

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
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

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
        questionCount + 1 + " of " + quizArray.length + " Question";
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
  nextBtn.disabled = true;

};

function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
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
  nextBtn.disabled = false;

  options.forEach((element) => {
    element.disabled = true;
  });
}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  quizCreator();
  quizDisplay(questionCount);
  
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
  
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};