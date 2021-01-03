const mario = document.querySelector('.mario');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

 function handleKeyUp(event) {
     if (event.keyCode === 13) {
        if(!isJumping) {
        jump();
        }
    }
}

function jump() {
    isJumping = true;
    
    let upInterval = setInterval(() => {
        if (position >=200) { 
            clearInterval(upInterval); //descendo
    
    let downInterval = setInterval(() => {
        if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
        } else {
            position -= 20;
            mario.style.bottom = position + 'px';
            }
        }, 20);
    } else {
    //subindo
    position += 20;
    mario.style.bottom = position + 'px';
    }
}, 20);
}

function createcogumelo() {
    const cogumelo = document.createElement('div');
    let cogumeloPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (isGameOver) return; 

    cogumelo.classList.add('cogumelo');
    background.appendChild(cogumelo);
    cogumelo.style.left = cogumeloPosition + 'px';

    let leftTimer = setInterval(() => {
        if (cogumeloPosition < -60) { // saiu da tela
            clearInterval(leftTimer);
            background.removeChild(cogumelo);
            } else if (cogumeloPosition > 0 && cogumeloPosition <60 && position <60) {
                // game over
                clearInterval(leftTimer);
                isGameOver = true;
                document.body.innerHTML = '<img src="gameover2.jpg" class="gameover">' ;
            } else {
                cogumeloPosition -=10;
                cogumelo.style.left = cogumeloPosition + 'px';
                
                 
            } 
        }, 20);
        
    setTimeout(createcogumelo, randomTime);
    }

createcogumelo()
document.addEventListener('keyup', handleKeyUp);
