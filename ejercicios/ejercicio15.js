/*
Dentro de una cadena de texto deolver el ccacracter mas usado

*/

function masUsado(texto){

    let arreglo_letras = texto.split("");
    let usadas = [];

    for(letra of arreglo_letras){
        
        if(usadas.indexOf(letra) == -1){
            usadas.push(letra);
        }
    }

    return usadas;
}

function masUsadoP(texto){
    let mapeo_letras = {}; 
    let maximo_repeticiones = 0;
    let letra_repetida = "";

    for(let letra of texto){

        if(!mapeo_letras[letra]){
            //si no existe ese indice crealo y dale el valor de 1
            mapeo_letras[letra] = 1;
        }else{
            mapeo_letras[letra]++;
        }
        
        //asi se mapea en un json
    }

    for(let letra in mapeo_letras){
        //      in recorre los indices
        if(mapeo_letras[letra].toString().trim().length === 1 && mapeo_letras[letra] > maximo_repeticiones){
            maximo_repeticiones = mapeo_letras[letra];
            letra_repetida = letra;
        }

    }

   return letra_repetida;
}

//console.log(masUsado("darnellarmas"));

console.log("La letra mas repetida es: ", masUsadoP("hola estoy aprendiendo a programar yo se poquito"));