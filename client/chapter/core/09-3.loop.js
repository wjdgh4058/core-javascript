/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

/* for (let i = 0; i < 10; i++) {
  console.log(i);
} */

// 2 ~ 10까지의 짝수 출력하기
/* 
let num = prompt("숫자를 입력하세요: ");

for (let i = 2; i <= num; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
} */

const frontEndDev = "HTML CSS SVG JavaScript jQuery React Redux".split(" ");

let i = 0;
let l = frontEndDev.length;

/* while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
} */

for (let j = 0; j < frontEndDev.length; j++) {
  /* if (frontEndDev[j].includes("SVG") || frontEndDev[j].includes("jQuery"))
    continue; */
  console.log(frontEndDev[j]);
  if (frontEndDev[j].includes("JavaScript")) break;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
