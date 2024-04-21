const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-light', 'shadow');
    } else {
        navbar.classList.remove('bg-light', 'shadow');
    }
});