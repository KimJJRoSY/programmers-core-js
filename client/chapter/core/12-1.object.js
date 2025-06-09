/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
  position: 'fixed',
  zIndex: '10000',
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800',
  height: '40vh',
  minHeight: '280',
  transform: 'translate(-50%, -50%)',
};

console.log(dialog);

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser;

// authorization : 사용자의 권한
// authentication : 사용자의 인증

authUser = {
  uuid: crypto.randomUUID(),
  name: 'nini',
  email: 'mini@naver.com',
  isSignIn: false,
  permission: 'paid',
};
console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['permission']);

// 객체의 키만을 모아서 배열로 반환하는 객체의 static 메서드
const keys = Object.keys(authUser);

console.log(keys);

function getKeys(obj) {
  let arr = [];
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(key);
    }
  }
  return arr;
}

getKeys(authUser);

function getValues(obj) {
  let arr = [];
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

getValues(authUser);

function getEntries(obj) {
  let arr = [];
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
}
getEntries(authUser);

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  } else {
    throw new Error(
      'removePeoperty 함수의 첫 번째 인수는 객체 타입만 사용 가능'
    );
  }
}

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel
function createUser(name, age, phone) {
  return {
    name,
    age,
    [calculateProperty + '번호']: phone,
  };
}

createUser('tt', 23, '010-1234-1234');

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

//short hand property
const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
console.clear();
const arr = [10, 100, 1000, 10000, 100000];

const [a1, , a3, a4, a5 = 999] = arr;
console.log(a1, a3, a5);

const spans = document.querySelectorAll('span');
console.log(spans);
const [first, second] = spans;
console.log(first, second);

for (const [k, v] of Object.entries(authUser)) {
  console.log(k, v);
}

Object.entries(authUser).forEach((item) => console.log(item));

const mapArray = Object.entries(authUser).map(([_, v]) => v);

console.log('mapArray', mapArray);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

console.clear();

const salaries = {
  j: 400,
  h: 700,
  g: 300,
};

const { j: 정, h: 황, ...나머지 } = salaries;

console.log(나머지);

const data = {
  name: 'j',
  age: 28,
  address: 'gg',
  phone: '010-2020-2020',
  job: 'good',
};

function createUserObject({ name, age: _age, address, phone, job } = {}) {
  const age = 50;
  return {
    name,
    age: _age,
    address,
    phone,
    job,
  };
}

const user = createUserObject(data);
console.log(user);

// console.clear();

// const calc = (str, pattern) => {
//   let strList = str.split(' ');
//   //객체로 만듦
//   const obj = strList.reduce((acc, cur, index) => {
//     acc[cur] = pattern[index];
//     return acc;
//   }, {});
//   // 키와 값이 처음 나오면 T, 값이 또 나왔는데 키랑 다르면 F 반환후 종료

//   for (let i=0;i> obj.length; i++) {

//   }

//   console.log('obj:', obj);
// };

// console.log(calc('dog cat cat fish', 'abba')); //false가 나와야됨
