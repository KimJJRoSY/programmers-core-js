/* --------------- */
/* For Of Loop     */
/* --------------- */

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

// for ~ of 문
// for (const key of languages) {
//   console.table(key);
// }

// - 특정 조건에서 건너띄기
for (const value of languages) {
  const id = value.id;
  if (id.includes('java')) continue;
  console.table(value);
}

console.clear();

// - 특정 조건에서 중단하기
const obj = { nickname: 'toot', age: 30 };

const keyss = Object.keys(obj);
const values = Object.values(obj);
for (const key of values) {
  console.log(key);
}

console.clear();
const entries = Object.entries(obj);
console.log(entries);
console.log(entries[0][0]);

for (const keyValue of entries) {
  console.log(keyValue);
  const key = keyValue[0];
  const value = keyValue[1];
  console.log(key);
  console.log(value);
}

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
console.clear();
for (const key in randomUser) {
  if (Object.hasOwn(randomUser, key)) {
    const L1 = randomUser[key];
    if (typeof L1 === 'object') {
      for (const key in L1) {
        console.log(L1[key]);
      }
    }
  }
}
console.clear();
// - for ~ of 문

for (const keyValue of Object.entries(randomUser)) {
  const key = keyValue[0];
  const value = keyValue[1];
  if (typeof value === 'object') {
    for (const keyValue of Object.entries(value)) {
      const key = keyValue[0];
      const value = keyValue[1];
    }
  }
}
// - 성능 비교 진단
