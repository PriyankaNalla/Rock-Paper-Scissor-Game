const images=[
    './images/rock.png',
    './images/stone.png',
    './images/scissor.png'
];

const btn=document.getElementById("play");
const img1=document.getElementById("rock");
const img2=document.getElementById("paper");
const img3=document.getElementById("scissor");
const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const resultBox=document.getElementById("result");

let playerScore=0;
let compScore=0;

// Clear the score boxes on page load
window.onload = () => {
    box1.value = '';
    box2.value = '';
};

function playGame(playerChoice){
    const randomImg=Math.floor(Math.random()*images.length);
    const compChoice=images[randomImg];
    
    if(playerChoice===compChoice){
        resultBox.innerHTML = "<h3>It's a tie</h3>";
        resultBox.style.backgroundColor = "crimson";
        resultBox.style.fontSize = "1rem";
        resultBox.style.color = "white";
    }
    else if((playerChoice==='rock' && compChoice==='./images/scissor.png')||(playerChoice==='paper' && compChoice==='./images/rock.png')||(playerChoice==='scissor' && compChoice==='./images/paper.png')){
        resultBox.innerHTML = "<h3>I won</h3>";
        resultBox.style.backgroundColor="green";
        resultBox.style.fontSize = "1rem";
        resultBox.style.color = "white";
        playerScore++;
        box1.value = playerScore;
    }
    else{
        resultBox.innerHTML = "<h3>Computer wins</h3>";
        resultBox.style.backgroundColor="red";
        resultBox.style.fontSize = "1rem";
        resultBox.style.color = "white";
        compScore++;
        box2.value = compScore;
    }
    box1.style.fontSize="2rem";
    box2.style.fontSize="2rem";
}

img1.addEventListener("click", () => playGame('rock'));
img2.addEventListener("click", () => playGame('paper'));
img3.addEventListener("click", () => playGame('scissor'));