import {
  nini,
  END_POINT,
  getNode,
  renderUserCard,
  delayP,
  renderSpinner,
  changeColor,
  renderEmptyUserCard,
} from './lib/index.js';

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);
  // await delayP(2000);
  try {
    const { data } = await nini.get(END_POINT);
    gsap.to('.loadingSpinner', {
      opacity: 0,
      duration: 1,
      onComplete() {
        this._targets[0].remove(); // 자연스럽게 삭제가능함 -> this
        data.forEach((user) => renderUserCard(userCardInner, user));
        changeColor('.user-card');

        gsap.from('.user-card', {
          opacity: 0,
          stagger: 0.1, // 순차적으로 쌓이는 애니메이션
          x: -30,
        });
      },
    });
  } catch {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      duration: 1,
      onComplete() {
        this._targets[0].remove();
        renderEmptyCard(userCardInner);
      },
    });
  }
}
renderUserList();

function handleDelete(e) {
  const button = e.target.closest('button'); // 버튼만 수집 가능
  if (!button) return;
  const id = button.dataset.value;

  nini.delete(`${END_POINT}/${id}`).then(() => {
    alert('삭제가 완료됐습니다.');
  });

  console.log(id);
}

userCardInner.addEventListener('click', handleDelete);
