//Manzo Martinez Enelida Natalia
//En una fiesta hay 3 invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?
function saludos (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
	var n = 3;
    let fac = saludos(n);
    let fac2 = saludos(n-2);
var saludos = fac/(2*fac2);
console.log('De ' + n + ' personas que asistieron, '  + 'ocurrieron ' + saludos + ' saludos');
