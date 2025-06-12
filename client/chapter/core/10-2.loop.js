/* -------------------- */
/* Do While Loop        */
/* -------------------- */
// let i = 0;
// do {
//   if (i === 3) {
//     console.log(i);
//     break;
//   }
//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

const first = document.querySelector('.first');
// const second = next(first);
// first.nextSibling; // first의 다음요소를 잡아줘 -> 문자열 나옴
// first.nextSibling.nextSibling;
// console.log(first);

let second;
// let next;
// do {
//   next = first.nextSibling;
//   second = next.nextSibling;
//   console.log(second);
// } while (second.nodeType != 1);
// console.log(second);

function next(node) {
  //validation
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.nextSibling;
  } while (node.nodeType != 1);
  return node;
}
second = next(first);
let _second = next('.first');

console.log(second);
console.log(_second);

console.clear();

function calc(now, parking) {
  let price = 1000;
  let extra = 0;
  let parkingMin = 0;
  let parkingHour = 0;
  let hour = 0;
  let min = 0;
  let leaveTime = 0;
  let total = 0;
  hour = Number(now.split(':')[0]); //시간
  min = Number(now.split(':')[1]);
  parkingHour = Math.ceil(parking / 60); // 주차 시간
  console.log(parkingHour);
  parkingMin = Number(parking % 60);
  console.log(parkingMin);
  total = parkingMin + min;
  console.log(`total::${total / 60}`);

  if (Number(parkingMin) + Number(min) / 60 > 0) {
    leaveTime = hour + total;
    // console.log(`leaveTime :: ${leaveTime}`);
  }

  price = parking * 1000;
  if (hour >= 22) {
    // console.log(hour + parking - 24);
    if (Number(parkingMin) + Number(min) > 60) {
      if (24 - (hour + parking) <= 9) {
        extra = Math.ceil(price * 0.1);
      }
    }
  }
  price += extra;

  // return Math.ceil(price);
}
console.log(calc('19:55', 170));
