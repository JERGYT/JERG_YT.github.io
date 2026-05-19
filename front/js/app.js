// Función para cambiar de sección en la barra lateral
function showSection(sectionId) {
    // 1. Ocultar todas las secciones
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    // 2. Quitar el color activo de todos los botones
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 3. Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
    
    // 4. Resaltar el botón que fue presionado
    event.currentTarget.classList.add('active');
}