function generateRandomHex() {
  var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let hexCode = "#";
  while (hexCode.length < 7) {
    hexCode += digits[Math.floor(Math.random() * digits.length)];
  }
  let rgbArray = [];
  for (var i = 0; i < hexCode.length; i++) {
    rgbArray[i] = parseInt(hexCode[i], 16);
  }

  rgbFirstNumber = rgbArray[1] * 16 + rgbArray[2];
  rgbSecondNumber = rgbArray[3] * 16 + rgbArray[4];
  rgbThirdNumber = rgbArray[5] * 16 + rgbArray[6];

  return hexCode;
}

function btnChangeColor() {
  let hex = generateRandomHex();

  let hexName = document.getElementsByClassName("hex-name");
  for (var i = 0; i < hexName.length; i++) {
    hexName[i].textContent = hex;
  }

  document.body.style.backgroundColor = hex;
  document.getElementById("title").style.color = hex;

  let rgbName = document.getElementsByClassName("rgb-name");
  for (var i = 0; i < rgbName.length; i++) {
    rgbName[i].textContent =
      rgbFirstNumber + ", " + rgbSecondNumber + ", " + rgbThirdNumber;
  }
}

var hexOne = "#f1f5f8";
var hexTwo = "#a2a6f9";
var hexDirection = "to right";

function changeColor(side) {
  if (side === "left") {
    hexOne = generateRandomHex();
    let hexName = document.getElementsByClassName("hex-name-left");
    for (var i = 0; i < hexName.length; i++) {
      hexName[i].textContent = hexOne;
    }
  } else {
    hexTwo = generateRandomHex();
    let hexName = document.getElementsByClassName("hex-name-right");
    for (var i = 0; i < hexName.length; i++) {
      hexName[i].textContent = hexTwo;
    }
  }
  document.body.style.background =
    "linear-gradient(" + hexDirection + ", " + hexOne + ", " + hexTwo + ")";
}
