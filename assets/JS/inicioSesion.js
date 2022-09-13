const iniciarSesion = document.getElementById('iniciarSesion');
const inputs = document.querySelectorAll('#iniciarSesion input');

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

const validariniciarSesion = (e) => {
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
		document.getElementById(`grupo__${campo}`).classList.remove('iniciarSesion__grupo_incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('iniciarSesion__grupo_correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} .iniciarSesion__input_error`) .classList.remove('iniciarSesion__input_error_activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('iniciarSesion__grupo_incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('iniciarSesion__grupo_correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .iniciarSesion__input_error`).classList.add('iniciarSesion__input_error_activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');
    
    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo__password2`).classList.add('iniciarSesion__grupo_incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('iniciarSesion__grupo_correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .iniciarSesion__input_error`).classList.add('iniciarSesion__input_error_activo');
		campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('iniciarSesion__grupo_incorrecto');
		document.getElementById(`grupo__password2`).classList.add('iniciarSesion__grupo_correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .iniciarSesion__input_error`) .classList.remove('iniciarSesion__input_error_activo');
		campos['password'] = true;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validariniciarSesion);
    input.addEventListener('blur', validariniciarSesion);
});

iniciarSesion.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombres && campos.apellidos && campos.email && campos.password){
		iniciarSesion.reset();

        document.getElementById('iniciarSesion__mensaje_exito').classList.add('iniciarSesion__mensaje_exito_activo');
        setTimeout(() =>{
            document.getElementById('iniciarSesion__mensaje_exito').classList.remove('iniciarSesion__mensaje_exito_activo');
        }, 5000);

        document.querySelectorAll('.iniciarSesion__grupo_correcto').forEach((icono) => {
            icono.classList.remove('iniciarSesion__grupo_correcto');
        }); 
         }else {
            document.getElementById('iniciarSesion__mensaje').classList.add('iniciarSesion__mensaje_activo');
        }
});


