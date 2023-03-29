/*
Dado un numero entero, inviertelo y devuelve de nuevo el entero
*/

function invertirNumero(numero){
    var cifras;
    var invertido; 
    var contador=0;
    
    cifras = numero.toString().split('');

    for(let i=cifras.length-1; i>=0; i--){
       //invertido[contador] = cifras[i];
       contador++; 
    }

    console.log(invertido)

}

//solucion Victor
function invertirNumeroP(numero){
    let invertido = parseInt(
        numero
        .toString()
        .split('')
        .reverse()
        .join('')
    )* Math.sign(numero)
    
    return invertido;
}

invertirNumero(89);
console.log(invertirNumeroP(-89));

