// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // You can add your code here to handle form submission, like sending data to a server
    alert('Your message has been sent!');
    this.reset(); // Reset the form
});
