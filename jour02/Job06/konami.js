var konamiCode = ['a', 'z', 'e', 'r', 't', 'y'];

var index = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === konamiCode[index]) {
        index++;
        if (index === konamiCode.length) {
            applyKonamiStyle();
            index = 0;
        }
    } else {
        index = 0;
    }
});

function applyKonamiStyle() {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
}
