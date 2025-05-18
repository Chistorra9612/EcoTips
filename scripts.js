// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Simulamos un consejo del día
    const consejos = [
        "Recicla plásticos y papeles para reducir residuos.",
        "Apaga las luces cuando no las necesites.",
        "Usa la bicicleta en lugar de un coche para reducir la huella de carbono."
    ];

    // Mostrar el primer consejo
    const tipContainer = document.getElementById('tip-container');
    tipContainer.innerHTML = `<p>${consejos[0]}</p>`;

    // Función para mostrar un nuevo consejo
    const newTipBtn = document.getElementById('newTipBtn');
    newTipBtn.addEventListener('click', () => {
        const randomTip = consejos[Math.floor(Math.random() * consejos.length)];
        tipContainer.innerHTML = `<p>${randomTip}</p>`;
    });

    // Función para manejar el formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedHabits = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
                                    .map(input => input.value);
        if (selectedHabits.length > 0) {
            alert(`Gracias por comprometerte a: ${selectedHabits.join(', ')}`);
        } else {
            alert('Por favor selecciona al menos un hábito.');
        }
    });
});
