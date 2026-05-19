document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn-validate-code');
    const selects = document.querySelectorAll('.code-select');
    const feedback = document.getElementById('builder-feedback');

    if (btnValidate) {
        btnValidate.addEventListener('click', () => {
            let allCorrect = true;
            let answeredCount = 0;

            selects.forEach(select => {
                const value = select.value;
                
                // Reiniciamos clases
                select.classList.remove('success', 'error');

                if (value === "") {
                    // Si dejó espacios en blanco, sabemos que falta responder
                    allCorrect = false;
                } else {
                    answeredCount++;
                    if (value === "correct") {
                        select.classList.add('success');
                    } else {
                        select.classList.add('error');
                        allCorrect = false;
                    }
                }
            });

            feedback.style.display = 'block';

            if (answeredCount < selects.length) {
                feedback.innerHTML = '<i class="fas fa-exclamation-triangle text-warning"></i> Faltan espacios por llenar. Completa todo el código.';
                feedback.style.color = '#fd971f'; // Color warning oscuro
            } else if (allCorrect) {
                feedback.innerHTML = '<i class="fas fa-check-circle text-success"></i> ¡Compilación exitosa! Has utilizado la sintaxis de Razor correctamente.';
                feedback.style.color = '#a6e22e'; // Verde
            } else {
                feedback.innerHTML = '<i class="fas fa-times-circle text-danger"></i> Error de Compilación. Hay líneas de código incorrectas marcadas en rojo.';
                feedback.style.color = '#f92672'; // Rojo magenta
            }
        });
    }
});