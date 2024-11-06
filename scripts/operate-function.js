let calculatorObject = {
  firstNumbers: [],
  secondNumbers: [],
  operator: "", // "add", "subtract", "multiply", "divide", "operate" (equal sign)
  displayCharacters: ""
}
let pushTo = "firstNumbers"; // Helper variable to determine where to push upon operator button click
let buttonClearComponent;
let numberDisplayContainer;
let startTime; // Helps calculate button hold duration: (endTime - startTime) > 0.5s?
let divideByZeroError = false; // Helper variable to determine if there is a division by zero
let finishCalculation = false; // Helper variable to determine if equal sign (=) button is pressed
let calculated = false; // Helper variable to determine if the calculation between firstNumbers and secondNumber has been done or not

function keyPress(event) {
  const clickedButton = event.target;
  const clickedButtonId = event.target.id.split("-")[1];
  highlightKeyPress(clickedButton);
  switchCaseKeyPress(clickedButtonId);
}

function operatorKeyPress(event) {
  const clickedButton = event.target;
  const clickedButtonId = event.target.id.split("-")[1];
  highlightKeyPress(clickedButton);
  switchCaseOperatorKeyPress(clickedButtonId);
}

function specialKeyPress(event) {
  const clickedButton = event.target;
  const clickedButtonId = event.target.id.split("-")[1];
  highlightKeyPress(clickedButton);
  switchCaseSpecialKeyPress(clickedButtonId);
}

function switchCaseKeyPress(clickedButtonId) {
  if (
    divideByZeroError ||
    finishCalculation
  ) {
    reinitializeVariables();
  }
  switch (clickedButtonId) {
    case "decimal":
      if (!divideByZeroError) {
        if (!isDecimalPointExist()) {
          if (calculatorObject[pushTo].length === 0) {
            // Put leading zero if array is empty
            calculatorObject[pushTo].push("0");
            calculatorObject[pushTo].push(".");
          } else {
            calculatorObject[pushTo].push(".");
          }
        }
        updateCalculatorDisplay();
      }
      break;
    case "zero":
      if (!isDecimalPointExist()) {
        if (calculatorObject[pushTo][0] !== "0") calculatorObject[pushTo].push("0");
      } else {
        calculatorObject[pushTo].push("0");
      }
      updateCalculatorDisplay();
      break;
    case "one":
      removeLeadingZeroFromNonZeroNumbers();
      calculatorObject[pushTo].push("1");
      updateCalculatorDisplay();
      break;
    case "two":
      removeLeadingZeroFromNonZeroNumbers();
      calculatorObject[pushTo].push("2");
      updateCalculatorDisplay();
      break;
    case "three":
      removeLeadingZeroFromNonZeroNumbers();
      calculatorObject[pushTo].push("3");
      updateCalculatorDisplay();
      break;
    case "four":
      removeLeadingZeroFromNonZeroNumbers();
      calculatorObject[pushTo].push("4");
      updateCalculatorDisplay();
      break;
    case "five":
      removeLeadingZeroFromNonZeroNumbers();
      calculatorObject[pushTo].push("5");
      updateCalculatorDisplay();
      break;
    case "six":
      removeLeadingZeroFromNonZeroNumbers();
      calculatorObject[pushTo].push("6");
      updateCalculatorDisplay();
      break;
    case "seven":
      removeLeadingZeroFromNonZeroNumbers();
      calculatorObject[pushTo].push("7");
      updateCalculatorDisplay();
      break;
    case "eight":
      removeLeadingZeroFromNonZeroNumbers();
      calculatorObject[pushTo].push("8");
      updateCalculatorDisplay();
      break;
    case "nine":
      removeLeadingZeroFromNonZeroNumbers();
      calculatorObject[pushTo].push("9");
      updateCalculatorDisplay();
      break;
    default:
      console.log("Unknown button ID");
      break;
  }
  if (!isDecimalPointExist()) {
    if (calculatorObject[pushTo][0] !== "0") buttonClearComponent.textContent = "\u232B";
  } else {
    buttonClearComponent.textContent = "\u232B";
  }
}

