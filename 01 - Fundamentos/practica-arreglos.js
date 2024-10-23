/* 

  Prática Arreglos - Liga Superheroes

  1. Definir un arreglo llamado 'heroes' que contenga 5 nombres de superheroes y muestralo en la consola. 

  2. Agrega un nuevo héroe al final de array.

  3. Eliminar al primer heroe.

  4. Cambiamos al 3er héroe por otro distinto.

  5. Ordenar Alfabeticamente el array 'heroes'.

  6. Crear un nuevo array llamado enemigos, con los ultimos 3 heroes del array hereos con un metodo... 

  7. Mostrar por consola los dos arrays: heroes y enemigos.

*/


let heroes =  ["Batman", "Iron Man", "Wonder Woman", "Spiderman", "Hulk"];

heroes.push("Superman");
heroes.shift();
heroes[2] = "Chapulin Colorado";
heroes.sort();
let enemigos =  heroes.splice(2,5);

console.log(heroes);
console.log(enemigos);

/* 

  Commit: "Terminamos metodos  y practica de Array"

*/