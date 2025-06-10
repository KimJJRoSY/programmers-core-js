function earth() {
  let water = true;
  let gravity = 10;
  function tiger(value) {}
  return tiger;
}

const ufo = earth();

const button = document.querySelector('.btn');

const handleClick = (() => {
  let isClicked = false;
  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }
    isClicked = !isClicked;
  };
})();

button.addEventListener('click', handleClick);

// document.querySelector('.first').addEventListener('click', () => {
//   button.removeEventListener('click', handleClick);
// });

function bindEvent(node, eventType, useState) {
  if (typeof node === 'string') node = document.querySelector(node);
  node.addEventListener(eventType, useState);

  return () => node.removeEventListener(eventType, useState);
}

const remove = bindEvent('.first', 'click', handleClick);

//쉬운 예제
function useState(init) {
  let value = init;

  // 값을 읽음
  function read() {
    return value;
  }

  // 값을 저장
  function write(newvalue) {
    value = newvalue;
  }

  return [read, write];
}

const [value, setValue] = useState('hello');
