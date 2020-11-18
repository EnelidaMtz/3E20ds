//Manzo Martinez Enelida Natalia
//armonico
let num = [];
let n = Number(prompt("¿Cuantos numeros armonicos desea generar: ?"))
   for (let i = 1; i <= n; i++) {
    if(i == 1){
        num[i]= '1'
        console.log(num[i])
    }else{
        num[i]= '+ 1/'+ i;
        console.log(num[i])
    }       
   }