function switchCaseOperatorKeyPress(clickedButtonId) {
  let firstNumber;
  let secondNumber;
  switch (clickedButtonId) {
    case "add":
      if (!divideByZeroError) {
        addLeadingZeroOnOperatorKeyPress();
        if (calculatorObject.secondNumbers.length !== 0) {
          firstNumber = parseFloat(reduceArray(calculatorObject.firstNumbers));
          secondNumber = parseFloat(reduceArray(calculatorObject.secondNumbers));
          operate(calculatorObject.operator, firstNumber, secondNumber);
        }
        calculatorObject.operator = "add";
        finishCalculation = false;
        if (!divideByZeroError) {
          // Second re-check because the calculation is performed before divideByZeroError is changed
          updateCalculatorDisplay();
        }
      }
      break;
    case "subtract":
      if (!divideByZeroError) {
        addLeadingZeroOnOperatorKeyPress();
        if (calculatorObject.secondNumbers.length !== 0) {
          firstNumber = parseFloat(reduceArray(calculatorObject.firstNumbers));
          secondNumber = parseFloat(reduceArray(calculatorObject.secondNumbers));
          operate(calculatorObject.operator, firstNumber, secondNumber);
        }
        calculatorObject.operator = "subtract";
        finishCalculation = false;
        if (!divideByZeroError) {
          // Second re-check because the calculation is performed before divideByZeroError is changed
          updateCalculatorDisplay();
        }
      }
      break;
    case "multiply":
      if (!divideByZeroError) {
        addLeadingZeroOnOperatorKeyPress();
        if (calculatorObject.secondNumbers.length !== 0) {
          firstNumber = parseFloat(reduceArray(calculatorObject.firstNumbers));
          secondNumber = parseFloat(reduceArray(calculatorObject.secondNumbers));
          operate(calculatorObject.operator, firstNumber, secondNumber);
        }
        calculatorObject.operator = "multiply";
        finishCalculation = false;
        if (!divideByZeroError) {
          // Second re-check because the calculation is performed before divideByZeroError is changed
          updateCalculatorDisplay();
        }
      }
      break;
    case "divide":
      if (!divideByZeroError) {
        addLeadingZeroOnOperatorKeyPress();
        if (calculatorObject.secondNumbers.length !== 0) {
          firstNumber = parseFloat(reduceArray(calculatorObject.firstNumbers));
          secondNumber = parseFloat(reduceArray(calculatorObject.secondNumbers));
          operate(calculatorObject.operator, firstNumber, secondNumber);
        }
        calculatorObject.operator = "divide";
        finishCalculation = false;
        if (!divideByZeroError) {
          // Second re-check because the calculation is performed before divideByZeroError is changed
          updateCalculatorDisplay();
        }
      }
      break;
    case "operate":
      if (!divideByZeroError) {
        addLeadingZeroOnOperatorKeyPress();
        if (calculatorObject.secondNumbers.length !== 0) {
          firstNumber = parseFloat(reduceArray(calculatorObject.firstNumbers));
          secondNumber = parseFloat(reduceArray(calculatorObject.secondNumbers));
          operate(calculatorObject.operator, firstNumber, secondNumber);
          calculatorObject.operator = "";
          finishCalculation = true;
          if (!divideByZeroError) {
            // Second re-check because the calculation is performed before divideByZeroError is changed
            updateCalculatorDisplay();
          }
        }
      }
      break;
    default:
      console.log("Unknown button ID");
      break;
  }
  if (
    pushTo !== "secondNumbers" &&
    calculatorObject.operator !== ""
  ) {
    togglePushTo();
  }
}

function switchCaseSpecialKeyPress(clickedButtonId) {
  switch (clickedButtonId) {
    case "clear":
      if (!divideByZeroError) {
        if (calculatorObject[pushTo].length > 0) {
          if (isNegativeExist() && calculatorObject[pushTo].length === 2) {
            calculatorObject[pushTo] = [];
          } else {
            calculatorObject[pushTo].splice(-1);
          }
          updateCalculatorDisplay();
        } else {
          if (
            pushTo === "secondNumbers" &&
            calculatorObject.secondNumbers.length === 0
          ) {
            calculatorObject.operator = "";
            togglePushTo();
            updateCalculatorDisplay();
          }
        }
        if (
          calculatorObject.firstNumbers.length === 0 &&
          calculatorObject.secondNumbers.length === 0
        ) {
          reinitializeVariables();
        }
      } else {
        reinitializeVariables();
      }
      break;
    case "plus_minus":
      if (!divideByZeroError) {
        if (
          calculatorObject[pushTo].length > 0
        ) {
          if (isNegativeExist()) {
            calculatorObject[pushTo].shift();
            updateCalculatorDisplay();
          } else {
            if (
              (
                calculatorObject[pushTo][0] === "0" &&
                isDecimalPointExist() &&
                calculatorObject[pushTo].length > 2
              ) ||
              (
                calculatorObject[pushTo][0] !== "0"
              )
            ) {
              calculatorObject[pushTo].unshift("-");
              updateCalculatorDisplay();
            }
          }
        }
      }
      break;
    case "percent":
      if (!divideByZeroError) {
        if (calculatorObject[pushTo].length > 0) {
          calculatorObject[pushTo] = percent(
            parseFloat(
              reduceArray(calculatorObject[pushTo]
            )))
            .toString()
            .split("");
          updateCalculatorDisplay();
        }
      }
      break;
    default:
      console.log("Unknown button ID");
      break;
  }
}

