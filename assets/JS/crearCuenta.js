const registroUsuario = document.getElementById('registroUsuario');
const inputs = document.querySelectorAll('#registroUsuario input');

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

const validarRegistroUsuario = (e) => {
    switch (e.target.name) {
        case "nombres":
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

    if(campos.nombres && campos.apellidos && campos.email && campos.password){
		registroUsuario.reset();

        document.getElementById('registroUsuario__mensaje_exito').classList.add('registroUsuario__mensaje_exito_activo');
        setTimeout(() =>{
            document.getElementById('registroUsuario__mensaje_exito').classList.remove('registroUsuario__mensaje_exito_activo');
        }, 5000);

        document.querySelectorAll('.registroUsuario__grupo_correcto').forEach((icono) => {
            icono.classList.remove('registroUsuario__grupo_correcto');
        }); 
         }else {
            document.getElementById('registroUsuario__mensaje').classList.add('registroUsuario__mensaje_activo');
        }
});

