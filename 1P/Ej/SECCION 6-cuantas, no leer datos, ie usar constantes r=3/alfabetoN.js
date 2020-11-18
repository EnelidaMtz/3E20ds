//Manzo Martinez Enelida Natalia
//De un alfabeto de n símbolos cuantas palabras de r símbolos podemos generar?, r<=n
function generar (n) {
	var total = 1; 
	for (i=3; i<=n; i++) { //Inicié i en 3 para hacer combinaciones de 6 con los 8 simbolos disponibles
		total = total * i; 
	}
    return total;
}
let simbolos = 8
console.log("Se pueden generar " + generar(simbolos) + " conjuntos de simbolos");