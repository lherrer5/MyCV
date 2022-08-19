const obtenerChistes = async () => {
    try {
        //llamo respuesta
        const respuesta = await fetch("https://api.dadjokes.io/api/random/joke");
        //traer el json o objeto. hay que poner "await antes de respuesta ara que espere primero la broma y luego la respuesta"
        const datos = await respuesta.json();
        //Traigo chiste
        let resp = datos.body[0].setup;
        document.getElementById("contenedor").innerHTML = resp;
    } catch (error) {
        console.log(error);
    }
}

obtenerChistes();