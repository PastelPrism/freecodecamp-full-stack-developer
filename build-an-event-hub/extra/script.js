document.addEventListener('DOMContentLoaded', () => {
    const countdownEl = document.getElementById('countdown');

    const eventDate = new Date('2025-12-31T20:00:00');
    const pastEventDate = new Date('2025-01-15T19:00:00');

    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            countdownEl.textContent = "It's event time!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }


    updateCountdown();
    setInterval(() => {
        updateCountdown();
    }, 1000);

    const readMoreBtns = document.querySelectorAll('.read-more');
    const closeBtns = document.querySelectorAll('.close');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const eventNum = btn.getAttribute('data-event');
            const modal = document.getElementById(`eventModal${eventNum}`);
            modal.style.display = 'block';
        });
    });

    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
