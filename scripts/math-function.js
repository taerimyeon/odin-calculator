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
    return Math.round((firstNumber / secondNumber) * 100) / 100;
  }
}

function percent(number) {
  if (typeof(number) !== "number") {
    return "ERROR";
  } else {
    return Math.round((number / 100) * 100) / 100;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  percent
}