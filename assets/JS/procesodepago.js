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

function Administrador(){
  window.location.href = "admin.html";
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const registroUsuario = document.getElementById('formEnvio');
const inputs = document.querySelectorAll('#registroUsuario input');

const expresiones = {
	nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    direccion: /^[a-zA-Z0-9_.+-]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    direccion2: /^[a-zA-Z0-9_.+-]{1,40}$/,
    municipio: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    cp: /^[0-9]+$/,
    telefono: /^[0-9]+$/,
    password: /^.{4,12}$/ // 4 a 12 digitos.
	
}

const campos = {
	nombres: false,
    direccion: false,
    direccion2: false,
    municipio:false,
    cp:false,
    telefono:false,
    password: false,	
}

const validarRegistroUsuario = (e) => {
    switch (e.target.name) {
        case "nombres":
            validarCampo(expresiones.nombres, e.target, 'nombres');
        break;

        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');
        break;
        case "direccion2":
            validarCampo(expresiones.direccion2, e.target, 'direccion2');
        break;

        case "municipio":
            validarCampo(expresiones.municipio, e.target, 'municipio');
        break;

        case "estado":
            validarCampo(expresiones.nombres, e.target, 'nombres');
			
        break;
        case "cp":
            validarCampo(expresiones.cp, e.target, 'cp');
			
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
			
        break;


        
    }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('registroUsuario__grupo_incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('registroUsuario__grupo_correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-exclamation');
		document.querySelector(`#grupo__${campo} .registroUsuario__input_error`) .classList.remove('registroUsuario__input_error_activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('registroUsuario__grupo_incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('registroUsuario__grupo_correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-exclamation');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .registroUsuario__input_error`).classList.add('registroUsuario__input_error_activo');
		campos[campo] = false;
	}
}



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



inputs.forEach((input) => {
    input.addEventListener('keyup', validarRegistroUsuario);
    input.addEventListener('blur', validarRegistroUsuario);
});

registroUsuario.addEventListener('submit', (e) => {
    e.preventDefault();
    abrirPestana('tituloPestana1','formadepago');
});


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
