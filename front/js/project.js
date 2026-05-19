document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos todos los "archivos" del sidebar del IDE falso
    const ideFiles = document.querySelectorAll('.ide-file');
    // Obtenemos todos los contenedores de código
    const codeFiles = document.querySelectorAll('.code-file');

    ideFiles.forEach(file => {
        file.addEventListener('click', function() {
            // 1. Quitar la clase 'active' de todos los archivos del sidebar
            ideFiles.forEach(f => f.classList.remove('active'));
            // 2. Poner la clase 'active' al archivo clickeado
            this.classList.add('active');

            // 3. Ocultar todos los bloques de código
            codeFiles.forEach(code => code.classList.remove('active'));
            
            // 4. Buscar el bloque de código correspondiente y mostrarlo
            const targetId = this.getAttribute('data-file');
            document.getElementById(targetId).classList.add('active');
        });
    });
});