randomNumber1 =Math.floor(Math.random()*6)+1;
randomNumber2 =Math.floor(Math.random()*6)+1;
document.querySelector("img.img1").setAttribute("src","images/dice"+ randomNumber1 +".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+ randomNumber2 +".png");

if (randomNumber1 == 6){
    console.log("left won");
    document.querySelector("h1").innerHTML = "left won "
}
if (randomNumber2 == 6){
    console.log("left won");
    document.querySelector("h1").innerHTML = "Right won "
}
if (randomNumber2 == randomNumber1){
    document.querySelector("h1").innerHTML = "Draw"
}