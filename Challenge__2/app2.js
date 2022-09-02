const homepage = document.querySelector("body");

homepage.backgroundColor = "tomato";
function Resize() {
  let leng = window.innerWidth;
  if (leng > 1000) {
    homepage.style.backgroundColor = "tomato";
  } else if (leng >= 630 && leng <= 1000) {
    homepage.style.backgroundColor = "blue";
  } else {
    homepage.style.backgroundColor = "wheat";
  }
}

window.addEventListener("resize", Resize);
