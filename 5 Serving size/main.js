var numberPlace = document.getElementById("number");
var number = 0;

var decrease = document.getElementById("decrease");
decrease.onclick =  function () {
  number -= 1;
  numberPlace.textContent = number;
  colorChange();
});

var increase = document.getElementById("increase");
increase.onclick = function () {
  number += 1;
  numberPlace.textContent = number;
  colorChange();
};

var reset = document.getElementById("reset");
reset.onclick = function () {
  number = 0;
  numberPlace.textContent = number;
  colorChange();
};

function colorChange() {
  if (number <= -1) {
    numberPlace.style.color = "red";
  } else if (number > 0) {
    numberPlace.style.color = "green";
  } else {
    numberPlace.style.color = "inherit";
  }
}
