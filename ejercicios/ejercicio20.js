/*
Comprobar si dos palabras son anagramas

Como hacerlo: 
- Crear una funcion para limpiar los textos
- Quitar todo lo que no sea texto
- Poner en minusculas
- Crar array de letras
- Ordenarlo
- Unirlo
- Funcion para comparar
*/

//Mi solucion

function clearText(text){
                    //^ = lo que no sea
    const regex = /[^a-zA-Z]/g;
    var cleared =  text.replace(regex,'');
    var ordenado = cleared.toLowerCase().split("").sort().join('');
    return ordenado;
}

function compareAnagram(text1, text2){
    sorted1 = clearText(text1);
    sorted2 = clearText(text2);
    if(sorted1==sorted2){
        return "Si son anagramas";
    }else{
        return "No son anagramas";
    }
}

//console.log(clearText("  Darne Ell2"))
console.log(compareAnagram("Alegan", "Angela"));


//Solucion victor
function limpiarTexto(texto){
    // ^ <- todo lo que no sea
    // \w <- palabras
    // g <- más de una coincidencia
    // i <- mayusculas y minusculas
    return texto
            .replace(/[^\w]/gi,'') 
            .toLowerCase()
            .split('')
            .sort()
            .join('');
}

function anagramas(texto1, texto2){
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(anagramas("Alegan", "aNgela"));