/*
Dado un numero, mostrar los numeros del 1 hasta el numero
Pero apra los multirplos de tres imprimir "buzz" en lugar del numero
y para los multiplos de cinco imprmir "lightyear".
Para multiplos de tres y cinco imprimen "Buzzlightyear" 
*/



function buzz(numero){
    
    let lista = [];

    for(let i=1; i<=numero; i++){
        if(i % 3 == 0 && i % 5 == 0){
            lista.push("BuzzLightyear");
        }else if(i % 3 == 0){
            lista.push("Buzz");
        }else if(i % 5 == 0){
            lista.push("Lightyear");
        }else{
            lista.push(i.toString());
        }

    }
   
    return lista;

}


function recorrer(lista){
    lista.forEach(element => {
        console.log(element);
    });
}


recorrer(buzz(12));