//Manzo Martinez Enelida Natalia
//factorial
var x = numero(prompt(`Inserte un numero para obtener su factorial`));
var resultado = 1;
function factorial(){
    resultado *= x;
    x--;

    if(x == 0){
        console.log(resultado);
    }
    else{
        factorial();
    }
}
factorial();