//definir el boton que será el mando
const botonMando= document.getElementById("botonMando")

//indico al boton lo que quiero que haga con el click
botonMando.addEventListener("click",cambioColor)

//Función para cambiar el color
function cambioColor(){
    //indicar en variables cada elemnto que voy a cambiar en el click
    let body= document.querySelector("body");
    body.classList.toggle("bodyLight");//nombre de cada clase lights
}
