/*
Dado un texto y una busqueda, censuar todas las coincidencias de la busquead en el textto con
[-CENSURADO-]

Si el texto y la busqueda estan vacios mostrar 
"No pueddes leer el texto y la busquedad" en caso de que ambos 
parametros no lleguen

Ejemplos:
censurado("hola hola", "hola"); // Devuelve: [-CENSURADOD-] [-CENSURADO-]

censuardo(); // Devuelve "No puedes leer el texto y la busqueda"


Como hacerlo: 
-Funcion que reciba un texto y una busqueda
-Conddiciones en el caso de que algun parametero ded false
-Reemplazar la busqueadd por [-CENSUARDO-] en el texto
*/

function censurado(texto=false, busqueda=false){

    let censuardo = "";



    

    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda";
    }else if(!texto && busqueda){
        resultado = "No puedes leer el texto";
    }else if(texto && !busqueda){
        resultado = "No puedes hacer la busquead";
    }else if(texto && busqueda){
                                    //para buscar todas la coincidencias
        resultado = texto.replace(new RegExp(busqueda, 'gi'), "[-CENSURADO]");
    }

    return resultado;

}

console.log(censurado("hola hola hola", "hola"));