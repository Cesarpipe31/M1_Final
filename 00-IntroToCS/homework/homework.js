"use strict"

function BinarioADecimal(num) {
  // tu codigo aca
  /*
  input "110"
  output 7

  convertir el string en array
  [1, 1, 0]

  dar vuelta el array
  [0, 1, 1]

  Recorrer el array usando la posición

  usar la posición como factor para elevar la base a ese factor

  multiplicar el resultado por el varlo del elemento del array

  sumar los resultados
  */

  var data = num.split("").reverse()
  var result = 0
  for (var i = 0; i < data.length; i++) {
    result += 2 ** i * data[i] // Lo mismo que Math.pow(2, i)
  }
  return result
}

function DecimalABinario(num) {
  // tu codigo aca
  /*
  input 4
  output 100

  input 7
  output 111

  dividir num entre 2 hasta que llegue a 0
  quedarme con resultado entero (sin el valor decimal) y el resto
  Ir recordando los restos
  */

  var result = ""
  while (num > 0) {
    result = (num % 2) + result
    num = Math.floor(num / 2)
  }
  return result
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
