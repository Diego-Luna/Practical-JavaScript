// Helpers, utils
function esPar(numero) {
  return numero % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedio = sumaLista / lista.length;
  return promedio;
}

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// mediana general

const salarioMex = mexico.map(function (persona) {
  return persona.salary;
});

const salariosMexSorted = salarioMex.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaGeneral = medianaSalarios(salariosMexSorted);

// mediana del top 10%

const spleceStart = (salariosMexSorted.length * 90) / 100;
const spleceCount = salariosMexSorted.length - spleceStart ;

const salariosTop10 = salariosMexSorted.splice(spleceStart, spleceCount);

const medianaTop10 = medianaSalarios(salariosTop10);


console.log({
  medianaGeneral,
  medianaTop10,
});
