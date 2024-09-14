document.querySelector('.register-form').addEventListener('submit', function (event) {
    event.preventDefault(); // esto evita que el formulario se envie inmediatamente



    //obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    const password = document.getElementById('password').value.trim();
    const password_dos = document.getElementById('password_dos').value.trim();
    const dob = document.getElementById('dob').value;

    //validar que los campos no esten vacios
    if (name === "") {
        alert("por favor, ingrese su nombre.");
        return;
    }

    if (email === "") {
        alert("por favor, ingrese su correo electronico.");
        return;
    }

    if (password === "") {
        alert("por favor, ingrese una contraseña.");
        return;
    }

    if (dob === "") {
        alert("por favor, ingrese su fecha ed nacimiento.");
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

    if (password != password_dos) {
        alert("Las contraseñas no coinciden")
    }
    //si todo estas bien puedes enviar el formulario
    alert("ormulario enviado correctamente.");
    this.submit(); //enviar el formulario



});
