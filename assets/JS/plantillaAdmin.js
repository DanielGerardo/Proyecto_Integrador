// Aqui van a ir el JS de todas las platillas ejemplo: Footer y La barra de navegacion 
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
          <img
            class="navbar-brand imgLogo"
            src="assets/img/Logo/logo-1.1.png"
            alt=""
        /></a>
        <div class="me-auto"></div>
        <ul class="navbar-nav justify-content-center navLinksCTG me-auto">
          <li class="nav-item">
            <a class="nav-link linksCategorias" href="admin.html">PRODUCTOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link linksCategorias" href="RVENTAS.html">VENTAS</a>
          </li>S
        </ul>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div class="me-auto"></div>
          <div class="me-auto"></div>
          <div class="me-auto linksCategoriasScroll">
         
            <ul class="navbar-nav nav justify-content-center">
            <li class="nav-item">
            <a class="nav-link linksCategorias" href="admin.html">PRODUCTOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link linksCategorias" href="ventas.html">VENTAS</a>
          </li>
            </ul>
          </div>
          <ul class="navbar-nav me-0 mb-2 mb-lg-0">
            <li class="nav-item">
           
           
            </li>
          
       
            <li class="navInicioSesion"></li>
          </ul>
        </div>
      </div>
    </nav>`;
// Se agrega el HTML a la variable navSecundario
navSecundario.outerHTML = "<nav class='navbar navbar-expand navSecundario' style='height: 40px; background-color: #3ab4f2'><div class='container-fluid'><div class='collapse navbar-collapse'><div class='navbar-nav me-auto mb-lg-0'></div><ul class='navbar-nav nav justify-content-center'><li class='nav-item'><a class='nav-link linksCategorias ' href='admin.html'>PRODUCTOS</a></li><li class='nav-item'><a class='nav-link linksCategorias' href='ventas.html'>VENTAS</a></li></ul><div class='navbar-nav me-auto mb-lg-0'></div></div></div></nav>";

footerPlantilla.outerHTML = `<div class="container-fluid footerPlantilla">
<div class="row rowFooter">
    <div class="col" style="text-align: end">
      <a href="creadapor.html">E-Commerce desarrollada por...</a>
  </div>
</div>
</div>`
/// Variables de la barra de navegacion 
let imgLogo = document.querySelector('.imgLogo');
let linksCategoriasScroll = document.querySelector('.linksCategoriasScroll');
let navLinksCTG = document.querySelector(".navLinksCTG");

let navUsername = document.querySelector('.navUsername');
let navInicioSesion = document.querySelector('.navInicioSesion');




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
    navInicioSesion.outerHTML = `<li class='nav-item dropdown navInicioSesion ${dropstart}'><a class='nav-link' data-bs-toggle='dropdown' aria-expanded='false' id='navUsername'><i class='fa-regular fa-user'></i> ${user}</a><ul class='dropdown-menu dropdown-menu-start dropdown-menu-lg-start'><li><a class="dropdown-item" id='cerrarSesion' href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Cerrar sesión</a></li>`
    let cerrarSesion =document.getElementById('cerrarSesion');
    cerrarSesion.addEventListener("click",()=>{    
      // localUser.username = localUser.username+"";
      // localStorage.setItem('perfil',JSON.stringify(localUser));
      // revisarUser(localUser);
    });
  }
}  
// Este es el objeto de User
let objUser = {
 username:"Administrador",

}

//Agarra los datos del localstorage
    let localUser = JSON.parse(localStorage.getItem('perfil'));

// //Se agrega a la memoria local 
    localStorage.setItem("perfil",JSON.stringify(objUser));
    
        
   function revisarUser(User){
  if(User.username!=null){
    //Agrega al icono del carrito la cantidad de pedidos
    
    inicioSesion(User.username);

  }else{

     inicioSesion("");
     //Inicializa la cantidad de pedidos en 0 
    
  }
}; 

revisarUser(localUser);

//Metodo de onClick






//Function para agregar el logo a la barra de navegacion con parametros de donde esta ubicada la imagen a cambiar, el tamaño de la imagen y visualizar los links de las paginas
function transicionImg(imgen,ancho,display){
    imgLogo.src =  `/assets/img/Logo/${imgen}`;
    if(display==1){
        linksCategoriasScroll.style.display = "block";
    }else{
        linksCategoriasScroll.style.display = "none";
    }
    imgLogo.style.width = `${ancho}px`;
   
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
    }
}

window.addEventListener('scroll',mostrarLinks);

