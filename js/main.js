let inputElement = document.getElementById("input");
let buttonElement = document.getElementById("btn");
let clickElement = document.getElementById("changeme");

/* The following 3 lines of code is inspired by Eveline Ingesson */
buttonElement.addEventListener("click", function (event) {
  let enteredName = inputElement.value;
  if (enteredName !== "") {
    clickElement.style.color = "#ed2d89";
    clickElement.textContent = "Submitted!";
  } else {
    clickElement.style.color = "#ed2d89";
    clickElement.textContent = "Try again!";
  }
});
