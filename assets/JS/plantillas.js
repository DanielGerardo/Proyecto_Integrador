// Aqui van a ir el JS de todas las platillas ejemplo: Footer y La barra de navegacion 
<<<<<<< HEAD


let navPrimario = document.querySelector('.navPrimario');
let navSecundario = document.querySelector('.navSecundario');
let footerPlantilla = document.querySelector('.footerPlantilla');

navPrimario.outerHTML = `<nav class="navbar navbar-expand-lg sticky-top navPrimario">
      <div class="container-fluid p-0">
        <a href="#">
=======
// variable de la primera barra de navegacion
let navPrimario = document.querySelector('.navPrimario');
// variable de la segunda barra de navegacion
let navSecundario = document.querySelector('.navSecundario');
// variable footer de la pagina
let footerPlantilla = document.querySelector('.footerPlantilla');

// Se agrega el HTML a la varibale navPrimera 
navPrimario.outerHTML = `<nav class="navbar navbar-expand-lg sticky-top navPrimario">
      <div class="container-fluid p-0">
     
        <a href="/popCollector.html">
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
          <img
            class="navbar-brand imgLogo"
            src="assets/img/Logo/logo-1.1.png"
            alt=""
        /></a>
        <div class="me-auto"></div>
        <ul class="navbar-nav justify-content-center navLinksCTG me-auto">
          <li class="nav-item">
            <a class="nav-link linksCategorias" href="libros.html">LIBROS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link linksCategorias" href="series.html">SERIES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link linksCategorias" href="peliculas.html">PELICULAS</a>
          </li>
          <li class="nav-item">
<<<<<<< HEAD
            <a class="nav-link linksCategorias" href="CD.html">CD'S</a>
=======
            <a class="nav-link linksCategorias" href="CD.html">CD´S</a>
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
          </li>
          <li class="nav-item">
            <a class="nav-link linksCategorias" href="vinilos.html">VINILOS</a>
          </li>
        </ul>
<<<<<<< HEAD

=======
        
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div class="me-auto"></div>
          <div class="me-auto"></div>
          <div class="me-auto linksCategoriasScroll">
<<<<<<< HEAD
=======
         
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
            <ul class="navbar-nav nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link linksCategorias" href="libros.html">LIBROS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link linksCategorias" href="series.html">SERIES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link linksCategorias" href="peliculas.html">PELICULAS</a>
              </li>
              <li class="nav-item">
<<<<<<< HEAD
                <a class="nav-link linksCategorias" href="CD.html">CD'S</a>
=======
                <a class="nav-link linksCategorias" href="CD.html">CD´S</a>
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
              </li>
              <li class="nav-item">
                <a class="nav-link linksCategorias" href="vinilos.html">VINILOS</a>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav me-0 mb-2 mb-lg-0">
            <li class="nav-item">
<<<<<<< HEAD
=======
           
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
              <form class="d-flex formBuscar" role="search">
                <input
                  class="form-control me-2 txtBuscar"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                  required
                />
                <button
                  class="btn border-0 btnBuscar"
                  id="btnBuscar"
                  type="submit"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </li>
<<<<<<< HEAD
=======
          
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
            <li class="nav-item py-1 col-12 col-lg-auto">
              <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
              <hr class="d-lg-none text-white-50" />
            </li>
            <li class="nav-item">
<<<<<<< HEAD
              <a class="nav-link" style="margin-right: 5px" href="#"
=======
              <a class="nav-link" style="margin-right: 5px" href="carrito.html"
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
                ><i class="fa-solid fa-cart-shopping"></i
                ><span
                  class="contCarrito"
                  data-selector="header-cart-count"
                  aria-hidden="true"
                ></span
              ></a>
            </li>
            <li class="navInicioSesion"></li>
          </ul>
        </div>
      </div>
    </nav>`;
<<<<<<< HEAD

=======
// Se agrega el HTML a la variable navSecundario
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
navSecundario.outerHTML = "<nav class='navbar navbar-expand navSecundario' style='height: 40px; background-color: #3ab4f2'><div class='container-fluid'><div class='collapse navbar-collapse'><div class='navbar-nav me-auto mb-lg-0'></div><ul class='navbar-nav nav justify-content-center'><li class='nav-item'><a class='nav-link linksCategorias' href='libros.html'>LIBROS</a></li><li class='nav-item'><a class='nav-link linksCategorias' href='series.html'>SERIES</a></li><li class='nav-item'><a class='nav-link linksCategorias' href='peliculas.html'>PELICULAS</a></li><li class='nav-item'><a class='nav-link linksCategorias' href='CD.html'>CD´S</a></li><li class='nav-item'><a class='nav-link linksCategorias' href='vinilos.html'>VINILOS</a></li></ul><div class='navbar-nav me-auto mb-lg-0'></div></div></div></nav>";

footerPlantilla.outerHTML = `<div class="container-fluid footerPlantilla">
<div class="row rowFooter">
  <div class="col">
    <h4>Sobre PopCollector</h4>
