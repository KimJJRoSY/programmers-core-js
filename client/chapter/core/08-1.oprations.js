/* ---------------- */
/* Operators        */
/* ---------------- */

// const first = Number(prompt('첫 번째 값:'));
// const second = Number(prompt('두 번째 값:'));

// console.log(Number(first) + Number(second));
// console.log(first * 1 + second * 1);
// console.log(first / 1 + second / 1);
// console.log(first + second);

//prompt 취소 누르면 -> 값이 비어있다는 걸 알리기 위해서 null이 들어감
// prompt 'esc'누르면 창 꺼짐 -> null값 들어감
// 아무것도 입력 안 했을 때 -> '' 빈 문자열 들어감

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;

// 이항 연산자 -> 피연산자 2개
let binary = +a + +b;
console.log(binary);

// 삼항 연산자
let ternary = a > 5 ? true : false;

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 2 - 1;

// 산술 연산자: 곱셈
let multiplication = 2 * 3;

// 산술 연산자: 나눗셈
let division = 2 / 5;

// 산술 연산자: 나머지
let remainder = 4; // 짝수인지 홀수인지 나눌때 자주 사용

//삼항식으로
console.log(remainder % 2 === 0 ? '짝수' : '홀수');

// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1; // 안전한 정수

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
console.clear();
console.log(onlyWorkDefaultValues);

const first = [1, 2, 3];
const second = [4, 5, 6];
console.log(first + second);
console.log(first.concat(second));
console.log([...first, ...second]);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; //135

// count%4 ===2, count = count/2 =>count===5, count===5, 5**3 =>125
// (2*5) + 125 =135
// (count /= 2)가 값이 할당된다는 것을 유의해야됨
