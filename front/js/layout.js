document.addEventListener('DOMContentLoaded', () => {
    const layoutBtns = document.querySelectorAll('.btn-layout');
    const renderTarget = document.getElementById('render-target');
    const browserUrl = document.querySelector('.browser-url');

    // Vistas simuladas (Lo que traería el servidor)
    const vistasHTML = {
        reservas: `
            <div class="injected-view">
                <h4><i class="fas fa-calendar-check text-primary"></i> Panel de Reservas</h4>
                <p style="color: #666; font-size: 0.9rem;">Aquí se carga el formulario de check-in y la tabla de huéspedes.</p>
                <div style="background: #f8f9fa; padding: 10px; border: 1px solid #ddd; margin-top:10px;">
                    <strong>Última reserva:</strong> Julián Rodríguez - Suite Ejecutiva
                </div>
            </div>
        `,
        funcionarios: `
            <div class="injected-view">
                <h4><i class="fas fa-users text-warning"></i> Gestión de Personal</h4>
                <p style="color: #666; font-size: 0.9rem;">Aquí se carga la lista de empleados y su rendimiento de ventas.</p>
                <table style="width: 100%; font-size: 0.85rem; margin-top: 10px; text-align: left;">
                    <tr style="background: #eee;"><th>ID</th><th>Nombre</th></tr>
                    <tr><td>EMP-01</td><td>Carlos Vendedor</td></tr>
                </table>
            </div>
        `
    };

    layoutBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const viewToLoad = this.getAttribute('data-view');

            // Efecto de "Cargando..."
            renderTarget.innerHTML = '<div class="render-target-empty"><span style="color:#6f42c1;"><i class="fas fa-spinner fa-spin"></i> Cargando vista desde el servidor...</span></div>';

            setTimeout(() => {
                if (viewToLoad === 'limpiar') {
                    renderTarget.innerHTML = '<div class="render-target-empty"><span class="pulse-text">Esperando inyección de Vista...</span></div>';
                    browserUrl.textContent = 'localhost:5000/HotelAdmin';
                    renderTarget.className = 'render-target-empty';
                } else {
                    // Inyectamos el HTML correspondiente
                    renderTarget.innerHTML = vistasHTML[viewToLoad];
                    renderTarget.className = ''; // Quitamos clase empty
                    // Actualizamos la URL simulada
                    browserUrl.textContent = `localhost:5000/HotelAdmin/${viewToLoad.charAt(0).toUpperCase() + viewToLoad.slice(1)}`;
                }
            }, 600); // Simulamos 600ms de latencia de red
        });
    });
});