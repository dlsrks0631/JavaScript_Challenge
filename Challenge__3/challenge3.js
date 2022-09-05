const First_Line_Input = document.querySelector("#First_Line input");
const Second_Line_Input = document.querySelector("#Second_Line input");
const Second_Line_Button = document.querySelector("#Second_Line button");
const Result_First_Line = document.querySelector("#Result_First_Line");

function ff() {
  const Max_Num = First_Line_Input.value;
  const Guess_Num = Second_Line_Input.value;
  const Random_Num = Math.floor(Math.random() * Max_Num);

  if (Random_Num !== Guess_Num) {
    Result_First_Line.innerText = `You chose`;
  }
}

Second_Line_Button.addEventListener("click", ff);
