document.addEventListener('DOMContentLoaded', () => {
    const termInput = document.getElementById('terminal-input');
    const termOutput = document.getElementById('terminal-output');
    
    // Controla en qué paso de la misión está el estudiante
    let currentStep = 1;

    // Escuchamos cuando presiona la tecla "Enter"
    termInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim(); // Lo que escribió el usuario
            this.value = ''; // Limpiamos el input
            
            if (command === '') return;

            // 1. Imprimimos el comando que escribió en pantalla
            printToTerminal(`PM> ${command}`, '');

            // 2. Validamos el Paso 1: Crear la migración
            if (currentStep === 1) {
                if (command.toLowerCase() === 'add-migration inicial') {
                    printToTerminal('Build started...', 'text-warning-term');
                    
                    // Simulamos un tiempo de carga con setTimeout
                    setTimeout(() => {
                        printToTerminal('Build succeeded.', 'text-success-term');
                        printToTerminal('To undo this action, use Remove-Migration.', 'text-warning-term');
                        currentStep = 2; // Avanzamos al paso 2
                    }, 800);
                } else {
                    printToTerminal(`Error: El término '${command}' no se reconoce. Escribe exactamente: Add-Migration Inicial`, 'text-error-term');
                }
            } 
            // 3. Validamos el Paso 2: Actualizar la Base de Datos
            else if (currentStep === 2) {
                if (command.toLowerCase() === 'update-database') {
                    printToTerminal('Build started...', 'text-warning-term');
                    
                    setTimeout(() => {
                        printToTerminal('Build succeeded.', 'text-success-term');
                        printToTerminal("Applying migration '20260517_Inicial'.", 'text-warning-term');
                        printToTerminal('Done. ¡Felicidades! Tu base de datos ha sido creada exitosamente.', 'text-success-term');
                        currentStep = 3; // Juego terminado
                        termInput.disabled = true; // Bloqueamos el input para que no escriba más
                    }, 1000);
                } else {
                    printToTerminal(`Error: Comando incorrecto. Pista: Ahora debes actualizar la base usando Update-Database`, 'text-error-term');
                }
            }
            
            // Hacemos scroll automático hacia abajo si hay mucho texto
            setTimeout(() => {
                termOutput.scrollTop = termOutput.scrollHeight;
            }, 100);
        }
    });

    // Función auxiliar para imprimir texto en la consola
    function printToTerminal(text, className) {
        const div = document.createElement('div');
        div.textContent = text;
        if (className) div.classList.add(className);
        termOutput.appendChild(div);
    }
});