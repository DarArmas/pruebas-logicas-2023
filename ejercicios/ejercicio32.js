/*
Dado un array de numeros devolver el array de numeros con sus numeros al cuadrado
*/
function alCuadrado(arr){
    return arr.filter(e => typeof e == 'number').map(e => e*e);
}

console.log(alCuadrado([1,'darnell',2,3,4,5,6,7,8,9,10]));




