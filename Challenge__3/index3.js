function handleRandom(event) {
  event.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "" && maxNumber === "") {
    return;
  }
  const max = maxNumber.value;
  const random = Mah.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultSpan = result.querySelector("span");
}
