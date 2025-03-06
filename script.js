// Scroll-Triggered Animations
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - window.innerHeight + sectionHeight / 2) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
});

// Animated Backgrounds
const animatedSections = document.querySelectorAll('.parallax');

animatedSections.forEach(section => {
    section.style.animation = 'backgroundAnimation 10s infinite';
});
