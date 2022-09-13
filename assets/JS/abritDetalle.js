var codigo;
//Variable que contiene el div con clase bookContainer en el cual se ingresan las card de los productos
let c = document.querySelector(".bookContainer");

//Al div se le agrega evento click en el cual ejecuta la funcion addCarrito
c.addEventListener("click", (e) => {
  abrir(e);
});

//? Abrir pestaña de detalle
 const abrir = (e) => {

// excluir el evento del boton de agregar
  if (e.target.classList.contains("Agregar")) {
  }
  else{
    let card = e.target.parentElement;
    // declarar codigo
    codigo = card.querySelector("button").id;
    
// guardar id detalle producto local storage
   localStorage.setItem('codigo',codigo);

    window.location.href = "detalleP.html";
   
  }

  e.stopPropagation();
  
};  // en el archivo test.js

  // import m from './test'



 
   
  