// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(document).ready(function() {
  
//     $(".create-burger").on("click", function(event) {
//       console.log("i was hit!")
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newBurger = {
//         burger_name: $("#burgerName").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/api/burger", {
//         type: "POST",
//         url: "api/burger",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".devour-btn").on("click", function(event) {
//       var id = $(this).data("id");
  
//       // Send the DELETE request.
//       $.ajax("/api/burgers/" + id, {
//         type: "DELETE"
//       }).then(
//         function() {
//           console.log("deleted burger", id);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
// });