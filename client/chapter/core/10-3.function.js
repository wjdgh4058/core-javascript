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
let square = 1;
let pow = (numeric, powerCount) => {
  for (let i = 0; i < powerCount; i++) {
    square *= numeric;
  }
  return square;
};
console.log(pow(2, 3));
//반복문으로 2**53 만들기

// repeat(text: string, repeatCount: number): string;
let str = "";
let repeat = (text, repeatCount) => {
  for (let i = 0; i < repeatCount; i++) {
    str += `${text} `;
  }
  return str;
};
console.log(repeat("hello", 10));

// hello *3 => hello hello