function highlightKeyPress(buttonComponent) {
  buttonComponent.classList.add("clicked");
  setTimeout(() => {
    buttonComponent.classList.remove("clicked");
  }, 100);
}

function reinitializeVariables() {
  divideByZeroError = false;
  finishCalculation = false;
  calculated = false;
  pushTo = "firstNumbers";
  calculatorObject.firstNumbers = [];
  calculatorObject.secondNumbers = [];
  calculatorObject.operator = "";
  calculatorObject.displayCharacters = "";
  buttonClearComponent.textContent = "AC";
  numberDisplayContainer.textContent = "0";
}

function togglePushTo() {
  pushTo === "firstNumbers" ? pushTo = "secondNumbers" : pushTo = "firstNumbers";
}

function isDecimalPointExist() {
  return calculatorObject[pushTo].filter(item => item === ".").length !== 0;
}

function isNegativeExist() {
  return calculatorObject[pushTo].filter(item => item === "-").length !== 0;
}

// ================================ Display handlers =================================
function addLeadingZeroOnOperatorKeyPress() {
  if (calculatorObject.firstNumbers.length === 0) calculatorObject.firstNumbers.push("0");
}

function removeLeadingZeroFromNonZeroNumbers() {
  if (
    calculatorObject[pushTo].length > 0 &&
    !isDecimalPointExist() &&
    calculatorObject[pushTo][0] === "0"
  ) {
    calculatorObject[pushTo].pop();
  }
}

function reduceArray(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, "")
}

function checkNumberOverflow(whichArray, maxDigits) {
  let overflowResult;
  if (
    calculated &&
    calculatorObject[whichArray].length > maxDigits
  ) {
    // Exceeded max digits, use exponential notation
    overflowResult = convertToExponentialFormat(
      parseFloat(
        reduceArray(calculatorObject[whichArray])
      )
    );
  } else {
    // Not calculated, simply reduce the array
    overflowResult = reduceArray(calculatorObject.firstNumbers);
  }
  return overflowResult;
}

function convertToExponentialFormat(number) {
  let expNumber = number.toExponential();
  const numberDigits = expNumber.split("e")[0];
  const expDigits = expNumber.split("e")[1].slice(1);
  const expDigitsNotation = expNumber.split("e")[1][0]; // "+" (positive) or "-" (negative)
  const expDigitsLength = expDigits.toString().length;
  const decimalOffset = expDigitsNotation === "-" ? 5 : 6;
  if (expDigits !== "0") {
    // parseFloat twice in case there are redundant zeroes
    // For example, there is a case when we have parseFloat("2.19999999").toFixed(5)
    // gives us 2.20000 where the zeroes are redundant
    expNumber = `${
      parseFloat(
        parseFloat(numberDigits.slice(0, decimalOffset)).
          toFixed(decimalOffset - expDigitsLength)
      )}e${
        expDigitsNotation === '-' ?
        expDigitsNotation : "" // Remove "+"
      }${expDigits}`;
  } else {
    // Use non-exponential format if e0 (basically the same as multiplying with 1)
    expNumber = `${
      parseFloat(
        parseFloat(numberDigits.slice(0, decimalOffset)).
          toFixed(decimalOffset - expDigitsLength)
      )}`;
  }
  return expNumber;
}

function updateCalculatorDisplay() {
  // Store the display history first...
  if (calculatorObject.firstNumbers.length !== 0) {
    calculatorObject.displayCharacters = checkNumberOverflow("firstNumbers", 8);
  }
  if (calculatorObject.operator !== "") {
    switch(calculatorObject.operator) {
      case "add":
        calculatorObject.displayCharacters = `${calculatorObject.displayCharacters} + `;
        break;
      case "subtract":
        calculatorObject.displayCharacters = `${calculatorObject.displayCharacters} - `;
        break;
      case "multiply":
        calculatorObject.displayCharacters = `${calculatorObject.displayCharacters} x `;
        break;
      case "divide":
        calculatorObject.displayCharacters = `${calculatorObject.displayCharacters} / `;
        break;
    }
  }
  if (calculatorObject.secondNumbers.length !== 0) {
    calculatorObject.displayCharacters = `
      ${calculatorObject.displayCharacters}
      ${reduceArray(calculatorObject.secondNumbers)}`;
  }

  // Then update the display
  numberDisplayContainer.textContent = calculatorObject.displayCharacters;
}
// ================================ Display handlers =================================