<<<<<<< HEAD
    <a href="#">¿Qué es PopCollector?</a>
    <a href="#">Certificado de autenticidad</a>
    <a href="#">Acerca de nosotros</a>
  </div>
  <div class="col">
    <h4>Soporte al cliente</h4>
    <a href="">Preguntas Frecuentes</a>
    <a href="">Ayuda</a>
=======
    <a href="sobrepop.html">¿Qué es PopCollector?</a>
    <a href="certificados.html">Certificado de autenticidad</a>
    <a href="sobrenosotros.html">Acerca de nosotros</a>
  </div>
  <div class="col">
    <h4>Soporte al cliente</h4>
    <a href="preguntasfrecuentes.html">Preguntas Frecuentes</a>
    <a href="contacto.html">Ayuda</a>
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
  </div>
  <div class="col">
    <h4>Contacto</h4>
    <p>
      <i class="fa-solid fa-phone"></i> 8123651692 <br />
      <i class="fa-brands fa-whatsapp"></i> 8123651692
      <a href="mailto:popcollector@gmail.com"
        ><i class="fa-solid fa-envelope"></i> popcollector@gmail.com</a
      >
      Av. Chávez Madrueño #123 Col. San Maritano CP. 49000 México
      <br /><b>Horario de atención:</b> Lunes a Sábado 9am - 5pm
    </p>
  </div>
  <div class="col">
    <h4 style="text-align: end">
      ¡Suscríbete a nuestras promociones y lanzamientos gratis!
    </h4>
    <form class="form-group" action="">
      <input
        class="form-control-md"
        id="txtCorreo"
        type="text"
        placeholder="correo@ejemplo.com"
        autocomplete="off"
        required
      />
      <div>
        <button class="form-control-sm btnEnviar" type="submit">
          <span>Enviar</span>
        </button>
      </div>
    </form>
  </div>
  <hr />
  <div class="row">
    <div class="col fotRedes">
      <a id="facebook" href=""><i class="fa-brands fa-facebook"></i></a>
      <a id="instagram" href=""><i class="fa-brands fa-instagram"></i></a>
      <a id="twitter" href=""><i class="fa-brands fa-twitter"></i></a>
      <a id="youtube" href=""><i class="fa-brands fa-youtube"></i></a>
    </div>
    <div class="col" style="text-align: center">
<<<<<<< HEAD
      <a href="#">Términos y condiciones / Aviso de privacidad</a>
    </div>
    <div class="col" style="text-align: end">
      <a href="#">E-Commerce desarrollada por...</a>
=======
      <a href="avisodeprivacidad.html">Términos y condiciones / Aviso de privacidad</a>
    </div>
    <div class="col" style="text-align: end">
      <a href="creadapor.html">E-Commerce desarrollada por...</a>
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
    </div>
  </div>
