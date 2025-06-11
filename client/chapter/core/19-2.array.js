/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id: 0,
    name: 'kjj',
    age: 28,
    job: 'dev',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: 'alt text',
  },
  {
    id: 1,
    name: 'rosy',
    age: 18,
    job: 'cat',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: 'so cute',
  },
  {
    id: 1,
    name: 'nini',
    age: 78,
    job: 'dog',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: 'so pretty',
  },
];
/* 요소 순환 ---------------------------- */

// forEach
function user(user) {
  //   console.log(user);
}

people.forEach(user);

const spans = document.querySelectorAll('span');

// event delegation
spans.forEach((span, index) => {
  span.addEventListener('click', (e) => {
    e.currentTarget.style.color = 'orange';
    console.log();
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse => 원본이 훼손됨 -> 원본도 같이 뒤집음
// const reverse = people.reverse();

const reverse = people.toReversed(); //새로운 배열 만들어줌 -> reverse보다 안전함
console.log(reverse);

// splice
// const splice = people.splice(0, 0, { name: 'jay' }); // 원본 훼손함
const splice = people.toSpliced(0, 0, { name: 'jay' }); // 원본 훼손함

// sort -> 원본을 훼손함
const arr = [5, 4, 3, 2, 1, 7];
function compare(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

// const sort = arr.sort(compare);
const sort = arr.toSorted(compare);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map
const peopleJob = people.map((item) => item.job);
const plusAge = people.map((item) => item.age + 2);

const tags = people.map((user) => {
  const template = /* html */ `
      <li>
        <figure>
          <img src="${user.imgSrc}"/>
          <figcaption>${user.imgAlt}</figcaption>
        </figure>
        <ul>
          <li>이름 : ${user.name}</li>
          <li>나이 : ${user.age}</li>
          <li>직업 : ${user.job}</li>
        </ul>
      </li>
    `;
  return template;
});

// 생성된 태그들 화면에 반환

tags.forEach((li) =>
  document.querySelector('ul').insertAdjacentHTML('beforeend', li)
);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

const az = people.find((user) => {
  return user.age > 40;
});

/* 요소 걸러내기 --------------------------- */

// filter

const mz = people.filter((user) => user.age < 20);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const total = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

const template = people.reduce((htmlCode, user) => {
  return htmlCode + `<li>${user.name},${user.age},${user.job}</li>`;
}, '');

document.querySelector('ul').insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const _arr = '안/녕/하/시/소';

// split

const strToarr = _arr.split('/');
// join

const arrTostr = strToarr.join('');

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 새우', price: 12000, brand: '하림' },
  { name: '냉동 치킨', price: 11000, brand: '곰곰' },
];

const _forEach = (f, i) => {
  for (const a of i) f(a);
};
_forEach((item) => {
  console.log(item);
}, products);

console.clear();

const _map = (f, i) => {
  const arr = [];
  for (const a of i) {
    arr.push(f(a));
  }
  return arr;
};
const newArr = _map((item) => item.price, products);

const _filter = (f, i) => {
  const arr = [];
  for (const a of i) {
    if (f(a)) {
      arr.push(a);
    }
  }
  return arr;
};
const product = _filter((item) => item.price < 15000, products);

console.clear();

const obj = new Object();
