document.addEventListener('keydown', function(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (key) {
        key.classList.add('pressed');
    }
});

document.addEventListener('keyup', function(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (key) {
        key.classList.remove('pressed');
    }
});


