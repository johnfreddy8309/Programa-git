// Función para manejar el menú de navegación
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Ejemplo de implementación de búsqueda
function buscarLibro() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
        const title = book.querySelector('.title').textContent;
        if (title.toUpperCase().indexOf(filter) > -1) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}

// Event listeners
document.getElementById('menuToggle').addEventListener('click', toggleMenu);
document.getElementById('searchInput').addEventListener('keyup', buscarLibro);

// Implementación adicional según la funcionalidad que requieras