</div>
</div>`
/// Variables de la barra de navegacion 
let imgLogo = document.querySelector('.imgLogo');
let linksCategoriasScroll = document.querySelector('.linksCategoriasScroll');
let navLinksCTG = document.querySelector(".navLinksCTG");
let btnBuscar = document.getElementById("btnBuscar");
let txtBuscar = document.querySelector(".txtBuscar");
let navUsername = document.querySelector('.navUsername');
let navInicioSesion = document.querySelector('.navInicioSesion');
let contCarrito = document.querySelector('.contCarrito');
<<<<<<< HEAD
function inicioSesion(user){
    let dropstart = '';
    if(user == null || user == ""){
      //Visualiza solo el icono de inicio de sesion y Crear cuenta
     navInicioSesion.outerHTML = "<li class='nav-item dropdown navInicioSesion dropstart'><a class='nav-link' href='#' data-bs-toggle='dropdown' aria-expanded='false' id='navUsername'><i class='fa-regular fa-user'></i></a><ul class='dropdown-menu dropdown-menu-start dropdown-menu-lg-start'><li><a class='dropdown-item' href='#'><i class='fa-regular fa-user'></i> Inicio Sesión</a></li><li><a class='dropdown-item' href='#'><i class='fa-solid fa-clock-rotate-left'></i> Crear Cuenta</a></li>";
    }else {
        if(user.length <=11){
            dropstart='dropstart';
        }
        //Agrega el username al icono junto con mi cuenta, mis pedidos y cierre de sesion
        navInicioSesion.outerHTML = `<li class='nav-item dropdown navInicioSesion ${dropstart}'><a class='nav-link' href='#' data-bs-toggle='dropdown' aria-expanded='false' id='navUsername'><i class='fa-regular fa-user'></i> ${user}</a><ul class='dropdown-menu dropdown-menu-start dropdown-menu-lg-start'><li><a class="dropdown-item" href="#"><i class="fa-regular fa-user"></i> Mi Cuenta</a>
      </li><li><a class="dropdown-item" href="#"><i class="fa-solid fa-clock-rotate-left"></i> Mis Pedidos</a></li><li><a class="dropdown-item" href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Cerrar sesión</a></li>`
    }
=======



function inicioSesion(user){
  let dropstart = '';
  if(user == null || user == ""){
    //Visualiza solo el icono de inicio de sesion y Crear cuenta
    navInicioSesion.outerHTML = "<li class='nav-item dropdown navInicioSesion dropstart'><a class='nav-link' data-bs-toggle='dropdown' aria-expanded='false' id='navUsername'><i class='fa-regular fa-user'></i></a><ul class='dropdown-menu dropdown-menu-start dropdown-menu-lg-start'><li><a class='dropdown-item' href='iniciosesion.html'><i class='fa-regular fa-user'></i> Inicio Sesión</a></li><li><a class='dropdown-item' href='crearcuenta.html'><i class='fa-solid fa-clock-rotate-left'></i> Crear Cuenta</a></li>";
  }else {
    if(user.length <=11){
      dropstart='dropstart';
    }
    //Agrega el username al icono junto con mi cuenta, mis pedidos y cierre de sesion
    navInicioSesion.outerHTML = `<li class='nav-item dropdown navInicioSesion ${dropstart}'><a class='nav-link' data-bs-toggle='dropdown' aria-expanded='false' id='navUsername'><i class='fa-regular fa-user'></i> ${user}</a><ul class='dropdown-menu dropdown-menu-start dropdown-menu-lg-start'><li><a class="dropdown-item" href="micuenta.html"><i class="fa-regular fa-user"></i> Mi Cuenta</a>
    </li><li><a class="dropdown-item" href="historial.html"><i class="fa-solid fa-clock-rotate-left"></i> Mis Pedidos</a></li><li><a class="dropdown-item" id='cerrarSesion' href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Cerrar sesión</a></li>`
    let cerrarSesion =document.getElementById('cerrarSesion');
    cerrarSesion.addEventListener("click",()=>{    
      // localUser.username = localUser.username+"";
      // localStorage.setItem('perfil',JSON.stringify(localUser));
      // revisarUser(localUser);
    });
  }
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
}  
// Este es el objeto de User
let objUser = {
 username:"Daniel",
 carrito: 2
}
<<<<<<< HEAD
//Se agrega a la memoria local 
    localStorage.setItem("perfil",JSON.stringify(objUser));
//Agarra los datos del localstorage
    let localUser = JSON.parse(localStorage.getItem('perfil'));

   function revisarUser(){
  if(localUser.username!=null){
    //Agrega al icono del carrito la cantidad de pedidos
    contCarrito.innerText = localUser.carrito;  
    inicioSesion(localUser.username);
=======

//Agarra los datos del localstorage
    let localUser = JSON.parse(localStorage.getItem('perfil'));

// //Se agrega a la memoria local 
    localStorage.setItem("perfil",JSON.stringify(objUser));
    
        
   function revisarUser(User){
  if(User.username!=null){
    //Agrega al icono del carrito la cantidad de pedidos
    contCarrito.innerText = localUser.carrito;  
    inicioSesion(User.username);
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2

  }else{

     inicioSesion("");
     //Inicializa la cantidad de pedidos en 0 
     contCarrito.textContent = '0';
  }
}; 

<<<<<<< HEAD
revisarUser();
let estadoTxtBuscar = false;

=======
revisarUser(localUser);
let estadoTxtBuscar = false;

//Metodo de onClick
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
btnBuscar.addEventListener("click",(e)=>{
   e.preventDefault();
   estadoTxtBuscar = !estadoTxtBuscar;
   if(estadoTxtBuscar){
       txtBuscar.style.display  = "block";
<<<<<<< HEAD
    if(txtBuscar.value != ""){       
        estadoTxtBuscar = false;
=======
       txtBuscar.focus();
       estadoTxtBuscar = !estadoTxtBuscar;
    if(txtBuscar.value != ""){       
      localStorage.setItem("BuscarProducto",txtBuscar.value);
      window.open("/buscarProducto.html", "_self"); 
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
      }else{
    }
}else{
       txtBuscar.style.display  = "none";
   }
 });


<<<<<<< HEAD
=======



>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
//Function para agregar el logo a la barra de navegacion con parametros de donde esta ubicada la imagen a cambiar, el tamaño de la imagen y visualizar los links de las paginas
function transicionImg(imgen,ancho,display){
    imgLogo.src =  `/assets/img/Logo/${imgen}`;
    if(display==1){
        linksCategoriasScroll.style.display = "block";
    }else{
        linksCategoriasScroll.style.display = "none";
    }
    imgLogo.style.width = `${ancho}px`;
<<<<<<< HEAD
=======
   
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
}


function mostrarLinks(){
let scrollTop = document.documentElement.scrollTop;
  if(window.innerWidth <650){
    if(30 < scrollTop){
        transicionImg("logo-3.1.png",50,1);
        navLinksCTG.style.display = "none";
    }else{
        transicionImg("logo-1.1.png",110,0);
        navLinksCTG.style.display = "none";
    }
  }else if(30 < scrollTop){
    transicionImg("logo-3.1.png",50,1);
    }else{
    transicionImg("logo-1.1.png",150,0);
<<<<<<< HEAD
    }  
=======
    }
>>>>>>> f80ef620e7db25242b7c742c589e44ae0802e2b2
}

window.addEventListener('scroll',mostrarLinks);

