/*
Dibujar un cuadrado hueco con asteriscos
Ejemplo: 
cuadrado()

****
*  *
*  *
****

*/

function cuadrado(lados){
   
    let figura = "";
    let space =  lados - 2;

    for(let i=1; i<=lados; i++){
        if(i == 1 || i == lados){
           figura += "*".repeat(lados) + "\n";
        }else{
            figura += `*${" ".repeat(space)}*\n`;
        }
    }

 return figura;

}

/*
Como hacerlo:
- Funcion para crear el lado de arriba y abajo del cuadrado
- Funcion que haga los lados y el hueco del cuadrado
- Bucle del 0 al tamaño del laado menos 3 para equilibar con el lado
    de arriba y abajo.
- Bucle para pintar espacios, menos 2 para equilibar 
    con el asterisco de la izq. y derech.
- Ir concatenando en una variable cada linea del cuadrado
- Mostrar el cuadrado
*/

function cuadrado_2(lados){
    let figura = "";
    for(let i=0; i< lados; i++){
        figura += "*";
    } 
        figura += "\n";
        figura += cuerpo(lados)

    for(let i=0; i< lados; i++){
        figura += "*";
    }

    return figura;
}

function cuerpo(lados){
    let figura = "";

    for(let i=0; i< (lados-2); i++){
        figura += "*";
        for(let x = 0; x < (lados-2); x++){
            figura += " ";
        }
        figura += "*\n";
    }

    return figura;

}

console.log(cuadrado(10));
console.log(cuadrado_2(10));
