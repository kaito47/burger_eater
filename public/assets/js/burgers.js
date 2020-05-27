// This is where you define your front-end AJAX calls that will be used by the controller based on url routing - NEED TO MATCH UP URLS
// Insert jQuery AJAX calls with event listeners
$(document).ready(function () {
    // Burger order submission POST Request
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            name: $("#order").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        )
    });

    // Burger devoured put request
    $(function () {
        $(".devoured").on("click", function (event) {
            let id = $(this).data("id");
            let newDevoured = $(this).data("newDevoured");

            let devouredList = {
                devoured: newDevoured
            };

            // Send the PUT request.
            $.ajax("/api/" + id, {
                type: "PUT",
                data: devouredList,
                function() {
                    console.log("changed burger to", newDevoured);
                    // Reload the page to get the updated list
                    location.reload();
                }
            })
        })
    });
});