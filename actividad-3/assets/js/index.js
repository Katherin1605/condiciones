let inputI = document.querySelector("#primero");
let inputII = document.querySelector("#segundo");
let inputIII = document.querySelector("#tercero");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let valorI = inputI.value;
  let valorII = inputII.value;
  let valorIII = inputIII.value;

  let contrasena = valorI + valorII + valorIII;
  if (contrasena == "911") {
    parrafo.style.background = 'green';
    parrafo.style.border = '2px dashed black';
    parrafo.style.borderRadius = '5px';
    parrafo.style.padding = '8px';
    document.querySelector("#parrafo").innerHTML = "Password 1 es correcto";
  } else if (contrasena == "714") {
    parrafo.style.background = 'green';
    parrafo.style.border = '2px dashed black';
    parrafo.style.borderRadius = '5px';
    parrafo.style.padding = '8px';
    document.querySelector("#parrafo").innerHTML = "Password 2 es correcto";
  } else {
    parrafo.style.background = 'red';
    parrafo.style.border = '2px dashed black';
    parrafo.style.borderRadius = '5px';
    parrafo.style.padding = '8px';
    document.querySelector("#parrafo").innerHTML = "Password incorrecto";
  }
});
