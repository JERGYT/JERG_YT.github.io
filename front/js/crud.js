document.addEventListener('DOMContentLoaded', () => {
    const btnGet = document.getElementById('btn-simulate-get');
    const btnPost = document.getElementById('btn-simulate-post');
    const feedback = document.getElementById('crud-feedback');
    
    // Elementos visuales
    const arrowGet = document.getElementById('arrow-get');
    const arrowPost = document.getElementById('arrow-post');
    const dbRecord = document.getElementById('db-record');
    const dbName = document.getElementById('db-name');
    const dbRoom = document.getElementById('db-room');
    
    // Inputs del formulario
    const formName = document.getElementById('form-name');
    const formRoom = document.getElementById('form-room');

    if (btnGet) {
        // --- 1. SIMULACIÓN DEL MÉTODO GET ---
        btnGet.addEventListener('click', () => {
            btnGet.disabled = true;
            arrowGet.classList.add('active-get');
            feedback.style.display = 'block';
            feedback.innerHTML = '<i class="fas fa-spinner fa-spin text-warning"></i> Buscando la reserva en la Base de Datos...';
            
            // Simulamos el tiempo de viaje de los datos
            setTimeout(() => {
                // Llenamos el formulario con los datos de la DB
                formName.value = dbName.innerText;
                formRoom.value = dbRoom.innerText;
                
                // Habilitamos el formulario para que el usuario pueda "editar"
                formName.disabled = false;
                formRoom.disabled = false;
                
                // Cambiamos los botones
                btnGet.style.display = 'none';
                btnPost.style.display = 'inline-block';
                arrowGet.classList.remove('active-get');
                
                feedback.innerHTML = '<i class="fas fa-check-circle text-primary"></i> <strong>GET Exitoso.</strong> Ahora edita el nombre en el formulario y presiona Guardar.';
                feedback.style.color = '#1976d2';
            }, 1500);
        });

        // --- 2. SIMULACIÓN DEL MÉTODO POST ---
        btnPost.addEventListener('click', () => {
            btnPost.disabled = true;
            formName.disabled = true;
            formRoom.disabled = true;
            
            arrowPost.classList.add('active-post');
            feedback.innerHTML = '<i class="fas fa-spinner fa-spin text-success"></i> Enviando datos modificados al servidor...';
            feedback.style.color = '#28a745';

            setTimeout(() => {
                // Actualizamos la Base de Datos Falsa con lo que haya en el input
                dbName.innerText = formName.value;
                dbRoom.innerText = formRoom.value;
                
                // Animación de éxito en la Base de Datos
                dbRecord.classList.add('updated');
                arrowPost.classList.remove('active-post');
                
                feedback.innerHTML = '<i class="fas fa-check-double text-success"></i> <strong>POST Exitoso.</strong> ¡La Base de Datos ha sido actualizada correctamente!';
                
                // Reset visual para jugar otra vez
                setTimeout(() => {
                    btnPost.style.display = 'none';
                    btnGet.style.display = 'inline-block';
                    btnGet.disabled = false;
                    btnPost.disabled = false;
                    dbRecord.classList.remove('updated');
                }, 4000);
            }, 1500);
        });
    }
});