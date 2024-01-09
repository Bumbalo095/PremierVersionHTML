var timerButton = document.getElementById('timerButton');
var timerDisplay = document.getElementById('timerDisplay');
var timer = null;
var secondsElapsed = 0;

timerButton.addEventListener('click', function() {
    if (timer) {
        // If the timer is already running, stop it
        clearInterval(timer);
        timer = null;
        timerButton.textContent = 'Start Timer';
    } else {
        // Start the timer
        timer = setInterval(updateTimer, 1000);
        timerButton.textContent = 'Stop Timer';
    }
});

function updateTimer() {
    secondsElapsed++;
    var hours = Math.floor(secondsElapsed / 3600);
    var minutes = Math.floor((secondsElapsed - (hours * 3600)) / 60);
    var seconds = secondsElapsed - (hours * 3600) - (minutes * 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerDisplay.textContent = hours + ':' + minutes + ':' + seconds;
}
