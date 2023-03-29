/*
Dada una cadena de texto, darle la vuelta e invertir el orden de sus caractereres, sin usar métodos
propios del lenguaje, solo estructuras de control

-Function con parametro "texto"
-Crear una veariable para guardar la cedena invertida
-Bucle que recora el string y guarde los caracteres en la variable
*/

function invertir(palabra){ 
    var letras = palabra.split('');
    var invertida = '';

    for(let i = (letras.length-1); i>=0 ; i--){
        invertida += letras[i]; 
    }

   return invertida;
}

function invertir_prof(texto){
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido; //de esa forma la letra nueva se va poniendo en el final
    }

    return invertido;
}



console.log(invertir("DARNELL"));
console.log(invertir_prof("DARNELL"));