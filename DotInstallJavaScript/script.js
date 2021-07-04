"use strict";
const element_count = 9;
const correct_number = Math.floor(Math.random() * element_count + 1);
for (let i = 0; i < element_count; i++) {
  let div = document.createElement("div");
  div.classList.add("btn");
  if (i == correct_number) {
    div.addEventListener("click", () => {
      div.classList.add("circle");
      div.innerHTML = "Win!";
    });
  } else {
    div.addEventListener("click", () => {
      div.classList.add("incorrect_animation");
      div.innerHTML = "Lose";
    });
  }
  document.body.appendChild(div);
}
