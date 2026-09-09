const linksContainer = document.querySelector('.links');
const toggleButton = document.querySelector('.toggle');

if(toggleButton) {
    toggleButton.addEventListener('click', () => {
        linksContainer.classList.toggle('show');
    });
}

// Cargar imágenes guardadas desde localStorage si existen
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dynamic-img').forEach(img => {
        const key = img.getAttribute('data-key');
        const savedImage = localStorage.getItem('img_' + key);
        if (savedImage) {
            img.src = savedImage;
        }
    });
});