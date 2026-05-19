document.addEventListener('DOMContentLoaded', () => {
    // Buscamos todas las tarjetas de quiz
    const quizCards = document.querySelectorAll('.quiz-card');

    quizCards.forEach(card => {
        const buttons = card.querySelectorAll('.quiz-btn');
        const feedbackDiv = card.querySelector('.quiz-feedback');

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Si el botón ya está deshabilitado, no hacemos nada
                if (this.disabled) return;

                const isCorrect = this.getAttribute('data-correct') === 'true';

                // Deshabilitamos todos los botones de esta pregunta
                buttons.forEach(b => b.disabled = true);

                if (isCorrect) {
                    this.classList.add('correct');
                    feedbackDiv.innerHTML = '<i class="fas fa-check-circle text-success"></i> ¡Excelente deducción! Esa es la respuesta correcta.';
                    feedbackDiv.style.color = '#28a745';
                } else {
                    this.classList.add('wrong');
                    feedbackDiv.innerHTML = '<i class="fas fa-times-circle text-danger"></i> Respuesta incorrecta. Vuelve a revisar la teoría.';
                    feedbackDiv.style.color = '#dc3545';
                    
                    // Mostramos visualmente cuál era la correcta
                    const correctBtn = card.querySelector('.quiz-btn[data-correct="true"]');
                    correctBtn.classList.add('correct');
                }

                feedbackDiv.style.display = 'block'; // Mostramos el mensaje
            });
        });
    });
});