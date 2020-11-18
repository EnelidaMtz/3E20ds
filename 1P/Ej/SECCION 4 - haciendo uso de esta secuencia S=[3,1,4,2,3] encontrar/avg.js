//Manzo Martinez Enelida Natalia
//avg-promedio
var vector = [3,1,4,2,3];
var suma = 0;
var avg = 0;
for(let i = 0; i < vector.length; i++){
    suma+=vector[i];
}
avg = suma/vector.length;
console.log("El promedio del arreglo es: " + avg);
console.log("Complejidad computacional : lineal");