document.onkeydown = async function (e) {
    let audio = document.querySelector('audio')
    audio.src=`assets/${e.key}.wav`;
    audio.autoplay=true;
}

function letMusicBeClick (elem) {
    let audio = document.querySelector('audio')
    audio.src=`assets/${this.innerHTML}.wav`;
    audio.autoplay=true;
}

    window.onload = async function () {
    let keys = document.querySelectorAll('kbd')
        keys.forEach((elem) => {
        elem.addEventListener('click', letMusicBeClick.bind(elem))
        })
    }



