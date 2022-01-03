// Declaring the variables

let form = document.getElementById('form')
let minNumber = document.querySelector("#minNumber");
let maxNumber = document.querySelector("#maxNumber");
let btn = document.querySelector("#button");
let result = document.querySelector("#result");
let error = document.querySelector("#error")

// Creating functions

function preventDefault(event){
  event.preventDefault();
}

function randomize(){

  let minimum = Number(minNumber.value);
  let maximum = Number(maxNumber.value);

  if (maximum <= minimum) {
    console.log("error")

  } else {
    const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

    result.innerHTML = `<h1>${randomNumber(minimum, maximum)}</h1>`;
    
  }
}

// Assigning the functions

form.addEventListener('submit', preventDefault);
btn.addEventListener('click', randomize);