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

    if (flagOperater == 1) {
        if (operator == "+") {
            answer = Number(number1) + Number(number2);
            calculator_display.innerText = answer;
        } else if (operater == "-") {
            answer = Number(number1) - Number(number2);
            calculator_display.innerText = answer;
        } else if (operator == "*") {
            answer = Number(number1) * Number(number2);
            calculator_display.innerText = answer;
        } else if (operator == "÷") {
            answer = Number(number1) / Number(number2);
            calculator_display.innerText = answer;
        }
    }
    // + operator
    if (temporaryOperatorVariable === "+") {
        additionOperation();
    }
    // - operator
    if (temporaryOperatorVariable === "-") {
        subtractionOperation();
    }
    // X operator
    if (temporaryOperatorVariable === "X") {
        multiplicationOperation();
    }
    // ÷ operator
    if (temporaryOperatorVariable === "÷") {
        divisionOperation();
    }
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
    console.log(temporaryFunctionVariable);
    console.log(answer);
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

// Operator functions
function additionOperation() {
    // if (flagOperater == 1) {
    //     answer = Number(number1) + Number(number2);
    //     // calculator_display.innerText = answer;
    // } else 
    if (flagOperater > 1 && numberEnteredFlag === 1) {
        answer += Number(number2);
        numberTobeDisplayed = answer;
        calculatorDisplay.innerText = numberTobeDisplayed;
    } else {
        numberTobeDisplayed = "";
    }
    operator = "+";
    flagOperater += 1;
    numberEnteredFlag = 0;
    number2 = ""
}

function subtractionOperation() {
    // if (flagOperater == 1) {
    //     answer = Number(number1) - Number(number2);
    //     calculator_display.innerText = answer;
    // } else 
    if (flagOperater > 1 && numberEnteredFlag === 1) {
        answer -= Number(number2);
        numberTobeDisplayed = answer;
        calculatorDisplay.innerText = numberTobeDisplayed;
    } else {
        numberTobeDisplayed = "";
    }
    operator = "-";
    flagOperater += 1;
    numberEnteredFlag = 0;
    number2 = ""
}

function multiplicationOperation() {
    // if (flagOperater == 1) {
    //     answer = Number(number1) * Number(number2);
    //     calculator_display.innerText = answer;
    // } else 

    if (flagOperater > 1 && numberEnteredFlag === 1) {
        answer *= Number(number2);
        numberTobeDisplayed = answer;
        calculatorDisplay.innerText = numberTobeDisplayed;
    } else {
        numberTobeDisplayed = "";
    }
    operator = "X";
    flagOperater += 1;
    numberEnteredFlag = 0;
    number2 = ""
}

function divisionOperation() {
    // if (flagOperater == 1) {
    //     answer = Number(number1) / Number(number2);
    //     calculator_display.innerText = answer;
    // } else
    if (flagOperater > 1 && numberEnteredFlag === 1) {
        answer /= Number(number2);
        numberTobeDisplayed = answer;
        calculatorDisplay.innerText = numberTobeDisplayed;
    } else {
        numberTobeDisplayed = "";
    }
    operator = "÷";
    flagOperater += 1;
    numberEnteredFlag = 0;
    number2 = ""
}
