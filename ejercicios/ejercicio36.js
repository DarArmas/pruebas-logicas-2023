// Dado un texto y devolver cuantas consontantes y vocales 

// cuentaLetras("victorroblesweb.es")
// Devuelve
// Consonantes: 5
// Vocales: 6

const cuentaLetras = (texto) => {
    const vocales = ["a", "e", "i", "o", "u"];
    const consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    const vocalesEnTexto = [];
    const consontantesEnTexto = [];
    const splitTexto = texto.split("");
    splitTexto.forEach(letra => {
        if(vocales.includes(letra)) {
            vocalesEnTexto.push(letra)
        }else if(consonantes.includes(letra)){
            consontantesEnTexto.push(letra)
        }
    });

    console.log("consonantes:",consontantesEnTexto.length, "vocales:",vocalesEnTexto.length);


}


const cuentaLetras2 = (texto) => {

    let consonantes = 0,
        vocales = 0,
        texto_limpio = "";

    texto_limpio = texto.split("")
                    .filter(letra => /[áéíóú\w]/gi.test(letra) && isNaN(letra))
                    .join("");

for(let letra of texto_limpio){
    if(/[áéíóúaeiou]/gi.test(letra)){
        vocales++;
    }else{
        consonantes++;
    }

}

    return [consonantes, vocales];

}


const pruebaMap = (arreglo) => {
    let nuevoArreglo = arreglo.map(numero => numero * numero);
    return nuevoArreglo;
}


cuentaLetras("victorroblesweb.es")
// console.log(cuentaLetras("victorroblesweb.es"))
console.log(cuentaLetras2("victorroblesweb.es"));

console.log(pruebaMap([1,2,3,4,5,6,7,8,9,10]))



//hola mundo



