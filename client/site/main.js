import { getNode, insertLast, clearContents } from '../lib/index.js';
// 1. input 선택하기
const firstNumber = getNode('#firstNumber');
const secondNumber = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear'); // id값을 찾는거면 앞에 샵 붙이는 가봄

// 2. input 이벤트 바인딩
function handleInput() {
  // 3. input value 가져오기
  const firstValue = Number(firstNumber.value);
  const secondValue = Number(secondNumber.value);

  // 4. 숫자값 더하기
  const total = firstValue + secondValue;

  // 5. result에 출력하기
  clearContents(result);
  insertLast(result, total);
}

// 6. clear 클릭 시 모든 값 초기화
function handleClear(e) {
  e.preventDefault();
  clearContents(firstNumber);
  clearContents(secondNumber);

  result.textContent = '-';
  firstNumber.focus();
}

firstNumber.addEventListener('input', handleInput);
secondNumber.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
