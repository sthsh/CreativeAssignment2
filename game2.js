const playerImage = document.getElementById("rsp-you");
const comImage = document.getElementById("rsp-computer");
const rockButton = document.getElementById("rock-button");
const scissorButton = document.getElementById("scissor-button");
const paperButton = document.getElementById("paper-button");
const rspResult = document.getElementById("rsp-result");

const links = ["./Rock.png","./Scissors.png","./Paper.png"]

function RSPRock(){
    playerImage.src = links[0];
    
    var randomNum = Math.floor(Math.random() * 3);
    comImage.src = links[randomNum]; 
    
    if (randomNum === 0){
        rspResult.innerText = "Draw"; 
    } else if (randomNum ===1){
        rspResult.innerText = "You Win";         
    } else {
        rspResult.innerText = "You Lose";        
    }
}

function RSPScissor(){
    playerImage.src = links[1];
    
    var randomNum = Math.floor(Math.random() * 3);
    comImage.src = links[randomNum]; 
    
    if (randomNum === 0){
        rspResult.innerText = "You Lose"; 
    } else if (randomNum ===1){
        rspResult.innerText = "Draw";         
    } else {
        rspResult.innerText = "You Win";        
    }
}

function RSPPaper(){
    playerImage.src = links[2];
    
    var randomNum = Math.floor(Math.random() * 3);
    comImage.src = links[randomNum]; 
    
    if (randomNum === 0){
        rspResult.innerText = "You Win"; 
    } else if (randomNum ===1){
        rspResult.innerText = "You Lose";         
    } else {
        rspResult.innerText = "Draw";        
    }
}

rockButton.addEventListener("click",RSPRock);
scissorButton.addEventListener("click",RSPScissor);
paperButton.addEventListener("click",RSPPaper);

document.addEventListener("keydown",function(event) {
    if (event.keyCode === 65) {
        RSPRock();
    } else if (event.keyCode === 83){
        RSPScissor();
    } else if (event.keyCode === 68){
        RSPPaper();
    }        
})
