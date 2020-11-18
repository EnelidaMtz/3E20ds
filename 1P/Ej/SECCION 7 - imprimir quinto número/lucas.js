//Manzo Martinez Enelida Natalia
//lucas
let lucas = function(){
	let Vector = [2, 1];
	let luca = function(n){
		let resultado = Vector[n];
		if (typeof resultado != 'numero') {
			resultado = luca(n - 1) + luca(n - 2);
			Vector[n] = resultado;
		}
		return resultado;
	};
	return luca;
}();
console.log(lucas(5-1));