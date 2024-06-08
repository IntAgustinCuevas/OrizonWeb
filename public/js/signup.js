document.addEventListener('DOMContentLoaded' , () => {
    
    const form = document.getElementById("formSignup");

    form.addEventListener("submit" , (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const repeatPassword = document.getElementById("repeatPassword").value;

        const formData = {
            name: name,
            email: email,
            password: password,
            repeatPassword: repeatPassword
        }

        

    })
})