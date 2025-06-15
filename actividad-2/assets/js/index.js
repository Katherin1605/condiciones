let inputI = document.querySelector("#primero");
let inputII = document.querySelector("#segundo");
let inputIII = document.querySelector("#tercero");

let total = 0;

let boton = document.querySelector("#btn");

boton.addEventListener("click", () => {
  let valueI = inputI.value;
  let valueII = inputII.value;
  let valueIII = inputIII.value;
  total = parseInt(valueI) + parseInt(valueII) + parseInt (valueIII);
  let parrafo = document.querySelector("#indicador");
  if (total > 10) {
    parrafo.innerHTML = "Llevas demasiados stickers";
  }
  else {
    parrafo.innerHTML = `Llevas ${total} stickers`;
  }
});
