AOS.init({
    offset: 100,
    duration: 600,
    easing: 'ease-in-sine',
});
scrollToAnchor();

function scrollToAnchor() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
