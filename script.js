const mario = window.document.querySelector('.mario');
const pipeElement = window.document.querySelector('.pipe'); // Renamed for clarity

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

window.document.addEventListener('keydown', jump);

const loop = setInterval(() => {
    // Correctly reference the pipe element using pipeElement
    const pipePosition = pipeElement.offsetLeft; 

    // Assuming a game over condition where the pipe is close enough to Mario
    // and Mario is not jumping high enough (e.g., if Mario's bottom is also checked)
    if (pipePosition <= 120 && pipePosition > 0) { // Added a lower bound to prevent immediate stop
        pipeElement.style.animation = 'none';
        // Optionally, clear the interval to stop the game loop
        // clearInterval(loop); 
    }
}, 10);