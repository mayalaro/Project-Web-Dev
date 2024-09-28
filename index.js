document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        console.log(`Scrolling to: ${this.getAttribute('href')}`); // Log the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('form-status');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting normally

        // Show a success message
        statusMessage.textContent = 'Message Sent!';
        statusMessage.style.color = 'black';

        // Clear the form inputs
        form.reset();

        // Optional: Show an alert popup as well
        alert('Message Sent!');
    });
});