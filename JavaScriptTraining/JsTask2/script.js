const loopCount = 99;
const outputArea = document.getElementById('fizzbuzz_result');
const inputFizz = document.getElementById('fizz');
const inputBuzz = document.getElementById('buzz');
const execButton = document.getElementById('exec');
const fizzMessage = 'Fizz';
const buzzMessage = 'Buzz';
const fizzBuzzMessage = 'FizzBuzz';

function createDivElement(content) {
  const outputDiv = document.createElement('div');
  outputDiv.classList.add('output');
  outputDiv.textContent = content;
  outputArea.appendChild(outputDiv);
}

function fizzBuzz(fizz, buzz) {
  let output;
  for (let i = 1; i <= loopCount; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
      output = `${fizzBuzzMessage} ${i}`;
      createDivElement(output);
    } else if (i % fizz === 0) {
      output = `${fizzMessage} ${i}`;
      createDivElement(output);
    } else if (i % buzz === 0) {
      output = `${buzzMessage} ${i}`;
      createDivElement(output);
    } else {
      // nop
      console.log('nop');
    }
  }
}

function isIntValue(checkValue) {
  // !isNaN(value): 数値の場合はfalseを返す
  if (checkValue !== '' && !isNaN(checkValue)) {
    const numValue = Number(checkValue);
    if (Number.isInteger(numValue)) {
      return true;
    }
  }
  return false;
}

function clearElement() {
  while (outputArea.firstChild) {
    outputArea.removeChild(outputArea.firstChild);
  }
}

function execFizzBuzz() {
  clearElement();
  const fizzValue = inputFizz.value;
  const buzzValue = inputBuzz.value;
  // 入力値チェック
  if (isIntValue(fizzValue) && isIntValue(buzzValue)) {
    // FizzBuzz実行
    fizzBuzz(fizzValue, buzzValue);
  } else {
    createDivElement('整数値を入力してください');
  }
}

execButton.addEventListener('click', () => {
  execFizzBuzz();
});
