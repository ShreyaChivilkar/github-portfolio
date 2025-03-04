document.querySelectorAll(".experience-header").forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const isOpen = content.style.display === "block";

        // Close all open sections
        document.querySelectorAll(".experience-content").forEach(section => {
            section.style.display = "none";
        });

        // Open the clicked one
        content.style.display = isOpen ? "none" : "block";
    });
});
