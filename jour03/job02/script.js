document.addEventListener('DOMContentLoaded', function() {
    const arcEnCiel = document.getElementById('arc-en-ciel');
    const melangerBtn = document.getElementById('melangerBtn');
    const reconstituerBtn = document.getElementById('reconstituerBtn');
    const message = document.getElementById('message');

    // Mélanger les images
    melangerBtn.addEventListener('click', function() {
        for (let i = arcEnCiel.children.length; i >= 0; i--) {
            arcEnCiel.appendChild(arcEnCiel.children[Math.random() * i | 0]);
        }
        message.textContent = '';
    });

    // Reconstituer les images dans l'ordre
    reconstituerBtn.addEventListener('click', function() {
        const images = Array.from(arcEnCiel.children);
        const imagesSorted = images.slice().sort((a, b) => {
            return a.alt.localeCompare(b.alt);
        });
        if (arraysEqual(images, imagesSorted)) {
            message.textContent = 'Vous avez gagné';
            message.classList.remove('perdu');
            message.classList.add('gagne');
        } else {
            message.textContent = 'Vous avez perdu';
            message.classList.remove('gagne');
            message.classList.add('perdu');
        }
        arcEnCiel.innerHTML = '';
        imagesSorted.forEach(image => arcEnCiel.appendChild(image));
    });

    // Fonction pour comparer deux tableaux
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
});
