//Manzo Martinez Enelida Natalia
//primo
var n=20;
for (var i= 1; i <=n; i++) {
	var primo = 1;
	var contador = 2;
	while(contador <= i/2 && primo) {
		if (i % contador === 0) {
			primo = 0;
		}
		contador++;
	}
	if( primo ) {
		console.log('Número primo:'+ i);
	}
}
