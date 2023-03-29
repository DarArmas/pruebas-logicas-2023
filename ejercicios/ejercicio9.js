/*
Dados dos arrays, devolver el array con dos elementosa comunes entre ambos

Ejemplos:
elementosComunes([4,5,6,7], [7,8,9,7,5]); // Devuelve: [5,7];

*/

function elementosComunes(arreglo1, arreglo2){
    var comunes = [];
    
    for(let i=0; i<arreglo1.length; i++){
        for(let x=0; x<arreglo2.length; x++){
            if(arreglo1[i] == arreglo2[x]){
                comunes.push(arreglo1[i]);
            }
        }
    }

    return comunes;

   
}

function elementosComunesProf(array1, array2){

            //filter itera cada elemento del arreglo
    const filtrado = array1.filter(elemento => {
        return array2.includes(elemento) //si es true se guarda ese elemento en el arreglo filtrado
    });

    return filtrado;
} 

console.log(elementosComunes([4,5,6],[1,2,4,6,7]));
console.log(elementosComunesProf([4,5,6],[1,2,4,6,7]));