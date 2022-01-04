// Declaring the variables

let form = document.getElementById('form')
let minNumber = document.querySelector("#minNumber");
let maxNumber = document.querySelector("#maxNumber");
let btn = document.querySelector("#button");
let result = document.querySelector("#result");
let error = document.querySelector(".error");
let closeBtn = document.querySelector("#close");

// Creating functions

function preventDefault(event){
  event.preventDefault();
}

function randomize(){

  let minimum = Number(minNumber.value);
  let maximum = Number(maxNumber.value);

  if (maximum <= minimum) { 
    
  error.style.display = "flex";

  console.log("error");

  } else {
    const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

    result.innerHTML = `<h1>${randomNumber(minimum, maximum)}</h1>`;

    
  }
}

function closeError(){
  error.style.display = "none";
  maxNumber.value = "10";
}

window.onload = closeError();

// Assigning the functions

form.addEventListener('submit', preventDefault);
closeBtn.addEventListener('click', closeError)
btn.addEventListener('click', randomize);