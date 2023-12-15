let currentInput = "";
let firstNumber;
let secondNumber;
let operation;

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    clickHandler(e);
  });
});

function clickHandler(e) {
  console.log(e.target.classList.contains("number"));
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
