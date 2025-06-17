import { diceAnimation, getNode, attr, insertLast } from './lib/index.js';

const [rollingButton, recordButton, resetButton] = document.querySelectorAll(
  '.buttonGroup button'
);
const recordListWeapper = getNode('.recordListWrapper');
const cube = getNode('#cube');

let count = 0;
let total = 0;

function createItem(diceNumber) {
  const template = /* html */ `   <tr>
  <td>${++count}</td>
  <td>${diceNumber}</td>
  <td>${(total += diceNumber)}</td>
</tr> 
`;
  return template;
}

function renderRecordItem() {
  const diceNumber = Number(attr('#cube', 'dice'));
  insertLast('tbody', createItem(diceNumber));
  recordListWeapper.scrollTop = recordListWeapper.scrollHeight;
}

// 화살표 함수에 즉시 실행 더함
const handleRollingDice = (() => {
  let isClicked = false;
  let id;

  return () => {
    if (isClicked === false) {
      id = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(id);

      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();
rollingButton.addEventListener('click', handleRollingDice);

function handleRecord() {
  recordListWeapper.hidden = false;
  //주사위 눈 가져오기
  renderRecordItem();
}

function handleReset() {
  recordListWeapper.hidden = true;
}

recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
