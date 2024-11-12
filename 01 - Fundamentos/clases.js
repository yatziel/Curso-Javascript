/* 

  + Clases

  Una clase en JS es una plantilla para crear objetos.

  Es una forma moderna y natural de trabajar con la programación orientada a objetos.

  Los nombres de las clases se recomienda escribirlas con la primera letra en mayúscula.

  + Método Constructor

  El método constructor es un método especial que se ejecuta automáticamente cuando se crea una nueva instancia de la clase.

  Dentro del método constructor, pasamos las propiedades y valores de la clase.

  Las propiedades pasan como parametros y luego se asignan con 'this'.

  Sintaxis Básica

  class NombreClase {

    // Método constructor
    constructor(par1, par2) {
      this.par1 = par1;
      this.par2 = par2;
    }
  }

  + Instancia de Clase

  Para crear un objeto usando la clase, se utiiza la palabra 'new', esto invoca al constructor de la clase.

  Sintaxis:

  new NombreClase(par1, par2);

  Esta instancia se asigna a una variable o constante.

  + Métodos de Clase

  Se definen dentro de una clase y asignan atomáticamente en el 'prototipo' del objeto. Esto permite que todas las intancias compartan el mismo método.

  Sintaxis

  nombreMetodo(parm...) {
    // Codigo que se ejecuta
  }

*/

// Definir la clase Mascota

class Mascota {constructor(nombre, edad) {
this.nombre = nombre; // Propiedad nombre
    this.edad = edad;     // Propiedad edad
  }

  saludo(){
    console.log(`¡Hola me llamo ${this.nombre} y tengo ${this.edad} años!`)
  }
}

// Instancear la clase Mascota. Creamos un objeto con la plantilla Mascota.

let mascota1 = new Mascota("Tonche", 3);
let mascota2 = new Mascota("Cartujo", 4);

// Accedemos a los datos de las instancias

console.log(mascota2.nombre);
console.log(mascota2.edad);

// Lanzar los métodos de los objetos

mascota1.saludo();
mascota2.saludo();

