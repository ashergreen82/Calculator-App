const calculatorContainer = document.getElementById("calculator_container");
const calculatorDisplay = document.getElementById("calculator_display");
// const numberButtonElement = document.getElementById("number_button_7");
const numberButtonElement = document.getElementsByClassName("number_button");
const operatorButtonElement = document.getElementsByClassName("operator_button");
const functionButtonElement = document.getElementsByClassName("function_button");
const answerButtonElement = document.getElementsByClassName("answer_button");
const memoryButtonElement = document.getElementsByClassName("memory_button");
let num1 = 0
let num2 = 0
let operator = null
let numberTobeDisplayed = "0";
let totalItemsDisplayed = "0";
// numberButtonElement.addEventListener("click", buttonSelected);
// for (i = 0; i < 10; i++) {
//     numberButtonEventListenerCreator = document.getElementById(`number_button_${i}`);
//     numberButtonEventListenerCreator.addEventListener("click", buttonSelected);
// }

const calculatorButtonsList = document.querySelectorAll("#calculator_container");
const calculatorButtonsList1 = document.querySelectorAll(".memory_button");
console.log(calculatorButtonsList);
console.log(calculatorButtonsList1);
for (i = 0; i < calculatorButtonsList1.length; i++) {
    x = document.getElementById(calculatorButtonsList1[i]);
    x.addEventListener("click", buttonSelected);
}

// operatorButtonElement.addEventListener("click", buttonSelected);
// functionButtonElement.addEventListener("click", buttonSelected);
// answerButtonElement.addEventListener("click", buttonSelected);
// memoryButtonElement.addEventListener("click", buttonSelected);
// number button creation (Alt + 251 = square root and Alt + 0247 = division symbol)
// buttonCreator("MC");
// buttonCreator("MR");
// buttonCreator("M-");
// buttonCreator("M+");
// buttonCreator("√");
// for (i = 7; i < 10; i++) {
//     buttonCreator(i);
// }
// buttonCreator("÷");
// buttonCreator("+/-");
// for (i = 4; i < 7; i++) {
//     buttonCreator(i);
// }
// buttonCreator("X");
// buttonCreator("C");
// for (i = 1; i < 4; i++) {
//     buttonCreator(i);
// }
// buttonCreator("-");
// buttonCreator("AC");
// buttonCreator(0);
// buttonCreator(".");
// buttonCreator("=");
// buttonCreator("+");

totalItemsDisplayed = calculatorDisplayProcess(numberTobeDisplayed, totalItemsDisplayed);

//functions
function calculatorDisplayProcess(numberTobeDisplayed, totalItemsDisplayed) {
    totalItemsDisplayed = totalItemsDisplayed + numberTobeDisplayed;
    calculatorDisplay.innerText = totalItemsDisplayed;
    return totalItemsDisplayed;
}
// number display
function buttonSelected(e) {
    e.preventDefault();
    buttonPressed = e.srcElement.firstChild.textContent;
    console.log(buttonPressed);
    num1 = buttonPressed;
    // console.log(e);
    // console.log(numberButtonElement);
    // console.log("Button pressed");
    // console.log(e.target);
    // console.log(e.srcElement.firstChild.innertext);
    // console.log(e.srcElement.firstChild.nodeValue);
    // console.log(e.srcElement.firstChild.textContent);

}
function eventListenerCreator(buttonForEventListener) {
    button = document.getElementById(`number_button_${buttonLabel}`);

    button.addEventListener("click", buttonSelected)
}

function buttonCreator(buttonLabel) {
    const createButtonElement = document.createElement("button");
    createButtonElement.innerText = buttonLabel;
    createButtonElement.setAttribute("class", "number_button");
    createButtonElement.setAttribute("id", `number_button_${buttonLabel}`);
    calculatorContainer.appendChild(numberButtonElement);
    numberTobeDisplayed = numberButtonElement.addEventListener("click", buttonSelected);
}
