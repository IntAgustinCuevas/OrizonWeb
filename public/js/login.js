document.addEventListener('DOMContentLoaded' , () =>{
    const form = document.getElementById('formLogin');

    form.addEventListener('submit' , (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const formData = {
            email: email,
            password: password
        }

        fetch('http://localhost:8080/api/users/login', {

            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if( response.ok ){
                setTimeout(() => {
                    window.location.href = '/view/home';
                }, 2500);
            }
            else{
                return response.json().then(errorData => {
                    alert(errorData.message);
                });
            }
        })
        .catch( error => {
            console.error('### ERROR: ', error);
            alert(`Error en el inicio de sesion: ${error.message}`);
        })
    })
})