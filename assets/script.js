var time = document.getElementById("time");
var seconds = 60;
var startButton = document.getElementById("startBtn");
var question = document.getElementById("question1");
var firstQuestion = "What kind of language is JavaScript?";
var optionA = document.getElementById("option1");
var optionB = document.getElementById("option2");
var optionC = document.getElementById("option3");
var optionD = document.getElementById("option4");
var firstOption = "A styling language ";
var secondOption = "A programming language";
var thirdOption = "A markup language";
var fourthOption = "An assembly language";

question.textContent =
  "Press the Start button to begin testing your knowledge of JavaScript";
console.log(question.textContent);

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
  question.textContent = firstQuestion;
  optionA.textContent = firstOption;
  optionB.textContent = secondOption;
  optionC.textContent = thirdOption;
  optionD.textContent = fourthOption;
}

startButton.addEventListener("click", startTime);

function nextQuestion() {
  questionCard = quetionArray[i++];
}
