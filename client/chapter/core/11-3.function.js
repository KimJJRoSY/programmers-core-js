/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);
console.clear();

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  return rest.reduce((acc, cur) => {
    return (acc += cur);
  });
};

calcAllMoney(1000, 3000, 5000, 2500);

let _calcAllMoney = (...rest) => rest.reduce((acc, cur) => (acc += cur));

console.log(calcAllMoney(1000, 3000, 5000, 2500));

// 화살표 함수와 this

function a() {
  console.log(this);
}

// window.a();
const b = () => {
  console.log(this);
};
// b();
console.clear();

const user = {
  name: '정쥬',
  total: 0,
  grades: [50, 70, 40],
  totalGrades() {
    // this.grades.forEach((g) => (this.total += g), '난 디스야');
    // console.log(this.total);

    this.total = this.grades.reduce((acc, crr) => acc + crr, 0);
    return this.total;
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  //   return num1 ** num2;
  let sum = 1;
  for (let i = 0; i < powerCount; i++) {
    sum = sum * numeric;
  }
  return sum;
};
console.log(pow(2, 53));

let _pow = (numeric, powerCount) => {
  return Array(powerCount)
    .fill(numeric)
    .reduce((acc, cur) => {
      return acc * cur;
    });
};

console.log(_pow(2, 53));
console.clear();
// repeat(text: string, repeatCount: number): string;

let repeat = (text, repeatCount) => {
  let result = '';
  //   for (let i = 0; i < repeatCount; i++) {
  //     result += text;
  //   }
  //   result = Array(repeatCount).fill(text).join('');
  result = Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');

  return result;
};

console.log(repeat('hello*', 3));
console.clear();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const students = [
  { name: '김철수', age: 20, score: 85 },
  { name: '이영희', age: 22, score: 92 },
  { name: '박민수', age: 19, score: 78 },
  { name: '최지영', age: 21, score: 88 },
];


let sum = 0;
const aa = students.filter((v) => {
  if (v.score >= 20) {
    sum += v.score;
    console.log(sum);
  }
});

console.log(aa);
