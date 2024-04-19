// Code Konami: Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A
const codeKonami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

function checkKonami(e) {
    if (e.code === codeKonami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === codeKonami.length) {
            // Le code Konami a été entré avec succès!
            document.body.classList.add('plateforme-styled'); // Ajoutez une classe CSS pour styliser la page
            konamiIndex = 0; // Réinitialisez l'index pour la prochaine utilisation
        }
    } else {
        konamiIndex = 0; // Réinitialisez l'index si la touche pressée ne correspond pas au code Konami
    }
}

document.addEventListener('keydown', checkKonami);
