/*
Dado un numero, devolver su factorial
El factorial de un numero es la muiltiplacion de todos los numeros hasta llegar a él


Ejemplos
factorial(3); //Devuelve: 6 <- 1x2x3
*/

function factorial(n){
    var total = 1;
    for(let i=1; i<=n; i++) total *= i;
    return total;
}

console.log(factorial(10));