//Manzo Martinez Enelida Natalia
//fibonacci
var antes = 0;
var numero = 0;
var imp = 0;
var init = 0;
var final = 10;
function fibonacci(){
    console.log(imp);
    antes = numero;
    numero = imp;
    imp = numero + antes;

    if(init == 0){
        imp++;
    }
    init++;
    if(init == final){
        return;
    }else{
        fibonacci();
    }
}
fibonacci();