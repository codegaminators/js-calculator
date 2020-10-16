let placeholder = document.querySelector(".placeholder");
const buttons = document.querySelectorAll(".btn");

const calc = (pressed) => {
  // console.log(pressed);
  if (pressed == "AC") {
    placeholder.innerHTML = "0";
  } else if (pressed == "=") {
    placeholder.innerHTML = eval(placeholder.innerHTML);
  } else {
    if (placeholder.innerHTML == "0") {
      placeholder.innerHTML = pressed;
    } else {
      placeholder.innerHTML += pressed;
    }
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc(btn.innerHTML);
  });
});
