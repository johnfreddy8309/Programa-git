document.querySelector('#inicio_sesion').addEventListener('submit', function (event) {
    event.preventDefault(); // esto evita que el formulario se envie inmediatamente



    //obtener los valores de los campos

    const email = document.getElementById('email').value.trim();

    const password = document.getElementById('password').value.trim();





    if (email === "") {
        alert("por favor, ingrese su correo electronico.");
        return;
    }

    if (password === "") {
        alert("por favor, ingrese una contraseña.");
        return;
    }


    //validacion de formato de correo electronico
    const Emailpattern = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,6}$/;
    if (!Emailpattern.test(email)) {
        alert("por favor, ingrese un correo electronico valido.");
        return
    }

    //validacion de la longitud de la contraseña
    if (password.length < 8) {
        alert("la conmtraseña debe tener menos de 8 caracteres.")
        return;
    }


    //si todo estas bien puedes enviar el formulario
    alert("Inicio de sesión exitoso");
    this.submit(); //enviar el formulario



});
