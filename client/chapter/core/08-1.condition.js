/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/* 
입력받은 숫자가 0보다 큰 경우 1을 출력
입력받은 숫자가 0보다 작은 경우 -1을 출력
입력받은 숫자가 0인 경우 0을 출력
 */
let num = +prompt("숫자를 입력해 주세요:");
let output = 0;
num > 0 ? (output = 1) : num < 0 ? (output = -1) : (output = 0);

console.log(output);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

// if 문(statement)
if (didWatchMovie == "yes") {
  console.log("영화 재밌었겠다.");
} else if (goingToWatchMovie == "yes") {
  console.log("언제 볼꺼니?");
} else {
  console.log("그럼 다른 영화 볼거니?");
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자
let mention = "";
didWatchMovie == "yes"
  ? (mention = "재밌었니?")
  : goingToWatchMovie == "yes"
  ? (mention = "언제 볼꺼니?")
  : (mention = "니 맘대로 하렴");

console.log(mention);

// 멀티 조건부 연산자 식
