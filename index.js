const calculatorContainer = document.getElementById("calculator_container");
const CalculatorDisplay = document.getElementById("calculator_display");
let numberTobeDisplayed = "0";
let totalItemsDisplayed = "0";

// number button creation
for (i = 0; i < 10; i++) {
    const createNumberButton = document.createElement("button");
    createNumberButton.innerText = i;
    createNumberButton.setAttribute("class", "number_button");
    createNumberButton.setAttribute("id", `number_button_${i}`);
    calculatorContainer.appendChild(createNumberButton);
    numberTobeDisplayed = createNumberButton.addEventListener("click", buttonSelected);
}
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

