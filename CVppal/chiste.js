const obtenerChistes = async () => {
    try {
        //llamo respuesta
        const respuesta = await fetch("https://api.dadjokes.io/api/random/joke");
        //traer el json o objeto. hay que poner "await antes de respuesta para que espere primero la broma y luego la respuesta"
        const datos = await respuesta.json();
        //Traigo chiste
        let resp = datos.body[0].setup;//entra al body ubicación setup, primer chiste 
        document.getElementById("contenedor").textContent= resp;//el textContect m pone el texto q traje en resp
    } catch (error) {
        console.log(error);
    }
}

obtenerChistes();

// fetch("https://api.dadjokes.io/api/random/joke")
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })