// This is where you define your front-end AJAX calls that will be used by the controller based on url routing - NEED TO MATCH UP URLS
// Insert jQuery AJAX calls with event listeners
$(document).ready(function () {
    // Burger order submission POST Request
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            //NOT SURE WHAT THE KEY SHOULD BE HERE..NAME? 
            burger_name: $("#burger").val().trim(),
            devoured: false
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
            console.log(id);
            //let newDevoured = $(this).data("newDevoured");

            let devouredList = {
                devoured: true
            };

            // Send the PUT request.
            $.ajax("/api/" + id, {
                type: "PUT",
                data: devouredList,
                success: function () {
                    console.log("changed burger to", devouredList);
                    // Reload the page to get the updated list
                    location.reload();
                }
            })
        })
    });
});