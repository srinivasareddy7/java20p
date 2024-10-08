const navLinks = document.querySelectorAll('nav ul li a');
const indicator = document.getElementById('indicator');

// Set initial position of the indicator
function setIndicatorPosition() {
    const activeLink = document.querySelector('nav ul li a.active');
    if (activeLink) {
        indicator.style.width = `${activeLink.offsetWidth}px`;
        indicator.style.left = `${activeLink.offsetLeft}px`;
    }
}

navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        indicator.style.width = `${e.target.offsetWidth}px`;
        indicator.style.left = `${e.target.offsetLeft}px`;
    });

    link.addEventListener('mouseleave', 
        () => {
        setIndicatorPosition();
    });

    link.addEventListener('click',
         () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        setIndicatorPosition();
    });
});

setIndicatorPosition();
