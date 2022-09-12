const contenedor = document.getElementById("divDetalle");
const vinculos = document.getElementById("vinculos");
let linkCat="";

function cambiarImg(imgSmall) {
  var fullImg = document.getElementById("img-box");
  fullImg.src = imgSmall.src;
}

function categorias(){
console.log(this.id);
//  linkCat=cat.toLowerCase();

 
//   switch (linkCat ) {
//     case "libro":
//       window.location.href = "libros.html";
//       break;
//   case "cd":
//        window.location.href = "CD.html";
//        break;

//    case "peliculas":
//     window.location.href = "peliculas.html";
//     break;
//     case "series":
//    window.location.href = "series.html";
//    break;
//    case "vinilos":
//        window.location.href = "vinilos.html";
//        break;
// }
}

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
          let item=productos[i];
          if(item.categoria!=="CD"){ linkCat = (item.categoria).toLowerCase();}
          else{linkCat = (item.categoria)};
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
                <img 
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
              <h4 class="pb-2">$${item.precio}</h4>

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
        </div>`
          // console.log(detalleItem);
          contenedor.innerHTML=detalleItem;
          vinculos.innerHTML= vinculosItem;
         
        }

      }
    
          // const detalleItem = `Hola`

        
        //  console.log(contenedor);
        // contenedor.innerHTMl+= detalleItem;
    
    });
}

detalle(1250);
