document.addEventListener('DOMContentLoaded', () => {
    const btnLoop = document.getElementById('btn-loop');
    const excelBody = document.getElementById('excel-body');
    const statusText = document.getElementById('excel-status');
    const codeHighlight = document.getElementById('code-highlight');

    // Simulamos los datos que trajimos de la Base de Datos con Entity Framework
    const baseDeDatos = [
        { id: 101, huesped: 'Julián Rodríguez', total: '$150.000' },
        { id: 102, huesped: 'Laura Gómez', total: '$80.000' },
        { id: 103, huesped: 'Carlos Pérez', total: '$250.000' }
    ];

    let currentRow = 2; // Empezamos en la fila 2 (la 1 son los títulos)
    let index = 0;      // Controla en qué reserva vamos

    if (btnLoop) {
        btnLoop.addEventListener('click', () => {
            if (index < baseDeDatos.length) {
                const reserva = baseDeDatos[index];

                // 1. Creamos la fila HTML dinámicamente
                const tr = document.createElement('tr');
                tr.className = 'new-row'; // Añade la animación verde
                
                tr.innerHTML = `
                    <td class="row-num">${currentRow}</td>
                    <td>${reserva.id}</td>
                    <td>${reserva.huesped}</td>
                    <td>${reserva.total}</td>
                `;

                // 2. Agregamos la fila a la tabla
                excelBody.appendChild(tr);

                // 3. Actualizamos los mensajes y contadores
                statusText.innerHTML = `<span style="color: #107c41;">Iteración ${index + 1} completada. Variable currentRow = ${currentRow + 1}</span>`;
                
                // Efecto visual en el código C#
                codeHighlight.style.backgroundColor = 'rgba(78, 201, 176, 0.3)';
                setTimeout(() => codeHighlight.style.backgroundColor = 'transparent', 500);

                // Incrementamos las variables lógicas
                currentRow++;
                index++;

                // Si terminamos, deshabilitamos el botón
                if (index === baseDeDatos.length) {
                    btnLoop.disabled = true;
                    btnLoop.innerHTML = '<i class="fas fa-check"></i> Archivo Terminado';
                    statusText.innerHTML = `<span style="color: #107c41; font-weight:bold;">¡Bucle finalizado! Excel generado con éxito.</span>`;
                }
            }
        });
    }
});