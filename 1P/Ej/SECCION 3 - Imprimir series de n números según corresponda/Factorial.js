//Manzo Martinez Enelida Natalia
let n = Number(prompt("Introduce un numero para generar sus factoriales"))
let num = [];
    for (let j = 0; j <= n; j++) {
        let numero = j;
        var  total = numero;
    if(j == 0 || j == 1){
        num[j] = 1;
        console.log(' El factorial de ' + j + ' es ' + num[j]); 
    }else{
    
    for( var i = numero - 1; i >= 1; i--) {
        total = total *i;
        num[j] = total;
        }
        console.log(' El factorial de ' + j + ' es ' + num[j]);
    }
    };
