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

        console.log(formData);

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
    })
})


//function validateForm() {
    /*
    // Obtener los valores de los campos del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;

    let nameFormat = /^[a-zA-Z]+$/;

    // Validar los datos del formulario
    if ( name.length >= 3 && nameFormat.test(name.trim()) ) {
        alert("Nombre de usuario incorrecto. (Solamente letras, minimo 3 letras.");
        return false;
    }
    /*if (email.trim() === "") {
        alert("Por favor, introduce un correo electrónico");
        return false;
    }
    if (password.trim() === "") {
        alert("Por favor, introduce una contraseña");
        return false;
    }
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }
    // Puedes agregar más validaciones según tus requisitos
    
    // Si todas las validaciones pasan, devolver true
    return true;*/
//}

