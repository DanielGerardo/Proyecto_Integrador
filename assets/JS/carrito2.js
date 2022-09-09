
const itemsContainer = document.querySelector("#carrito");
// variable span precio total
const spanPrecio = document.getElementById("precioTotal");
const carritoVacio = document.getElementsByClassName("carritoVacio");
const span=document.getElementById("contador");

// Visualizacion en pagina carrito
const paginaCarrito = () => {
  // Se define variable carrito del local storage para poder utilizarla en diferentes pestañas y que no se vacie
let carrito = JSON.parse(localStorage.getItem('carrito'));
let cantCarrito= JSON.parse(localStorage.getItem('cantCarrito'));

let precioTotal=0;
let contador= 0;


if(Object.entries(carrito).length !== 0){
  
  Object.values(carrito).forEach(producto => {
        const itemsHTML = `<div class="row my-3 border align-middle cardItem">
        <div class="col-sm-3 p-3 align-self-center">
          <!--Imagen-->
          <img
            class="card-text"
            src="${producto.img}"
            alt="mdmo"
          />
        </div>
        <div class="col-sm-3 p-3 align-self-center">
          <!--Nombre del producto-->
          <p class="">${producto.title}</p>
        </div>
        <div class="col-sm-3 p-3 align-self-center">
          <!--Cantidad-->
          <input type="number" name="" id="" value="${producto.cantidad}" min="1" max="10" />
          <!-- Eliminar -->
          <div class="my-1">
            <button class="btn btnTrashIcon">Eliminar</button>
          </div>
        </div>
        <div class="col-sm-3 p-3 align-self-center">
          <!--Precio unitario-->
          <p>$ <span class="subprecios">${producto.precio}</span></p>
        </div>
      </div>`;
      
      // ingresar card a lista carrito
      itemsContainer.innerHTML += itemsHTML;
// contar cuantos productos hay en el carrito
      contador += producto.cantidad;
      console.log(contador);
      // Calcular costo total=
      precioTotal+= producto.precio;
    
    });

span.innerHTML=cantCarrito;
spanPrecio.innerHTML=precioTotal;
// console.log("lele");
// itemsContainer.childElement.
// console.log(itemsContainer.childElementCount);
  }
  else{
    const carritolleno = document.getElementsByClassName("carritolleno");
    for (i = 0; i < carritolleno.length; i++) {//longitud de elementos con esa clase
      carritolleno[i].style.display = "none";
    }
    
  }   
}

function vaciarCarrito (){
  let carrito={};
  let contador=0;
  localStorage.setItem("cantCarrito",contador);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(carrito);
 
  paginaCarrito(carrito);
  window.location.reload()

}

paginaCarrito(carrito);