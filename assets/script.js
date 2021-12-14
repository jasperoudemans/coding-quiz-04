
var time = document.getElementById("time");
var seconds = 10;
var startButton = document.getElementById("startBtn");

function startTime() {
    var interval = setInterval(function() {
        seconds--;
        time.textContent = seconds;
        
        if (seconds === 0) {
            clearInterval(interval);
            stopGame();
        }
    }, 1000);
}

startButton.addEventListener("click", startTime);

var questionCard = document.querySelector(".questionDiv");
var header = document.createElement("h3");
header.textContent = "test text";
questionCard.appendChild(header);
console.log(document.body.questionCard);
