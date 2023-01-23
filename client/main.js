import {
  deleteStorage,
  getNode,
  loadStorage,
  saveStorage,
} from "./lib/index.js";

const textField = getNode("#textField");
const deleteButton = getNode('input[value="삭제"]');
const sendButton = getNode('input[value="전송"]');

loadStorage("area").then((res) => {
  textField.value = res;
});

function inputHandler() {
  saveStorage("area", textField.value);
}

textField.addEventListener("input", inputHandler);

function deleteHandler() {
  deleteStorage("area");
}

deleteButton.addEventListener("click", deleteHandler);

/* function sendHandler() {
  saveStorage("area", textField.value).then(() => {
    textField.value = "";
  });
}

sendButton.addEventListener("click", sendHandler); */
