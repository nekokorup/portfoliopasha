// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Basic form submission (for demonstration, no backend)
document.querySelector(".contact-form form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan Anda telah terkirim! (Ini adalah simulasi, tidak ada backend)");
    this.reset();
});

