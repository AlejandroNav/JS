// get elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// built funcitions
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

function skip() {
    console.log( "Saltazndo " + this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)
}
function handleRange() {
    video[this.name] = this.value
    console.log(this.value);
    console.log(this.name);
}

function handleProgress() {
    const perCent =( video.currentTime / video.duration)*100
    progressBar.style.flexBasis = `${perCent}%`;
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
// Hook upo event listeners
// for playing
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
// for changing the button
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
// botnes de skip
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRange));
// mostrar barra de progreso
video.addEventListener('timeupdate', handleProgress)
// dar click en la barra
progress.addEventListener('click', scrub)
// para arrastrar la barra 
let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);