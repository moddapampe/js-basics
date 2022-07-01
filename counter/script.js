window.onload = function () {
    let clickDiv = document.getElementById("click");
    clickDiv.onclick = incrementClick;

    let resetBtn = document.getElementById("reset");
    resetBtn.onclick = resetCounter;
}

let counterVal = 0;

incrementClick = function() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter").innerHTML = val;
}