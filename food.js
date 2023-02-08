// Get all the navigation links
var navLinks = document.querySelectorAll("header nav ul li a");

// Add a click event listener to each navigation link
navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    // Remove the "active" class from all links
    navLinks.forEach(function(link) {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked link
    this.classList.add("active");
  });
});

// Get all the "Add to Order" buttons
var addToOrderButtons = document.querySelectorAll("#menu ul li button");

// Add a click event listener to each button
addToOrderButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Add the "added" class to the parent li element of the clicked button
    this.parentElement.classList.add("added");
  });
});
