// Sélection du textarea
var keylogger = document.getElementById("keylogger");

// Ajout d'un écouteur d'événement pour détecter les frappes de clavier
document.addEventListener("keydown", function(event) {
    // Vérifie si la touche pressée est une lettre de a à z
    if (event.key.match(/[a-z]/i)) {
        // Vérifie si le focus est dans le textarea
        if (document.activeElement === keylogger) {
            // Si le focus est dans le textarea, ajoute la lettre deux fois
            keylogger.value += event.key + event.key;
        } else {
            // Si le focus n'est pas dans le textarea, ajoute la lettre une fois
            keylogger.value += event.key;
        }
    }
});
