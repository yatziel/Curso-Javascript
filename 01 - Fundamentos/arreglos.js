/* 

  Arreglos o Arrays

  Son una estructura de datos que permite almacenar múltiples valores en una sola variable.

  Los elementos dentro del array tienen una posición o índice que permite acceder a ellos.

  Los indices de los datos comienzan en 0.

  Los arrays pueden contener datos de cualquier tipo: números, strings, booleanos, incluiso arrays anidados.

  Sintaxis

  let nombreArray = [ elemento1, elemento2 , elemento 3 ] 

*/

let frutasFavoritas = ["sandia" , "manzana" , "piña"];
let numerosSuerte = [5, 10, 8, 16, 35];
let meQuieroNoMeQuiere = [true, false, false, true];
let misDatos = ["Yatiel", "López", 35, false];
let anidandoArrays = [ 
  [123, 345, 789, 321] , 
  ["Gato", "Perro", "Jirafa"] , 
  [true, false, true]
];

/* 

  array  -> ["sandia" , "manzana" , "piña"]
  indice ->     0           1          2

  array   -> [ 5 , 10 , 8 , 16 , 35]
  índice ->    0   1    2   3    4 

*/

/* 

  Acceder a los elementos  de un array

  Para acceder a un dato usamos la siguiente sintaxis:

  nombreArray[indice];

*/
console.log( frutasFavoritas[2] );
console.log( numerosSuerte[1] )
console.log( anidandoArrays[2][2] )

/* 

  Modificar elementos del array

  Para cambiar el valor de cualquier elemento dentro del array usamos la siguiente sintaxis:

  nombreArray[indice] = nuevoDato

*/

console.log( frutasFavoritas )

frutasFavoritas[2] = "pera";

console.log( frutasFavoritas )

/* 

  Metedos utiles para los arrays

  Los metodos son "funciones" que trabajan con los datos de los arrays su sintaxis es la siguiente:

  1. nombreArray.nombreMetodo
  2. nombreArray.nombreMetdo(parametro)

*/

/* 

  length nos dice cuantos elementos tiene un array

*/

  console.log(frutasFavoritas.length)
  console.log(numerosSuerte.length)
  console.log(anidandoArrays[0].length)

/* 

  push() - Agrega un elemento al fiinal del array.

  nombreArray.push(dato)

*/

  console.log(frutasFavoritas);

  frutasFavoritas.push("maracuya");

  console.log(frutasFavoritas);

/* 

  pop() - Elimianos el ultimo elemento del array y lo devuelve.

  nombreArray.pop()

*/

  console.log(numerosSuerte);

  let numeroQuitado = numerosSuerte.pop()

  console.log(numerosSuerte);

  console.log(numeroQuitado)