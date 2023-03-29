class Reloj{
    constructor(){
        this.fecha = new Date();
        this.horas = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
        this.segundos = this.fecha.getSeconds();
    }

    actualizar(segundos){
        this.segundos += segundos;
        if(this.segundos >= 60){
            this.minutos ++;
            this.segundos = 0;
        }

        if(this.minutos >= 60){
            this.horas++;
            this.minutos = 0;
        }

        if(this.horas >= 24){
            this.horas = 0;
        }
        
    }

    mostrar(){
        this.actualizar(1);
        console.log(`${this.horas} : ${this.minutos} : ${this.segundos}`);
    }

    encender(){
        setInterval(()=>{
            this.mostrar();
        },1000);
    }
}

var mi_reloj = new Reloj();
mi_reloj.encender();