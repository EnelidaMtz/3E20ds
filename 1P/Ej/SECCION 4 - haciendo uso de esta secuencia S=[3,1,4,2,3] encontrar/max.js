//Manzo Martinez Enelida Natalia
//max
var vector = [3,1,4,2,3];
let max = vector[0];
for(let i = 0; i < vector.length; i++){
    if(vector[i] > max){
        max = vector[i];
    }
}
console.log("El número maximo del arreglo es: " + max);
console.log("Complejidad computacional : lineal ");