/* eslint-disable no-constant-binary-expression */
/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
// condition ? value1 : value2
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;
// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '100px';
const isActive = false;

console.log(0 || WIDTH);
console.log(0 ?? WIDTH);
console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);
console.log(isActive ?? WIDTH);
console.log(isActive || WIDTH); // isActive가 먼저 정의된거니까 얘가 나옴
console.log('' || WIDTH);
console.log('' ?? WIDTH);
