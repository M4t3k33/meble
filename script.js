document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Star rating
    const stars = document.querySelectorAll('.star');
    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            currentRating = e.target.dataset.value;
            updateStars();
        });
    });

    // Before/After slider
    const slider = document.querySelector('.slider');
    const beforeImage = document.querySelector('.before-image');

    slider.addEventListener('input', (e) => {
        const sliderPos = e.target.value;
        beforeImage.style.clipPath = `inset(0 ${100-sliderPos}% 0 0)`;
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Tu dodaj logikę wysyłania formularza
        alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
        contactForm.reset();
    });
});

function updateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.classList.toggle('active', star.dataset.value <= currentRating);
    });
}

function addReview() {
    const reviewsList = document.getElementById('reviews-list');
    const reviewText = document.querySelector('textarea').value;
    const rating = currentRating;

    const review = document.createElement('div');
    review.className = 'review';
    review.innerHTML = `
        <div class="stars">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</div>
        <p>${reviewText}</p>
    `;

    reviewsList.appendChild(review);
    document.querySelector('textarea').value = '';
    currentRating = 0;
    updateStars();
}
