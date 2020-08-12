var accord = document.getElementsByClassName("accord-head");

for (var i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function () {
    var accordBody = this.nextElementSibling;
    accordBody.classList.toggle("active");
  });
}


