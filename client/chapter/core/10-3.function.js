/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

/* const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}; */

/* let calculateTotal = (moneyA, moneyB, moneyC, moneyD) => {
  return moneyA + moneyB + moneyC + moneyD;
};
 */
let calculateTotal = (...args) => {
  let total = 0;
  args.forEach((item) => {
    total += item;
  });
  console.log(total);

  return;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

/* console.log(resultX);
console.log(resultY);
console.log(resultZ); */

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;

console.log(calcAllMoney(100, 200, 300, 400));

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
//반복문으로 2**53 만들기

let pow = (numeric, powerCount) => {
  let square = 1;
  for (let i = 0; i < powerCount; i++) {
    square *= numeric;
  }
  return square;
};
console.log(pow(2, 5));

// 표현식으로 만들기
let powExpression = (numeric, powerCount) => {
  let result = Array(powerCount)
    .fill(numeric)
    .reduce((a, b) => a * b, 1);
  return result;
};
console.log(powExpression(2, 7));

// repeat(text: string, repeatCount: number): string;

let repeat = (text, repeatCount) => {
  let str = "";
  for (let i = 0; i < repeatCount; i++) {
    str += `${text} `;
  }
  return str;
};
console.log(repeat("hello", 10));

let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(text)
    .reduce((a, b) => a + b, "");
console.log(repeatExpression("안녕", 5));

// hello *3 => hello hello
