const burgerBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");
const form = document.querySelector(".form");
const name = document.querySelector("#name");
const invalidPhone = document.querySelector(".invalid-phone");
const invalidName = document.querySelector(".invalid-name");
const invalidEmail = document.querySelector(".invalid-email");
const phoneNum = document.querySelector("#phone");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const success = document.querySelector(".success");
const greatBtn = document.querySelector(".greatBtn");
const message = document.querySelector("#message");

//event listeners
burgerBtn.addEventListener("click", toggleMenu);
name.addEventListener("blur", validateName);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);
form.addEventListener("submit", sendMessage);
greatBtn.addEventListener("click", hideFeedbackMessage);

navLinks.forEach((link) => link.addEventListener("click", toggleMenu));

//funcions
function toggleMenu() {
  console.log("efopi");
  nav.classList.toggle("nav-active");
  burgerBtn.classList.toggle("cross");
}

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
    invalidName.style.display = "block";
    name.value = "";
  } else {
    name.classList.remove("invalid");
    invalidName.style.display = "none";
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegExp.test(email.value)) {
    email.classList.add("invalid");
    invalidEmail.style.display = "block";
    email.value = "";
  } else {
    email.classList.remove("invalid");
    invalidEmail.style.display = "none";
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  let phoneRegExp = /^[+]?\d{2}?[- ]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}[- ]?$/;

  if (!phoneRegExp.test(phone.value)) {
    phone.classList.add("invalid");
    invalidPhone.style.display = "block";
    phone.value = "";
  } else {
    phone.classList.remove("invalid");
    invalidPhone.style.display = "none";
  }
}

//select jquery
$(".js-example-basic-single").select2({
  minimumResultsForSearch: -1,
});
