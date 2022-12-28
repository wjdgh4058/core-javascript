/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(null);
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(undefined);
console.log(typeof undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let nickName = "이부릅";

let message3 = `안녕 내 이름은 ${nickName} 이야`;

console.log(message3);
// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;

console.log("number : ", number);
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(12368n + 10n);
console.log(typeof 12368n);
// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log({});
console.log(typeof {});
// 8. 고유한 식별자(unique identifier)
console.log(Symbol("uid"));
console.log(typeof Symbol("uid"));

console.log(typeof Math);
/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
/* key: value */
// 객체 리터럴 방식
const user = {
  name: "boolub",
  age: 26,
  sum: function (a, b) {
    return a + b;
  },
};
console.log(user.name);
console.log(user.sum(5, 9));

// Array
/* 배열 */
let list = new Array();
list = [1, 2, 3, 4, 5, 6];
console.log(list);

let list1 = [10, 100, 1000]; //배열 리터럴 방식
console.log(list1);
console.log(list1.length);

// function 함수
let sum = (a, b) => {
  return a + b;
};

let subtract = (a, b) => a - b;

console.log(sum(5, 7));
console.log(subtract(15, 8));

// this
