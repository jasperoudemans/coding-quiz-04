var time = document.getElementById("time");
var seconds = 60;
var startButton = document.getElementById("startBtn");

const firstQuestion = {
  questionText: "What kind of language is JavaScript?",
  options: [
    "A styling language",
    "A programming language",
    "A markup language",
    "An assembly language",
  ],
  correctIndex: 1,
};

const secondQuestion = {
  questionText: "What kind of language is HTML?",
  options: [
    "A potato language",
    "A programming language",
    "A markup language",
    "An assembly language",
  ],
  correctIndex: 2,
};

const thirdQuestion = {
  questionText: "What kind of language is CSS?",
  options: [
    "A styling language",
    "A programming language",
    "A markup language",
    "An assembly language",
  ],
  correctIndex: 0,
};

const questionsArray = [firstQuestion, secondQuestion, thirdQuestion];

let currentIndex = 0;

function renderQuestion(index) {
  const question = questionsArray[index];
  document.getElementById("question1").textContent = question.questionText;

  question.options.forEach((option, index) => {
    document.getElementById("option" + index).textContent = option;
  });
}

function startTime() {
  time.textContent = seconds;
  var interval = setInterval(function () {
    if (seconds == 0) {
      clearInterval(interval);
    } else {
      seconds--;
      time.textContent = seconds;

      // stopQuiz();
    }
  }, 1000);

  renderQuestion(0);
}

startButton.addEventListener("click", startTime);
let score = 0;
let currentScore = document.getElementById("score");

document.querySelectorAll(".selectBtn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const optionIndex = e.currentTarget.getAttribute("data-index");
    const isCorrectOption =
      optionIndex == questionsArray[currentIndex].correctIndex;

    if (isCorrectOption) {
      score += 100;
      currentScore.textContent = "SCORE: " + score;
    } else {
      currentScore.textContent = "SCORE: " + score;
    }

    console.log({ isCorrectOption, optionIndex, currentIndex, score });
    currentIndex++;
    renderQuestion(currentIndex);
  });
});
