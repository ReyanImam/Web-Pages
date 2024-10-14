// Select the launch element
const launch = document.querySelector('#rocket');

// Trigger animation on page load
window.onload = function () {
    launch.style.animation = 'launchAnimation 3s ease-in-out forwards'; // Start animation
};
