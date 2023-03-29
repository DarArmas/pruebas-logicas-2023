/*
Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique 
su tamaño

Divirlo en arrays de X elementos

Ejemmplo: 

divideArray([7,8,9,10], 2)

Devuelve:
[7,8][9,10]
*/

/*
function divideArray(array, subarrays){
    
    var i,j,nuevo, chunk;

    chunk = array.length/subarrays; 
    nuevo = [];

    for(i=1; i <= subarrays; i++){
        //numero de cortes que hará
        console.log(i);
        
        for(j=0; j < array.length; j += chunk){
            nuevo += array.slice(j, j + chunk );
        }
        
        
    }
    

    return nuevo;


}
*/

function divideArray(array,subarrays){
    var nuevo = [];

    var temporal = [];
    var trozo = array.length/subarrays;


    
        for(var j=0; j<array.length; j++){
            temporal.push(array[j]);
            if(temporal.length == trozo || (j+1) == array.length){
                nuevo.push(temporal);
                temporal = [];
            }
        }
    

    return nuevo;

    //problema: cuando el numero de elemtnos es impar
}


function divideArrayP(arreglo_principal, numero_elementos){
    let arreglos = [];

    for(let elemento of arreglo_principal){

        let ultimo = arreglos[arreglos.length - 1]; //obtener ultimo subarreglo
        
        if(!ultimo || ultimo.length === numero_elementos){
            arreglos.push([elemento]); //si ya hay el numero de elementos o se acabaron, entonces crea un nuevo subarreglo
        }else{
            ultimo.push(elemento);
        }
 
    }

    return arreglos;
}


//console.log(divideArray([10,9,8,7,6,5,4,3,2,1],2));
console.log(divideArrayP([7,8,9,10,5],2));



