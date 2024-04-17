$(document).ready(function() {
    // Sélection du bouton d'affichage et ajout d'un gestionnaire d'événements
    $('#afficherBtn').click(function() {
        // Afficher le texte en changeant le style d'affichage à 'block'
        $('#texteCitation').show();
    });

    // Sélection du bouton de masquage et ajout d'un gestionnaire d'événements
    $('#cacherBtn').click(function() {
        // Masquer le texte en changeant le style d'affichage à 'none'
        $('#texteCitation').hide();
    });
});
