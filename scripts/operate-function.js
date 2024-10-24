let calculatorObject = {
  firstNumbers: [],
  secondNumbers: [],
  operator: "", // "add", "subtract", "multiply", "divide", "operate" (equal sign)
  displayCharacters: []
}
let pushTo = "firstNumbers"; // Helper variable to determine where to push upon operator button click
let buttonClearComponent;
let numberDisplayContainer;
let startTime; // Helps calculate button hold duration: (endTime - startTime) > 0.5s?

function keyPress(event) {
  const clickedButton = event.target;
  const clickedButtonId = event.target.id.split("-")[1];
  clickedButton.classList.add("clicked");
  setTimeout(() => {
    clickedButton.classList.remove("clicked");
  }, 100);
  switch (clickedButtonId) {
    case "decimal":
      if (isDecimalPointExist()) {
        if (calculatorObject[pushTo].length === 0) {
          // Put leading zero if array is empty
          calculatorObject[pushTo].push("0");
          calculatorObject[pushTo].push(".");
        } else {
          calculatorObject[pushTo].push(".");
        }
      }
      updateCalculatorDisplay();
      break;
    case "zero":
      if (isDecimalPointExist()) {
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
      console.log("Unknown button ID")
      break;
  }
  if (isDecimalPointExist()) {
    if (calculatorObject[pushTo][0] !== "0") buttonClearComponent.textContent = "\u232B";
  } else {
    buttonClearComponent.textContent = "\u232B";
  }
}

function specialKeyPress(event) {
  const clickedButton = event.target;
  const clickedButtonId = event.target.id.split("-")[1];
  clickedButton.classList.add("special-operator-clicked");
  setTimeout(() => {
    clickedButton.classList.remove("special-operator-clicked");
  }, 100);
  switch (clickedButtonId) {
    case "clear":
      if (calculatorObject[pushTo].length > 1) {
        calculatorObject[pushTo].splice(-1);
        if (calculatorObject[pushTo].length === 1 && calculatorObject[pushTo][0] === "0") {
          reinitializeVariables();
        } else {
          updateCalculatorDisplay();
        }
      } else {
        reinitializeVariables();
      }
      break;
    default:
      console.log("Unknown button ID")
      break;
  }
}

function reinitializeVariables() {
  pushTo = "firstNumbers";
  calculatorObject["firstNumbers"] = [];
  calculatorObject["secondNumbers"] = [];
  calculatorObject["operator"] = "";
  calculatorObject["displayCharacters"] = [];
  buttonClearComponent.textContent = "AC";
  numberDisplayContainer.textContent = "0";
}

function isDecimalPointExist() {
  return calculatorObject[pushTo].filter(item => item === ".").length === 0;
}

function removeLeadingZeroFromNonZeroNumbers() {
  if (
    calculatorObject[pushTo].length > 0 &&
    isDecimalPointExist() &&
    calculatorObject[pushTo][0] === "0"
  ) {
    calculatorObject[pushTo].pop();
  }
}

function updateCalculatorDisplay() {
  numberDisplayContainer.textContent = calculatorObject[pushTo].join("");
}

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
});