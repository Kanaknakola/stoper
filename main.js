const startBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const divTxt = document.querySelector(".time div");
let intervalID;

let time = 0;
let active = false;

const timer = () => {
    if (!active) {
        active = !active;
        startBtn.textContent = "Pauza";
        intervalID = setInterval(start, 10);
    } else {
        active = !active;
        startBtn.textContent = "Start";
        clearInterval(intervalID);
    }  
}

const start = () => {
    time++;
    divTxt.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    active = false;
    clearInterval(intervalID);
    startBtn.textContent = "Start";
    divTxt.textContent = "---";
}

startBtn.addEventListener('click', timer);
resetBtn.addEventListener('click', reset);