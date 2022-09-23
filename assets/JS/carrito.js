
const card  = document.querySelector(".bookContainer");
const URL_MAIN = "http://localhost:8080/api/producto/codigo/";

//Al div se le agrega evento click en el cual ejecuta la funcion addCarrito
card.addEventListener("click", (e) => {
  if (e.target.classList.contains("Agregar")) {
    addCarrito((e.target.parentElement).id);
    }
  });

// Se define variable carrito del local storage para poder utilizarla en diferentes pestañas y que no se vacie
// carrito={};
let carrito = JSON.parse(localStorage.getItem("carrito"));



// // Funcion add Carrito en el cual indica que al dar click en el boton de añadir carrito inicie otra funcion
// const addCarrito = (e) => {

//   if (e.target.classList.contains("Agregar")) {
//     // console.log(e.target.classList);
//     console.log(e.target.parentElement.parentElement.parentElement);
//     listaCarrito(e.target.parentElement.parentElement.parentElement);
   
//   }

//   e.stopPropagation();
// };

// // funcion para crear un objeto con el contenido de las cards
// const listaCarrito = (item) => {
//    console.log(item.querySelector("#precio").textContent);
// let contador = 0;
//   // Se definen el contenido con la card
//   const producto = {
//     title: item.querySelector("h5").textContent,
//     precio: item.querySelector("#precio").textContent,
//     id: item.querySelector("button").id,
//     cantidad: 1,
//     img: item.querySelector("img").src,
//   };

//   // Si el id es repetido se suma la variable cantidad
//   if (carrito.hasOwnProperty(producto.id)) {
//     producto.cantidad = carrito[producto.id].cantidad + 1;
//   }
//   // Se añade producto al objeto carrito
//   carrito[producto.id] = { ...producto };
//   // Limpiar carrito
//   // carrito= {};
//   // console.log(carrito);
//   localStorage.setItem("carrito", JSON.stringify(carrito));


//!ADDCARRITO()
// funcion añadir carrito
function addCarrito(codigo) {
  //variable carrito localstorage

  fetch(URL_MAIN + codigo, {
    //fetch getcodito de api
    method: "get",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      producto = JSON.stringify(json);
      producto = JSON.parse(producto); //se convierte en objeto
      // console.log(producto);

      // Se guarda el producto al que deimos click en añadir producto en una variable temporal
      let productotemp = {
        name: producto.name,
        precio: producto.precio,
        codigo: producto.codigo,
        cantidad: 1, //se agrega cantidad seleccionada en el input de detalle
        img: producto.img, //solo se agrega la primera imagen
        cantOriginal: producto.cantidad,
      };
    
      
//   Object.values(carrito).forEach((producto) => {
//     contador += parseInt(producto.cantidad);
//     // console.log(contador);
//     localStorage.setItem("cantCarrito", JSON.stringify(contador));
//   });
      if (Object.entries(carrito).length!=0) {
        var objetotemp;
        Object.values(carrito).forEach((objeto) => {
          //contamos los items del carrito
          if (objeto.codigo == productotemp.codigo) {
            objetotemp=objeto;
          }          
        });
        if(objetotemp!=null){
          agregar(objetotemp,productotemp);
          localStorage.setItem("carrito", JSON.stringify(carrito));
          let contador=0;
          Object.values(carrito).forEach(producto => {
            contador += producto.cantidad ;
          });
          localStorage.setItem("cantCarrito",contador);
  let cantcarrito = JSON.parse(localStorage.getItem('cantCarrito'));
  contCarrito.innerText = cantcarrito; 
        }else{
          agregar2(productotemp);
          localStorage.setItem("carrito", JSON.stringify(carrito));
          let contador=0;
          Object.values(carrito).forEach(producto => {
            contador += producto.cantidad ;
          });
          localStorage.setItem("cantCarrito",contador);
          let cantcarrito = JSON.parse(localStorage.getItem('cantCarrito'));
          contCarrito.innerText = cantcarrito; 
        }
      } else {
        console.log("vacio");
        carrito[productotemp.codigo]=productotemp;
        console.log(carrito);//añade producto carrito
        localStorage.setItem("carrito", JSON.stringify(carrito));//guarda local
        let cantcarrito = JSON.parse(localStorage.getItem('cantCarrito'));
        contCarrito.innerText = cantcarrito; 
      }
      // console.log(productotemp);
   
    

 

    });
}

function agregar(objeto,productotemp){
  console.log(objeto.codigo);
  if (objeto.codigo == productotemp.codigo) {
  //   existe=true;
      console.log("si hay");
       if ((objeto.cantidad + productotemp.cantidad) > producto.cantidad) {
      //verifica que no se agregan mas productos de los existentes en inventario
            alert("No se puede añadir mas de este producto");
       } else {
        objeto.cantidad = (Number(objeto.cantidad))+ (Number(productotemp.cantidad)); //se suma la cantidad si este no sobrepasa el existente
        console.log(objeto.cantidad);
        console.log(carrito);//añade producto carrito
        localStorage.setItem("carrito", JSON.stringify(carrito));//guarda local
        }
  }
}

function agregar2(productotemp){
        console.log("no hay");
        carrito[productotemp.codigo]=productotemp;
        console.log(carrito);//añade producto carrito
        localStorage.setItem("carrito", JSON.stringify(carrito));//guarda local
}


  
  // Object.values(carrito).forEach((producto) => {
  //   contador += producto.cantidad;
  //   // console.log(contador);
  //   localStorage.setItem("cantCarrito", JSON.stringify(contador));
  // });
  
  // // Se actualiza la variable del icono en el local storage
  // let cantcarrito = JSON.parse(localStorage.getItem('cantCarrito'));
  // contCarrito.innerText = cantcarrito; 
  


