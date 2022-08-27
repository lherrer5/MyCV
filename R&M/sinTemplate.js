//para esperar que se cargue el html

window.addEventListener('DOMContentLoaded', getCharacters)


function getCharacters(character){
    const results= fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response=>response.json())
        .then(data => {//en el parametro data guardaré los datos recibidos. 
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


// para next y previous
// getCharacters((info)=>{
//         const li= document.createRange().createContextualFragment(/*html*/`
//         <li class="page-item">
//         <a class="page-link" onclick="getCharacters('${data.info.info.prev}')"> Previous</a></li>
//     <li class="page-item">
//         <a class="page-link" onclick="getCharacters('${data.info.info.next}')" href="#">Next</a></li>`);
//         const ul =document.querySelector(".pagination");
//         ul.append(li);
//     });



//todos
// const buttonAll = document.getElementById("buttonAll");//nombre de id del boton
// buttonAll.addEventListener('click', function () {
//     extraer('All', 'true');
// });

// //mujeres
// const female = document.getElementById('buttonFemales');
// female.addEventListener('click', function () {
//     extraer('Female', 'true');
// });

// //hombres
// const male = document.getElementById('buttonMales');
// male.addEventListener('click', function () {
//     extraer('Male', 'true');
// });

// //vivos
// const alive = document.getElementById('buttonAlive');
// alive.addEventListener('click', function () {
//     extraer('Alive', 'false');
// });

// //muertos
// const dead = document.getElementById('buttonDied');
// dead.addEventListener('click', function () {
//     extraer('Dead', 'false');
// });



// function extraer(genders, status) {

//     const api = 'https://rickandmortyapi.com/api/character';

//     fetch(api)
//         .then(response => response.json())
//         .then(data => {
//             if (status == 'true') {
//                 data.results.forEach(cartoon => {

//                     if (cartoon.gender == genders) {

//                         const article = document.createRange().createContextualFragment(`               
//                     <article class="card">
//                         <div class="image-container">
//                             <h2 class="card-body-p">${cartoon.name}</h2>
//                             <img src="${cartoon.image}" alt="personaje" class="card-body-img">
//                             <p class="generos">${cartoon.gender}</p>
//                             <span class="card-body-status">${cartoon.status}</span>
//                             <span class="card-body-species">${cartoon.species}</span>
//                         </div>
//                     </article>`);

//                         const main =document.querySelector(".flex");
//                         main.append(article);
//                     }
//                 });
//             } else if (status == 'false') {
//                 data.results.forEach(cartoon => {

//                     if (cartoon.status == genders) {

//                         const article = document.createRange().createContextualFragment(`
//                         <article class="card">
//                         <div class="image-container">
//                             <h2 class="card-body-p">${cartoon.name}</h2>
//                             <img src="${cartoon.image}" alt="personaje" class="card-body-img">
//                             <p class="generos">${cartoon.gender}</p>
//                             <span class="card-body-status">${cartoon.status}</span>
//                             <span class="card-body-species">${cartoon.species}</span>
//                         </div>
//                     </article>`);
//                     const main =document.querySelector(".flex");
//                     main.append(article);
//                     }
//                 });
//             }
            

//         }).catch(error =>console.log(error))

// }
