//Manzo Martinez Enelida Natalia
//Permutaciones
let secuencia = [3, 1, 4, 2, 3];
function permutaciones(n)
{
	var array = [];
	function permutar(arr, data)
	{
		var secuActual, almacen = data || [];

		for(var i = 0; i < arr.length; i++)
		{
			secuActual = arr.splice(i, 1)[0];
			if(arr.length == 0) array.push(almacen.concat([secuActual]));
			permutar(arr.slice(), almacen.concat([secuActual]));
			arr.splice(i, 0, secuActual);
		}
		return array;
	}
	return permutar(n);
}
console.log(permutaciones(secuencia));
console.log("Complejidad computacional : lineal");