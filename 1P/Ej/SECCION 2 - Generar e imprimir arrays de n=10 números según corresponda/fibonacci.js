//Manzo Martinez Enelida Natalia
//fibonacci
let fibo = new Array(10);
let a = 0, b = 1, c;
for(let i= 1; i<= fibo.length; i++)
{
	console.log(a);
	c = a + b;
	a = b;
	b = c;
}