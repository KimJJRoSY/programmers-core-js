/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - node
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querynode
// - querynodeAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains

// 1. nav 태그 요소

// const nav = document.body.firstElementChild;
const nav = document.body.querynode('nav');
console.log(nav);

// 2.nav 태그 안에 있는 about li 태그 요소
const aboutTag = nav.querynode('.about');
// const aboutTag = nav.querynode('nav .about');

console.log(aboutTag);

// 3. data-name이 contact인 li 태그 요소

// const contactTag = aboutTag.nextElementSibling;
const contactTag = document.querynode('li[data-name="contact"]');
console.log(contactTag);

//4. nav안에 있는 모든 자식 요소
const children = nav.querynodeAll('li');
const _children = [...nav.children];

console.log(_children);
_children.forEach((li) => console.log(li));
const aboutLi = _children.find((li) => li.matches('.about'));

console.log(children);
console.log(aboutLi);

console.clear();

getNode('.about', 'nav');
getNode('.about');
