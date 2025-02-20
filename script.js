document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".new-add-bl-");

    dropdownLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let dropdown = this.nextElementSibling;

            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                document.querySelectorAll(".dropdown").forEach((menu) => {
                    menu.style.display = "none";
                });
                dropdown.style.display = "block";
            }
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest("nav")) {
            document.querySelectorAll(".dropdown").forEach((menu) => {
                menu.style.display = "none";
            });
        }
    });
});
