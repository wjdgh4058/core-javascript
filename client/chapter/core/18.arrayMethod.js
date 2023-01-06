/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray

const arr = [10, 100, 1000, 10000];

console.log(typeof arr);
console.log(Array.isArray(arr));

function isArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "array"
  );
}

function isNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "null"
  );
}

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {};

arr.forEach(function (item, index) {
  this[index] = item;
}, user);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// console.log(arr.reverse());
// splice
arr.splice(1, 0, 23, 5);
console.log(arr);
// sort
arr.sort((a, b) => a - b);
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

let todo = ["밥먹기", "미용실가기", "코딩공부하기"];
let template = todo.map((todoList) => {
  return `<li>${todoList}</li>`;
});

console.log(template);

// template.forEach((item) => {
//   document.body.insertAdjacentHTML("beforeend", item);
// });

console.log(arr.map((item) => item * 2));

// concat
// slice
// map

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

console.log(arr.indexOf(23));
// lastIndexOf
// includes
console.log(arr.includes(1000));

/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];
// find
//조건에 해당하는 첫번째 값만 반환한다.
let find = users.find((item, index) => {
  return item.id < 5;
});
// findIndex
let findIndex = users.findIndex((item) => item.id === 3);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let filter = arr.filter((num) => num < 100);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬져",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

// reduce

let age = friends.reduce((a, b) => a + b.age, 0);

let template2 = todo.reduce((acc, cur, index) => {
  return /* html */ acc + `<li>할일${index + 1} : ${cur}</li>`;
}, "");
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join
let str = "성찬 보경 일범 세민 형진 주현";

let nameArray = str.split(" ");
console.log(nameArray);

let nameString = nameArray.join(" / ");
console.log(nameString);
