document
        .getElementById("update")
        .addEventListener("click", function (e) {
          let nombreUser = document.getElementById("nombreUser");
          let apellidoUser = document.getElementById("apellidoUser");
          let email = document.getElementById("email");
          let contra = document.getElementById("contra");

          console.log(nombreUser.value);
          console.log(apellidoUser.value);
          console.log(email.value);
          console.log(contra.value);

          const data = {
            nombre: nombreUser.value,
            apellido: apellidoUser.value,
            email: email.value,
            contra: contra.value,
          };

        //   const idUsuario = 5;

          fetch("http://localhost:8080/user/5", {
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.text())
            .then((data) => {
              console.log("Producto Guardado:", data); 
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });

