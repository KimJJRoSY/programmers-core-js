/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(empty);
console.log(`typeof empty:: ${empty}`);

// 2. 값이 할당되지 않은 상태
let undef = undefined;
// 초기값으로 남겨둔다
console.log(undef);
console.log(`typeof undef:: ${undef}`);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const double = 'hello';
const single = 'hello';
const backtick = `hello`;

console.log(`typeof str:: ${double}`);
console.log(`backtick을 넣는 이유 ${double}`);
console.log(`${double / 10}`);

console.clear(); // 여기서부터 콘솔창  깨끗해짐

// 생성자 함수
const str = new String('hello'); // String() == 문자 생성자 함수 (string constructor function)
console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const intiger = 1234;
const floatingPointNumber = 1.23;
console.log(intiger);
console.log(floatingPointNumber);

console.log(`intiger typeof str:: ${intiger}`);
console.log(`floatingPointNumber typeof str:: ${floatingPointNumber}`);

const num = new Number(20); //number constructor function
console.log(num);
console.log(floatingPointNumber.toFixed);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;
console.log(typeof bigInt);

const b = BigInt(4);
console.log(`b : ${b}`);

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;
console.log(isActive);
//boolean은 is로 변수명 시작하는 경우가 많음
const bool = new Boolean(false);
console.log(bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const _obj = {};
console.log(typeof _obj);

const newObj = new Object('aaa');
console.log(newObj);

// 8. 고유한 식별자(unique identifier)
const uuid1 = Symbol('uuid');
const uuid2 = Symbol('uuid');

console.log(uuid1, uuid2);
console.log(uuid1 == uuid2); // 우리 눈에 값이 똑같아 보이지만 해시값?떄문에 다름

// uuid 는 암호화

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류
console.log(typeof null);
// Object
console.log(typeof {});
console.clear;

const obj = {
  name: 'hoho',
  age: 20,
  sayHi: function () {
    console.log(this);
  },
  sayHi2: () => {
    console.log(this);
  },
  sayHi3() {
    console.log('hello~ ');
  },
};
console.log(obj);

// Array
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const newArr = new Array([]);
const _arr = ['a', 100, { name: 'titi' }, ['a', 'b'], true, () => {}];

// function
function a() {
  console.log('a함수가 실행됨');
}

a();

function bb() {
  return 'bb함수가 실행됨';
}

bb();
console.log(bb);

function 붕어빵틀(재료) {
  return `따끈하고 맛있는 ${재료}맛 붕어빵 츄베릅`;
}
const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');

console.log(팥붕);
console.log(슈붕);

const f = new Function();
console.log(f);

// this
function concise() {}

const arrow = () => {};
