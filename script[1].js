document.addEventListener('DOMContentLoaded', () => {
    // Definir la fecha objetivo: Último segundo del mes de noviembre del año actual (2026)
    const currentYear = new Date().getFullYear();
    // Noviembre es el mes 10 (0-indexed: Enero=0, Noviembre=10)
    const targetDate = new Date(currentYear, 10, 30, 23, 59, 59).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = String(days).padStart(2, '0');
            document.getElementById('hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        } else {
            document.querySelector('.timer-container').innerHTML = '<h3>¡Tiempo completado! Proyecto Entregado.</h3>';
        }
    }

    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();
});