document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    let draggedElement = null;

    // Configurar qué pasa cuando "agarramos" una ficha
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            draggedElement = draggable;
            // Guardamos la respuesta correcta en la memoria
            e.dataTransfer.setData('text/plain', draggable.getAttribute('data-id'));
            setTimeout(() => draggable.style.opacity = '0.5', 0);
        });
        
        draggable.addEventListener('dragend', () => {
            draggedElement.style.opacity = '1';
            draggedElement = null;
        });
    });

    // Configurar qué pasa cuando "soltamos" una ficha en la zona destino
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Permitir soltar
            if (!zone.classList.contains('correct')) zone.classList.add('over');
        });

        zone.addEventListener('dragleave', () => zone.classList.remove('over'));

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('over');
            
            if (zone.classList.contains('correct')) return;

            const draggedId = e.dataTransfer.getData('text/plain');
            const targetId = zone.getAttribute('data-target');

            // VALIDACIÓN LÓGICA
            if (draggedId === targetId) {
                zone.classList.add('correct');
                zone.classList.remove('incorrect');
                zone.innerHTML = `<i class="fas fa-check-circle"></i> ¡Correcto! - ${draggedElement.innerText}`;
                draggedElement.style.display = 'none'; // Desaparece la ficha original
            } else {
                zone.classList.add('incorrect');
                setTimeout(() => zone.classList.remove('incorrect'), 800); // Vibración de error
            }
        });
    });
});