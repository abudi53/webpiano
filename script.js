const tiles = Array.from(document.querySelectorAll('.tile'));
tiles.forEach(tile => tile.addEventListener('transitionend', removeTransition));

const subtiles = Array.from(document.querySelectorAll('.sub-tile'));
subtiles.forEach(subTile => subTile.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[key="${e.key}"]`)
    const key = document.querySelector(`div[key="${e.key}"]`);
    if (!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
})

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }