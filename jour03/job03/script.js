document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("game-board");
    const restartBtn = document.getElementById("restart-btn");

    // Tableau représentant l'état du jeu
    let gameState = ["logo1", "logo2", "logo3", "logo4", "logo5", "logo6", "logo7", "logo8", ""]; // Les 8 logos et une case vide

    // Fonction pour mélanger les carreaux aléatoirement
    function shuffleTiles() {
        for (let i = gameState.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gameState[i], gameState[j]] = [gameState[j], gameState[i]];
        }
    }

    // Fonction pour vérifier si le joueur a gagné
    function checkWin() {
        const winningState = ["logo1", "logo2", "logo3", "logo4", "logo5", "logo6", "logo7", "logo8", ""]; // L'état gagnant
        return JSON.stringify(gameState) === JSON.stringify(winningState);
    }

    // Fonction pour déplacer un carreau lorsqu'il est cliqué
    function moveTile(tileIndex) {
        const emptyIndex = gameState.indexOf("");
        const adjacentIndexes = getAdjacentIndexes(emptyIndex);

        if (adjacentIndexes.includes(tileIndex)) {
            // Échanger les positions du carreau cliqué et de la case vide
            [gameState[tileIndex], gameState[emptyIndex]] = [gameState[emptyIndex], gameState[tileIndex]];
            updateGameBoard();
            if (checkWin()) {
                alert("Vous avez gagné !");
                disableTileClick();
            }
        }
    }

    // Fonction pour obtenir les indexes des cases adjacentes à une case vide
    function getAdjacentIndexes(index) {
        const adjacentIndexes = [];
        if (index % 3 !== 0) adjacentIndexes.push(index - 1); // Gauche
        if (index % 3 !== 2) adjacentIndexes.push(index + 1); // Droite
        if (index >= 3) adjacentIndexes.push(index - 3); // Haut
        if (index < 6) adjacentIndexes.push(index + 3); // Bas
        return adjacentIndexes;
    }

    // Fonction pour générer le plateau de jeu et les carreaux
    function generateGameBoard() {
        board.innerHTML = "";
        gameState.forEach((tile, index) => {
            const tileDiv = document.createElement("div");
            tileDiv.classList.add("tile");
            tileDiv.addEventListener("click", () => moveTile(index));
            if (tile !== "") {
                const img = document.createElement("img");
                img.src = `file:///C:/Users/Patrac/Documents/Python/run%20track%20js/runtrackJs/jour03/job03/${logo}.png`;
                tileDiv.appendChild(img);
            }
            board.appendChild(tileDiv);
        });
    }

    // Fonction pour mettre à jour le plateau de jeu
    function updateGameBoard() {
        const tiles = document.querySelectorAll(".tile");
        tiles.forEach((tile, index) => {
            tile.innerHTML = ""; // Clear previous content
            if (gameState[index] !== "") {
                const img = document.createElement("img");
                img.src = `file:///C:/Users/Patrac/Documents/Python/run%20track%20js/runtrackJs/jour03/job03/${gameState[index]}.png`;
                tile.appendChild(img);
            }
        });
    }

    // Fonction pour désactiver les clics sur les carreaux
    function disableTileClick() {
        const tiles = document.querySelectorAll(".tile");
        tiles.forEach(tile => {
            tile.removeEventListener("click", moveTile);
        });
    }

    // Fonction pour recommencer le jeu
    function restartGame() {
        shuffleTiles();
        updateGameBoard();
        enableTileClick();
    }

    // Fonction pour activer les clics sur les carreaux
    function enableTileClick() {
        const tiles = document.querySelectorAll(".tile");
        tiles.forEach((tile, index) => {
            tile.addEventListener("click", () => moveTile(index));
        });
    }

    // Initialisation du jeu
    function init() {
        generateGameBoard();
        enableTileClick();
        restartBtn.addEventListener("click", restartGame);
    }

    init();
});
