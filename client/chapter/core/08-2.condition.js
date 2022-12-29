/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

/*  
age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.

"이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.
*/
let age = 50;
if (age >= 14 && age <= 90) {
  console.log("14세 이상 90세 이하에 속하는 나이 입니다.");
} else {
  console.log("범위에 맞지 않은 나이 입니다.");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };
console.log(whichTruthy);

/* 
프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요. 이때 아무런 입력도 하지 않거나
 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

비밀번호 확인 절차는 다음과 같습니다.

맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.
*/

let userName = prompt("ID를 입력해 주세요: ").toLowerCase();
// let lowerUserName = userName.toLowerCase();
let password = "";
if (userName === "admin") {
  password = prompt("비밀번호를 입력해 주세요: ").toLowerCase();
  if (password === "themaster") {
    console.log("환영합니다!");
  } else if (password === "" || password === null) {
    console.log("취소되었습니다.");
  } else {
    console.log("인증에 실패하였습니다.");
  }
} else if (userName === "" || userName === null) {
  console.log("취소되었습니다.");
} else {
  console.log("인증에 실패하였습니다.");
}
