//Manzo Martinez Enelida Natalia
//primo
var inicio = 0;
var actNumber = 1;
function primero(num){
    let contador = 0;
    for(let i = 1; i <= num; i++){
        if(num%i == 0){
            contador++;
        }
    }
    if(contador <= 2){
        return true;
    }else{
        return false;
    }
}
function fin(){
    if(primero(actNumber)){
        actNumber++
        if(inicio < 5){
            inicio++;
            fin();
        }else if(inicio==5){
            console.log(actNumber-1);
        }
    }
    else{
        actNumber++;
        fin();
    }
}
fin();