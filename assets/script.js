var time = document.getElementById("time");
var seconds = 10;
var startButton = document.getElementById("startBtn");
var question = document.getElementById("question1");

question.textContent = "Falafel";
console.log(question.textContent);

function startTime() {
  var interval = setInterval(function () {
    if (seconds == 0) {
      clearInterval(interval);
    } else {
      seconds--;
      time.textContent = seconds;
      // stopQuiz();
    }
  }, 1000);
}

startButton.addEventListener("click", startTime);

function nextQuestion() {
  questionCard = quetionArray[i++];
}
