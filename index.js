window.onload = function() {

let tens = 00;
let seconds = 00;
const tensElement = document.getElementById('tens');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
let interval;


startButton.onclick = function() {
    clearInterval(interval);
    interval = setInterval(timer, 10);
}

stopButton.onclick =  function() {
    clearInterval(interval);
}

resetButton.onclick = function() {
    clearInterval(interval);
    tens = 00;
    seconds = 00;
    tensElement.innerHTML = tens;
    secondsElement.innerHTML = seconds;
}

function timer() {
    tens++;
    if(tens <= 9) {
        tensElement.innerHTML = '0' + tens;
    }
    if(tens > 9) {
        tensElement.innerHTML = tens;
    }
    if(tens > 99) {
        seconds++;
        secondsElement.innerHTML = seconds;
        tens = 0;
        tensElement.innerHTML = tens;
    }
    if(seconds <= 9) {
        secondsElement.innerHTML =  '0' + seconds
    }
}
}