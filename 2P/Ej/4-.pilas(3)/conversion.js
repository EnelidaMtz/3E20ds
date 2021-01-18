function numB(num, base) {
    var s = new Array();
    do {
    s.push(num / base);
    num = Math.floor(num /= base);
    } while (num > 0);
    var convertir = "";
    while (s.length > 0) {
    convertir += s.pop();
    }
    return convertir;
   }
   var num = 5;
   var base = 2;
   var NuevoNum = numB(num, base);
   console.log(num + " elevado a la base " + base + " es " + NuevoNum);
   num = 25;
   base = 2;
   var NuevoNum = numB(num, base);
   console.log(num + " elevado a la base " + base + " es " + NuevoNum);
   