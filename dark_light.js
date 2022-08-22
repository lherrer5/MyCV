//definir el boton que será el mando
const botonMando= document.getElementById("botonMando")

//indico al boton lo que quiero que haga con el click
botonMando.addEventListener("click",cambioColor)

//Función para cambiar el color
function cambioColor(){
    //indicar en variables cada elemnto que voy a cambiar en el click
    let body= document.querySelector("body");
    body.classList.toggle("bodyLight");//nombre de cada clase lights

    let titles= document.querySelectorAll("#letraBlanca")
    titles.classList.toggle("titlesLight");

    let cajaexperiencia = document.querySelectorAll('.small-box')
    cajaexperiencia.forEach(element => {
        element.classList.toggle('change-mode-small-box')
    });
    
    let letrasnav = document.querySelectorAll('a')
    letrasnav.forEach(element => {
        element.classList.toggle('change-mode-a')
    }); 
}
