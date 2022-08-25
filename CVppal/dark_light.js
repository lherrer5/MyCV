//definir el boton que será el mando
const botonMando= document.getElementById("botonMando")

//indico al boton lo que quiero que haga con el click
botonMando.addEventListener("click",cambioColor)

//Función para cambiar el color
function cambioColor(){
    //indicar en variables cada elemnto que voy a cambiar en el click
    let body= document.querySelector("body");
    body.classList.toggle("bodyLight");//nombre de cada clase lights

    let titles= document.querySelector("#letraBlanca");
    titles.classList.toggle("titlesLight");

    // let fondoBoton= document.querySelector(".titleAbout")
    // fondoBoton.classList.toggle("titleALight");

    // let fondoBoton1= document.querySelector("#contacto")
    // fondoBoton1.classList.toggle("titleALight");

    // let fondoBoton2= document.querySelector(".titleExpe")
    // fondoBoton2.classList.toggle("titleALight");

    let cajaexperiencia = document.querySelectorAll('.small-box')
    cajaexperiencia.forEach(element => {
        element.classList.toggle('change-mode-small-box')
    });

    let cajasExpe = document.querySelectorAll('.titlEpExpe')
    cajasExpe.forEach(element => {
        element.classList.toggle('change-mode-titlEpExpe')
    });

    let cajasExpe1 = document.querySelectorAll('.pExpe')
    cajasExpe1.forEach(element => {
        element.classList.toggle('change-mode-titlEpExpe')
    });

    let letrasnav = document.querySelectorAll('.a')
    letrasnav.forEach(element2 => {
        element2.classList.toggle('change-mode-a')  
    }); 
    //document.getElementById("logoExpe1").src="./img/WWCode_Medellin_White 1.png";
    // let logowwc = document.querySelectorAll('.logoExpe').src="./img/WWCode_Medellin_Black 3.png"
    // logowwc.forEach(element2 => {
    //     element2.classList.toggle('change-logo')  
    // });
    // let as= document.getElementById("logoExpe1");
    //     as.classList.toggle("change-logo")
}

// let casillaForm = document.getElementById('#name')
//     casillaForm.classList.toggle('change-mode-casillas')