// ====================== Mathematical functions and operations ======================
function add(firstNumber, secondNumber) {
  if (typeof(firstNumber) !== "number" || typeof(secondNumber) !== "number") {
    return "ERROR";
  } else {
    return firstNumber + secondNumber;
  }
}

function subtract(firstNumber, secondNumber) {
  if (typeof(firstNumber) !== "number" || typeof(secondNumber) !== "number") {
    return "ERROR";
  } else {
    return firstNumber - secondNumber;
  }
}

function multiply(firstNumber, secondNumber) {
  if (typeof(firstNumber) !== "number" || typeof(secondNumber) !== "number") {
    return "ERROR";
  } else {
    return firstNumber * secondNumber;
  }
}

function divide(firstNumber, secondNumber) {
  if (typeof(firstNumber) !== "number" || typeof(secondNumber) !== "number") {
    return "ERROR";
  }
  if (secondNumber === 0) {
    return "DIV_BY_ZERO_ERROR";
  } else { 
    return firstNumber / secondNumber;
  }
}

function percent(number) {
  if (typeof(number) !== "number") {
    return "ERROR";
  } else {
    return number / 100;
  }
}

function operate(operator, firstNumber, secondNumber) {
  let result;
  switch (operator) {
    case "add":
      result = add(firstNumber, secondNumber).toString();
      calculatorObject.firstNumbers = result.split("");
      calculatorObject.secondNumbers = [];
      togglePushTo();
      break;
    case "subtract":
      result = subtract(firstNumber, secondNumber).toString();
      calculatorObject.firstNumbers = result.split("");
      calculatorObject.secondNumbers = [];
      togglePushTo();
      break;
    case "multiply":
      result = multiply(firstNumber, secondNumber).toString();
      calculatorObject.firstNumbers = result.split("");
      calculatorObject.secondNumbers = [];
      togglePushTo();
      break;
    case "divide":
      result = divide(firstNumber, secondNumber).toString();
      if (result === "DIV_BY_ZERO_ERROR") {
        divideByZeroError = true;
        numberDisplayContainer.textContent = "(╯°□°)╯";
        buttonClearComponent.textContent = "AC";
      } else {
        calculatorObject.firstNumbers = result.split("");
        calculatorObject.secondNumbers = [];
        togglePushTo();
      }
      break;
    default:
      console.log("Unknown button ID");
      break;
  }
  calculated = true;
  return result;
}
// ====================== Mathematical functions and operations ======================

