
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var image1=document.querySelectorAll("img")[0];
// var image1=document.querySelector(".img1");
image1.setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Won✨"
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Won✨"
}
else{
  document.querySelector("h1").innerHTML="Match Draw 🤝"
}
