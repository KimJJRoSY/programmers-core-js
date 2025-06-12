/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  // 고정된 값
  leg = 4;
  tail = true;
  #nickName = 'tiger'; // 바깥환경에서 변수의 접근 막음

  // 최초 1회만 실행됨
  constructor(name) {
    this.name = name;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
    console.log(`${this.#nickName}이 맛있게 밥을 먹습니다`);
  }
}

const animal = new Animal('뭉실이');

class Tiger extends Animal {
  constructor(name) {
    super(name); // 내 부모의 constructor를 실행
    this.parttern = 'tiger pattern';
  }
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근`;
  }
  static bark(sound) {
    return sound + '🐯';
  }
}

const tiger = new Tiger('호돌이');

// class Button {
//   constructor(selector, content) {
//     this.Button = document.querySelector(selector);
//     this.Button.textContent = content;
//     this.count = 0;
//     this.attachEvent();
//   }

//   //태그 생성 담당
//   createTag() {
//     return `<div>${++this.count} clicked</div>`;
//   }

//   // 태그 렌더링 담당
//   #render() {
//     document.body.insertAdjacentHTML('beforeend', this.createTag());
//   }
//   handleClick() {
//     this.#render();
//   }

//   attachEvent() {
//     this.Button.addEventListener('click', this.handleClick.bind(this));

//     // this.Button.addEventListener('click', () => this.handleClick());
//   }
// }

// const btn = new Button('.btn', 'click me!');

class Button {
  constructor({ target, content }) {
    this.Button = document.querySelector(target);
    this.Button.textContent = content;
    this.count = 0;
    this.attachEvent();
  }

  //태그 생성 담당
  createTag() {
    return `<div>${++this.count} clicked</div>`;
  }

  // 태그 렌더링 담당
  #render() {
    document.body.insertAdjacentHTML('beforeend', this.createTag());
  }
  handleClick() {
    this.#render();
  }

  attachEvent() {
    this.Button.addEventListener('click', this.handleClick.bind(this));

    // this.Button.addEventListener('click', () => this.handleClick());
  }
}
const btn = new Button({
  target: '.btn',
  content: 'click me!',
});

class User {
  #pw;
  constructor(id, pw) {
    this.id = id;
    this.#pw = pw;
  }

  hashPassword(pw) {
    this.#pw = `hashCODE ${pw} 소금 후추`;
    return this.#pw;
  }

  checkPassword(pw) {
    return this.#pw === this.hashPassword(pw);
  }
}

const user = new User('tiger', 'heloo99');

class Admin extends User {
  constructor(id, pw) {
    super(id, pw);
    this.role = 'admin';
  }

  isAdmin() {
    return true;
  }

  banUser(user) {
    console.log(`${user.id}계정이 관리자 ${this.id}에 의해 정지되었습니다.`);
    user.isBanned = true;
  }
}
const admin = new Admin('admin', 'admin');

let guestCount = 1;
class Guest extends User {
  constructor() {
    const guestId = `guest_${++guestCount}`;
    super(guestId, null);
    this.role = 'guest';
  }
  isQuest() {
    return true;
  }

  checkPassword() {
    return false;
  }
}
