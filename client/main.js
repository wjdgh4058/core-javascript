/* global gsap */

import {
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  typeError,
  isNumericString,
  showAlert,
  copy,
  addClass,
  removeClass,
} from "./lib/index.js";

import { jujeobData } from "./data/data.js";

const submit = getNode("#submit");
const result = getNode(".result");

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];
  if (!name) {
    console.log("이름을 입력하세요");
    showAlert(".alert-error", "이름을 입력하세요", 2000);

    //  GSAP

    gsap.fromTo(result, 0.01, { x: -5 }, { x: 5, clearProps: "x", repeat: 20 });
    /* addClass(result, "shake");
    setTimeout(() => {
      removeClass(result, "shake");
    }, 1000); */
    return;
  }

  if (isNumericString(name)) {
    console.log("제대로 된 이름을 입력해 주세요.");
    showAlert(".alert-error", "제대로 된 이름을 입력해 주세요.", 2000);
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

function clickCopyHandler() {
  let text = result.textContent;
  copy(text).then(() => {
    showAlert(".alert-success", "클립보드 복사가 완료됐습니다.", 2000);
  });
}

submit.addEventListener("click", clickSubmitHandler);

result.addEventListener("click", clickCopyHandler);
