// IMPORTANT: Alt + 251 = square root and Alt + 0247 = division symbol
const calculatorContainer = document.getElementById("calculator_container");
const calculatorDisplay = document.getElementById("calculator_display");
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
let answer = null;
let flagEqual = 0;
let flagOperater = 0;
let number1 = null;
let number2 = null;
let numberEnteredFlag = 0;
let memoryButtonValue = 0;

// initial calculator display
calculatorDisplay.innerText = "0";

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
    let temporaryMemoryVariable = e.target.innerText;
    console.log(e.target.innerText);
    memoryOperations(temporaryMemoryVariable);
}

// Number Buttons
function numberButtonClicked(e) {
    let temporaryNumberVariable = e.target.innerText;
    console.log(e.target.innerText);
    numberEnteredFlag = 1

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
            calculatorDisplay.innerText = temporaryNumberVariable;
            number2 = temporaryNumberVariable;

            // Muliple addtion handler
        } else if (number2 != null && flagOperater > 1 && operator === "+") {
            if (numberEnteredFlag == 1) {
                number2 += temporaryNumberVariable;
            } else {
                number2 += temporaryNumberVariable;
            }
            calculator_display.innerText = number2;
            numberEnteredFlag = 1;
            // Muliple subraction handler
        } else if (number2 != null && flagOperater > 1 && operator === "-") {
            if (numberEnteredFlag == 1) {
                number2 += temporaryNumberVariable;
            } else {
                number2 += temporaryNumberVariable;
            }
            calculator_display.innerText = number2;
            numberEnteredFlag = 1;
        } else if (number2 != null && flagOperater > 1 && operator === "X") {
            if (numberEnteredFlag == 1) {
                number2 += temporaryNumberVariable;
            } else {
                number2 += temporaryNumberVariable;
            }
            calculator_display.innerText = number2;
            numberEnteredFlag = 1;
        } else if (number2 != null && flagOperater > 1 && operator === "÷") {
            if (numberEnteredFlag == 1) {
                number2 += temporaryNumberVariable;
            } else {
                number2 += temporaryNumberVariable;
            }
            calculator_display.innerText = number2;
            numberEnteredFlag = 1;
        }
        else {
            number2 += temporaryNumberVariable;
            calculatorDisplay.innerText = number2
        }
    }
    if (operator == null) {
        // if (first number is null)
        numberTobeDisplayed += temporaryNumberVariable;
        calculatorDisplay.innerText = numberTobeDisplayed;
        number1 = numberTobeDisplayed; // set first number to the button that was pressed
    }
}

// Operator Function
function operatorButtonClicked(e) {
    let temporaryOperatorVariable = e.target.innerText;
    console.log(e.target.innerText);
    numberEnteredFlag = 0;
    if (temporaryOperatorVariable === "√") {
        calculatorDisplay.innerText = Number(Number(Math.sqrt(calculatorDisplay.innerText).toFixed(3)));
    }
    if (temporaryOperatorVariable === "+/-") {
        const currentDisplay = calculatorDisplay.innerText;
        let temporarySignValue = 0;
        signTest = Math.sign(currentDisplay);
        if (signTest === 1) {
            temporarySignValue = Number((Number(-Math.abs(currentDisplay).toFixed(3))));
            calculatorDisplay.innerText = temporarySignValue;
            number1 = temporarySignValue;
        }
        if (signTest === -1) {
            calculatorDisplay.innerText = Number((Number(Math.abs(currentDisplay).toFixed(3))));
            calculatorDisplay.innerText = temporarySignValue;
            number1 = temporarySignValue;
        }
    }

    // if operator is not null AND first number is not null AND second number is not null
    if (operator !== null && number1 !== null && number2 !== null) {
        if (operator === "+") {
            number1 = Number(number1.toFixed(3)) + Number(number2.toFixed(3));
        }
        if (operator === "-") {
            number1 = Number(number1.toFixed(3)) - Number(number2.toFixed(3));
        }
        if (operator === "X") {
            number1 = Number(number1.toFixed(3)) * Number(number2.toFixed(3));
        }
        if (operator === "÷") {
            number1 = Number(number1.toFixed(3)) / Number(number2.toFixed(3));
        }
        // display the result on the screen
        calculator_display.innerText = number1;
        // set "number2" to null
        number2 = null;
    }

    operator = temporaryOperatorVariable;
}

// Clear Function
function functionButtonClicked(e) {
    let temporaryFunctionVariable = e.target.innerText;
    console.log(e.target.innerText);
    if (temporaryFunctionVariable === "C") {
        clearDisplay();
        partialReset();
    }

    if (temporaryFunctionVariable === "AC") {
        clearDisplay();
        fullReset();
    }
}

// Equals Function
function equalButtonClicked(e) {
    let temporaryFunctionVariable = e.target.innerText;
    console.log(temporaryFunctionVariable);
    console.log(number1);
    // if (operator is equal to plus sign)
    if (operator == "+") {
        additionOperation();
    }
    else if (operator == "-") {
        subtractionOperation();
    }
    else if (operator == "X") {
        multiplicationOperation();
    }
    else if (operator == "÷") {
        divisionOperation();
    }
    flagEqual = 1
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

function fullReset() {
    numberTobeDisplayed = "";
    calculatorDisplay.innerText = "0";
    flagEqual = 0;
    temporaryNumberVariable = "";
    number1 = null;
    number2 = null;
    answer = null;
    flagOperater = 0;
    operator = null;
    memoryButtonValue = "0"
}

// Operator functions
function additionOperation() {
    number1 = Number(number1) + Number(Number(number2).toFixed(3));
    numberTobeDisplayed = number1;
    calculatorDisplay.innerText = numberTobeDisplayed;
    operator = "+";
    flagOperater += 1;
    numberEnteredFlag = 0;
    number2 = ""
}

function subtractionOperation() {
    number1 = Number(number1) - Number(Number(number2).toFixed(3));
    numberTobeDisplayed = number1;
    calculatorDisplay.innerText = numberTobeDisplayed;
    operator = "-";
    flagOperater += 1;
    numberEnteredFlag = 0;
    number2 = ""
}

function multiplicationOperation() {
    number1 = Number(number1) * Number(Number(number2).toFixed(3));
    numberTobeDisplayed = number1;
    calculatorDisplay.innerText = numberTobeDisplayed;
    operator = "*";
    flagOperater += 1;
    numberEnteredFlag = 0;
    number2 = ""
}

function divisionOperation() {
    number1 = Number(number1) / Number(Number(number2).toFixed(3));
    numberTobeDisplayed = number1;
    calculatorDisplay.innerText = numberTobeDisplayed;
    operator = "÷";
    flagOperater += 1;
    numberEnteredFlag = 0;
    number2 = ""
}

function memoryOperations(temporaryMemoryVariable) {
    if (temporaryMemoryVariable == "M+") {
        memoryButtonValue = Number(memoryButtonValue) + Number(Number(calculatorDisplay.innerText).toFixed(3));
    }

    if (temporaryMemoryVariable == "M-") {
        memoryButtonValue = Number(memoryButtonValue) - Number(Number(calculatorDisplay.innerText).toFixed(3));
    }

    if (temporaryMemoryVariable == "MR") {
        calculatorDisplay.innerText = memoryButtonValue;
    }

    if (temporaryMemoryVariable == "MC") {
        memoryButtonValue = 0;
    }
}