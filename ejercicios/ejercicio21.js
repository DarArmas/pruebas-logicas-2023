// Enunciado ejercicio 21:
// Dada una cadena de texto y un numero, recortar el string mostrando los x primeros caracteres

// Ejemplo: 
// recortar('Cursos desarrollo web', 6) <- devuelve: 'Cursos'

// -Crear una funcion con parametros texto y hasta
// -Comprobar que los datos son correctos
// -Recortar string con substr
// -Devolver resultado


function PrintXChar(text, chars){
    if(text !== '' && typeof chars == 'number'){
        if(chars < text.length){
            return text.substring(0,chars);
        }else{
            return "No se puede eso que me estas pidiendo pq son mas caracteres de los que hay";
        }
    }else{
        return "Algo que me pasate está mal vuelvelo a comprobar papito";
    }
}

console.log(PrintXChar("hola mundo", 12));

