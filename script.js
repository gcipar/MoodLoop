// Funkcija za spremanje raspoloženja u lokalnu pohranu
function saveMood(mood) {
    localStorage.setItem('mood', mood);
    alert(`Vaše raspoloženje je spremljeno: ${mood}`);
}

// Dodavanje događaja klik na svaku opciju raspoloženja
document.querySelectorAll('.mood-option').forEach(option => {
    option.addEventListener('click', () => {
        const mood = option.textContent; // Uzmi emoji
        saveMood(mood);
    });
});

// Prikaz prethodno spremljenog raspoloženja pri učitavanju
document.addEventListener('DOMContentLoaded', () => {
    const savedMood = localStorage.getItem('mood');
    if (savedMood) {
        alert(`Vaše prethodno raspoloženje je: ${savedMood}`);
    }
});
