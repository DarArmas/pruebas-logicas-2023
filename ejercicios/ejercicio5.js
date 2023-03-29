/*
Cuanto es el x por ciento de x numero
Ejemplo: 
            //20 % de 100
tantoPorCiento(20,100) // : 20
tantoPorCiento(43, 897) // : 385.71
*/

function tantoPorCiento(porcentaje, cifra){

    let porciento = cifra * (porcentaje / 100) 
    return `El ${porcentaje}% de ${cifra} es ${porciento}`;
}

console.log(tantoPorCiento(43,897))

