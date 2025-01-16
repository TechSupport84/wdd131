

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburgerIcon.classList.toggle('close');
    });
});
