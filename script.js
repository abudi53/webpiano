window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[key="${e.key}"]`)
    const key = document.querySelector(`div[key="${e.key}"]`);
    if (!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
})