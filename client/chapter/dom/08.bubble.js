/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

// section.addEventListener('click', () => {
//   console.log('%c section', 'color:dodgerblue');
// });
// article.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c article', 'color:hotpink');
// });
// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color:yellowgreen');
// });

// section.addEventListener('click', (e) => {
//   console.log('%c section', 'color:dodgerblue');
//   console.log(e.target, e.currentTarget);
// });

section.addEventListener('mouseenter', (e) => {
  console.log(e.type);
});
p.addEventListener('mouseleave', (e) => {
  console.log(e.type);
});

/* 캡처링 ----------------------------------------------------------------- */
