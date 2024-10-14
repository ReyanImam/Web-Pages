const launch = document.querySelector('#launch'); // Select the element with ID 'launch'

// Function to create stars
function createStars() {
    const body = document.querySelector('body');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        // Set random positions for stars
        star.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        star.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        body.appendChild(star); // Add star to body
    }
}

// Call the functions to create stars and animate the launch element
window.onload = function () {
    createStars(); // Create stars
    launch.style.animation = 'fadeIn 1s ease-in-out, launchAnimation 5s ease-in-out forwards'; // Apply animations on window load
};