const resultadoBusqueda = document.querySelector(".resultadoBusqueda"); //obtenemos el div del HTML
function addItem(item){
    const itemHTML = 
    `<div class="col">
             <!--Primer tarjeta-->
             <div class="card text-center shadow-sm">
               <img
                 src="${item.img}"
                 class="card-img-top"
                 alt="${item.name}"
               />
               <!--Img del producto-->
               <div class="card-body">
                 <h5 class="card-title">${item.name}</h5>
                 <!--Titulo del producto-->
                 <p class="card-description">
                   ${item.description}
                 </p>
                 <button class="btn añadirAlCarrito shadow-sm" type="submit">
                   Añadir al carrito
                 </button>
               </div>
               <p class="card-price">$${item.precio}</p>
             </div>`;
    const itemsContainer = document.querySelector(".contenedorProductos");
    itemsContainer.innerHTML += itemHTML;
}

function addLibro(){
     
    fetch("/productos.json")
    .then(response => {
       return response.json();
    })
    .then(json =>{
       productos = JSON.stringify(json);
       productos = JSON.parse(productos);
       let libro = "Libros";
       var contador =0;
        for (let i = 0; i< productos.length; i++) {
            if(productos[i].name.match(libro)||productos[i].categoria.match(libro) && libro !== null){
                addItem(productos[i]);
                contador= contador + 1;              
            }
        }
        if(contador===0){
          resultadoBusqueda.innerHTML = 
          `<div class="mt-5">
            <img
              src="/assets/img/productos/cara-triste.jpg"
              alt="Carita triste por no encontrar productos disponibles"
              width="180px"
            />
            <h3>
              Por el momento no tenemos Libros. Prueba Buscando
              otro producto
            </h3>
          </div>`;
                }
            });
   
        }
addLibro();