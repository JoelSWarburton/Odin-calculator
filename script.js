let currentInput = "";
let firstNumber = "0";
let secondNumber = "";
let operand = null;
let operations = ["x", "÷", "+", "-"];

document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", (e) => {
    addNumber(e);
  });
});

document.querySelectorAll(".operand").forEach((button) => {
  button.addEventListener("click", (e) => {
    addOperand(e);
  });
});

//todo refactor code so number buttons and operand buttons have different listeners.s
function addNumber(e) {
  console.log("add number accessed");
  if (firstNumber == "0") {
    //delete zero placeholder
    firstNumber = "";
  }

  if (!operand) {
    firstNumber += e.target.textContent;
  } else {
    secondNumber += e.target.textContent;
  }

  console.log("first number: " + firstNumber);
  console.log("second number: " + secondNumber);
}

function addOperand(e) {
  if (!secondNumber) {
    operand = e.target.textContent;
    return;
  }

  //executes if secondNumber is populated
  let result = calculate(firstNumber, secondNumber, operand);
  firstNumber = result;
  operand = e.target.textContent;
  secondNumber = "";
  console.log(result);
}

function calculate(num1, num2, op) {
  num1 = Number.parseInt(num1);
  num2 = Number.parseInt(num2);
  let result;
  switch (op) {
    case "+":
      result = addition(num1, num2);
      break;
    case "-":
      result = subtraction(num1, num2);
      break;
    case "÷":
      result = division(num1, num2);
      break;
    case "x":
      result = multiplication(num1, num2);
      break;
  }
  return result;
}

function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function inverse(num) {
  return -1 * num;
}

function modulo(num1, num2) {
  return num1 % num2;
}
