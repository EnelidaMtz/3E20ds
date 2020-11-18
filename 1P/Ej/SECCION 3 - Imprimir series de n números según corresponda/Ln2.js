//Manzo Martinez Enelida Natalia
//Ln2
let num = [];
let n = Number(prompt("¿cuantos numeros desea generar ?:"))
   for (let i = 1; i <= n; i++) {
    if(i == 1){
        num[i]= 'x'
        console.log(num[i])
    }else if(i%2 == 0){
        num[i]= '- 1/'+ i;
        console.log(num[i])
    }else{
        num[i]= '+ 1/'+ i;
        console.log(num[i])  
    }       
   }