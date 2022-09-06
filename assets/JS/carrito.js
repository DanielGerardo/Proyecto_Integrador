
let cardContainer = document.querySelector(".bookContainer")
cardContainer.addEventListener('click', e => { addCarrito(e) });

let carrito = JSON.parse(localStorage.getItem('carrito'));
  
  
const addCarrito = e => {
    if (e.target.classList.contains('Agregar')) {
    // console.log(e.target.classList);
    // console.log(e.target.parentElement);
    listaCarrito((e.target.parentElement).parentElement);
    }
    e.stopPropagation()
}

const listaCarrito = item => {
    //console.log(item.querySelector('button').id);
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('#precio').textContent,
        id: item.querySelector('button').id,
        cantidad: 1
    }
   
    if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
}

    carrito[producto.id] = { ...producto }
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function exportar(carrito){
    
    carrito.exports = {carrito};
}

