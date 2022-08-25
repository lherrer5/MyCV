// window.addEventListener('DOMContentLoaded', personajes)//para esperar que se cargue el html

// const bottonRM = document.getElementById("todosName");//nombre de id del boton

// bottonRM.addEventListener('click', personajes)

// function personajes() {
//     const apiRM = 'https://rickandmortyapi.com/api/character';

//     fetch(apiRM)
//         .then(response => response.json())//para esperar la promesa de q m traiga los datos. y convierto el archivo de formato json a formato de objeto de js
//         .then(dato => {
//             document.getElementById("name1").textContent = dato.results[0].name;
//             document.getElementById("imgRM").setAttribute("src", dato.results[0].image)
//             }) 
//         .catch(error => console.log(error))//me trae los errores q tenga configurada la API
// }
//en el parametro dato guardaré los datos recibidos. 
//con elparametro. al q voy a acceder


const getRandomInt= (min,max)=>{
    return Math.floor(Math.random()* (max - min)) + min;
}

console.log(getRandomInt(1, 826))

document.addEventListener('DOMContentLoaded', ()=>{//pa esperar que me cargue todo html y siga con func
    fetchData()
})

const fetchData=async () =>{
    try{
        const respuesta= await fetch('https://rickandmortyapi.com/api/character')
        const data= await respuesta.json()
        const character={
            img: data.results[0].image,
            nombre: data.results[0].name,
            genero: data.results[0].gender,
            estado: data.results[0].status,
            especie: data.results[0].species,
        }
        pintarCard(character)
    }
    catch (error) {
        console.log(error)
    }
}

const pintarCard= (character) => {
    console.log(character);
    const flex= document.querySelector(".flex")//pa indicar donde va el template
    const template= document.querySelector("#template-card")// capturo el template. el contect para la info dentro d la etiqueta
    const clone= template.content.cloneNode(true)  //para clonar el template
    const fragment = document.createDocumentFragment()//es invisible, solo se crea en js, me funciona mejor q innerHTML con los loops

    clone.querySelector(".card-body-img").setAttribute("src", character.img);
    clone.querySelector(".card-body-p").innerHTML = `${character.nombre}`;
    clone.querySelector(".generos").innerHTML = `${character.genero}`;
    clone.querySelector(".card-body-status").innerHTML = `${character.estado}`;
    clone.querySelector(".card-body-species").innerHTML = `${character.especie}`;
    fragment.appendChild(clone);
    flex.appendChild(fragment);
}