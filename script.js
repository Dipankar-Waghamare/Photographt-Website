const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    status.innerHTML = "Sending...";

    emailjs.sendForm(
        "YOUR_SERVICE_ID",   // replace
        "YOUR_TEMPLATE_ID",  // replace
        this
    ).then(function() {
        status.innerHTML = "Message sent successfully!";
        status.style.color = "green";
        form.reset();
    }, function(error) {
        status.innerHTML = "Failed to send message!";
        status.style.color = "red";
        console.error(error);
    });
});
