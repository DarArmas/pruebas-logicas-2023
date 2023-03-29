/*
Dado un array de objetos de peliculas (titulo, director, vista)
mostrar todfas las peliculas cual has vistto y cual no
Ejemplo

misPeliculas(peliculas)

//Devuelve

Ya has visto: "El señor de los anillos de Peter Jacckson"
Te fala por ver: "La liga de la justicia de Zack Snyder"

Como hacerlo: 
- Crear un array de objetos
- Crear una funcionpara recorrer y mostrar
*/



//Crar el array de objetos

const coleccion_peliculas = [
    {
        titulo: "E señor de los anillos",
        director: "Peter Jackson",
        vista: true
    },
    {
        titulo: "La liga de la justicia",
        director: "Zack Snyder",
        vista: false
    },
    {
        titulo: "Los vengadores: Endgame",
        director: "Joe Russo",
        vista: true
    },
    {
        titulo: "Batman v Superman",
        director: "Zack Snyder",
        vista: false
    },

    
]


function misPeliculas(peliculas){
    

    for(pelicula of peliculas){
        if(pelicula.vista){
           console.log("Ya has visto: ", pelicula.titulo, " de ", pelicula.director);
        }else{
            console.log("No has visto: ", pelicula.titulo, " de ", pelicula.director);
        }
    }

    return 0;
}

misPeliculas(coleccion_peliculas);