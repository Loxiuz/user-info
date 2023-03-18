"use strict";

window.addEventListener("load", initApp);

function initApp() {
  // Event Listeners
  document.querySelector("#form-create").addEventListener("submit", createUser);
}

function createUser(event) {
  event.preventDefault();

  const name = this.name.value;
  const userName = this.userName.value;
  const age = this.age.value;
  const title = this.title.value;
  const mail = this.mail.value;
  const image = this.image.value;

  console.log(name);
  console.log(userName);
  console.log(age);
  console.log(title);
  console.log(mail);
  console.log(image);

  console.log(validateUser(name, userName, age, title, mail, image));

  // validate user info
}

function validateUser(name, userName, age, title, mail, image) {
  if (
    name.length > 2 &&
    title &&
    ((mail.length > 6 && mail.length < 20) || userName) &&
    image &&
    age >= 18
  ) {
    return true;
  } else {
    return false;
  }
}
