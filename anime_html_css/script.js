// Simple search functionality
document.querySelector('.search-container button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-container input').value;
    if(searchTerm) {
        alert(`Хайлт: "${searchTerm}" - Энэ функц одоогоор боловсронгуй болоогүй байна`);
    }
});

// Category tag selection
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Anime card click
document.querySelectorAll('.anime-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('.anime-title').textContent;
        alert(`"${title}" аниме үзэх гэж байна`);
    });
});