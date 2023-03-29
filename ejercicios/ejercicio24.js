/*dado un array obtener si se trata de una permutacion del 1 al numero aportado en orden sin que falten ninguno de ellos

Ejemplo:
permutacion([1,2,3,4,5], 5)   //Devuelve: true
permutacion([1,2,3,5], 5)  //Devuelve: false
*/

function permutation(arr, n){

    if(arr.length !== n) return false;

    for(let i=0; i<n; i++ ){
        if(arr[i] !== (i+1)) return false;
    }

    return true;
}


console.log(permutation([1,2,3,4,5], 5));
console.log(permutation([1,3,5,4,2], 5));
console.log(permutation([1,2,3,5], 5));

console.log('----------------');
//Forma de Victor
function permutacion(arr,n){
    for(let i=0; i < n; i++){
        if(arr.indexOf(i+1) < 0){
            //index of regresa el index de ej. i+1 = 1
            return false;
        }
    }
    return true;
}


console.log(permutacion([1,2,3,4,5], 5));
console.log(permutacion([1,3,5,4,2], 5));
console.log(permutacion([1,2,3,5], 5));
