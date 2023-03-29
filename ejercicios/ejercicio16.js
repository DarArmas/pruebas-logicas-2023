/*
devolver cuantas vocales hay
*/

function vocales(texto){
    let mapeo_vocales = {};
    let maximo_repeticiones = 0;
    let vocal_repetida = "";

    //let expresion = '/'
    let texto_vocales = texto.match(/[AEIOU]/gi);
    
    
    for(let vocal of texto_vocales){

        if(!mapeo_vocales[vocal]){
            mapeo_vocales[vocal] = 1;
        }else{
            mapeo_vocales[vocal]++;
        }

    }
    
    for(let vocal in mapeo_vocales){
        //      in recorre los indices
        if(mapeo_vocales[vocal] > maximo_repeticiones){
            maximo_repeticiones = mapeo_vocales[vocal];
            vocal_repetida = vocal;
        }

    }


    return vocal_repetida;

}


function vocalesP(texto){
    //es contar cuantas vocales hay en el texto nmenso no cual vocal es la mas repetida


    let coincidencias = texto.match(/[aeiou]/gi);
    

    return coincidencias ? coincidencias.length : 0;   
}

console.log("La vocal mas repetida es: ", vocales("darnelle"));
console.log("Numero de coincidencias", vocalesP("darnellarmas"));