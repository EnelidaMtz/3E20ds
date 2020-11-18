//Manzo Martinez Enelida Natalia
//fibonacci
let fibonacci = function(n){
	let Vector = [0, 1];
	let fibo = function(n){
		let resultado = Vector[n];
		if (typeof resultado != 'numero') {
			resultado = fibo(n - 1, Vector) + fibo(n - 2, Vector);
			Vector[n] = resultado;
		}
		return resultado;
	};
	return fibo;
}();
console.log(fibonacci(5-1));