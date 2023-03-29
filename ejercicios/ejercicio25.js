/*
Dado un string, ponerlo completo en mayusculas o minusculas dependiendo de si hay más mayusculas o minusculas
en el string.
Ejemplos:
mayusMinus("JOAQuin")      Devuelve: JOAQUIN
mayusMinus("Victor")        Devuelve: victor
*/

function mayusMinus(string){
    let arr = string.split('');
    let result = '';
    let mayusCounter = 0;
    let minusCounter = 0;

    for(letter of arr){
        if(letter === letter.toUpperCase()) mayusCounter++;
        if(letter === letter.toLowerCase()) minusCounter++;
    }

    if(mayusCounter > minusCounter){
        result = arr.join('').toUpperCase();
    }else if(mayusCounter < minusCounter){
        result = arr.join('').toLowerCase();
    }

     return result;
}

function mayusMinus2(texto){

        let mayusculas = 0;
        let minusculas = 0;
        let resultado = '';

        for(let letra of texto){
            if(/[A-Z]/.test(letra)){
                mayusculas++;
            }else{
                minusculas++;
            }
        }

        if(mayusculas > minusculas){
            resultado = texto.toUpperCase();
        }else{
            resultado = texto.toLowerCase();
        }

        return resultado;

}

//otra solucion
const convert = (str) => {
    let upper = 0;
    
    for (let l of str) {
      if(l === l.toUpperCase()){
          upper++;
      }
    }

    return upper > str.length - upper ? str.toUpperCase() : str.toLowerCase();
  }

console.log(mayusMinus("JOAquin"));
console.log(mayusMinus2("JOAquin"));
console.log(convert("JOAQuin"));