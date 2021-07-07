function calcularModa(lista) {
  const listaCount = {};

  // El objeto le ponemos el nombre y el numero que hay.
  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  // pasamos el objeto a un array, y lo ordenamos.
  const listaArray = Object.entries(listaCount).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  // damos el ultimo objeto de nuestro array.
  const moda = listaArray[listaArray.length - 1];

  return moda;
}

function CalculateValueModa() {
  const inputPrice = document.getElementById("InputModa");
  const priceValue = inputPrice.value;

  const arrayLista = priceValue.split(",");

  const arrayNumber = arrayLista.map((value) => {
    return parseInt(value);
  });

  const result = calcularModa(arrayNumber);

  const resultP = document.getElementById("ResultModa");
  resultP.innerText = "The arithmetic mode is: " + result[0];
}
