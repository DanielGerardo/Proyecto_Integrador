// Boton Comprar
function btncomprarPaso1() {
  window.location.href = "procesoDePago.html";
}

// Boton Regresar
function btnInicio() {
  window.location.href = "popCollector.html";
}
// Boton Volver al carrito
function btnVolveralCarrito() {
  window.location.href = "carrito.html";
}


// Btn formadepago B5


function abrirPestana(evt,nombrePestana) {
  var i, tabcontent, tablinks;//declaracion variables
  tabcontent = document.getElementsByClassName("tabcontent"); //elemento con clase tab content
  //ciclo para ocultar div con esa clase
  for (i = 0; i < tabcontent.length; i++) {//longitud de elementos con esa clase
    tabcontent[i].style.display = "none";
  }
  // array de los titulos de los contenidos
  tablinks = document.getElementsByClassName("tablinks");
  //ciclo para agregar clase de activar y deshabilitar disabled 
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].disabled = true;
    
  }
  // Activar y aparecer clase de la pestaña que se selecciona
 document.getElementById(nombrePestana).style.display = "block";
 document.getElementById(evt).disabled =false;
  document.getElementById(evt).className +=" active";
  
}
// Pestaña por defecto
document.getElementById("tituloPestana2").click();


// !Validacion para formularios
// Validacion numeros en input
function numeroKey(evt) //evt la tecla presionada
{
  //declarar vaiable extraer el codigo de caracter para su validacion
  var charCode =  evt.which|| evt.keyCode; //
  //condicion si cumple es que son letras
  if (charCode != 46 && (charCode < 48 || charCode > 57))
  return false;//si cumple envia false para prohibir que se escriban en el input
  return true;//si no cumple envia true para permitir que se escriba en el input
}  

// Validacion letras en input
function letraKey(evt)
{
  var charCode = evt.which || evt.keyCode;
  if (charCode != 46 && (charCode < 48 || charCode > 57))
  return true;
  return false;
} 


// function submit(){

//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName("needs-validation");
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function (form) {

//             function (event) {
//               if (form.checkValidity() === false) {
//                 event.preventDefault();
//                 event.stopPropagation();
//               }
//               else{
//                 // alert("HOla");
//                 abrirPestaña('tituloPestana1','formadepago');
//               }
//               form.classList.add("was-validated");
//             }  

// Validacion formulario de Envio
 // (function () {
  //   "use strict";
  //   window.addEventListener(
  //     "load",
  //     function () {
  //       // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //       var forms = document.getElementsByClassName("needs-validation");
  //       // Loop over them and prevent submission
  //       var validation = Array.prototype.filter.call(forms, function (form) {
  //         form.addEventListener(
  //           "submit",
  //           function (event) {
  //             if (form.checkValidity() === false) {
  //               event.preventDefault();
  //               event.stopPropagation();
  //             }
  //             else{
  //               // alert("HOla");
  //               abrirPestaña('tituloPestana1','formadepago');
  //             }
  //             form.classList.add("was-validated");
  //           },
  //           false
  //         );
  //       });
  //     },
  //     false
  //   );
  // })();

// Animacion en tabs proceso de pago
