/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

const { loadESLint } = require('eslint');
const { use } = require('react');

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
  return `^*^:${name}`;
});
console.log(newFriends);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
