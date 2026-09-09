document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Usuario y contraseña genéricos solicitados
    if (user === 'admin' && pass === 'admin123') {
        localStorage.setItem('auth_admin', 'true');
        window.location.href = '../Admin/index.html';
    } else {
        errorMsg.textContent = 'Usuario o contraseña incorrectos (Prueba admin / admin123)';
    }
});