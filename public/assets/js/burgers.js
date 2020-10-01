$(function () {
    $(".devour").on("click", function (event) {
      var id = $(this).data("id");
      var devour = $(this).data("devour");
  
      var newDevour = {
        devoured: true,
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour,
      }).then(function () {
        console.log("changed devoured to true from ", devour);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".burger-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger-input").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });