
const registroUsuario = document.getElementById('registroUsuario');
//Para almacenar los inputs del formulario registroUsuario
const inputs = document.querySelectorAll('#registroUsuario input');

//Expresiones regulares para validar contenidos
const expresiones = {
	nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombres: false,
    apellidos: false,
	email: false,
    password: false,	
}
var registro;

const validarRegistroUsuario = (e) => {
    switch (e.target.name) { 
        case "nombres": //En caso de que el nombre sea "xxxxxxx" quiero ejecutar:
        validarCampo(expresiones.nombres, e.target, 'nombres');
        break;

        case "apellidos":
            validarCampo(expresiones.apellidos, e.target, 'apellidos');
        break;

        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;

        case "password":
            validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
        break;

        case "password2":
            validarPassword2();
        break;

    }
}

//Para validar los inputs y que se añadan los iconos y los mensajes
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

//Para validar que la segunda contraseña coincida con la primera
const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');
    
    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo__password2`).classList.add('registroUsuario__grupo_incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('registroUsuario__grupo_correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-exclamation');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .registroUsuario__input_error`).classList.add('registroUsuario__input_error_activo');
		campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('registroUsuario__grupo_incorrecto');
		document.getElementById(`grupo__password2`).classList.add('registroUsuario__grupo_correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-exclamation');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .registroUsuario__input_error`) .classList.remove('registroUsuario__input_error_activo');
		campos['password'] = true;
    }
}

// !Validacion para formularios
// Validacion numeros en input
//Estas funciones tienen que ser llamadas en los elementos de las etiquetas input del html
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

//Por cada input ejecuta un código
inputs.forEach((input) => {
    input.addEventListener('keyup', validarRegistroUsuario); //Por cada input quiero agregar un Event Listener. Si el usuario presiona una tecla, cada que la levante se ejecuta el código
    input.addEventListener('blur', validarRegistroUsuario); //Cuando den clic fuera de la caja de texto se ejecuta
});

//ingresar a formulario regustroUsuario y lanzar un event listener
//Cuando se pica al botón Crear cuenta, se ejecuta la función
registroUsuario.addEventListener('submit', (e) => {
    e.preventDefault(); //Para que no se envíe sin todos los datos completados

    if(campos.nombres && campos.apellidos && campos.email && campos.password){
		

        document.getElementById('registroUsuario__mensaje_exito').classList.add('registroUsuario__mensaje_exito_activo');
        setTimeout(() =>{
            document.getElementById('registroUsuario__mensaje_exito').classList.remove('registroUsuario__mensaje_exito_activo');
        }, 5000);

        document.querySelectorAll('.registroUsuario__grupo_correcto').forEach((icono) => {
            icono.classList.remove('registroUsuario__grupo_correcto');
        });
        
        agregarDatos();
        refrescarCampos();
         }else {
            document.getElementById('registroUsuario__mensaje').classList.add('registroUsuario__mensaje_activo');
        }
});

//Funcion para agregar los datos al localStorage
function agregarDatos(){
//Objeto del formulario
var nombres = document.getElementById("nombresinput").value;    
var apellidos = document.getElementById("apellidosinput").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
//Este objeto mas adelante se usara para agregarlo a la base de datos 
 registro = {
    nombres,
    apellidos,
    email,
    password
}
//Se agregar un objNuevo que este es el que se va agregar al localStorage
var objPerfilUser = {
    nombres,
    email,
    carrito : 0, 
    sesion : false
}
// //Se agrega a la memoria local 
localStorage.setItem("perfil",JSON.stringify(objPerfilUser));
}
//Refresca los campos para volver a verificar los campos
function refrescarCampos(){
    registroUsuario.reset();
    campos.nombres = false;
    campos.apellidos = false;
    campos.email = false;
    campos.password = false;
}
