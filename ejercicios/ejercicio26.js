/*
    Mostrar la serie de fibonacci

    Ejemplos:
    fib(10)[0]
    fib(10)[1]

    Serie completa: 0,1,1,2,3,5,8,13,21,34,55
    Resultado de la serie fibonacci: 55
*/

function fibonnaci(n){
    let resultados = [];
    let fib = [0,1];

    for(let i=1; i<n; i++ ){
        fib.push(fib[i] + fib[i-1]);
    }

    resultados.push(fib, fib[n]);
    return resultados;
}

function fiboRecursive(digit) {
    if(digit <= 1) return digit;     // Base Case
    return fiboRecursive(digit - 1) + fiboRecursive(digit - 2);
}

console.log(fibonnaci(10)[0]);
console.log('---------------')

console.log(fibonnaci(10)[1])

console.log('---------------');

for(let i=0; i<=10; i++){
    console.log(fiboRecursive(i));
}


