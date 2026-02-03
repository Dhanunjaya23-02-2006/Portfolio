// Initialize EmailJS
(function(){
    emailjs.init("5fryeEvolSN6wlBTD"); // Replace with your EmailJS user ID
})();

// Handle form submit
document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    const status = document.getElementById('status');

    emailjs.sendForm('service_hmvh2iu', 'template_841zi6o', this)
        .then(function(){
            status.innerText = "Message sent successfully!";
            status.style.color = "#00ff88";
            document.getElementById('contact-form').reset();
        }, function(error){
            status.innerText = "Failed to send message. Please try again.";
            status.style.color = "#ff4444";
            console.log(error);
        });
});