Gay

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');
const submit = document.getElementById('submit');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const devide = document.getElementById('devide');
let action = '+';

plus.onclick = function () {
  action = '+';
};

minus.onclick = function () {
  action = '-';
};

multiply.onclick = function () {
  action = '*';
};

devide.onclick = function () {
  action = '/';
};

function print_result(resultElement) {
  if (resultElement < 0) {
    result.style.color = 'red';
  } else {
    result.style.color = 'green';
  }
  result.textContent = resultElement;
}

function summa(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol == '+') {
    return num1 + num2;
  } else if (actionSymbol == '-') {
    return num1 - num2;
  } else if (actionSymbol == '*') {
    return num1 * num2;
  } else if (actionSymbol == '/') {
    return num1 / num2;
  }
}

submit.onclick = function () {
  const result = summa(input1, input2, action);
  print_result(result);
};
