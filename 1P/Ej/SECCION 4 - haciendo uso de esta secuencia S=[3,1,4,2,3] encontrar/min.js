//Manzo Martinez Enelida Natalia
//min
var vector = [3,1,4,2,3];
let min = vector[0];
for(let i = 0; i < vector.length; i++){
    if(vector[i] < min){
        min = vector[i];
    }
}
console.log("El numero minimo del arreglo es: " + min);
console.log("Complejidad computacional : lineal ");