let enriqueAudio = null;

document.addEventListener("keydown", function(event) {
    if (
        event.altKey &&
        event.code === "KeyB" &&
        !event.repeat
    ) {
        event.preventDefault();

        if (enriqueAudio) {
            enriqueAudio.pause();
            enriqueAudio.currentTime = 0;
        }

        enriqueAudio = new Audio(
            chrome.runtime.getURL("enrique.mp3")
        );

        enriqueAudio.volume = 1;
        enriqueAudio.play();

        setTimeout(() => {
            if (enriqueAudio) {
                enriqueAudio.pause();
                enriqueAudio.currentTime = 0;
            }
        }, 3000);
    }
});
