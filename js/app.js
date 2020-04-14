const form = document.querySelector(".form");
const name = document.getElementById("name");
const feedback = document.querySelector(".invalid-feedback");
const phoneNum = document.getElementById("phone");
const email = document.getElementById("email");
const send = document.querySelector("send");
const success = document.querySelector("success");

name.addEventListener("blur", validateName);
form.addEventListener("submit", sendMessage);

function sendMessage(e) {
  //   document.querySelector(".sendText").style.display = "none";
  //   document.querySelector(".loader").style.display = "block";

  setTimeout(sendMessage, 2000);

  form.classList.add("hidden");
  success.classList.remove("hidden");

  e.preventDefault();
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
