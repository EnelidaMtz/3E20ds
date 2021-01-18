//Manzo Martinez
function palindromo(palabra) {
    var a= new Array();
    for (var i = 0; i < palabra.length; ++i) {
    a.push(palabra[i]);
    }
    var palabra2= "";
    while (a.length > 0) {
    palabra2 += a.pop();
    }
    if (palabra == palabra2) {
    return true;
    }
    else {
    return false;} }
   var palabra = "rayar";
   if (palindromo(palabra)) {
    console.log(palabra + " es una palabra palindroma.");
   }
   else {
    console.log(palabra + " no es una palabra palindroma.");
   }
   palabra = "nata"
   if (palindromo(palabra)) {
    console.log(palabra + " es una palabra palindroma.");
   }
   else {
    console.log(palabra + " no es una palabra palindroma.");
   }
   