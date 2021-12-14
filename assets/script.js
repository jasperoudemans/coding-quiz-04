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
};

const secondQuestion = {
  questionText: "What kind of language is HTML?",
  options: [
    "A potato language",
    "A programming language",
    "A markup language",
    "An assembly language",
  ],
};

const questionsArray = [firstQuestion, secondQuestion];

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
document.querySelectorAll(".selectBtn").forEach((button) => {
  button.addEventListener("click", () => renderQuestion(1));
});

// function nextQuestion() {
//   questionCard = quetionArray[i++];
// }
