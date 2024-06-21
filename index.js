var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var leftImageSource = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var rightImageSource = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", leftImageSource);
document.querySelector(".img2").setAttribute("src", rightImageSource);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins.";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins.";
} else {
  document.querySelector("h1").textContent = "Draw.";
}
