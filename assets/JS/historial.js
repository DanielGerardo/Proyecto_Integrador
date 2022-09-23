contacto.addEventListener("submit", (e) => {
    e.preventDefault();

    if (campos.nombre && campos.apellido && campos.correo && campos.cel && campos.mnsj){
        contacto.reset();
    }
});