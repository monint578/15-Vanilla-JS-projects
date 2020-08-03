var value = document.getElementById("value");
var defaultValue = document.getElementById("value").value;
var output = document.getElementById("output");
var number = document.getElementsByClassName("number");
var defaultNumber = [...number];

for (var i = 0; i < defaultNumber.length; i++) {
  defaultNumber[i] = defaultNumber[i].textContent;
}

var newNumber = "";

//default output
output.textContent = value.value + " " + "servings";

//change output and numbers value on change
value.addEventListener("input", function () {
  output.textContent = value.value + " " + "servings";

  for (var i = 0; i < number.length; i++) {
    newNumber = Math.round((defaultNumber[i] * value.value) / defaultValue);
    number[i].textContent = newNumber;
  }
});
