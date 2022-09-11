btnCertificate.addEventListener("click", (e) => { //cuando se hace click en el boton, entonces ejecutamos esta funcion
  e.preventDefault(); //evitamos que el navegador se recargue
  cartaVacia();
  let contFiltro = document.querySelector(".bookContainer");//obtenemos el div de los elementos
  let tituloFiltro = document.querySelector(".tituloFiltro");//obtenemos el div del titulo del filtro

  fetch("/productos.json") //realizamos la peticion a la ruta de nuestro JSON
  .then(response => { 
    return response.json(); //cuando la promesa es resuelta, asignamos la info a la variable response
  })
  .then(json =>{ 
    productos = JSON.stringify(json); //convertimos el objeto a una cadena de texto JSON, 
    productos = JSON.parse(productos); //analiza el JSON, y lo transforma en objeto que se almacena en productos
    var contador = 0; 
    for (let i = 0; i< productos.length; i++) { //recorre todo el arreglo de productos 
        if(productos[i].categoria.match("Libros") && productos[i].certificado.match("false")){ //si su categoria es libro y tiene certificado
          addItem(productos[i],contFiltro); //llamamos a la función addItem, pasandole la info del producto
            contador= contador+1;  //se incrementa el contador
            // tituloFiltro.innerHTML = `<p class="tituloDeBusqueda">"Libros con Certificado"</p>
            //                           <p class="resultados">${contador} Resultados</p>`;
          }
      }
      if(contador===0){
          resultadoBusqueda.innerHTML = `<p class="tituloDeBusqueda">"Libros con Certificado"</p>
          <p  class="resultados">${0} Resultados</p>
          <div class="mt-5">
            <img
              id ="caritaTriste"
              src="/assets/img/cara-triste-en-cuadrado-redondeado.png"
              alt="Carita triste por no encontrar productos disponibles"
            />
            <br>
            <h3 id ="leyenda">
            Los libros con Certificado se han agotado. Prueba Buscando en otro producto
            </h3>
          </div>`;
        }
      });
});

function addItem(item, clase){
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
      ><span class="Agregar">Agregar al carrito</span></button
    >
    <p class="cardPrecio">$<span id="precio">${item.precio} MXN</p>
   </div>
  </div>`;
  clase.innerHTML += itemHTML;
}


function cartaVacia(){
  const itemHTML = 
   `<div class="bookContainer">
 </div>`;
   itemsContainer.outerHTML = itemHTML;
}