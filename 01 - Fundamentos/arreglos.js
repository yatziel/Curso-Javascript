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

  push() - Agrega un elemento al final del array.

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

  
  /* 
  
    unshift() - Agrega un elemento al inicio del array.

    nombreArray.unshift(dato)
  
  */

console.log(frutasFavoritas);

frutasFavoritas.unshift("mandarina");

console.log(frutasFavoritas);

/* 

  shift() - Elimina el primer elemento del array y lo devuelve.

  nombreArray.shift()

*/

console.log(numerosSuerte);

let quitarPrimero = numerosSuerte.shift();

console.log(numerosSuerte);
console.log(quitarPrimero);

/* 

  indexOf() - Encuentra el índice de un elemento en el array.
  
  nombreArray.indexOf(dato);

*/

let indice = frutasFavoritas.indexOf("uva");

console.log(indice)

/* 

  splice() - Eliminar o agregar elementos al array desde una posición específica.
  
  Eliminar

  nombreArray.splice(indiceInicio, indiceFinal);

  Agregar

  nombrArray.splice(indiceInicio, paso, valor1, valor2)

*/

console.log(frutasFavoritas);

frutasFavoritas.splice(1,3);

console.log(frutasFavoritas)

frutasFavoritas.splice(1, 0, "fresa", "banana", "naraja", "aguacate")

/* 

  slice() - Crear una copia de una porción del array. No modifica el original, se crea  un nuevo array. 

  nombreArray.slice(indiceInicio, indiceFinal);

*/

let frutasCopia = frutasFavoritas.slice(3, 6)

console.log(frutasCopia)

/* 

  sort() - Ordena los elementos de un array de mayor a menor.


  nombreArray.sort() - De primera no pasamos datos entre parentesis.


*/

console.log(frutasFavoritas);

frutasFavoritas.sort();

console.log(frutasFavoritas);


console.log(numerosSuerte);

numerosSuerte.sort();

console.log(numerosSuerte);

