/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'p' + message.slice(1);

// 부분 문자열 추출
let slice = message.slice();
let subString = message.substring(2, 5);
// let subStr = message.subStr(1, 5); // 지원이 중단됨

// 문자열 포함 여부 확인
let indexOf = message.indexOf('less');

function checkBrowser() {
  const agent = navigator.userAgent.toLowerCase();
  let browswerName;
  switch (true) {
    case agent.indexOf('edg') > -1:
      browswerName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && window.chrome:
      browswerName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browswerName = 'Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browswerName = 'Firefox';
      break;
    case agent.indexOf('trident') > -1:
      browswerName = 'trident';
      break;
    default:
      browswerName = '모던 브라우저가 아닙니다 ';
  }
}

let lastIndexOf = message.lastIndexOf('s');
let includes = message.includes('Less');
let startsWith = message.startsWith('Less');
let endsWith = message.endsWith('Less');

let str = '     a      b        c d    ';

// 공백 잘라내기
// let trimLeft =str.trimLeft*();
// let trimRight = str.trimRight();
let trim = str.trim(); // 양끝만 없앰
let replaceAll = str.replaceAll(' ', ''); //문자에 해당하는 모든 공백을 제거
let replace = str.replace(/\s*/g, '');

// 문자열 채우기
let strPad = '1';
let padStart = strPad.padStart(4, 0);

// 텍스트 반복
let repeat;

// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

function truncate(text, limit = 100, ellipsis = '...') {
  return `${text.slice(0, limit).trim()}${ellipsis}`;
}
