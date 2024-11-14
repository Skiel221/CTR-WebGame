document.querySelectorAll('.pj').forEach(item => {
    item.addEventListener('click', function() {
        // Elimina la clase 'active' de todos los elementos para que solo uno quede activo
        document.querySelectorAll('.pj').forEach(el => el.classList.remove('active'));
        // Agrega la clase 'active' al elemento actual
        this.classList.add('active');
    });
});
