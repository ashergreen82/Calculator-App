const calculatorContainer = document.getElementById("calculator_container");
const CalculatorDisplay = document.getElementById("calculator_display");
let numberTobeDisplayed = "0";
let totalItemsDisplayed = "0";

// number button creation (Alt + 251 = square root and Alt + 0247 = division symbol)
buttonCreator("MC");
buttonCreator("MR");
buttonCreator("M-");
buttonCreator("M+");
buttonCreator("√");
for (i = 7; i < 10; i++) {
    buttonCreator(i);
}
buttonCreator("÷");
buttonCreator("+/-");
for (i = 4; i < 7; i++) {
    buttonCreator(i);
}
buttonCreator("X");
buttonCreator("C");
for (i = 1; i < 4; i++) {
    buttonCreator(i);
}
buttonCreator("-");
buttonCreator("AC");
buttonCreator(0);
buttonCreator(".");
buttonCreator("=");
buttonCreator("+");

totalItemsDisplayed = calculatorDisplayProcess(numberTobeDisplayed, totalItemsDisplayed);

//functions
function calculatorDisplayProcess(numberTobeDisplayed, totalItemsDisplayed) {
    totalItemsDisplayed = totalItemsDisplayed + numberTobeDisplayed;
    CalculatorDisplay.innerText = totalItemsDisplayed;
    return totalItemsDisplayed;
}
// number display
function buttonSelected(e) {
    e.preventDefault();
    buttonPressed = e.srcElement.firstChild.textContent;
    console.log(buttonPressed);
    return buttonPressed;
    // console.log(e);
    // console.log(createNumberButton);
    // console.log("Button pressed");
    // console.log(e.target);
    // console.log(e.srcElement.firstChild.innertext);
    // console.log(e.srcElement.firstChild.nodeValue);
    // console.log(e.srcElement.firstChild.textContent);

}

function buttonCreator(buttonLabel) {
    const createNumberButton = document.createElement("button");
    createNumberButton.innerText = buttonLabel;
    createNumberButton.setAttribute("class", "number_button");
    createNumberButton.setAttribute("id", `number_button_${buttonLabel}`);
    calculatorContainer.appendChild(createNumberButton);
    numberTobeDisplayed = createNumberButton.addEventListener("click", buttonSelected);
}
