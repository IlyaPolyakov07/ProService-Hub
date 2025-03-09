document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    document.querySelector(".contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your message has been sent!");
        this.reset();
    });
});