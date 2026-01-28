const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});

const searchInput = document.getElementById('search');
const gameCards = document.querySelectorAll('.game-card');
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    gameCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(value) ? 'block' : 'none';
    });
});