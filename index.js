const resultEl = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const sumbitBtn = document.getElementById('sumbit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+';

plusBtn.onclick = function () {
      action = '+';
}

minusBtn.onclick = function () {
      action = '-'
}

function prinetResult(result) {
      if (result < 0) {
            resultEl.style.backgroundColor = 'red'
      } else {
            resultEl.style.backgroundColor = "green"
            resultEl.textContent = result;
      }
}

function numbersAction(inp1, inp2, actionSum) {
      const num1 = Number(inp1.value);
      const num2 = Number(inp2.value);
      return actionSum == '+' ? num1 + num2 : num1 - num2;
}

sumbitBtn.onclick = function () {
      const result = numbersAction(input1, input2, action);
      prinetResult(result)
}
