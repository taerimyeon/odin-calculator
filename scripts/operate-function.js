let firstNumbers = ["0"];
let secondNumbers = ["0"];
let operator = "";
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
      if (decimalPointExist()) firstNumbers.push(".");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "zero":
      if (decimalPointExist()) {
        if (firstNumbers[0] !== "0") firstNumbers.push("0");
      } else {
        firstNumbers.push("0");
      }
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "one":
      if (firstNumbers.length > 0 && decimalPointExist() && firstNumbers[0] === "0") firstNumbers.pop();
      firstNumbers.push("1");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "two":
      if (firstNumbers.length > 0 && decimalPointExist() && firstNumbers[0] === "0") firstNumbers.pop();
      firstNumbers.push("2");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "three":
      if (firstNumbers.length > 0 && decimalPointExist() && firstNumbers[0] === "0") firstNumbers.pop();
      firstNumbers.push("3");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "four":
      if (firstNumbers.length > 0 && decimalPointExist() && firstNumbers[0] === "0") firstNumbers.pop();
      firstNumbers.push("4");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "five":
      if (firstNumbers.length > 0 && decimalPointExist() && firstNumbers[0] === "0") firstNumbers.pop();
      firstNumbers.push("5");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "six":
      if (firstNumbers.length > 0 && decimalPointExist() && firstNumbers[0] === "0") firstNumbers.pop();
      firstNumbers.push("6");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "seven":
      if (firstNumbers.length > 0 && decimalPointExist() && firstNumbers[0] === "0") firstNumbers.pop();
      firstNumbers.push("7");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "eight":
      if (firstNumbers.length > 0 && decimalPointExist() && firstNumbers[0] === "0") firstNumbers.pop();
      firstNumbers.push("8");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    case "nine":
      if (firstNumbers.length > 0 && decimalPointExist() && firstNumbers[0] === "0") firstNumbers.pop();
      firstNumbers.push("9");
      numberDisplayContainer.textContent = firstNumbers.join("")
      break;
    default:
      console.log("Unknown button ID")
      break;
  }
  if (decimalPointExist()) {
    if (firstNumbers[0] !== "0") buttonClearComponent.textContent = "\u232B";
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
      if (firstNumbers.length > 1) {
        firstNumbers.splice(-1);
        if (firstNumbers.length === 1 && firstNumbers[0] === "0") {
          reinitializeVariables();
        } else {
          numberDisplayContainer.textContent = firstNumbers.join("")
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
  firstNumbers = ["0"];
  secondNumbers = ["0"];
  buttonClearComponent.textContent = "AC";
  numberDisplayContainer.textContent = 0;
}

function decimalPointExist() {
  return firstNumbers.filter(item => item === ".").length === 0
}

document.addEventListener("DOMContentLoaded", function() {
  const buttonDecimal = document.getElementById("button-decimal");
  const buttonZero = document.getElementById("button-zero");
  const buttonOne = document.getElementById("button-one");
  const buttonTwo = document.getElementById("button-two");
  const buttonThree = document.getElementById("button-three");
  const buttonFour = document.getElementById("button-four");
  const buttonFive = document.getElementById("button-five");
  const buttonSix = document.getElementById("button-six");
  const buttonSeven = document.getElementById("button-seven");
  const buttonEight = document.getElementById("button-eight");
  const buttonNine = document.getElementById("button-nine");
  buttonClearComponent = document.getElementById("button-clear");
  numberDisplayContainer = document.getElementById("result");
  
  buttonDecimal.addEventListener("click", keyPress);
  buttonZero.addEventListener("click", keyPress);
  buttonOne.addEventListener("click", keyPress);
  buttonTwo.addEventListener("click", keyPress);
  buttonThree.addEventListener("click", keyPress);
  buttonFour.addEventListener("click", keyPress);
  buttonFive.addEventListener("click", keyPress);
  buttonSix.addEventListener("click", keyPress);
  buttonSeven.addEventListener("click", keyPress);
  buttonEight.addEventListener("click", keyPress);
  buttonNine.addEventListener("click", keyPress);
  buttonClearComponent.addEventListener("click", specialKeyPress);
  buttonClearComponent.addEventListener("mousedown", (event) => {
    startTime = new Date();
  });
  buttonClearComponent.addEventListener("mouseup", () => {
    const endTime = new Date();
    const timeDifference = (endTime - startTime) / 1000;
    if (timeDifference > 0.5 && firstNumbers.length !== 0) {
      reinitializeVariables();
    }
  });
});