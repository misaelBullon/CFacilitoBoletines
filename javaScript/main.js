/*
  console.log("Hola mundo desde el archivo javascript");


  //DOM
let container =  document.querySelector(".container");  //Busca en el DOM el elemento container, lo retorna y .lo almacena en la variable container
console.log(container);
let tabla = document.querySelector(".table");
console.log(tabla);


let links = document.querySelectorAll("a");                //querySelectorAll recorre todo el arbol del DOM buscando todos los elementos indicados
links.forEach(function(link){
  console.log(link);
})

let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
  td.addEventListener("click", function(){
    console.log(this);   //muestra el elemento sobre el cual se hizo click
  })
})
*/
//Actividad
//Obtener los elementos de la clase .close
//Recorrerlos
//Agregar un evento click a cada uno de ellos

let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click", function(evento){
      evento.preventDefault(); // previene del comportamientopor defecto del evento, en este caso volver a la pagina principal
      //return false;             IDEM
      //Quitar clase de animacion
        let content = document.querySelector(".content");
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");
      //Agregar nueva animacion
      content.classList.add("fadeOutUp");
      content.classList.add("animated");

      setTimeout(function(){    //Ejecuta la funcion despues de cierto tiempo especificado en milisegundos
        location.href = "/";
      },1000);
      //setInterval Repite la funcion despues de cierto tiempo especificado en milisegundos
    });
});

let iconos = document.querySelectorAll("i");  //Recorre las etiquetas i

iconos.forEach(function(icono){
  icono.classList.remove("fa-star-o");    //Elimina todos los iconos de la clase fa-star-o
                                          //classList.add agrega clases
});
