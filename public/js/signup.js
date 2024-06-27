document.addEventListener('DOMContentLoaded' , () => {
    
    const form = document.getElementById("formSignup");

    form.addEventListener("submit" , (e) => {
        e.preventDefault();

        const userName = document.getElementById("userName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const repeatPassword = document.getElementById("repeatPassword").value;
        const clientCode = document.getElementById("clientCode").value;

        const formData = {
            userName: userName,
            email: email,
            password: password,
            repeatPassword: repeatPassword,
            clientCode: clientCode
        }
        //console.log(formData);

        if(validateForm()){

            fetch('http://localhost:8080/api/users/register', {
                
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then (response => {
                if (response.ok){
                    alert('Usuario registrado correctamente.');
                    setTimeout(() => {
                        window.location.href = '/view/login';
                    }, 3000);
                }
                else{
                    return response.text().then(errorData => {
                        throw new Error(errorData);
                    });
                }
            })
            .catch (error => {
                console.error('### ERROR: ', error);
                alert(`Error en el registro de usuario: ${error.message}`);
            })        
        }
    })
})


//Funcion para validar los datos del formulario.
function validateForm() {   
    // Obtener los valores de los campos del formulario
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;
    let clientCode = document.getElementById("clientCode").value;

    let userNameRegex = /^[a-zA-Z]+$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    let clientCodeRegex = /^(AA|BB)\d{3}$/;

    // Validar los datos del formulario
    if ( userName.length < 3 || userName.length > 30 || !userNameRegex.test(userName.trim()) ) {
        alert("Nombre de usuario incorrecto. Solamente letras, minimo 3 letras maximo 30.");
        return false;
    }
    if ( !emailRegex.test(email.trim())) {
        alert("Por favor, introduce un correo electrónico");
        return false;
    }
    if ( password.length < 6 || !passwordRegex.test(password.trim()) ) {
        alert("La contraseña debe tener al menos 6 caracteres. Al menos una 1 letra y 1 numero");
        return false;
    }
    if( password != repeatPassword ){
        alert("Las contraseñas no coinciden");
        return false;    
    }
    if( !clientCodeRegex.test(clientCode.trim()) ){
        alert("El codigo de cliente es invalido");
        return false;
    }

    // Si todas las validaciones pasan, devolver true
    return true;
}

