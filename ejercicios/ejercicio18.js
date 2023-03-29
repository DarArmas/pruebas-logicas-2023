/*
Mostrar los numeros divisiores de x numero

-crear una funcion  que comprueba si un numero es divisor
-crear una funcion para recorrert y mostrar
*/

function divisiores(numero1, numero2){

    if(numero1 % numero2 == 0){
        return true;
    }else{
        return false;
    }

}

function mostrarDivisores(numero){
    let lista_divisores = [];

    for(let i = 1; i<= numero; i++){
        if(divisiores(numero,i)){
            lista_divisores.push(i);
        }
    }  
    return lista_divisores;
}


console.log(mostrarDivisores(127));



