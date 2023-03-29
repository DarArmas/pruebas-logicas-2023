/*
Dado un string y un numero, repetir el string tantas veces como el numero indique

Ejemplos: 

repiteme("victor",2);

Devuele: 

victorvictor
*/


function repiteme(texto, reps){

    let counter = 0;
    let resultado = "";

    while(counter < reps){
        resultado += texto;
        counter++;
    }

    return resultado;

}


/*SOLUCION USANDO UNA FUNCION PROTOTIPO:
FUNCION QUE TÚ CREAS Y QUE SE APLICA DIRECTAMENTE A UN OBJETO
*/

//objeto.prototype.nombre 
String.prototype.repitemeP = function(reps){
    let counter = 0;
    let resultado = "";

    while(counter < reps){
        resultado += this; //Se refiere a "darnell" en linea 49
        counter++;
    }

    return resultado;
    
}

console.log(repiteme("darnell",3));
console.log("darnell".repitemeP(5));
