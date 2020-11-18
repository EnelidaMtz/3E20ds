//Manzo Martinez Enelida Natalia
//Ln (1+X)
let num = [];
let n = Number(prompt("¿Cuántos numeros desea generar? :"))
   for (let i = 1; i <= n; i++) {
    if(i == 1){
        num[i]= 'x'
        console.log(num[i])
    }else if(i%2 == 0){
        num[i]= '- x ^ '+ i + '/' + i;
        console.log(num[i])
    }else{
        num[i]= '+ x ^ '+ i + '/' + i;
        console.log(num[i])  
    }       
   }