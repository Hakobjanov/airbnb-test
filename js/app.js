const form = document.querySelector(".form");
const name = document.getElementById("name");
const feedback = document.querySelector(".invalid-feedback");
const phoneNum = document.getElementById("phone");
const email = document.getElementById("email");
const sendBtn = document.querySelector(".send");
const success = document.querySelector(".success");
const greatBtn = document.querySelector(".greatBtn");
const message = document.querySelector("#message");

name.addEventListener("blur", validateName);
form.addEventListener("submit", sendMessage);

greatBtn.addEventListener("click", hideFeedbackMessage);

function sendMessage(e) {
  sendBtn.classList.add("loading");

  setTimeout(() => {
    form.classList.add("hidden");
    success.classList.remove("hidden");
    sendBtn.classList.remove("loading");
  }, 2000);

  e.preventDefault();
}

function hideFeedbackMessage() {
  form.classList.remove("hidden");
  success.classList.add("hidden");
  name.value = "";
  phoneNum.value = "";
  email.value = "";
  message.value = "";
}

function validateName() {
  const name = document.getElementById("name");
  let nameRegExp = /^[a-zа-яёїєґі'][a-z-а-яёїєґі' ]+[a-zа-яёїєґі']?$/i;

  if (!nameRegExp.test(name.value)) {
    name.classList.add("invalid");
    feedback.style.display = "block";
    name.value = "";
  } else {
    name.classList.remove("invalid");
    feedback.style.display = "none";
  }
}

//   let emailRegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.+([a-zA-Z]{2,5})$/
//   let phoneRegExp = /^[+]?\(\d{12})}$/; /^[+]?\d{2}?[- ]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}[- ]?$/

//select
$(".js-example-basic-single").select2({
  minimumResultsForSearch: -1,
});
