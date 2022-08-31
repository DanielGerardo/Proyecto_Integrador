// Boton Comprar
function btncomprarPaso1() {
  window.location.href = "procesoDePago.html";
  
}

// Boton Regresar
function btnRegresar() {
  window.location.href = "";
}
// Boton Volver al carrito
function btnVolveralCarrito() {
  window.location.href = "carritoDeCompras.html";
}


// Btn formadepago B5


function abrirPestana(evt,nombrePestana) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].disabled = true;
    
  }
 document.getElementById(nombrePestana).style.display = "block";
 document.getElementById(evt).disabled =false;
  document.getElementById(evt).className +=" active";
  
}
document.getElementById("tituloPestana2").click();



// Validacion numeros en input
function isNumberKey(evt)
{
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 
  && (charCode < 48 || charCode > 57))
  return false;
  return true;
}  

// Validacion letras en input
function isNumericKey(evt)
{
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 
  && (charCode < 48 || charCode > 57))
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
