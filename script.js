document.onkeydown = async function (e) {
    let audio = document.createElement('audio')
    audio.src = `assets/${e.key}.wav`;
    audio.autoplay = true;
}

function letMusicBe(elem) {
    let audio = document.createElement('audio')
    audio.src = `assets/${this.innerHTML}.wav`;
    audio.autoplay = true;
}

window.onload = async function () {
    let keys = document.querySelectorAll('kbd')
    keys.forEach((elem) => {
        elem.addEventListener('click', letMusicBe.bind(elem))
    })
}



