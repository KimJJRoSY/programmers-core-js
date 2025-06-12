/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// logical AND assignment
// a &&= b;
// a의 값이 b 가 되서 빈 문자열로 변경됨
// console.log(a);

// 논리합(또는) 연산자
// let AorB = a || b;
// console.log(AorB);

// a에 값에 두 개를 비교한 결과값을 담겠다
// a ||= b;
// console.log(a);

// 부정 연산자
let reverseValue = !value;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

console.clear();

function login() {
  const userId = prompt('아이디를 입력해주세요');

  //만약에 userId이 null 실행하지마 -> return 사용
  if (!userId) return;
  // userId를 형변환 후, userId가 false면 => !userId는 true가 됨
  // => 그러면 걍 아무것도 실행 안하고 리턴

  if (userId?.toLowerCase().trim('') === 'admin') {
    const pw = prompt('비밀번호를 입력해주세요');
    if (pw.toLowerCase().trim('') === 'themaster') {
      console.log('환영합니다');
    } else if (pw === null || pw.replace(/\s*/g, '') === '') {
      console.log('취소했습니다.');
    } else {
      console.log('로그인 실패');
    }
  } else if (userId === null || userId.replace(/\s*/g, '') === '') {
    console.log('취소했습니다.');
  } else {
    console.log('로그인 실패');
  }
}
