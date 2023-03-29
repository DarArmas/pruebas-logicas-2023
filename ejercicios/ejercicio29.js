
/*
Eejrcicio 29:
Dado un numero indicar si es capicua o no
Los numeros capicua se leen igual de izquierda a derecha y visceversa

Ejemplos
capi(2002);
capi(2014);

Como hacerlo:
- Crear una funcion con parametro numero
- Convertir a string
- Convertir numero en array de numeros
- Darle vuelta
- Unirlo y convertirlo a entero.
*/

function capi(num){
    var numstr = num.toString();
    var numarr = numstr.split("");
    var newnumarr = [];

    for(let i = numarr.length - 1 ; i >= 0; i--){
        newnumarr.push(numarr[i]); 
    }


    if(parseInt(newnumarr.join('')) == num){
        return true;        
    }else{
        return false;
    }
    
}

function capi2(num){
  var reversed = parseInt(num.toString().split("").reverse().join(''));
    return reversed === num;
}

console.log(capi(2002));
console.log(capi(2014));

console.log(capi2(2002));
console.log(capi2(2014));


