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

    let logo= document.querySelector(".logoExpe")
    logo.classList.toggle("change-logo")

    let logo2= document.querySelector(".logoExpe1")
    logo2.classList.toggle("change-logo")

    let casillaForm = document.querySelector('.email')//no funciona
    casillaForm.classList.toggle('change-mode-casillas')
    
    let fondoBoton= document.querySelector(".titleAbout")//no funciona
    fondoBoton.classList.toggle("titleALight");

    let fondoBoton2= document.querySelector(".contacto")//no funciona
    fondoBoton2.classList.toggle("titleALight");

    let fondoBoton3= document.querySelector(".titleCont")//no funciona
    fondoBoton3.classList.toggle("titleALight");
}

