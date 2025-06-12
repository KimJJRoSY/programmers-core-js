function toRadian(degree) {
  return degree * (Math.PI / 180);
}

function toDegree(radian) {
  return radian * (180 / Math.PI);
}

const circle = document.querySelector('.circle');
let degree = 45;
let radius = 10;
let lastInsertTime = 0;
function animation() {
  degree += 0.3;
  radius += 0.1;

  const x = Math.cos(toRadian(degree)) * radius;
  const y = Math.sin(toRadian(degree)) * radius;

  circle.style.transform = `translate(${x}px,${-y}px)`;

  // 현재 시간을 반환함 
  const currentTime = Date.now();

  //300이상만 실행하고 나머지는 버림 -> 시간계산 코드 
  if (currentTime - lastInsertTime >= 400) {
    const tag = `
      <div style="transform:translate(${x}px,${-y}px)">🦋</div>
    `;

    document.querySelector('.space').insertAdjacentHTML('beforeend', tag);

    lastInsertTime = currentTime;
  }
}

setInterval(animation, 0);
