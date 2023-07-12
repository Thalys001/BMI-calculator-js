import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notNumber, calculateIMC } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotNumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}

// 3 maneiras de criar e atribuir função a um evento
// - 1
// form.onsubmit = function () {};

// - 2
// form.onsubmit = () => {};

// - 3
// form.onsubmit = handleSubmit;

// function handleSubmit() {}
