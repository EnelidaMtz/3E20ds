//Manzo Martinez 
//ejercicio 3
class Nodo {
    constructor(datos, siguiente, anterior) {
      this.datos = datos;
      this.siguiente = siguiente;
      this.anterior = anterior;}}
  class ListaDobleEnlace {
    constructor() {
      this.cabeza = null;
      this.cola = null;
      this.tamaño = 0;}
    añadirCabeza(datos) {
      const newNode = new Nodo(datos, this.cabeza, null);
      if (this.cabeza) {
        newNode.siguiente = this.cabeza;
        this.cabeza.anterior = newNode;
        this.cabeza = newNode;
      } else {
        this.cabeza = newNode;
        this.cola = newNode;}
      this.tamaño++; }
    añadirCola(datos) {
      const newNode = new Nodo(datos, null, this.tail);
      if (this.cola) {
        newNode.anterior = this.cola;
        this.cola.siguiente = newNode;
        this.cola = newNode;
      } else {
        this.cola = newNode;
        this.cabeza = newNode;}
      this.tamaño++;}
    imprimir() {
      let actual = this.cabeza;
      let resultado = "";
      while (actual) {
        resultado += actual.datos + " <-> "; 
        actual = actual.siguiente;}
      return (resultado);}
    eliminarCabeza() {
      if (!this.cabeza) {
          return null};
      const valueToReturn = this.cabeza.datos;
      if (this.cabeza === this.cola) {
          this.cabeza = null;
          this.cola = null;
      } else {
          this.cabeza = this.cabeza.siguiente;
          this.cabeza.anterior = null; };
      this.tamaño--;
      return valueToReturn;}
  eliminarCola() {
      if (!this.cola) {
          return null};
      const valueToReturn = this.cola.datos;
      if (this.cabeza === this.cola) {
          this.cabeza = null;
          this.cola = null;
      } else {
          this.cola = this.cola.anterior;
          this.cola.siguiente = null;};
      this.tamaño--;
      return valueToReturn;};
    removeVertex(datos) {
      let actual = this.cabeza;
      let anterior = null;
      while(actual !== null) {
          if (actual.datos === datos) {
              if (!anterior) {
                  this.eliminarCabeza();
              } else if (!actual.siguiente) {
                  this.eliminarCola();
              } else {
                  anterior.siguiente = actual.siguiente;
                  actual.siguiente.anterior = anterior;};
              this.tamaño--;
              return actual.datos;};
          anterior = actual;
          actual = actual.siguiente;};
      return null;}
  getSize() {
    return this.tamaño;};}
  const ListaDoble = new ListaDobleEnlace();
  ListaDoble.añadirCabeza(0);
  ListaDoble.añadirCabeza(7);
  ListaDoble.añadirCabeza(2);
  ListaDoble.añadirCabeza(6);
  ListaDoble.añadirCola(1);
  ListaDoble.añadirCola(2);
  ListaDoble.añadirCola(9);
  ListaDoble.añadirCola(5);
  console.log(`El tamaño de la lista: ${ListaDoble.imprimir()} \n Es ${ListaDoble.getSize()}`);
  console.log(`Eliminamos el nodo con el valor: ${ListaDoble.removeVertex(1)} y ${ListaDoble.removeVertex(7)}`)
  console.log(`Ahora, el nuevo tamaño de la lista: ${ListaDoble.imprimir()} \n Es ${ListaDoble.getSize()}`);
  