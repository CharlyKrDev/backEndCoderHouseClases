

/**Ejemplo de lo que es una clase */
 class Personaje {
    constructor(nombre, edad) { //atributos
        this.nombre = nombre;
        this.edad = edad;
    }

    // aca se pueden cargar metodos, que son funciones creadas dentro de la clase que hace uso de los atributos
    quienEs() {
        return `soy ${this.nombre} y tengo ${this.edad} anios`
    }
    fechaNacimiento() {
        return `tengo ${this.edad}`
    }
}

const personaje1 = new Personaje('jose', 25)
personaje1.quienEs()


personaje1.fechaNacimiento()