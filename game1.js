const imageElement = document.getElementById("dice-image");
const rollButton = document.querySelector("#dice-button");

const links = ["./Dice1.png","./Dice2.png","./Dice3.png","./Dice4.png","./Dice5.png", "./Dice6.png"]

function rollDie(){
    
    var randomNum = Math.floor(Math.random() * 6);
    imageElement.src = links[randomNum]; 
}

rollButton.addEventListener("click",rollDie);

document.addEventListener("keydown",function(event) {
    if (event.keyCode === 65) {
        rollDie();
    }
})
