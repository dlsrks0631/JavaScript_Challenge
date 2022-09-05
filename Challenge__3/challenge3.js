// value -> string !!

const First_Line_Input = document.querySelector("#First_Line input");
const Second_Line_Input = document.querySelector("#Second_Line input");
const Second_Line_Button = document.querySelector("#Second_Line button");
const Result_First_Line = document.querySelector("#Result_First_Line");
const Result_Second_Line = document.querySelector("#Result_Second_Line");

function OnClickEvent() {
  const Max_Num = First_Line_Input.value;
  const Guess_Num = Second_Line_Input.value;
  const Random_Num = Math.floor(Math.random() * Max_Num);

  if (parseInt(Guess_Num) === Random_Num) {
    Result_First_Line.innerText = `You chose ${Guess_Num}, the machine chose: ${Random_Num}`;
    Result_Second_Line.innerText = `You win!`;
  } else {
    Result_First_Line.innerText = `You chose ${Guess_Num}, the machine chose: ${Random_Num}`;
    Result_Second_Line.innerText = `You lost!`;
  }
}

Second_Line_Button.addEventListener("click", OnClickEvent);
