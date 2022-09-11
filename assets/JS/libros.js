const resultadoBusqueda = document.querySelector(".resultadoBusqueda"); //obtenemos el div del HTML
const itemsContainer = document.querySelector(".bookContainer"); //obtenemos el div de los elementos



function addItem(item, clase){
   const itemHTML = 
    `<div class="col-12 col-sm-3">
    <div class="card cardLibros">
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
        ><span class="Agregar">Agregar al carrito</span></button
      >
      <p class="cardPrecio">$<span id="precio">${item.precio} MXN</p>
     </div>
    </div>
    </div>`;
    clase.innerHTML += itemHTML;
}
function buscarLibro(){
    fetch("/productos.json")
    .then(response => {
       return response.json();
    })
    .then(json =>{
       productos = JSON.stringify(json);
       productos = JSON.parse(productos);
       let libro = "Libros";
       var contador=0;
        for (let i = 0; i< productos.length; i++) {
            if(productos[i].categoria.match(libro) && libro !== null){
                addItem(productos[i],itemsContainer);
                contador= contador + 1;         
            }
        }
        if(contador===0){
          resultadoBusqueda.innerHTML = 
          `<div class="mt-5">
              <img
                id ="caritaTriste"
                src="/assets/img/cara-triste-en-cuadrado-redondeado.png"
                alt="Carita triste por no encontrar productos disponibles"
              />
              <br>
              <h3 id ="leyenda">
              Libros con Certificado se han agotado. Prueba Buscando en otro producto
              </h3>
          </div>`;
                }
            });
}
buscarLibro();

