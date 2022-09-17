var pagActual = ""; //variable global para saber la busqueda que actualmente se esta realizando
let contPage = 1; //variable global para inicializar la funcion de incremento de paginas

//obtencion de los elementos nav del html
const female = document.getElementById('buttonFemales');
const male = document.getElementById('buttonMales');
const allc = document.getElementById('buttonAll');
const alive = document.getElementById('buttonAlive');
const dead = document.getElementById('buttonDead');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

//evento que escucha cuando se oprime el boton next y envia el jquery a la funcion info()
//el + es un parametro para que la funcion changePage sepa que tiene que aumentar las paginas
next.addEventListener('click', () => {
    contPage=contPage+1;
    if (pagActual == "female") {
        info('Female', '', contPage)//paso a la funcion info los parametros de gender y change page
    } else if (pagActual == "male") {
        info('Male', '', contPage)//paso a la funcion info los parametros de gender y change page
    } else if (pagActual == "dead") {
        info('', 'Dead', contPage)//paso a la funcion info los parametros de status y change page
    } else if (pagActual == "alive") {
        info('', 'Alive', contPage)//paso a la funcion info los parametros de status y change page
    } else if (pagActual == "allc") {
        info('', '', contPage)//solo paso changePage para q muestre todos los personajes
    }
})

//evento que escucha cuando se oprime el boton previous y envia el jquery a la funcion info()
//el - es un parametro para que la funcion changePage sepa que tiene que disminuir las paginas
previous.addEventListener('click', () => {
    contPage=contPage-1;
    if (pagActual == "female") {
        info('Female', '', contPage)
    } else if (pagActual == "male") {
        info('Male', '', contPage)
    } else if (pagActual == "dead") {
        info('', 'Dead', contPage)
    } else if (pagActual == "alive") {
        info('', 'Alive', contPage)
    } else if (pagActual == "allc") {
        info('', '', contPage)
    }
})


//Evento que escucha cuando se oprime el boton de busqueda.
//Se le asigna el valor a la variable pagActual dependiando el boton de busqueda seleccionado 
female.addEventListener('click', function () {
    pagActual = "female"
    contPage = 1;
    info('Female', '', '');
});


male.addEventListener('click', function () {
    pagActual = "male"
    contPage = 1;
    info('Male', '', '');
});

alive.addEventListener('click', function () {
    pagActual = "alive"
    contPage = 1;
    info('', 'Alive', '');
});

dead.addEventListener('click', function () {
    pagActual = "dead"
    contPage = 1;
    info('', 'Dead', '');
});

allc.addEventListener('click', function () {
    pagActual = "allc"
    contPage = 1;
    info('', '', '');
});

//funcion para consumir la API e insertar los datos al HTML
function info(gender, status, changePage) {
    //concateno los parametros q necesito con marcadores de posicion $[{} y uso plantillas literales encerradas por el carácter ``
    const api = `https://rickandmortyapi.com/api/character/?gender=${gender}&status=${status}&page=${changePage}`;

    //Reseatar botones cuando se busca para que si llego a la ultima y tengo next desabilitado, al darle previous se m vuelva a activar
    next.classList.remove("contenedorbotones");
    previous.classList.remove("contenedorbotones");

    fetch(api)
        .then(response => response.json())//recibo mi respuesta en formato .json
        .then(data => {

            if (data.info.pages == changePage) {
                //Ultima pagina
                alert("ultima ´pagina");
                
                next.classList.add("contenedorbotones")
            }

            if (changePage === 1) previous.classList.add("contenedorbotones")

            data.results.forEach(personaje => {//empiezo a manipular los dato recibidos, con la key results

                const div = document.createRange().createContextualFragment(`
                <article class="card">
                <div class="image-container">
                    <h2 class="card-body-p">${personaje.name}</h2>
                    <img src="${personaje.image}" alt="personaje" class="card-body-img">
                    <p class="generos">${personaje.gender}</p>
                    <span class="card-body-status">${personaje.status}</span>
                    <span class="card-body-species">${personaje.species}</span>
                </div>
            </article>

                    `);
//esta const information selecciona mi elemento htlm con la clase mainPadre para hacer el append d la const div
                const information = document.querySelector('.mainPadre')
                information.append(div);
            });


        }).catch(error =>console.log(error))
        //llamo a funcion borrar para eliminar contenido anterior e insertar lo nuevo
        
    removeCards(); //borra las cartas anteriores
    //crea la clase activeButtons reemplazando la contenedorbotones para q aparezca next y previous
    let buttons = document.querySelector('.contenedorbotones')
    buttons.classList.add('activeButtons')
}


function removeCards() {
    const cards = document.querySelector('.mainPadre').innerHTML = "";
}


//Funcion que se encarga de incrementar o decrementar las paginas segun el parametro que le pase
function changePage(operador) {
    num = contPage;

    if (operador == '+') {
        num = num + 1;
        contPage = num;
        return num
    } else if (operador == '-') {
        if (num <= 1) { num = 2;} //condicional para que el valor del contador no se dismunuya mas de 2 cuando se oprime previous 
        num = num - 1;
        contPage = num;
        return num
    }
}