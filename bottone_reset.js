// Aggiungiamo un gestore di eventi per il submit del modulo
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
        // Interrompiamo l'azione predefinita del modulo
        event.preventDefault();
        
        // Chiamiamo una funzione per confermare l'eliminazione dei campi
        confermaEliminazioneCampi();
    });
});

// Funzione per mostrare una conferma prima di eliminare i campi del modulo
function confermaEliminazioneCampi() {
    // Mostriamo una finestra di dialogo al utente
    var conferma = confirm('Sei sicuro di voler cancellare tutti i campi del modulo?');

    // Se l'utente conferma, resettiamo i campi del modulo
    if (conferma) {
        var form = document.querySelector('.form');
        form.reset();
    }
}
