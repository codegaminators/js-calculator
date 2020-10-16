let placeholder = document.querySelector(".placeholder");

const calc = (input) => {
  const pressed = input.innerHTML;

  if (pressed == "=") {
    placeholder.innerHTML = eval(placeholder.innerHTML);
  } else if (pressed == "AC") {
    placeholder.innerHTML = "0";
  } else {
    if (placeholder.innerHTML == "0") {
      placeholder.innerHTML = pressed;
    } else {
      placeholder.innerHTML += pressed;
    }
  }
};
