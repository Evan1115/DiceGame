

var randomNum1 = Math.floor(Math.random() * 6) + 1; //first generate random num from 0 - 0.999, then multiply by 6 becomes 0 - 5.999 and floor to 0 - 5 , then + 1 becomes 1 -6
var randomNum2 = Math.floor(Math.random() * 6 ) + 1;

var imageSource1 = "images/dice" + randomNum1 + ".png";
var imageSource2 = "images/dice" + randomNum2 + ".png";



document.querySelectorAll("img")[0].setAttribute("src", imageSource1);
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else if ( randomNum2 == randomNum1){
    document.querySelector("h1").innerHTML = "Draw!";
}




