//Manzo Martinez Enelida Natalia
//¿De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar?
function generarSim (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
    return total;
}
let simbolos = 8
console.log(" Podemos generar " + generarSim(simbolos) + " simbolos");