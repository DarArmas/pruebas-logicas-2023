/*
Dados dos numeros, devolver cuantos numeros IMPARES hay entre los dos
*/

function impares(primero, segundo){
    var contador=0;

    for(let i=primero; i<=segundo; i++){
            if((i%2) != 0) contador++;
    }
    
    return contador;
}

console.log(impares(1,100));