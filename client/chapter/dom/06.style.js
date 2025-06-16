/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

const nav = getNode('nav');
console.log(nav.className); // getter
console.log((nav.className = 'nav')); // setter

nav.classList.add('hello');
// nav.className = 'hell'; // 아예 바껴버림

nav.classList.remove('nav');
nav.classList.toggle('isActive');

// 내가 만든거
// function addClass(node, className) {
//   if (isString(node)) node = getNode(node);
//   if (isArray(className)) {
//     className.map((item) => node.classList.add(item));
//     return;
//   }
//   if (isObject(className)) {
//     for (let i in className) {
//       node.classList.add(className[i]);
//     }
//     return;
//   }
//   node.classList.add(className);
// }

// addClass('.first', 'tiger');
// addClass('.first', ['a', 'b', 'c']);
// addClass('.first', { first: 'aa', second: 'bb' });
// // addClass('.first', 'q,w,e,r');

// removeClass('.first', 'tiger');
// removeClass('.first', '');

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
