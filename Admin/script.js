// Verificar si el usuario ha iniciado sesión
if (localStorage.getItem('auth_admin') !== 'true') {
    window.location.href = '../Login/Login.html';
}

// Cerrar sesión
document.getElementById('btnLogout').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('auth_admin');
    window.location.href = '../Login/Login.html';
});

// Cargar miniaturas con las imágenes guardadas actuales
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.img-input').forEach(input => {
        const key = input.getAttribute('data-key');
        const saved = localStorage.getItem('img_' + key);
        if (saved) {
            const preview = document.getElementById('prev-' + key);
            if (preview) preview.src = saved;
        }
    });
});

// Previsualizar imagen seleccionada antes de guardar
document.querySelectorAll('.img-input').forEach(input => {
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            const key = this.getAttribute('data-key');
            reader.onload = function(event) {
                document.getElementById('prev-' + key).src = event.target.result;
                // Guardar temporalmente en dataset o variable local del input
                input.setAttribute('data-base64', event.target.result);
            }
            reader.readAsDataURL(file);
        }
    });
});

// Guardar cambios en localStorage
document.getElementById('btnGuardar').addEventListener('click', () => {
    document.querySelectorAll('.img-input').forEach(input => {
        const base64 = input.getAttribute('data-base64');
        const key = input.getAttribute('data-key');
        if (base64) {
            localStorage.setItem('img_' + key, base64);
        }
    });

    const msg = document.getElementById('saveMsg');
    msg.textContent = '¡Cambios guardados con éxito! Ya puedes ver el sitio web actualizado.';
    setTimeout(() => { msg.textContent = ''; }, 4000);
});