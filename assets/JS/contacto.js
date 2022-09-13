// Boton Enviar
function Enviar() {
    window.location.href = "popCollector.html";
  }

const formCon = document.getElementById("contacto")             //Acceder al formulario
const inputsCon = document.querySelectorAll("#contacto input")  //Acceder a todos id de input

const validaciones = {
    nombre:     /^[a-zA-ZÀ-ÿ\s]{1,40}$/,    // Letras y espacios, pueden llevar acentos.
    apellido:   /^[a-zA-ZÀ-ÿ\s]{1,40}$/,  // Letras y espacios, pueden llevar acentos.
	correo:     /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	cel:        /^\d{7,14}$/,             // 7 a 14 numeros.
    mnsj:       /^[a-zA-ZÀ-ÿ\s]{10,120}$/,    //Letras, espacios, pueden llevar acentos, números y simbolos, de 1 a 120 caracteres. 
}   

const campos = {
    nombre:     false,
    apellido:   false,
    correo:     false,
    cel:        false,
    mnsj:       false
}

const validar = (e) => {
    switch(e.target.name){
        case "nombreCon":   validarCampo (validaciones.nombre, e.target, 'nombre');     break;
        case "apellidoCon": validarCampo (validaciones.apellido, e.target, 'apellido'); break;
        case "correoCon":   validarCampo (validaciones.correo, e.target, 'correo');     break;
        case "celCon":      validarCampo (validaciones.cel, e.target, 'cel');           break;
        case "mensajeCon":  validarCampo (validaciones.mnsj, e.target, 'mnsj');      break;
    }
}


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('contactoGrupo-bad');
        document.getElementById(`grupo_${campo}`).classList.add('contactoGrupo-fine');
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-circle-exclamation");
        document.querySelector(`#grupo_${campo} .contactoError`).classList.remove("contactoError-activo");
        campos[campo] = true;
        
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('contactoGrupo-bad');
        document.getElementById(`grupo_${campo}`).classList.remove('contactoGrupo-fine');
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-circle-exclamation");
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo_${campo} .contactoError`).classList.add("contactoError-activo");
        campos[campo] = false;

}
}

inputsCon.forEach((input) => {
    input.addEventListener('keyup', validar);
    input.addEventListener('blur', validar);
});

contacto.addEventListener("submit", (e) => {
    e.preventDefault();

    if (campos.nombre && campos.apellido && campos.correo && campos.cel && campos.mnsj){
        contacto.reset();
    }
});
