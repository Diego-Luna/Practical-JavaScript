function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }
  const arrayLista = lista.split(",");

  const sumaLista = arrayLista.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return parseInt(valorAcumulado) + parseInt(nuevoElemento);
  });

  const promedioLista = sumaLista / arrayLista.length;

  return promedioLista;
}

function CalculateValueMean() {
  const inputPrice = document.getElementById("InputMean");
  const priceValue = inputPrice.value;

  const result = calcularMediaAritmetica(priceValue);

  const resultP = document.getElementById("ResultMean");
  resultP.innerText = "The average is: " + result;
}
