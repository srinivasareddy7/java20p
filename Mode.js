// Select the toggle button
const toggleButton = document.getElementById('toggle-btn');

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    // Update button text based on the current theme
    if (document.body.classList.contains('dark')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
    // Save the current mode in localStorage
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Check for saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleButton.textContent = 'Switch to Light Mode';
}

// Add event listener to the button
toggleButton.addEventListener('click', toggleDarkMode);
