//Variable que contiene el div con clase bookContainer en el cual se ingresan las card de los productos
let cardContainer = document.querySelector(".bookContainer");

//Al div se le agrega evento click en el cual ejecuta la funcion addCarrito
cardContainer.addEventListener("click", (e) => {
  addCarrito(e);
});

// Se define variable carrito del local storage para poder utilizarla en diferentes pestañas y que no se vacie
// carrito={};
let carrito = JSON.parse(localStorage.getItem("carrito"));


// Funcion add Carrito en el cual indica que al dar click en el boton de añadir carrito inicie otra funcion
const addCarrito = (e) => {

  if (e.target.classList.contains("Agregar")) {
    // console.log(e.target.classList);
    // console.log(e.target.parentElement);
    listaCarrito(e.target.parentElement.parentElement.parentElement);
   
  }

  e.stopPropagation();
};

// funcion para crear un objeto con el contenido de las cards
const listaCarrito = (item) => {
  // console.log(item.querySelector('img').src);
let contador = 0;
  // Se definen el contenido con la card
  const producto = {
    title: item.querySelector("h5").textContent,
    precio: item.querySelector("#precio").textContent,
    id: item.querySelector("button").id,
    cantidad: 1,
    img: item.querySelector("img").src,
  };

  // Si el id es repetido se suma la variable cantidad
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }
  // Se añade producto al objeto carrito
  carrito[producto.id] = { ...producto };
  // Limpiar carrito
  // carrito= {};
  // console.log(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  
  Object.values(carrito).forEach((producto) => {
    contador += producto.cantidad;
    // console.log(contador);
    localStorage.setItem("cantCarrito", JSON.stringify(contador));
  });
  
  // Se actualiza la variable del icono en el local storage
  let cantcarrito = JSON.parse(localStorage.getItem('cantCarrito'));
  contCarrito.innerText = cantcarrito; 
  

};
