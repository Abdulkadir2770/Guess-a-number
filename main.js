var input = document.querySelector("#input");
var button = document.querySelector("#button");
var result = document.querySelector("#result");

button.addEventListener("click", () => {
  if(input.value < 7) {
    result.innerHTML = "To Low"
  }  else if(input.value == 7) {
       result.innerHTML = "You Guessed it right!!!";
  }  else if(input.value > 7) {
       result.innerHTML = "To High";
  }  else {
       result.innerHTML = "Not a number";
  }
})

//Correct number is 7