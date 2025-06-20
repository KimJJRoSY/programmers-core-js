import { getNode } from '../dom/getNode.js';
import { isObject, isNumber } from './type.js';
import { xhrPromise } from './xhr.js';
import { insertLast } from '../dom/insert.js';

// callback

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = 0;
//       second.style.top = 0;
//     });
//     second.style.transform = 'rotate(-360deg)';
//   });
//   second.style.top = '100px';
// });

// 내가 이거 끝나면 꼭 너한테 알려줄게 약속할게...

// promise

/*
Promise를 사용하는 이유?

- 콜백의 한계 (콜백 지옥)
- 가독성을 위해
- 비동기 작업을 순차적으로 처리 👍👍👍👍👍

*/

// object mixin

const defaultOptions = {
  timeout: 1000,
  shouldRejected: false,
  data: 'success',
  errorMessage: 'warn',
};

export function delayP(options) {
  // const config = {...defaultOptions,...options};
  let config = { ...defaultOptions };

  // options이 숫자일 때 isNumber()
  if (isNumber(options)) {
    config.timeout = options;
  }

  // options이 객체일 때 isObject()
  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const { shouldRejected, timeout, data, errorMessage: err } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve({ data });
      } else {
        reject({ message: err });
      }
    }, timeout);
  });
}

// delayP({
//   data: '....',
// });

// const data = delayP();

// delayP()
//   .then(() => {
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })

//   .then((res) => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })
//   .then(() => {
//     first.style.top = 0;
//     second.style.top = 0;
//   });

/* async await */
//async : 무조건 promise object를 리턴
//await: 코드 실행 흐름 제어 result의 값을 꺼낼 수 있음
async function f() {
  return 10;
}

// const a = await f();

async function delayA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 200);
  });
}
// console.log(delayA());

const result = await delayA();
// console.log(result);

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/1');
  const src = data.sprites.other.showdown['front_default'];
  insertLast(document.body, `<img src="${src}" alt=""/>`);
}
getData();
