let stopwatch;
let startTime;
let isRunning = false;
let elapsedTimeBeforePause = 0;

function startStopwatch() {
    console.log("Start button clicked");

    if (!isRunning) {
        startTime = startTime === undefined ? Date.now() : Date.now() - elapsedTimeBeforePause;
        isRunning = true;
        stopwatch = setInterval(updateTime, 10);
    }
}

function pauseStopwatch() {
    console.log("Pause button clicked");

    if (isRunning) {
        isRunning = false;
        clearInterval(stopwatch);
        elapsedTimeBeforePause = Date.now() - startTime;
    }
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(stopwatch);
    startTime = undefined;
    updateTimerDisplay(0, 0, 0, 0);
}

function updateTime() {
    const elapsedTime = Date.now() - startTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    updateTimerDisplay(hours, minutes, seconds, milliseconds);
}

function updateTimerDisplay(hours, minutes, seconds, milliseconds) {
    document.getElementById("hr").innerText = formatTime(hours) + ":";
    document.getElementById("min").innerText = formatTime(minutes) + ":";
    document.getElementById("sec").innerText = formatTime(seconds) + ".";
    document.getElementById("ms").innerText = formatTime(milliseconds);
}

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}
