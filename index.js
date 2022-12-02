// IMPORTANT: Alt + 251 = square root and Alt + 0247 = division symbol
const calculatorContainer = document.getElementById("calculator_container");
const calculatorDisplay = document.getElementById("calculator_display");
// const numberButtonElement = document.getElementById("number_button_7");
const numberButtonElement = document.getElementsByClassName("number_button");
const operatorButtonElement = document.getElementsByClassName("operator_button");
const functionButtonElement = document.getElementsByClassName("function_button");
const answerButtonElement = document.getElementsByClassName("answer_button");
const memoryButtonElement = document.getElementsByClassName("memory_button");
const memoryButtonPressed = document.querySelectorAll(".memory_button");
const numberButtonPressed = document.querySelectorAll(".number_button");
const operatorButtonPressed = document.querySelectorAll(".operator_button");
const functionButtonPressed = document.querySelectorAll(".function_button");
const answerButtonPressed = document.querySelectorAll(".answer_button");
const allButtons = document.querySelectorAll("button");
let operator = null;
let numberTobeDisplayed = "";
let totalItemsDisplayed = "0";
let answer = 0;
let flag = 0;
let flagOperater = 0;
let number1 = 0;
let number2 = 0;


console.log("All button elements: ", allButtons);

memoryButtonPressed.forEach((element) => {
    element.addEventListener("click", memoryButtonClicked);
})
numberButtonPressed.forEach((element) => {
    element.addEventListener("click", numberButtonClicked);
})
operatorButtonPressed.forEach((element) => {
    element.addEventListener("click", operatorButtonClicked);
})
functionButtonPressed.forEach((element) => {
    element.addEventListener("click", functionButtonClicked);
})
answerButtonPressed.forEach((element) => {
    element.addEventListener("click", answerButtonClicked);
})

function memoryButtonClicked(e) {
    console.log(e.target.innerText);
}

function numberButtonClicked(e) {
    let temporaryNumberVariable = e.target.innerText;
    console.log(e.target.innerText);
    if (flag === 1) {
        numberTobeDisplayed = "";
        calculatorDisplay.innerText = numberTobeDisplayed;
        flag = 0;
    }
    if (numberTobeDisplayed.length >= 1 && operator === null) {
        // numberTobeDisplayed = numberTobeDisplayed + temporaryNumberVariable;
        numberTobeDisplayed += temporaryNumberVariable;
    } else if (numberTobeDisplayed.length >= 1 && operator == "+") {
        answer += numberTobeDisplayed;
        numberTobeDisplayed += temporaryNumberVariable;
        console.log(`the answer so far is ${answer}`);
    }
    else {
        numberTobeDisplayed = temporaryNumberVariable;
        calculatorDisplay.innerText = numberTobeDisplayed;
    }
    console.log(`this is the number to be displayed ${numberTobeDisplayed}`);
    console.log(`This is the length of the number to be displayed ${numberTobeDisplayed.length}`);
    calculatorDisplay.innerText = numberTobeDisplayed;
}

function operatorButtonClicked(e) {
    let temporaryOperatorVariable = e.target.innerText;
    console.log(e.target.innerText);
    if (temporaryOperatorVariable === "+") {
        operator = "+";
        numberTobeDisplayed = "";
        flagOperater = 1;
    }
}

function functionButtonClicked(e) {
    let temporaryFunctionVariable = e.target.innerText;
    console.log(e.target.innerText);
    if (temporaryFunctionVariable === "C") {
        numberTobeDisplayed = "0";
        calculatorDisplay.innerText = numberTobeDisplayed;
        flag = 1
    }
}
function answerButtonClicked(e) {
    let temporaryFunctionVariable = e.target.innerText;
    console.log(e.target.innerText);
    console.log(answer);
    if (temporaryFunctionVariable === "=") {
        calculatorDisplay.innerText = answer;
        flag = 0;
    }
}

function memoryButtonClicked(e) {
    let temporaryFunctionVariable = e.target.innerText;
    console.log(e.target.innerText);
    console.log(answer);
}

// const calculatorButtonsList = document.querySelectorAll("#calculator_container");
// const calculatorButtonsList1 = document.querySelectorAll(".memory_button");
// console.log(calculatorButtonsList);
// console.log(calculatorButtonsList1);
// for (i = 0; i < calculatorButtonsList1.length; i++) {
//     x = document.getElementById(calculatorButtonsList1[i]);
//     x.addEventListener("click", buttonSelected);
// }

// operatorButtonElement.addEventListener("click", buttonSelected);
// functionButtonElement.addEventListener("click", buttonSelected);
// answerButtonElement.addEventListener("click", buttonSelected);
// memoryButtonElement.addEventListener("click", buttonSelected);


totalItemsDisplayed = calculatorDisplayProcess(numberTobeDisplayed, totalItemsDisplayed);

//functions
function calculatorDisplayProcess(numberTobeDisplayed, totalItemsDisplayed) {
    totalItemsDisplayed = totalItemsDisplayed + numberTobeDisplayed;
    calculatorDisplay.innerText = totalItemsDisplayed;
    return totalItemsDisplayed;
}
// number display
// function buttonSelected(e) {
//     e.preventDefault();
//     buttonPressed = e.srcElement.firstChild.textContent;
//     console.log(buttonPressed);
//     num1 = buttonPressed;
    // console.log(e);
    // console.log(numberButtonElement);
    // console.log("Button pressed");
    // console.log(e.target);
    // console.log(e.srcElement.firstChild.innertext);
    // console.log(e.srcElement.firstChild.nodeValue);
    // console.log(e.srcElement.firstChild.textContent);

// }
// function eventListenerCreator(buttonForEventListener) {
//     button = document.getElementById(`number_button_${buttonLabel}`);

//     button.addEventListener("click", buttonSelected)
// }

