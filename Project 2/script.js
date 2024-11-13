// Handle the form submission for subscription
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("emailInput").value;
    const message = document.getElementById("message");

    if (emailInput.endsWith("@gmail.com")) {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter a valid Gmail address.";
        message.style.color = "red";
    }
});

// Clear message when user is typing a new email
document.getElementById("emailInput").addEventListener("input", function() {
    const message = document.getElementById("message");
    if (!this.value.endsWith("@gmail.com")) {
        message.textContent = "";
    }
});

// Prevent the homepage from reloading when clicking "Home" if already on the home page
document.getElementById("homeLink").addEventListener("click", function(event) {
    if (window.location.pathname.endsWith("Shining_Blog.html")) {
        event.preventDefault();
        location.reload();
    }
});

// Ensure "Get Started" button works by navigating to the correct page
document.querySelector('.get-started-button').addEventListener('click', function() {
    location.href = 'create_blog.html'; // Navigates to the create_blog.html page
});
