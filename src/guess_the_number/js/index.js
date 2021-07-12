/** Random number range from 0-100 */
const LIMIT = 100;
const STATUS_TEXT = {
    win: "Wohoo Wohoo you are a genius!",
    greater: "You're number is greater!",
    smaller: "You're number is smaller!"
}
function generateNumber() {
    return Math.floor(Math.random() * LIMIT);
}

const generatedNumber = generateNumber();

function getDomElements() {
    return {
        input: document.querySelector('#num'),
        btn: document.querySelector('#num-btn'),
        numStatus: document.querySelector('.num-status')
    }
}

const domNodes = getDomElements();

function evaluateAndUpdate(userNum) {
    if(userNum === generatedNumber) {
        domNodes.numStatus.innerHTML = STATUS_TEXT.win;
    } else if(userNum > generatedNumber) {
        domNodes.numStatus.innerHTML = STATUS_TEXT.greater;
    } else {
        domNodes.numStatus.innerHTML = STATUS_TEXT.smaller;
    }
}

let userValue;
domNodes.input.addEventListener('input', function(e) {
    userValue = +e.target.value;
})

domNodes.input.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        evaluateAndUpdate(userValue);
    }
})
domNodes.btn.addEventListener('click', function() {
    evaluateAndUpdate(userValue);
})