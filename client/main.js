import {
  nini,
  END_POINT,
  getNode,
  renderUserCard,
  delayP,
  renderSpinner,
  changeColor,
  renderEmptyUserCard,
  clearContents,
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
  clearContents(userCardInner);

  renderUserList();

  console.log(id);
}

userCardInner.addEventListener('click', handleDelete);

// 버튼 요소 먼저 잡기
const createButton = getNode('.create');
const cancelButton = getNode('.create .cancel');
const doneButton = getNode('.create .done');

function handleCreate() {
  const pop = getNode('.pop');
  // pop.style.opacity = 1;
  // pop.style.visibility = 'initial';

  gsap.to(pop, {
    autoAlpha: 1, // opactiy를 1로, visibility도 초기화 시켜줌
  });
}

// 버블링 주의해야됨 -> stopPropagation을 사용하는 이유
function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.create .pop', {
    autoAlpha: 0,
  });
}

function handleDone(e) {
  e.preventDefault();

  // input 벨류 가져오기
  const username = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  nini
    .post(END_POINT, {
      username,
      email,
      website,
    })
    .then(() => {
      //팝업창 닫기
      gsap.to('.create .pop', {
        autoAlpha: 0,
      });
      //전체 컨텐츠 지움
      clearContents(userCardInner);
      renderUserList();

      getNode('#nameField').value = '';
      getNode('#emailField').value = '';
      getNode('#siteField').value = '';
    });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);

const registerButton = getNode('.register');
const registerDancelButton = getNode('.register .cancel');
const registerDoneButton = getNode('.register .done');

function handleRegister() {
  gsap.to('.register .pop', { autoAlpha: 1 });
}

function handleRegisterCancel(e) {
  e.stopPropagation();
  gsap.to('.register .pop', {
    autoAlpha: 0,
  });
}

function handleRegisterCreate(e) {
  e.preventDefault();
  const name = getNode('#create-name').value;
  const password = getNode('#create-password').value;

  nini.post('http://localhost:3000/register', {
    email: name,
    password: password,
  });
}

registerButton.addEventListener('click', handleRegister);
registerDancelButton.addEventListener('click', handleRegisterCancel);
registerDoneButton.addEventListener('click', handleRegisterCreate);

const isLogin = await nini.post('http://localhost:3000/login', {
  email: 'qwer@gmai.com',
  password: 'qwer',
});

console.log(isLogin.data);
