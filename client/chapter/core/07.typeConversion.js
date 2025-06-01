/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2025;
console.log(YEAR);

//암시적
console.log(YEAR + '');
console.log(typeof (YEAR + ''));

//명시적
String(YEAR);
console.log(YEAR);
// undefined, null
let days = null;
console.log(days + '');

let undef;
console.log(undef + '');

// boolean

let isClicked = false;
console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null은 숫자0으로 변환되서 계산가능한데 undefined는 계산 안됨

// null
let money = null;
console.log(money * 1);
console.log(money / 1);
console.log(+money);

// boolean
let isActive = true;
console.log(isActive * 1);
console.log(!isActive * 0);

// string
let num = '100';
console.log(num * 1);

// numeric string
const width = '120.5px';
console.log(width);

// width에 10px 더해서 내보내기
console.log(Number(width)); // 찐 문자열 있어서 NaN만 나옴

console.log(parseInt(width) + 10); // 정수만 추출 가능

/* 데이터 → 불리언 ---------------------------------------------------------- */
console.clear;

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(!!{});
console.log(!![]);
console.log(!!'    ');
console.log(!![false]);
console.log(!!(() => {}));
console.log(Boolean(() => {}));

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
