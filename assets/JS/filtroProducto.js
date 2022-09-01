const btnCertificate = document.querySelector("#btnCertificate"); //obtenemos el boton del HTML
const resultadoBusqueda = document.querySelector(".resultadoBusqueda");//obtenemos el div del HTML

btnCertificate.addEventListener("click", (e) => { //cuando se hace click en el boton, entonces ejecutamos esta funcion
    e.preventDefault(); //evitamos que el navegador se recargue
    let filtroSeleccionado = "certificado"; //determinamos que clase se seleccionó
    buscarProducto(filtroSeleccionado); //llamamos a la funcion traerPokemon, pasandole el valor del input
}
);

function traerPokemon(pokemon){ //funcion que trae los pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) //realizamos la peticion a una URL
        .then(res => res.json()) //cuando la promesa es resuelta, asignamos la info a la variable res
        .then((data) => { //
            crearPokemon(data); //llamamos a la funcion crearPokemon, pasandole la informacion del pokemon
        });
}

function buscarProducto(filtroSeleccionado){
  fetch("/productos.json")
  .then(response => {
     return response.json();
  })
  .then(json =>{
     productos = JSON.stringify(json);
     productos = JSON.parse(productos);
     let filtroSeleccionado = "certificado";
     if(filtroSeleccionado===""){
      filtroSeleccionado=null;
     }

     switch(){

     }

     var contador = 0;
      for (let i = 0; i< productos.length; i++) {
          if(productos[i].name.match(pattern)||productos[i].categoria.match(pattern)&&pattern !== null){
              addItem(productos[i]);
              contador= contador+1;
              resultadoBusqueda.innerHTML = `<h2 class="tituloDeBusqueda">"${pattern}"</h2>
    <h4>${contador} Resultados</h4>`;
             
          }
      }
      if(contador===0){
          resultadoBusqueda.innerHTML = `<h2 class="tituloDeBusqueda">"Gatos Voladores"</h2>
<h4>${0} Resultados</h4>
<div class="mt-5">
  <img
    src="/assets/img/cara-triste-en-cuadrado-redondeado.png"
    alt=""
    width="120px"
  />
  <h3>
    Su búsqueda de "Gatos Voladores" no tuvo resultados. Prueba Buscando
    otro producto
  </h3>
</div>`;
      }
  });
 
}




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


buscarProducto();
