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
let operator = null;
let numberTobeDisplayed = "";
let totalItemsDisplayed = "0";
let answer = null;
let flagEqual = 0;
let flagOperater = 0;
let number1 = null;
let number2 = null;

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
    element.addEventListener("click", equalButtonClicked);
})

function memoryButtonClicked(e) {
    console.log(e.target.innerText);
}

// Number Buttons
function numberButtonClicked(e) {
    let temporaryNumberVariable = e.target.innerText;
    console.log(e.target.innerText);

    // if equals was previoulsy pressed
    if (flagEqual === 1) {
        calculatorDisplay.innerText = temporaryNumberVariable;
        partialReset();
    }
    // if (opeator button has been pressed)

    if (operator !== null) {
        //      if (second number is empty)
        if (number2 === null) {
            //          set second mumber to the button that was pressed
            number2 = temporaryNumberVariable;
        } else { // else
            //          second number is not empty:  Append to the second number
            number2 += temporaryNumberVariable;
        }
        calculatorDisplay.innerText = number2
        console.log(`The answer so far is ${answer}`);
    }
    if (operator == null) {
        // if (first number is null)
        numberTobeDisplayed += temporaryNumberVariable;
        calculatorDisplay.innerText = numberTobeDisplayed;
        number1 = numberTobeDisplayed; // set first number to the button that was pressed
    }
    // else
    // append button that was pressed to first number

    //  render the first number in the display

    // if (flagOperater === 1) {

    // }
    // if (flag === 1) {
    //     numberTobeDisplayed = "";
    //     calculatorDisplay.innerText = numberTobeDisplayed;
    //     flag = 0;
    // }
    // if (temporaryNumberVariable.length >= 1 && operator === null) {
    //     // numberTobeDisplayed = numberTobeDisplayed + temporaryNumberVariable;
    //     numberTobeDisplayed += temporaryNumberVariable;
    // } else if (temporaryNumberVariable.length >= 1 && operator == "+") {

    // }
    // else {
    //     numberTobeDisplayed = temporaryNumberVariable;
    //     calculatorDisplay.innerText = numberTobeDisplayed;
    // }
    // console.log(`This is the number to be displayed: ${numberTobeDisplayed}`);
    // console.log(`This is the length of the number to be displayed: ${numberTobeDisplayed.length}`);
    // calculatorDisplay.innerText = numberTobeDisplayed;
    // number1 = Number(numberTobeDisplayed);
}

// Operator Function
function operatorButtonClicked(e) {
    let temporaryOperatorVariable = e.target.innerText;
    console.log(e.target.innerText);

    // Addition
    if (temporaryOperatorVariable === "+") {
        if (flagOperater == 1) {
            answer = Number(number1) + Number(number2);
        } else if (flagOperater > 1) {
            answer += Number(number2);
        }
        flagOperater += 1;
        operator = "+";
        if (flagOperater > 1) {
            numberTobeDisplayed = answer
            calculatorDisplay.innerText = numberTobeDisplayed;
        } else {
            numberTobeDisplayed = "";
        }
    }

    // Subtraction
    // Multiplication
    // Division
}

// Clear Function
function functionButtonClicked(e) {
    let temporaryFunctionVariable = e.target.innerText;
    console.log(e.target.innerText);
    if (temporaryFunctionVariable === "C") {
        clearDisplay();
        partialReset();
    }
}

// Equals Function
function equalButtonClicked(e) {
    let temporaryFunctionVariable = e.target.innerText;
    console.log(e.target.innerText);
    console.log(answer);
    // if (operator is equal to plus sign)
    if (operator == "+") {
        if (flagOperater > 1) {
            calculatorDisplay.innerText = answer;
        } else {
            answer = Number(number1) + Number(number2);
            calculatorDisplay.innerText = answer;
            flagEqual = 1;
        }
        // partialReset();
        // operator = null;
        // number1 = null;
        // number2 = null;
        // flagOperater = 0;
    }
    // then add number and number2 together
    // display result on the display
}

// Clear display
function clearDisplay() {
    numberTobeDisplayed = "0";
    calculatorDisplay.innerText = numberTobeDisplayed;
    flagEqual = 0
}

function partialReset() {
    numberTobeDisplayed = "";
    calculatorDisplay.innerText = "0";
    flagEqual = 0;
    temporaryNumberVariable = "";
    number1 = null;
    number2 = null;
    answer = null;
    flagOperater = 0;
    operator = null;
}

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
