//Manzo Martinez Enelida Natalia
//numerosaleatorios
let n = Number(prompt("¿Cuantos numeros aleatorios quiere generar: ?"))
let num = [];
for (let i = 0; i < n; i++) {
    num[i] = Math.trunc(Math.random() * [10 - 1] + 1);
}
console.log(num);




