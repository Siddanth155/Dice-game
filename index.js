var randomNumber1=Math.floor(Math.random()*6+1);
var sr="./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",sr);

var randomNumber2=Math.floor(Math.random()*6+1);
var st="./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",st);

if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="player 2 Wins🚩";
}else if(randomNumber2<randomNumber1){
    document.querySelector("h1").textContent="player 1 Wins🚩";
}else{
    document.querySelector("h1").textContent="Draw💋";
}
