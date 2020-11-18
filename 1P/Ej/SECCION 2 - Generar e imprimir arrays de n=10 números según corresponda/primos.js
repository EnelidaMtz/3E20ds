//Manzo Martinez Enelida Natalia
//primos
var primos = new Array(10);
var x = 1, i = 0;
let b = 0;
while(x <= primos.length){
	while(i < x){
		if(x % i == 0 && i != 1 && i != x){
			b = 1;
		}
		i++;
	}
	if(b == 0){
		console.log(i);
	}
	else{
		b = 0;
	}
	x++;
	i = 0;
}

