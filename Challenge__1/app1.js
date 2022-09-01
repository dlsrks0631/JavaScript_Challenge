const Text = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  Convert_Text_In: function handleTitleClick() {
    Text.innerText = "The mouse is here!";
    Text.style.color = colors[0];
  },
  Convert_Text_Out: function handleTitleClickOut() {
    Text.innerText = "The mouse is gone!";
    Text.style.color = colors[1];
  },
  Resize_Window: function handleWindowResize() {
    Text.innerText = "You just resized!";
    Text.style.color = colors[2];
  },
  Right_Click: function handleRightClick() {
    Text.innerText = "That was a right click!";
    Text.style.color = colors[4];
  },
};

Text.addEventListener("mouseenter", superEventHandler.Convert_Text_In);
Text.addEventListener("mouseleave", superEventHandler.Convert_Text_Out);
window.addEventListener("resize", superEventHandler.Resize_Window);
window.addEventListener("contextmenu", superEventHandler.Right_Click);
