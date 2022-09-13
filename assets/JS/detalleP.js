
codigo = localStorage.getItem("codigo");
// import* as codigo from './abritDetalle';
const contenedor = document.getElementById("divDetalle");
const vinculos = document.getElementById("vinculos");

// Cambiar imagen div
function cambiarImg(imgSmall) {
  var fullImg = document.getElementById("img-box");
  fullImg.src = imgSmall.src;
}

// Llenar plantilla detalle  con el codigo localizado en localstorage
function detalle(codigo) {
  fetch("/productos.json")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      productos = JSON.stringify(json);
      productos = JSON.parse(productos);
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].codigo == codigo) {
          let item = productos[i];
          if (item.categoria !== "CD") {
            linkCat = item.categoria.toLowerCase();
          } else {
            linkCat = item.categoria;
          }
          console.log(linkCat);
          const vinculosItem = `    <div class="col">
          <a href="popCollector.html">Menú Principal</a> >
          <a href="${linkCat}.html" id="${item.categoria}" ">${item.categoria}</a> > 
          <a href="" onclick="window.location.reload()">${item.name}</a>
        </div>`;
          const detalleItem = `        <div class="row ">
          <!-- Imagenes -->
          <div class="col-lg-6 col-md-6  ">
            <div class="row ">
              <!-- Imagen Grande -->
              <div class="col imgBig pt-3">
                <img id="img-box" 
                  src="${item.img}"
                  alt="Imagenes"
                />
              </div>
            </div>
            <div class="row pb-3 imgSmall">
              <!-- img1 -->
              <div class="col ">
                <img  id="img1"
                  src="https://libreriasdeocasion.com.mx/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/1/7/17050-fi.av-01.jpg"
                  alt="Small"
                  onclick="cambiarImg(this)"
                />
              </div>
              <!-- img2 -->
              <div class="col">
                <img
                  src="http://libreriasdeocasion.com.mx/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/1/7/17050-fi.av-02.jpg"
                  alt="Small"
                  onclick="cambiarImg(this)"
                />
              </div>
              <!-- img3 -->
              <div class="col ">
                <img
                  src="http://libreriasdeocasion.com.mx/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/1/7/17050-fi.av-03.jpg"
                  alt="Small"
                  onclick="cambiarImg(this)"
                />
              </div>
            </div>
          </div>
          <!--  -->
          <!-- infoGeneral -->
          <div class="col-lg-6 col-md-6 pt-3 mt-3 mb-3  border">
            <div class="row align-middle">
              <h4 class="fP">${item.name}</h4>
              <p class="codigo">Código de Producto: <span>${item.codigo}</span></p>
              <h4  class="pb-2">$ <span id="precio">${item.precio}</span></h4>

              <h6 class="pb-2">
                Certificado <i class="fa-solid fa-check-double"></i>
              </h6>

              <p class="pb-2 cantidad">
                <label for="cantidad"> Cantidad: </label>
                <input type="number" value="1" min="1" max="${item.cantidad}" />
                <span class="codigo"> ( <span>${item.cantidad}</span> en existencia )</span>
              </p>
            </div>
            <!-- Boton agregar carrito -->
            <div class="row p-3 posicionCenter">
              <div class="col">
                <button id="${item.codigo}" class="btn btnAdelante onclick="addCarrito(e)">
                  <span class ="Agregar" >Agregar al carrito</span>
                </button>
              </div>
            </div>
            <!-- Descripcion del producto -->
            <div class="row fM">
                <div class="col p-3 border-top">
                    <p class="fM bold">Descripción del producto.</p>
                    <p class="fM descripcion">${item.description}</p>
                </div>
              </div>

            <!--  -->
          </div>
        </div>`;
          // console.log(detalleItem);
          // agregar div dentro del cuerpo html
          contenedor.innerHTML = detalleItem;
          vinculos.innerHTML = vinculosItem;
        }
      }
    });
}

detalle(codigo);

// ! AGREGAR AL CARRITO
//Variable que contiene el div con clase divDetalle en el cual se ingresan las card de los productos
let cardDetalle = document.querySelector("#divDetalle");
let cardContainer = document.querySelector(".bookContainer");

//Al div se le agrega evento click en el cual ejecuta la funcion addCarrito
cardDetalle.addEventListener("click", (e) => {
  addCarrito(e);
});
cardContainer.addEventListener("click", (e) => {
  addCarrito2(e);
});

// Se define variable carrito del local storage para poder utilizarla en diferentes pestañas y que no se vacie
// carrito={};
let carrito = JSON.parse(localStorage.getItem("carrito"));

// Funcion add Carrito en el cual indica que al dar click en el boton de añadir carrito inicie otra funcion
const addCarrito = (e) => {
  if (e.target.classList.contains("Agregar")) {
    // console.log(e.target.classList);
    parent =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    listaCarrito(parent);
    // console.log(parent);
  }

  e.stopPropagation();
};
const addCarrito2 = (e) => {

  if (e.target.classList.contains("Agregar")) {
    // console.log(e.target.classList);
    // console.log(e.target.parentElement);
    listaCarrito2(e.target.parentElement.parentElement.parentElement);
   
  }

  e.stopPropagation();
};

// // funcion para crear un objeto con el contenido de las cards
const listaCarrito = (item) => {
  // console.log(item.querySelector("input").value);
  let contador = 0;
  //   // Se definen el contenido con la card
  const producto = {
    title: item.querySelector("h4").textContent,
    precio: item.querySelector("#precio").textContent,
    id: item.querySelector("button").id,
    cantidad: item.querySelector("input").value,
    img: item.querySelector("#img1").src,
  };

  //   // Si el id es repetido se suma la variable cantidad
  if (carrito.hasOwnProperty(producto.id)) {
    cant = parseInt(producto.cantidad);
    producto.cantidad = parseInt(carrito[producto.id].cantidad) + cant;
    // console.log(producto.cantidad);
  }
  //   // Se añade producto al objeto carrito
  carrito[producto.id] = { ...producto };
  //   // Limpiar carrito
  //   // carrito= {};
  console.log(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  Object.values(carrito).forEach((producto) => {
    contador += parseInt(producto.cantidad);
    // console.log(contador);
    localStorage.setItem("cantCarrito", JSON.stringify(contador));
  });

  // Se actualiza la variable del icono en el local storage
  let cantcarrito = JSON.parse(localStorage.getItem("cantCarrito"));
  contCarrito.innerText = cantcarrito;
};

const listaCarrito2 = (item) => {
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



// * Articulos similares
function addItem(item){
    const itemHTML = 
    `<div id="${item.codigo}" class="  card cardLibros">
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
      <p class="cardPrecio">$<span id="precio">${item.precio}</span>MXN</p>
     </div>
    </div>`;
    const itemsContainer = document.querySelector(".bookContainer");
    itemsContainer.innerHTML += itemHTML;
}

function addLibro(){
    var contador=0;
    fetch("/productos.json")
    .then(response => {
       return response.json();
    })
    .then(json =>{
       productos = JSON.stringify(json);
       productos = JSON.parse(productos);
       for (let i = 0; i < productos.length; i++) {
        if (productos[i].codigo == codigo) {
          var item = productos[i];
          var libro = item.categoria;
        }
      }
    for (let i = 0; i< productos.length&&contador!=3; i++) {
            if(productos[i].categoria.match(libro) && productos[i] !== item){
                addItem(productos[i]);
                contador= contador + 1;         
            }
        }
            });
   
        }
addLibro();


