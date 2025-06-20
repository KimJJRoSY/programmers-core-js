/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  date: '2023. 12. 06',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
    { name: ' 회덮밥', price: 13000, count: 2 },
  ],

  totalPrice() {
    this.total = this.menu.reduce((acc, cur) => acc + cur.price * cur.count, 0);
    return this.total;
  },
};
shopOrder.totalPrice();

// menu안에 있는 product price의 총 합 구하기
// const total = shopOrder.menu.reduce(
//   (acc, cur) => acc + cur.price * cur.count,
//   0
// );

// let total = 0;
// shopOrder.menu.forEach((item) => {
//   total += item.price * item.count;
// });
// console.log(total);

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index];
  },
  //   addItem: (newItem) => {
  //     this.items.push(newItem);
  //   },
  addItem(newItem) {
    this.items.push(newItem);
  },
};

// console.clear();

const calc = (str, pattern) => {
  let strList = str.split(' ');
  //객체로 만듦
  const obj = strList.reduce((acc, cur, index) => {
    acc[cur] = pattern[index];
    return acc;
  }, {});
  // 만약 값이 같은데 키가 다르면 F 반환
  console.log('obj', obj);
  for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(obj[i]);
  }
};

console.log(calc('dog cat cat fish', 'abba')); //false가 나와야됨
