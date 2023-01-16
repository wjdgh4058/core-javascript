import { diceAnimation, getNode } from "./lib/index.js";

const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");

let stopAnimation;

const handlerRollingDice = () => {
  stopAnimation = setInterval(diceAnimation, 100);
};

rollingDiceButton.addEventListener("click", handlerRollingDice);
