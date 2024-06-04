document.addEventListener("DOMContentLoaded", function() {
    const colors = document.querySelectorAll(".colors div");

    colors.forEach(color => {
        color.addEventListener("click", function() {
            const backgroundColor = window.getComputedStyle(this).getPropertyValue("background-color");
            document.body.style.backgroundColor = backgroundColor;
        });
    });
});
