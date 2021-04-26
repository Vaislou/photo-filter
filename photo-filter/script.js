//fullscreen
const fullScr = document.getElementById('fullScreen');
fullScr.addEventListener('click', toggleScreen);

function toggleScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen(); 
    } else {
        document.exitFullscreen();
    }
}