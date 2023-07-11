import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notNumber, IMC } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

// 3 maneiras de criar e atribuir função a um evento
// - 1
// form.onsubmit = function () {};

// - 2
// form.onsubmit = () => {};

// - 3
// form.onsubmit = handleSubmit;

// function handleSubmit() {}
