// jQuery code for simple effects
$(document).ready(function () {
    // Fade-in effect for main sections
    $(".section, .hero").hide().fadeIn(600);

    // Simple front-end "fake submit" for contact form
    $("#contactSubmit").on("click", function () {
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        if (!name || !email || !message) {
            $("#contactMessage")
                .text("Please fill all the fields before submitting.")
                .css("color", "red");
        } else {
            $("#contactMessage")
                .text("Thank you, " + name + "! This is a demo form (no backend storage).")
                .css("color", "green");

            // Clear fields
            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
        }
    });
});
