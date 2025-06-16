/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

const first = getNode('.first');
// first.onclick = () => [console.log('ht')];

// function handler(e) {
//   console.log('clicked');
//   if (e.wheelDeltaY > 0) {
//     console.log('up');
//   } else {
//     console.log('down');
//   }
// }

function handler(e) {
  console.log(e.offsetX);
}

first.addEventListener('click', handler);

// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('.ball');
function handleBall({ offsetX: x, offsetY: y }) {
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px)`;
}

function handleMove({ offsetX: x, offsetY: y }) {
  console.log('chiolcholchol');
}

// ground.addEventListener('click', handleBall);

ground.addEventListener('mousemove', throttle(handleMove));

function debounce(fn, limit = 1000) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.call(this, e);
    }, limit);
  };
}

function throttle(f, limit = 1000) {
  let wait = false;
  return function (e) {
    if (!wait) {
      f.call(this, e);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}
