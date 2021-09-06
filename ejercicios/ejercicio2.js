//verificar si un string es palindromo

/*
Mi solucion
function palindromo(texto){
    var palabra = texto.trim();


    var separada = [];
    var reversed = [];
    var original = [];


    //reverse() es destructivo
    separada = palabra.split('');
    original = palabra.split(''); //guardar clon 
    reversed = separada.reverse();
   

    for (let i=0; i<separada.length; i++){
        if(original[i] !== reversed[i]) return false;
    }

    return true;

}
*/
 

//Solucion profesor
function palindromo(texto){
    
    //tres funciones en una para obtener la palabra invertida
    let invertido = texto
                    .split('')
                    .reverse()
                    .join('');

    return invertido == texto;


}

console.log(palindromo("otto"));

