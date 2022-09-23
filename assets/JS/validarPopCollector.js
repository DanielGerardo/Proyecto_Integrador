//Variable del contenedor inserción de las imágenes del carousel
const itemsContainer = document.querySelector(".carouselInnerUltimo");
//Variable de contenedor de botones de el cambio de imágenes en el carousel
const carouselBtnUltimo = document.querySelector(".carouselBtnUltimo");
const urlProducto = "http://localhost:8080/producto/"
//Variables sin inicializar para agregar el HTML de las Cards y de los botones
var itemHTML;
var carouselUltimoHTML;
//Función para agregar las cartas al html
function addItem(item){
 
    itemHTML += `<div class="card cardUltimo">
    <img
      src="${item.img}"
      class="card-img-top"
      alt="${item.name}"
    />
    <div class="card-body text-center">
      <p class="card-text">
        ${item.name}
      </p>
      <button id="${item.codigo}" class="btnUltimo"
        ><span>Agregar al carrito</span></button
      >
      <p class="cardPrecio">$${item.precio} MXN</p>
    </div>
    </div>`;
}


function buscarProducto(){
  //Agarra los datos de los productos del json
  fetch(urlProducto+"getAll",{
    method : "get"
  })
  .then(response => {
     return response.json();
  })
  .then(json =>{
    //Convierte los datos de los productos en texto
    productos = JSON.stringify(json);
    //Convierte los datos de los productos en Objeto
    productos = JSON.parse(productos);
    //Contador de cartas
   let contador = productos.length;
   console.log(contador);
   // Contador de botones del carousel
   let contarBtnCarousel = 0;
   //for que recorre todos los productos
      for (let i = 0; i < 15; i++){
        //Validacion para agarrar los primeros 3 productos
           if(i < 3){         
             if(i===0){
               //si es el primer producto crear el primer boton del carousel activo       
              carouselUltimoHTML = `<button
              type="button"
              data-bs-target="#carouselControlUltimo"
              data-bs-slide-to="${contarBtnCarousel}"
              class="active"
              aria-current="true"
              aria-label="Slide ${contarBtnCarousel += 1}"
              ></button>`
              // si es el primer producto crea el primer carousel de imágenes y lo deja activo
              contador -= 1;  
              carouselBtnUltimo.innerHTML += carouselUltimoHTML;             
               itemHTML = `<div class="carousel-item active">
              <div class="cards-wrapper cardWrapperUltimo">
              <div class="card cardUltimo">
              <img
                src="${productos[contador].img}"
                class="card-img-top"
                alt="${productos[contador].name}"
              />
              <div class="card-body text-center">
                <p class="card-text">
                  ${productos[contador].name}
                </p>
                <button id="${productos[contador].codigo}" class="btnUltimo"
                  ><span>Agregar al carrito</span></button
                >
                <p class="cardPrecio">$<span id="precio">${productos[contador].precio} </span> MXN</p>
                </div>
                </div>`
                  //se le suma un uno por que ya agrego la primera carta de producto
                            
                }else{
              //Si ya es el segundo producto hace un for para recorrer dos veces los productos agregarlos al carousel y le agrega uno mas al contador cada que recorre el for
              for (let j = 0; j < 1 ; j++) {
                contador -= 1;
                addItem(productos[contador]);
               }
               //Si el contador de cartas es igual a 3 cierra los carruseles
              if(((3+contador)%3)==0){
                itemHTML += `</div></div>`
                itemsContainer.innerHTML += itemHTML;
              }
             }                 
           }else{
            //Al llegar a tres cartas se le va sumando el contador de cartas y después revisa si es divisible entre tres para asi solo agregar cada tres veces un boton y un carousel
            if(((3+contador)%3)==0){
              carouselUltimoHTML = `
            <button
              type="button"
              data-bs-target="#carouselControlUltimo"
              data-bs-slide-to="${contarBtnCarousel}"
              aria-label="Slide ${contarBtnCarousel += 1}"
            ></button>`
            carouselBtnUltimo.innerHTML += carouselUltimoHTML;
            itemHTML = `<div class="carousel-item">
            <div class="cards-wrapper cardWrapperUltimo">
              <div class="card cardUltimo">
              <img
                src="${productos[contador].img}"
                class="card-img-top"
                alt="${productos[contador].name}"
                />
                <div class="card-body text-center">
                <p class="card-text">
                ${productos[contador].name}
                </p>
                <button id="${productos[contador].codigo}" class="btnUltimo"
                  ><span>Agregar al carrito</span></button
                >
                <p class="cardPrecio">$<span id="precio">${productos[contador].precio} </span> MXN</p>
                </div>
                </div>`
                contador -= 1;
                }
            else{
              for (let j = 0; j <1 ; j++) {
                contador -= 1;
                addItem(productos[contador]);
              }
              console.log(contador);
              if(((3+contador)%3)==0){itemHTML += `</div>
              </div>`
              itemsContainer.innerHTML += itemHTML;}
            }               
           }
          }
      }
   ); 
}

buscarProducto();

//Fondo de carga--------------
const carga = document.querySelector('.carga');
const App = document.querySelector('.App');
const body = document.querySelector('body');
setTimeout(() =>{
  body.style.overflowY = 'visible'
  
},3000)

setTimeout(() =>{
  carga.style.display = 'none'
  App.style.opacity = 1;
},3000)
