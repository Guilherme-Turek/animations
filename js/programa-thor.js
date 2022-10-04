const container = document.querySelector('.container');
const poster    = document.querySelector('.poster');

function estreia(){

    container.setAttribute('style', 'animation: fadeInAnimation ease 3s; animation-iteration-count: 1; animation-fill-mode: forwards; display: none;')
    poster.setAttribute('style', 'animation: fadeOutAnimation ease 3s; animation-iteration-count: 1; animation-fill-mode: forwards; display: flex;')
    audio = new Audio('audio/som.mp3');
    audio.play();
}
