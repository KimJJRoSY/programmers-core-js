/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 집합 데이터
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 === arguments

  //   console.log(arguments);
  let sum = 0;

  //   for (const value of arguments) {
  //     sum += value;
  //   }
  //   return sum;

  //   const arr = Array.prototype.slice.call(arguments); //array instance method
  //   const arr = Array.from(arguments); //array static method

  //   const arr = [...arguments]; //spread syntax
  //   console.log(arr);

  //   arr.forEach(function (value) {
  //     sum += value;
  //   });

  //   arr.reduce(function (acc, current, index) {
  //     return (sum = acc + current);
  //   }, 0);

  //   Array.prototype.forEach.call(arguments, function (value) {
  //     sum += value;
  //   });

  arguments.__proto__ = Array.prototype;
  console.log(arguments);

  return sum;
};
const result = calculateTotal(1000, 3000, 5000, 2300, 5000, 2300, 3000);
console.log(result);

console.clear();
const friends = ['q', 'w', 'e', 'r'];
const newFriends = friends.map(function (name, index) {
  return `${index}^*^:${name}`;
});
console.log(newFriends);
console.clear();

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};
anonymousFunctionExpression();
// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};
namedFunctionExpression();
// 콜백 함수 (표현)식
// let callbackFunctionExpression;
let cb = function (condition, success, fail) {
  if (condition) success();
  else fail();
};
// cb(
//   true,
//   function () {
//     console.log('성공');
//   },
//   function () {
//     console.log('실패');
//   }
// );

cb(
  true,
  () => {
    console.log('성공');
  },
  () => {
    console.log('실패');
  }
);
console.clear();

function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url);
  } else {
    fail();
  }
}
movePage(
  'https://www.naver.com',
  function (url) {
    console.log(`현재 입력한 url : ${url}, 3초 뒤 해당 사이트로 이동`);
  },
  function () {
    console.log('잘못된 url 정보');
  }
);

console.clear();

// function getGeolocation(success) {
//   navigator.geolocation.getCurrentPosition(function (so) {
//     const data = so.coords.latitude;
//     success(data);
//   });
// }

// getGeolocation(function (value) {
//   console.log(value);
// });

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// (function () {
//   var f = 100;
//   console.log('ㄱㅑㅎㅏㅇ');
// })();
// console.log(f);

// 캡슐화
const MASTER = (function () {
  var uuid = 'asdjhrgquwgrhjqbwr';
  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();
console.log(MASTER.setKey('새로운 비번'));
console.log(MASTER.getKey());
console.clear();

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const students = [
//   { name: '김철수', age: 20, score: 85 },
//   { name: '이영희', age: 22, score: 92 },
//   { name: '박민수', age: 19, score: 78 },
//   { name: '최지영', age: 21, score: 88 },
// ];
// const first = numbers.map((item) => {
//   item = item * 2;
// });

// console.log(first);

function setCss(element, prop, value) {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!(prop in document.body.style)) {
    throw new ReferenceError('setCss 함수의 두 번째는 유효한 css 속성이여함');
  }
  if (!value) {
    throw new Error('setCss 함수의 세 번째 인수는 필수 입력값임');
  }

  element.style[prop] = value;
}
const first = document.querySelector('.first');

setCss('.second', 'color', 'hotpink');

function getCss(element, prop) {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }
  if (!(prop in document.body.style)) {
    throw new ReferenceError('setCss 함수의 두 번째는 유효한 css 속성이여함');
  }

  return getComputedStyle(element)[prop];
}
const fontSize = getCss('.first', 'font-size');

// function _css(node, prop, value) {
//   // if (!value) {
//   //   return getCss(node, prop); //getCss에 return 없어서 return 사용
//   // } else {
//   //   setCss(node, prop, value);
//   // }
//   return !value ? getCss(node, prop) : setCss(node, prop, value);
// }

const _css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);

_css('.first', 'color'); //get
_css('.first', 'color', 'blue'); //set
