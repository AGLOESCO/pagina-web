const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica para verificar las credenciales del usuario
    // Por ejemplo, puedes hacer una solicitud AJAX a un servidor para verificar las credenciales
    // o puedes utilizar una base de datos local para verificar las credenciales

    if (username === 'admin' && password === 'password') {
        // Si las credenciales son correctas, redirigir al usuario a una página de inicio
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});