/*
 *MOSTRA UN RELOJ CADA SEGUNDO, SOLO PUEDES OBTENER LA HORA UNA VEZ
 */

 class Reloj{
   
    encender(){
        const now = new Date();
        this.hora = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    }

    getTime(){
       console.log(this.calHora());
    }

    calHora(){

       if(this.hora == 23 && this.minutes ==59 && this.seconds == 59){
            this.hora = 0;
            this.minutes = 0;
            this.seconds = 0;
       }else if(this.minutes == 59 && this.seconds == 59){
            this.hora++;
            this.minutes = 0;
        }else if(this.seconds == 59){
            this.minutes++;
            this.seconds = 0;
        }else{
            this.seconds++;
        }

        return this.hora + ':' + this.minutes + ':' + this.seconds;
    }
 }

 function relojFuncional(){
    var reloj = new Reloj();
    reloj.encender();
    setInterval(() =>{
        reloj.getTime();
    },1000);
 }


relojFuncional();