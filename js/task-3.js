const input = document.querySelector("#name-input");
const inputName = document.querySelector("#name-output");

input.addEventListener("input", handleClick);

function handleClick(event) {
  const inputValue = event.target.value.trim();
  if (inputValue === " ") {
    inputName.textContent = "Anonymous";
  } else {
    inputName.textContent = inputValue;
  }
}

