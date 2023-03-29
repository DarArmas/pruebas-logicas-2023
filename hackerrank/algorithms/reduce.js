// El método reduce() aplica una función a un acumulador y
//  a cada valor de una array (de izquierda a derecha) para 
//  reducirlo a un único valor.
//Usando el metodo reduce cuenta el número de veces que se repite un nombre

const nombres = [
    'Jorge', 'Maria', 'Jose',
    'Bob', 'Pat', 'Maria',
    'Jose', 'Jose'
];

//mejor forma
const cantidadNombres = nombres.reduce((contadorNombre, nombre) => {
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) +1; //si ya existe contadorNombre[nombre] sumale 1 o 0+1 
    return contadorNombre;
},{});//como reduce regresa un objeto, se pasa el objecto vacio como segundo parametro

console.log(cantidadNombres);

//Como lo haría yo
const cantidadNombres2 = {}
    for(let nombre of nombres){
        if(cantidadNombres2[nombre]){
            cantidadNombres2[nombre]++;
        }else{
            cantidadNombres2[nombre] = 1;
        }
    }

console.log(cantidadNombres2);

//Otro ejemplo con reduce
//Sumar todos los valores de un array

var total = [0,1,2,3];
total = total.reduce(function(a,b){
    return a+b;
    //en a se va almacenando la suma
    //el siguiente elemento
})

console.log(total);

var integrado = [[0,1],[2,3],[4,5]];
integrado = integrado.reduce(function(a,b){
    return a.concat(b);
    //conact es lo contrario de split
});

console.log(integrado);
 
