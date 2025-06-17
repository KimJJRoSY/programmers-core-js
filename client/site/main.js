const links = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

/* 
1. 각 메뉴에 마우스를 올렸을 때 
2. 선택된 자식의 depth를 찾아서 
    - 대상의 마지막 자식 요소 (lastElementChild)

3. height = '100px'
    - element.style.height = '100px'

4. 선택된 대상의 depth가 아니면 나머지는 height = 0;
    - 나머지 = 전체

*/

// const h = (t) => {
//   t.style.height = 0
// }

function vanilla() {
  const h = (t) => (t.style.height = 0);

  links.forEach((a) => {
    a.addEventListener('mouseenter', (e) => {
      const currentDepth = e.currentTarget.lastElementChild;

      // 모든 depth 높이 없애!
      depthList.forEach(h);

      currentDepth.style.height = '100px';
    });
  });

  // header.addEventListener('mouseleave',()=>{

  //   depthList.forEach((d) => {
  //     d.style.height = 0
  //     h(d)
  //   })

  // })

  header.addEventListener('mouseleave', () => depthList.forEach(h));
}

console.log(gsap);

links.forEach((a) => {
  const currentDepth = a.lastElementChild;
  const tl = gsap
    .timeline({ paused: true })
    .to(currentDepth, { height: 100, duration: 0.2, easy: 'power2.inOut' });
  a.addEventListener('mouseenter', () => tl.play());
  // 마우스 떼면 사라짐
  // gsap을 줄때 css에 transition 없어야됨
  a.addEventListener('mouseleave', () => tl.reverse());
});

// gsap으로 애니메이션 구현
// 시간 설정 가능 => duration, delay
// gsap.to('.logo', {
//   x: 100,
// });

// gsap.to('.logo', {
//   y: 100,
//   delay: 0.5,
// });

// gsap에서는 타임라인 제공함 -> 한번에 제어 가능
// const tl = gsap.timeline({
//   default: {
//     duration: 5,
//   },
// });

// tl.to('.logo', { x: 100 });
// tl.to('.logo', { y: 100 });

/* 
tl.restart() -> 다시 시작
*/
