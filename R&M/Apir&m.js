document.addEventListener('DOMContentLoaded', ()=>{//pa esperar que me cargue todo html y siga con func
    fetchData()
})

const fetchData=async () =>{
    try{
        const respuesta= await fetch('https://rickandmortyapi.com/api/character')
        const data= await respuesta.json()//para esperar la promesa de q m traiga los datos. y convierto el archivo de formato json a formato de objeto de js
        const character= {
            img: data.results[0].image,
            nombre: data.results[0].name,
            genero: data.results[0].gender,
            estado: data.results[0].status,
            especie: data.results[0].species,
        }
        
        // data.results.forEach(cadaUno=>{
        //         const yo = document.createRange().createContextualFragment(/*html*/`
        //         <article class="card">
        //         <div class="card-body">
        //             <p class="card-body-p">${cadaUno.name}</p>
        //             <img src="${cadaUno.image}" alt="otraImg" class="card-body-img">
        //             <span class="generos">${cadaUno.gender}</span>
        //             <p class="card-body-status">${cadaUno.status}</p>
        //             <p class="card-body-species">${cadaUno.species}</p>
        //         </div>
        //     </article>
        //             `);
        //         const main =document.querySelector("main");
        //         main.append(yo)
        //     });

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
    clone.querySelector(".generos").innerHTML =`${character.genero}`;
    clone.querySelector(".card-body-status").innerHTML = `${character.estado}`;
    clone.querySelector(".card-body-species").innerHTML = `${character.especie}`;
    fragment.appendChild(clone);
    flex.appendChild(fragment);
}

//solo un personaje

// const character={
//     img: data.results[0].image,
//     nombre: data.results[0].name,
//     genero: data.results[0].gender,
//     estado: data.results[0].status,
//     especie: data.results[0].species,
//     }),
// }