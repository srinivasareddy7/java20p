// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Simulate loading with a timeout
    setTimeout(() => {
        // Fade out the splash screen
        splashScreen.style.opacity = '0';

        // Wait for the transition to finish before hiding the splash screen
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500); // Match this duration with the CSS transition duration
    }, 3000); // Show splash screen for 3 seconds
});
