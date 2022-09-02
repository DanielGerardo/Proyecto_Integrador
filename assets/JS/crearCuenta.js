
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

const validarRegistroUsuario = (e) => {
    switch (e.target.name) { 
        case "nombres": //En caso de que el nombre sea "" quiero ejecutar:
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
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} .registroUsuario__input_error`) .classList.remove('registroUsuario__input_error_activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('registroUsuario__grupo_incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('registroUsuario__grupo_correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
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
		document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .registroUsuario__input_error`).classList.add('registroUsuario__input_error_activo');
		campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('registroUsuario__grupo_incorrecto');
		document.getElementById(`grupo__password2`).classList.add('registroUsuario__grupo_correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .registroUsuario__input_error`) .classList.remove('registroUsuario__input_error_activo');
		campos['password'] = true;
    }
}

//Por cada input se ejecute un código
inputs.forEach((input) => {
    input.addEventListener('keyup', validarRegistroUsuario); //Por cada input wuiero agregar un Event Listener. Si el usuario presiona una tecla, cada que la levante se ejecuta el código
    input.addEventListener('blur', validarRegistroUsuario); //Cuando den clic fuera se ejecuta
});

//ingresar a formulario regustroUsuario y lanzar un event listener
//Cuando se pica al botón Crear cuenta, se ejecuta la función
registroUsuario.addEventListener('submit', (e) => {
    e.preventDefault(); //Para que no se envíe sin todos los datos completados

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