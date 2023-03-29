/*
Dados dos numeros indicar cual es mayor y cual es menor

*/

function CompareNumbers(x,y){
    let resultado = "";
    if(x>y){
        resultado = x+" es mayor \n";
        resultado += y+" es menor";
    }else if(y>x){
        resultado = y+" es mayor \n";
        resultado += x+" es menor";
    }else if(x===y){
        resultado = "Son iguales";
    }else{
        resultado = "Ingresa numeros";
    }

    return resultado;

}


console.log(CompareNumbers(120,10));