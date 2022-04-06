var randomnumber = Math.floor(Math.random() * 6) + 1;

var randomimages = "images/"+"dice"+randomnumber+".png";

var image = document.querySelectorAll("img")[0];

image.setAttribute("src",randomimages);

var radomnumber2 = Math.floor(Math.random()*6) + 1;

var randomimagesource2 = "images/"+"dice"+radomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomnumber > radomnumber2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WIN!";
}else if(radomnumber2 > randomnumber){
    document.querySelector("h1").innerHTML = "PLAYER 2 wIN!";
}else{
    document.querySelector("h1").innerHTML = "DRAW!";
}