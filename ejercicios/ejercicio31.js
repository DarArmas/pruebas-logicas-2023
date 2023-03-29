/*
Dado un numero indicar que tipo de angulo es
*/

function angulo (angulo){
    var tipo = "";    
    

    if(angulo == 90){
        tipo = "Angulo recto";
    }else if(angulo < 90){
        tipo = "Angulo agudo";
    }else if(angulo > 90 &&  angulo < 180){
        tipo = "Angulo obtuso";
    }else if(angulo > 180 && angulo < 360){
        tipo =" Angulo concavo";
    }else if(angulo == 180){
        tipo = "Angulo llano";
    }else if( angulo == 360){
        tipo = "Angulo completo";
    }

    tipo

    return tipo;

}

console.log(angulo(47));
console.log(angulo(90));
console.log(angulo(145));
console.log(angulo(180));
