//para esperar que se cargue el html

window.addEventListener('DOMContentLoaded', getCharacters)


function getCharacters(character){
    const results= fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response=>response.json())
        .then(data => {
            character(data)
        })
        .catch(error =>console.log(error))
}

getCharacters(data=>{
    data.results.forEach(cartoon => {
        
        const article= document.createRange().createContextualFragment(/*html*/`
        <article class="card">
            <div class="image-container">
                <h2 class="card-body-p">${cartoon.name}</h2>
                <img src="${cartoon.image}" alt="personaje" class="card-body-img">
                <p class="generos">${cartoon.gender}</p>
                <span class="card-body-status">${cartoon.status}</span>
                <span class="card-body-species">${cartoon.species}</span>
            </div>
        </article>`);
        const main =document.querySelector("main");
        main.append(article);
    });
})

//todos
const buttonAll = document.getElementById("buttonAll");//nombre de id del boton
buttonAll.addEventListener('click', getCharacters)

//mujeres
const female = document.getElementById('buttonFemales');
female.addEventListener('click', function () {
    extraer('Female', 'true');
});

//hombres
const male = document.getElementById('buttonMales');
male.addEventListener('click', function () {
    extraer('Male', 'true');
});

//vivos
const alive = document.getElementById('buttonAlive');
alive.addEventListener('click', function () {
    extraer('Alive', 'false');
});

//muertos
const dead = document.getElementById('buttonDied');
dead.addEventListener('click', function () {
    extraer('Dead', 'false');
});



function extraer(genders, status) {

    const api = 'https://rickandmortyapi.com/api/character';

    fetch(api)
        .then(response => response.json())
        .then(data => {
            if (status == 'true') {
                data.results.forEach(personaje => {

                    if (personaje.gender == genders) {

                        const article = document.createRange().createContextualFragment(`
                
                    <article class="card">
                        <div class="image-container">
                            <h2 class="card-body-p">${cartoon.name}</h2>
                            <img src="${cartoon.image}" alt="personaje" class="card-body-img">
                            <p class="generos">${cartoon.gender}</p>
                            <span class="card-body-status">${cartoon.status}</span>
                            <span class="card-body-species">${cartoon.species}</span>
                        </div>
                    </article>`);

                        const main =document.querySelector("main");
                        main.append(article);
                    }
                });
            } else if (status == 'false') {
                data.results.forEach(personaje => {

                    if (personaje.status == genders) {

                        const article = document.createRange().createContextualFragment(`
                        <article class="card">
                        <div class="image-container">
                            <h2 class="card-body-p">${cartoon.name}</h2>
                            <img src="${cartoon.image}" alt="personaje" class="card-body-img">
                            <p class="generos">${cartoon.gender}</p>
                            <span class="card-body-status">${cartoon.status}</span>
                            <span class="card-body-species">${cartoon.species}</span>
                        </div>
                    </article>`);
                    const main =document.querySelector("main");
                    main.append(article);
                    }
                });
            }
            

        }).catch(error =>console.log(error))

}
