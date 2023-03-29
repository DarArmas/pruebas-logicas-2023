// Dado un array crear otro con el primer y ultimo elemento del crossOriginIsolated

// Ejemplo:
// primeroYultimo([100, 200, 300, 780]) //

// -Funcion parametreo array
// - Array push del primer y ultimo elemento


const primeroYultimo = (arrayOriginal) => {
    var arrayNuevo = [];
    arrayOriginal.forEach((element, index) => {
        if(index == 0) arrayNuevo.push(element);
        if(index == (arrayOriginal.length - 1)) arrayNuevo.push(element); 
    });

    return arrayNuevo;
}

//solucion Victor Robles
const primeroYultimo2 = (arrayOriginal) => {
    var arrayNuevo = [];
    arrayNuevo.push(arrayOriginal[0], arrayOriginal[arrayOriginal.length -1]);  
    return arrayNuevo;
}

console.log(primeroYultimo([100,200,300,780]))
console.log(primeroYultimo2([100,200,300,780]))

