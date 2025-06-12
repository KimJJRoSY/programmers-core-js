/* ---------------- */
/* Switch           */
/* ---------------- */

const a = 15;
switch (a) {
  case 10:
    console.log('값이 너무 낮음');
    break;
  case 15:
    console.log('정답');
    break;
  case 20:
    console.log('값이 너무 높음');
    break;
  default:
    console.log('숫자를 입력해 주세염');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
thisTime = DAWN;

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

console.clear();

/* switch vs. if -------------------------------------------------------- */

// const input = Number(prompt('숫자를 입력해 주세요(0~6)'));

//랜덤한 값을 받아서 랜덤한 요일 출력 ㄱ!

function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(value) {
  switch (value) {
    case 0:
      return '일';
    case 1:
      return '월';

    case 2:
      return '화';

    case 3:
      return '수';

    case 4:
      return '목';

    case 5:
      return '금';

    case 6:
      return '토';
  }
}

function weekend() {
  const today = getDay(getRandom(7));
  if (today.includes('토') || today.includes('일')) {
    return `오늘은 ${today}요일 입니다. 그러므로 주말입니다.`;
  }
  return `오늘은 ${today}요일 입니다. 그러므로 평일입니다.`;
}

const day = getDay(getRandom(7));
console.log(`오늘은 ${day}요일 입니다`);
