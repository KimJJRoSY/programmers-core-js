/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

Object.prototype.nickname = 'tiger'; // Object가 큰 조상인데 그 안에 nickname 냅다 박음 전역으로 원본 훼손

// console.log('nickname' in javaScript);
// console.log(javaScript.hasOwnProperty('nickname'));
// console.clear();
// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickname'));
// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'creator'));
// console.clear();
console.log(Object.hasOwn(javaScript, 'nickname'));

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
for (const key in javaScript) {
  console.log(key);
}

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

for (const key in javaScript) {
  //   if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
  //     console.log(key);
  //   }
  if (Object.hasOwn(javaScript, key)) {
    console.log(key);
  }
}
// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (const key in javaScript) {
  const value = javaScript[key];
  console.log(value);
}
console.clear();

const tens = [10, 100, 1000, 10_000];

for (const key in tens) {
  console.log(tens[key]);
}
console.clear();

const obj = {};
obj.nickname = 'mioo';

console.log(obj);
Object.defineProperty(obj, 'age', {
  value: 30,
});
