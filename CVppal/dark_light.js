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
    // fondoBoton1.classList.toggle("titleALight1");

    // let casillaForm = document.querySelector('#name')
    // casillaForm.classList.toggle('change-mode-casillas')

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

    // let linkNav= document.querySelectorAll('.linksNav')
    // linkNav.forEach(element1 => {
    //     element1.classList.toggle('change-mode-linksNav')
    // }); 

    let letrasnav = document.querySelectorAll('.a')
    letrasnav.forEach(element2 => {
        element2.classList.toggle('change-mode-a')
    }); 
}
