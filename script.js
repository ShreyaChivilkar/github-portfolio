document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".experience-header");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            // Find the next sibling element (the content box)
            const content = this.nextElementSibling;

            // Toggle the visibility
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
