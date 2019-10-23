$(document).ready(function() {
  $(".hamburger").on("click", function() {
    $(this).toggleClass("isActive");
    $("#dropdownMenu").toggleClass("show");
  });
});
