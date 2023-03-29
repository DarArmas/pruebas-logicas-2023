/*
Dado un numero, mostrar una escalera de esacleones de "[-]"
usando el numero para los niveles de la escalera

EJEMPLO:
escalera(4) //
[-]
[-][-]
[-][-][-]
[-][-][-][-]
*/

function ImprimirEscalera(escalones){
    var escalera = "";

    for(let i=0; i<escalones; i++){
        escalera += '[-]'.repeat(i+1) + '\n';
    }

    return escalera;
}

function ImprimirEscaleraProfe(numero){
     let escalera_completa = "";

     for(let nivel = 1; nivel <= numero; nivel ++){
        let escalones = "";
        
        for(let escalon = 1; escalon <= nivel; escalon ++){
            escalones += "[-]";
        }
        
        escalera_completa += escalones + '\n';

     }

     return escalera_completa;

}

console.log(ImprimirEscalera(10));
console.log(ImprimirEscaleraProfe(10));