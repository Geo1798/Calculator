let screen = document.getElementById("result");
let expression = "";

function addToScreen(value) {
  expression += value;
  screen.value = expression;
}

function clearScreen() {
  expression = "";
  screen.value = "";
}

function backspace() {
  expression = expression.slice(0, -1);
  screen.value = expression;
}

function calculate() {
  try {
    expression = eval(expression);
    screen.value = expression;
  } catch (error) {
    expression = "";
    screen.value = "Error";
  }
}
