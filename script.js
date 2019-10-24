$(document).ready(function() {
  $(".hamburger").on("click", function() {
    $(this).toggleClass("isActive");
    $("#dropdownMenu").toggleClass("show");
  });

  $(".accordion").on("click", function() {
    $(this).toggleClass("isActive");
    $(".a").toggleClass("block");
  });
});
