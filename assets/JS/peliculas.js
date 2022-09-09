const resultadoBusqueda = document.querySelector(".resultadoBusqueda"); //obtenemos el div del HTML
function addItem(item){
    const itemHTML = 
    `<div class="card cardLibros">
    <img
      src="${item.img}"
      class="card-img-top"
      alt="${item.name}"
    />
    <div class="card-body text-center">
    <h5 class="card-title">${item.name}</h5>
      <p class="card-text">
        ${item.description}
      </p>
      <button id="${item.codigo}" class="btnLibros"
        ><span class ="Agregar">Agregar al carrito</span></button
      >
      <p  class="cardPrecio">$<span id= "precio"> ${item.precio}</span>MXN</p>
     </div>
    </div>`;
    const itemsContainer = document.querySelector(".bookContainer");
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
       let libro = "Peliculas";
       var contador =0;
        for (let i = 0; i< productos.length; i++) {
            if(productos[i].categoria.match(libro) && libro !== null){
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