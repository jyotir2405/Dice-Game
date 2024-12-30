var random1 = Math.floor(Math.random()*6 + 1);
var imgl = "images/dice" + random1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",imgl);
var random2 = Math.floor(Math.random()*6 + 1);
var imgr = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",imgr);

if (random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 wins !!!";
}
else if (random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 wins !!!";
}
else{
    document.querySelector("h1").innerHTML = "Draww !!!";
}