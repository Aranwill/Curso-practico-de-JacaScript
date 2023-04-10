

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// console.log(input.value);

// console.log({
//   h1,
//   p,
//   parrafito,
//   pid,
//   input,
// });

// h1.innerHTML = 'Hola BEBE <br> Hermoso';
// h1.innerText = 'Hermoso <br> Bello';
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('verde');
// // h1.classList.contains('verde');

// input.value = "456"

// const img = document.createElement('img');
// img.setAttribute('src', 'https://th.bing.com/th/id/OIP.R1yUuDBkvwa5SnWPFzLlhQHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7');
// console.log(img);

// pid.innerHTML = "";
// pid.appendChild(img);

/*-----------Manipulacion del DOM-----------------------*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// Escuchando eventos por submit
form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
  console.log({event});
  event.preventDefault();
  const sumaInputs = (Number(input1.value) + Number(input2.value)); 
  pResult.innerHTML = "Resultado =  " + sumaInputs;
};

// Escuchando eventos por click
btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  console.log({event});
  event.preventDefault();
  const sumaInputs = (Number(input1.value) + Number(input2.value)); 
  pResult.innerHTML = "Resultado =  " + sumaInputs;
};

function mouseDown() {
  document.getElementById("color").style.color = "red";
}

function mouseUp() {
  document.getElementById("color").style.color = "blue";
}
