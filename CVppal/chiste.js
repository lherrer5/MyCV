// const obtenerChistes = async () => {
//     try {
//         //llamo respuesta
//         const respuesta = await fetch("https://api.dadjokes.io/api/random/joke");
//         //traer el json o objeto. hay que poner "await antes de respuesta para que espere primero la broma y luego la respuesta"
//         const datos = await respuesta.json();
//         //Traigo chiste
//         let resp = datos.body[0].setup;//entra al body ubicación setup, primer chiste 
//         document.getElementById("contenedor").textContent= resp;//el textContect m pone el texto q traje en resp
//     } catch (error) {
//         console.log(error);
//     }
// }

// obtenerChistes();

window.addEventListener('DOMContentLoaded', chistesAleatorios)//window es el padre y DOMContect sirve para ejecutar instrucciones cuando el navegador está listo para realizar acciones sobre el DOM

const obtenerChistes = document.getElementById("contenedor");

obtenerChistes.addEventListener('click', chistesAleatorios)


function chistesAleatorios() {
    const endPoint = 'https://api.dadjokes.io/api/random/joke';

    fetch(endPoint)
        .then(response => response.json())
        .then(data => {
            document.getElementById("chiste").textContent = data.body[0].setup
            document.getElementById("respuesta").textContent = data.body[0].punchline
        }).catch(error => {
            document.getElementById("chiste").textContent = "Plop Lol"
        })
} 