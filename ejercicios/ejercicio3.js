//devolver cuantas veces aparece una palabra en una frase
//la frase y la palabra deben de ser paraemtros de la funcion

/*
function coincidencias(frase, busqueda){
    var palabra = busqueda.trim()
            .toLowerCase()
            .replace(/[!¡.,-]/gi , '');  //quitar caracteres especiales

    var frase2 = frase.toLowerCase();
    var coincidencia = frase2.search(palabra);

    if(coincidencia != -1){
        
        var separadas = frase2.split(' ');
        
        var contador = 0;
        for(let i=0; i < separadas.length; i++){
            if(separadas[i] === palabra) contador++;
        }

        return `El numero total de coincidencias es: ${contador}`; 
    }

    return "No existe ninguna coincidencia";


}


console.log(coincidencias('la gente esta muy sisi!!!!!!','loca'));
*/

function coincidencias(frase, palabra){

    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi , '');

    console.log(texto_limpio);
    let busqueda = palabra.toLowerCase().replace(/[!¡.,-]/gi , '');

    let resultado = 0;

    if(texto_limpio.includes(busqueda)){

        let palabras = texto_limpio.split(" ");
        //mapear: guardar json

       

        let mapa = {};

        for(let palabra of palabras){
            //for in obtiene el indice y el valor
            //for of obtiene solamente el valor

            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1; //si no existe mapa[palabra] se av a crear y va a valer 1
            }

        }


        //mapa[busuqeda] va a tener el numero de coincidencias de la palabra que ando buscando
        resultado = mapa[busqueda]; 

    }else{
        resultado = 0;
    }

    return resultado; 

}


    console.log(
        "El numero de coincidencias es: ",
        coincidencias("Hola que tal soy Darnell Darnell Darnell Armas", "Darnell")
    );
    