function toggleOpen() {
  //   document.getElementById("dropdownMenu").classList.toggle("show");
  var x = document.getElementById("dropdownMenu");
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
