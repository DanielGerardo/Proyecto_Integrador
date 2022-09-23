let productoABuscar = localStorage.getItem("BuscarProducto");

const resultadoBusqueda = document.querySelector(".resultadoBusqueda");
function addItem(item){
    const itemHTML = 
    `
    <div class="card cardUltimo">
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
      <button id="${item.codigo}" class="btnUltimo"
        ><span class="Agregar">Agregar al carrito</span></button
      >
      <p class="cardPrecio">$<span id="precio">${item.precio}</span> MXN</p>
     </div>
    </div>
  `;
    const itemsContainer = document.querySelector(".productoBuscado");
    itemsContainer.innerHTML += itemHTML;
}

function buscarProducto(productoABuscar){
    fetch("/productos.json")
    .then(response => {
       return response.json();
    })
    .then(json =>{
       productos = JSON.stringify(json);
       productos = JSON.parse(productos);
       let pattern = productoABuscar;
       if(pattern===""){
        pattern=null;
       }
       var contador =0;
        for (let i = 0; i< productos.length; i++) {
            if(productos[i].name.match(pattern)||productos[i].categoria.match(pattern)&&pattern !== null){
                addItem(productos[i]);
                contador= contador+1;
                resultadoBusqueda.innerHTML = `<h2 class="tituloDeBusqueda mt-5">"${pattern}"</h2>
      <h5>${contador} Resultados</h5>`;
               
            }
        }
        if(contador===0){
            resultadoBusqueda.innerHTML = `<h2 class="tituloDeBusqueda mt-2">"${pattern}"</h2>
  <h4>${0} Resultados</h4>
  <div class="mt-5">
    <img
      src="/assets/img/cara-triste-en-cuadrado-redondeado.png"
      alt=""
      width="120px"
    />
    <h3>
      Su búsqueda de "${pattern}" no tuvo resultados. Prueba Buscando
      otro producto
    </h3>
  </div>`;
        }
    }); 
}

buscarProducto(productoABuscar);

