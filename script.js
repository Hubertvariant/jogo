const mario = window.document.querySelector('.mario')
const pipe = window.document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() =>{

        mario.classList.remove('jump')

    }, 500)
}
window.document.addEventListener('keydown', jump)
