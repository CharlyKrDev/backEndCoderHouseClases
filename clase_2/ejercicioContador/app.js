/**
 * Definir clase contador
 * La clase se crea con un nombre, representado al responsable del contador.
 * El contador deber inicializarse en 0.
 * Debe existir una variable estática que funcione como 'contador global' de todas las instancias de contador creadas.
 * Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
 * Definir el método contar, el cual debe incrementar, tanto la cuenta individual, como la cuenta global.
 * Definir el método getCuentaIndividual, el cual debe devolver solo la cuenta individual del contador.
 * Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
 * Realizar prueba de individualidad entre las instancias.
 */

class Contador {

  static cuentaGlobal = 0;

  constructor(responsable) {

    this.responsable = responsable;
    this.cuentaIndividual = 0;

  }

  getResponsable() {

    return this.responsable;

  }
  getCuentaIndividual() {

    return this.cuentaIndividual;

  }
  static getCuentaGlobal() {

    return Contador.cuentaGlobal
  }

  contar(){
    
    Contador.cuentaGlobal++
    this.cuentaIndividual++

  }


}


