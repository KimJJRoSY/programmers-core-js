// cache에 저장해놓고 꺼내 쓸 수 있음
export const memo = (() => {
  const cache = {};
  return (key, fn) => {
    if (!fn) return cache[key];

    if (cache[key]) {
      console.warn(`${key}안에는 이미 캐시된 값이 존재합니다`);

      if (confirm('덮어쓰기 할래?')) {
        const history = cache[key];
        cache[key] = fn();
        const current = cache[key];
        console.log(`${history} => ${current}`);
        console.log(history);
      }
    }
    cache[key] = fn();
  };
})();

// memo('cube', () => document.querySelector('#cube'));
// memo('cube', () => document.querySelector('#cube'));

// console.log(memo('cube'));
