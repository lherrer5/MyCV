let acu = 0;//pa reinicar la pag


window.addEventListener('DOMContentLoaded', getCharacters);//esperar q se cargue el html

function getCharacters() {//inserta el texto de bienvenida
//esta variable crea el texto con metodos
    const div = document.createRange().createContextualFragment(`
                    <div>
                        <div class="flex-hijo">
                            Choose any of the catergories above
                            and learn more about Rick and Morty characters.
                        </div>
                    </div>
                `);
//esta variable escoge con la clase el elemnto en donde se inseratara 
    const information = document.querySelector('.flex-hijo')
    //este metodo hace la inserción
    information.append(div);

}

//creamos variables para llamar las etiquetas boton con su ID
const female = document.getElementById('buttonFemales');
const male = document.getElementById('buttonMales');
const allc = document.getElementById('buttonAll');
const alive = document.getElementById('buttonAlive');
const dead = document.getElementById('buttonDead');

//creo el evento click para cada variable y la funcion para q llame los personajes segun el filtro de la parte final d la url
female.addEventListener('click', function () {
    
    info('https://rickandmortyapi.com/api/character/?gender=Female');//hace llamado a funcion info para inserta los personajes
    borrar()//hace llamado a funcion borrar para eliminar el contenido de bienvenida
});


male.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?gender=Male');
    borrar()
});

alive.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?status=Alive');
    borrar()
});

dead.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?status=Dead');
    borrar()
});

allc.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character');
    borrar()
});


function info(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(cartoon => {//me trae los resultados d la api segun la cantidad de elementos d la api
//la const div m crea la tarjeta con la info pa cada elemento
                const div = document.createRange().createContextualFragment(`
                <article class="card">
                <div class="image-container">
                    <h2 class="card-body-p">${cartoon.name}</h2>
                    <img src="${cartoon.image}" alt="personaje" class="card-body-img">
                    <p class="generos">${cartoon.gender}</p>
                    <span class="card-body-status">${cartoon.status}</span>
                    <span class="card-body-species">${cartoon.species}</span>
                </div>
            </article>
                    `);
//esta const selecciona mi elemento htlm con la clase flex para hacer el append d la const div
                const information = document.querySelector('.flex')
                acu = acu + 1;//da la vuelta en el forEach hasta llegar al ultimo elemento
                information.append(div);
            });

        }).catch(error =>console.log(error))
//con este for recorro todas las tarjetas creadas y las elimino cuando se hace click
    for (let i = 0; i < acu; i++) {
        const padre = document.querySelector('.flex')
        const hijo = document.querySelector('.card')
        padre.removeChild(hijo)//llamo al padre y al hio, para borrar todos los articles
    }
}


function borrar(){
    const padre = document.querySelector('.flex')
        const hijo = document.querySelector('.card')
        padre.removeChild(hijo)
}