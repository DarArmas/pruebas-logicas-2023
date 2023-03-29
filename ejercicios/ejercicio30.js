
/*
Dado un array de numeros, volver el array sin elementos duplicados.
Si hay un string eliminarlo del array

Ejemplos:
eliminarDuplicados([1,2,1,1,1,3,4]); // Devuelve: [1,2,3,4]

Como hacerlo:
- Crear una funcion con parametro array.
- Recorrer el array y elimianr strings.
- Usar objeto para eliminar duplicados.
*/

function eliminarDuplicados(arr){
var newarr = [];
arr = arr.filter(x => typeof x === 'number');
 
    
  for(x of arr){
    if(!newarr.includes(x)) newarr.push(x);
  }
  
    return newarr;
}

function eliminarDuplicados2(arr){

    var sin_duplicados;
    arr = arr.filter(x => typeof x === 'number');
     
    sin_duplicados = new Set(arr);
      
        return Array.from(sin_duplicados);
    }

console.log(eliminarDuplicados([1,2,1,1,"darnell",1,3,4]));
console.log(eliminarDuplicados2([1,2,1,1,"darnell",1,3,4]));


