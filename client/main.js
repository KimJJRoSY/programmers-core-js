import { nini, END_POINT } from './lib/index.js';

async function renderUserList() {
  try {
    const { data } = await nini.get(END_POINT);
    data = data.forEach(({ name, email }) => {
      console.log(name, email);
    });
  } catch {
    console.error('error!');
  }
}
renderUserList();
