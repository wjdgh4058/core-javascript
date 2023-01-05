/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  "HTML",
  "CSS",
  "SVG",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]); */

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

/* let i = 0;
while (i < frontEndDev.length) {
  console.log(frontEndDev[i]);
  i++;
} */

// while 문 (역순환 : 역방향)
/* let i = frontEndDev.length - 1;
while (i >= 0) {
  console.log(frontEndDev[i]);
  i--;
} */

/* while (frontEndDev.length) {
  console.log(frontEndDev.pop());
} */

/* let i = 0;
while (i < frontEndDev.length) {
  console.log(frontEndDev[frontEndDev.length - (i + 1)]);
  i++;
} */

/* let copyArray = [...frontEndDev];
console.log(copyArray.reverse()); */

// 성능 진단 : 순환 vs. 역순환

// console.log(frontEndDev.reverse());
// console.log([...frontEndDev]);
// console.log(frontEndDev);
