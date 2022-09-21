const btnCertificate = document.querySelector(".btnCertificate"); //obtenemos el boton del HTML
const btnExclusive = document.querySelector(".btnExclusive"); //obtenemos el boton del HTML
const btnBusquedaxPrecio = document.querySelector(".btnBusquedaxPrecio"); //obtenemos el boton del HTML

//Busqueda de productos Certificados
btnCertificate.addEventListener("click", (e) => { //cuando se hace click en el boton, entonces ejecutamos esta funcion
  e.preventDefault(); //evitamos que el navegador se recargue
  cartaVacia();
  let contFiltro = document.querySelector(".bookContainer");//obtenemos el div de los elementos
  let varCategoria = document.getElementById("varCategoria").value; //obtenemos el boton del HTML
  fetch("/productos.json") //realizamos la peticion a la ruta de nuestro JSON
  .then(response => { 
    return response.json(); //cuando la promesa es resuelta, asignamos la info a la variable response
  })
  .then(json =>{ 
    productos = JSON.stringify(json); //convertimos el objeto a una cadena de texto JSON, 
    productos = JSON.parse(productos); //analiza el JSON, y lo transforma en objeto que se almacena en productos
    var contador = 0; 
    for (let i = 0; i< productos.length; i++) { //recorre todo el arreglo de productos 
        if(productos[i].categoria.match(varCategoria) && productos[i].certificado.match("true")){ //si su categoria es libro y tiene certificado
          addItem(productos[i],contFiltro); //llamamos a la función addItem, pasandole la info del producto
            contador= contador+1;  //se incrementa el contador
            // tituloFiltro.innerHTML = `<p class="tituloDeBusqueda">"Libros con Certificado"</p>
            //                           <p class="resultados">${contador} Resultados</p>`;
          }
      }
      if(contador===0){//si no hubiera ningún producto, muestra el sieguiente mensaje:
          contFiltro.innerHTML = `<p class="tituloDeBusqueda">"${varCategoria} con certificado"</p>
          <p class="resultados">${0} Resultados</p>
          <div class="mt-5">
            <img
              id ="caritaTriste"
              src="/assets/img/cara-triste-en-cuadrado-redondeado.png"
              alt="Carita triste por no encontrar productos disponibles"
            />
            <br>
            <h3 id ="leyenda">
            ${varCategoria} con Certificado se han agotado. Prueba Buscando en otro producto
            </h3>
          </div>`;
        }
      });
});


//Busqueda de productos exlusivos
btnExclusive.addEventListener("click", (e) => { //cuando se hace click en el boton, entonces ejecutamos esta funcion
  e.preventDefault(); //evitamos que el navegador se recargue
  cartaVacia();
  let contFiltro = document.querySelector(".bookContainer");//obtenemos el div de los elementos
  let tituloFiltro = document.querySelector(".tituloFiltro");//obtenemos el div del titulo del filtro
  let varCategoria = document.getElementById("varCategoria").value; //obtenemos el boton del HTML
  fetch("/productos.json") //realizamos la peticion a la ruta de nuestro JSON
  .then(response => { 
    return response.json(); //cuando la promesa es resuelta, asignamos la info a la variable response
  })
  .then(json =>{ 
    productos = JSON.stringify(json); //convertimos el objeto a una cadena de texto JSON, 
    productos = JSON.parse(productos); //analiza el JSON, y lo transforma en objeto que se almacena en productos
    var contador = 0; 
    for (let i = 0; i< productos.length; i++) { //recorre todo el arreglo de productos 
        if(productos[i].categoria.match(varCategoria) && productos[i].exclusivo.match("true")){ //si su categoria es libro y tiene certificado
          addItem(productos[i],contFiltro); //llamamos a la función addItem, pasandole la info del producto
            contador= contador+1;  //se incrementa el contador
            // tituloFiltro.innerHTML = `<p class="tituloDeBusqueda">"Libros con Certificado"</p>
            //                           <p class="resultados">${contador} Resultados</p>`;
          }
      }
      if(contador===0){//si no hubiera ningún producto, muestra el sieguiente mensaje:
        contFiltro.innerHTML = `<p class="tituloDeBusqueda">"${varCategoria} Exclusivos"</p>
          <p  class="resultados">${0} Resultados</p>
          <div class="mt-5">
            <img
              id ="caritaTriste"
              src="/assets/img/cara-triste-en-cuadrado-redondeado.png"
              alt="Carita triste por no encontrar productos disponibles"
            />
            <br>
            <h3 id ="leyenda">
            ${varCategoria} Exclusivos se han agotado. Prueba Buscando en otro producto
            </h3>
          </div>`;
        }
      });
});

//Busqueda de productos x precio
btnBusquedaxPrecio.addEventListener("click", (e) => { //cuando se hace click en el boton, entonces ejecutamos esta funcion
  e.preventDefault(); //evitamos que el navegador se recargue
  cartaVacia();
  let contFiltro = document.querySelector(".bookContainer");//obtenemos el div de los elementos
  let inputMin = document.getElementById("min").value; //obtenemos el valor del input
  let inputMax = document.getElementById("max").value; //obtenemos el valor del input
  let varCategoria = document.getElementById("varCategoria").value; //obtenemos el boton del HTML
  fetch("/productos.json") //realizamos la peticion a la ruta de nuestro JSON
  .then(response => { 
    return response.json(); //cuando la promesa es resuelta, asignamos la info a la variable response
  })
  .then(json =>{ 
    productos = JSON.stringify(json); //convertimos el objeto a una cadena de texto JSON, 
    productos = JSON.parse(productos); //analiza el JSON, y lo transforma en objeto que se almacena en productos
    var contador = 0; 
    for (let i = 0; i< productos.length; i++) { //recorre todo el arreglo de productos 
        if(productos[i].categoria.match(varCategoria) && (productos[i].precio >= inputMin && productos[i].precio <= inputMax)){ //si su categoria es libro y tiene certificado
          addItem(productos[i],contFiltro); //llamamos a la función addItem, pasandole la info del producto
            contador= contador+1;  //se incrementa el contador
          }
      }
      if(contador===0){//si no hubiera ningún producto, muestra el sieguiente mensaje:
          contFiltro.innerHTML = `<p class="tituloDeBusqueda">"${varCategoria}"</p>
          <p  class="resultados">${0} Resultados</p>
          <div class="mt-5">
            <img
              id ="caritaTriste"
              src="/assets/img/cara-triste-en-cuadrado-redondeado.png"
              alt="Carita triste por no encontrar productos disponibles"
            />
            <br>
            <h3 id ="leyenda">
            Su búsqueda de "${varCategoria}" no tuvo resultados. Prueba Buscando en otro producto
            </h3>
          </div>`;
        }
      });
});

//agrega las cards al contenedor
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
    <p class="cardPrecio">$<span id="precio">${item.precio} </span>MXN</p>
   </div>
  </div>`;
  clase.innerHTML += itemHTML;
}


//reemplaza el bookContainer por uno sin cards
function cartaVacia(){
  let contFiltro = document.querySelector(".bookContainer");
  const itemHTML = 
   `<div class=" row bookContainer">
 </div>`;
 contFiltro.outerHTML = itemHTML;
}