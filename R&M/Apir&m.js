window.addEventListener('DOMContentLoaded', personajes)

const bottonRM = document.getElementById("genero");//nombre de id del boton

bottonRM.addEventListener('click', personajes)


function personajes() {
    const apiRM = 'https://rickandmortyapi.com/api/character';

fetch(apiRM)
    .then (res=>res.json())//para esperar la promesa de q m traiga los datos. y convierto el archivo de formato json
    .then (dato=> {
        dato.results.forEach(element => {
    console.log(element.gender)
});
})
//en el parametro dato guardaré los datos recibidos. 
//con .elparametro al q voy a acceder
.catch(error=>console.log(error))//me trae los errores q tenga configurada la API
}
