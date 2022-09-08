const btn = document.querySelector("button");
const background = document.querySelector("body");

const colors = ["red", "blue", "purple", "green"];

function btnOnClick() {
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];

  background.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
}

btn.addEventListener("click", btnOnClick);
