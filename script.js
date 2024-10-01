const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const themeToggle = document.getElementById('theme-toggle');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Dark mode toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});

// Highlight current section in navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
