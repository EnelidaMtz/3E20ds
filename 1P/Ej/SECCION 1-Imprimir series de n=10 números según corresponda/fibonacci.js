//Manzo Martinez Enelida Natalia
//fibonacci
var f = 0;
var t1=1;
var t2;
var n=13;
for (let i=1; i<=n; i++){
    t2=f;
    f=t1+f;
    t1=t2;
    console.log('Numero fibonacci:'+ t1);
}