document.addEventListener("DOMContentLoaded", function() {
  const buttonDecimalComponent = document.getElementById("button-decimal");
  const buttonZeroComponent = document.getElementById("button-zero");
  const buttonOneComponent = document.getElementById("button-one");
  const buttonTwoComponent = document.getElementById("button-two");
  const buttonThreeComponent = document.getElementById("button-three");
  const buttonFourComponent = document.getElementById("button-four");
  const buttonFiveComponent = document.getElementById("button-five");
  const buttonSixComponent = document.getElementById("button-six");
  const buttonSevenComponent = document.getElementById("button-seven");
  const buttonEightComponent = document.getElementById("button-eight");
  const buttonNineComponent = document.getElementById("button-nine");
  const buttonAddComponent = document.getElementById("button-add");
  const buttonSubtractComponent = document.getElementById("button-subtract");
  const buttonMultiplyComponent = document.getElementById("button-multiply");
  const buttonDivideComponent = document.getElementById("button-divide");
  const buttonOperateComponent = document.getElementById("button-operate");
  const buttonPlusMinusComponent = document.getElementById("button-plus_minus");
  const buttonPercentComponent = document.getElementById("button-percent");
  buttonClearComponent = document.getElementById("button-clear");
  numberDisplayContainer = document.getElementById("result");
  
  buttonDecimalComponent.addEventListener("click", keyPress);
  buttonZeroComponent.addEventListener("click", keyPress);
  buttonOneComponent.addEventListener("click", keyPress);
  buttonTwoComponent.addEventListener("click", keyPress);
  buttonThreeComponent.addEventListener("click", keyPress);
  buttonFourComponent.addEventListener("click", keyPress);
  buttonFiveComponent.addEventListener("click", keyPress);
  buttonSixComponent.addEventListener("click", keyPress);
  buttonSevenComponent.addEventListener("click", keyPress);
  buttonEightComponent.addEventListener("click", keyPress);
  buttonNineComponent.addEventListener("click", keyPress);
  buttonAddComponent.addEventListener("click", operatorKeyPress);
  buttonSubtractComponent.addEventListener("click", operatorKeyPress);
  buttonMultiplyComponent.addEventListener("click", operatorKeyPress);
  buttonDivideComponent.addEventListener("click", operatorKeyPress);
  buttonOperateComponent.addEventListener("click", operatorKeyPress);
  buttonPlusMinusComponent.addEventListener("click", specialKeyPress);
  buttonPercentComponent.addEventListener("click", specialKeyPress);
  buttonClearComponent.addEventListener("click", specialKeyPress);
  buttonClearComponent.addEventListener("mousedown", (event) => {
    startTime = new Date();
  });
  buttonClearComponent.addEventListener("mouseup", () => {
    const endTime = new Date();
    const timeDifference = (endTime - startTime) / 1000;
    if (timeDifference > 0.5 && calculatorObject[pushTo].length !== 0) {
      reinitializeVariables();
    }
  });
  document.addEventListener("keydown", function(event) {
    // Put combined keypresses first to prevent undesired behavior
    if (event.shiftKey && event.code === "Equal") {
      highlightKeyPress(buttonAddComponent);
      switchCaseOperatorKeyPress("add");
    } else if (event.shiftKey && event.code === "Digit8") {
      highlightKeyPress(buttonMultiplyComponent);
      switchCaseOperatorKeyPress("multiply");
    } else if (event.shiftKey && event.code === "Digit5") {
      highlightKeyPress(buttonPercentComponent);
      switchCaseSpecialKeyPress("percent");
    } else if (event.shiftKey && event.code === "Minus") {
      highlightKeyPress(buttonPlusMinusComponent);
      switchCaseSpecialKeyPress("plus_minus");
    } else if (event.code === "Digit1") {
      highlightKeyPress(buttonOneComponent);
      switchCaseKeyPress("one");
    } else if (event.code === "Digit2") {
      highlightKeyPress(buttonTwoComponent);
      switchCaseKeyPress("two");
    } else if (event.code === "Digit3") {
      highlightKeyPress(buttonThreeComponent);
      switchCaseKeyPress("three")
    } else if (event.code === "Digit4") {
      highlightKeyPress(buttonFourComponent);
      switchCaseKeyPress("four");
    } else if (event.code === "Digit5") {
      highlightKeyPress(buttonFiveComponent);
      switchCaseKeyPress("five");
    } else if (event.code === "Digit6") {
      highlightKeyPress(buttonSixComponent);
      switchCaseKeyPress("six");
    } else if (event.code === "Digit7") {
      highlightKeyPress(buttonSevenComponent);
      switchCaseKeyPress("seven");
    } else if (event.code === "Digit8") {
      highlightKeyPress(buttonEightComponent);
      switchCaseKeyPress("eight");
    } else if (event.code === "Digit9") {
      highlightKeyPress(buttonNineComponent);
      switchCaseKeyPress("nine");
    } else if (event.code === "Digit0") {
      highlightKeyPress(buttonZeroComponent);
      switchCaseKeyPress("zero");
    } else if (event.code === "Period") {
      highlightKeyPress(buttonDecimalComponent);
      switchCaseKeyPress("decimal");
    } else if (event.code === "Minus") {
      highlightKeyPress(buttonSubtractComponent);
      switchCaseOperatorKeyPress("subtract");
    }  else if (event.code === "Slash") {
      highlightKeyPress(buttonDivideComponent);
      switchCaseOperatorKeyPress("divide");
    } else if (event.code === "Equal") {
      highlightKeyPress(buttonOperateComponent);
      switchCaseOperatorKeyPress("operate");
    } else if (event.code === "Enter") {
      highlightKeyPress(buttonOperateComponent);
      switchCaseOperatorKeyPress("operate");
    } else if (event.code === "Backspace") {
      highlightKeyPress(buttonClearComponent);
      switchCaseSpecialKeyPress("clear");
    } else {
      console.log("Unsupported key")
    }
  })
});