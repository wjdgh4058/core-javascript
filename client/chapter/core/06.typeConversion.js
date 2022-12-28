/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log(String(YEAR));

// undefined
console.log(String(undefined));

//null
let days = null;
console.log(String(days));

// boolean
let compare = 4 > 2;
console.log(String(compare));
console.log(compare + "");

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean -> true : 1 / false : 0
let cutie = true;
console.log(Number(cutie));
console.log(cutie * 1);
console.log(cutie / 1);
console.log(+cutie);

// string 숫자형 문자
// 공백을 제거하고 숫자형으로 반환한다.
let num = "123";
console.log(num * 1);

// numeric string
let width = "320px";
console.log(+width);
// 숫자형으로 반환 가능한거만 형변환해서 반환한다.
console.log(parseInt(width, 10));
console.log(parseFloat(width, 10));
/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

// 공백은 true로 인식
console.log(Boolean("asdasd"));

console.log(Boolean(undefined));

console.log(Boolean(null));

console.log(!!"asdasd");
