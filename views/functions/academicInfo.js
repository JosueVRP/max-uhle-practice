// Obtener referencias a los elementos HTML
var modal = document.getElementById('myModal');
var openBtn = document.getElementById('openModalBtn');
var closeBtn = document.getElementById('closeModalBtn');

// Mostrar el modal
openBtn.onclick = function() {
    modal.style.display = 'block';
}

// Ocultar el modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Ocultar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}