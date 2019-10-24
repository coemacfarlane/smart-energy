$(document).ready(function() {
  $(".hamburger").on("click", function() {
    $(this).toggleClass("isActive");
    $("#dropdownMenu").toggleClass("show");
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var a = this.nextElementSibling;
      if (a.style.display === "block") {
        a.style.display = "none";
      } else {
        a.style.display = "block";
      }
    });
  }
  // $(".accordion").on("click", function() {
  //   $(this).toggleClass("isActive");
  //   $(".a").toggleClass("block");
});
