
let columnaActiva=1; 

const columnas = document.querySelectorAll(".columna");

columnas.forEach((element, indice) => {

    element.addEventListener("click", function(){
    //console.log(element, indice);
    cambiarColumnas(indice);
})

});

function cambiarColumnas(indice){
     columnas[columnaActiva].classList.remove("activa");
     columnas[indice].classList.add("activa");
     columnaActiva=indice;
}
