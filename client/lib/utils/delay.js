import { getNode } from '../dom/getNode.js';

//callback
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');
delay(() => {
  first.style.top = '-100px';
  second.style.top = '-100px';

  delay(() => {
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';
    delay(() => {
      first.style.top = 0;
      second.style.top = 0;
    });
  });
});

//promise

function delayP(shouldRejected = false, timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve('sucess');
      //   reject({ message: 'error' });
      if (!shouldRejected) {
        resolve('sucess');
      } else {
        reject({ message: 'error' });
      }
    }, timeout);
  });
}

delayP().then(
  (result) => {
    console.log(result);
  },
  ({ message }) => {
    console.log({ message });
  }
);

// console.log(p);
