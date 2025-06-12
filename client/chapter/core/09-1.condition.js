/* ---------------- */
/* Condition        */
/* ---------------- */

//  const result = prompt("자바스크립트의 '공식'이름은 무엇일까요?",'')

//  if (result==='ECMAScript'){
//     console.log('정답입니다')
//  }else{
//     console.log('오답입니다')
//  }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?

// 영화 볼거니?

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리
function wathingMovie() {
  let didWatchMovie = confirm('그 영화 봤니?');

  if (didWatchMovie) {
    console.log('그 영화 진짜 재밌지 bb ');
  } else {
    let goingToWatchMovie = confirm('영화 볼거니?');
    if (goingToWatchMovie) {
      console.log('꼭 봐');
      let withWho = prompt('누구랑 볼거니?');
      if (withWho === '너') {
        console.log('ㅇㅋㅇㅋ ㄱㄱ~');
      } else if (withWho === '가족') {
        console.log('가족이랑 좋은 시간 보내길~');
      } else {
        console.log('나 말고 누구랑 봐');
      }
    } else {
      console.log('그 영화 진짜 재밌어 시간되면 봐봐');
    }
  }
}
// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// 멀티 조건부 연산자 식
didWatchMovie.includes('yes')
  ? console.log('그 영화 진짜 재밌지 bb ')
  : goingToWatchMovie.includes('yes')
    ? console.log('꼭 봐')
    : console.log('그 영화 진짜 재밌어 시간되면 봐봐');
