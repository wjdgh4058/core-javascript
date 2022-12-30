/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)

/* let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
 */
/* let count = +prompt("몇 번 순환할까요?", "");
do {
  console.log(count);
  count--;
} while (count > 0); */

// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector(".first");
let second = document.querySelector(".first");

/* let next = (node) => {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);

  return node;
}; */

let prev = (node) => {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);

  return node;
};

/* next(first);

console.log(next(first)); */

prev(second);

console.log(prev(second));
