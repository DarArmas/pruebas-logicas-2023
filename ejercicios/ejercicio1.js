//funcion para devolver tablas de multiplicar


//mi solucion
/*
function tablaMultiplicar(numero){
    let encabezado = "Tabla del " + numero;

    for(var i=0; i<10; i++ ){
        var resultado = ((i+1) * numero);
        console.log( i+1 + " x "  + numero + " = " + resultado);
    }


}

tablaMultiplicar(5);
*/



//solucion del profe
function tablaMultiplicar(numero){
    let resultado  = `# Tabla del ${numero} # \n`;  //haz interpolacion de variables

    for(let i = 1; i <= 10; i++){
        let multiplicacion = (i*numero);

        resultado += `${i} x ${numero} = ${multiplicacion} \n`
    }
    
    return resultado;
}

console.log(tablaMultiplicar(5));

console.log("cambio de git");