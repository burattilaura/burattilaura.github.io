// Definisci una funzione per il gestore del click sul pulsante di reset
function resetForm() {
    // Chiedi all'utente conferma prima di cancellare i dati
    var resetta = confirm("Sei sicuro di voler cancellare tutte le informazioni inserite?");
    
    // Se l'utente conferma, resetta i campi del modulo
    if (resetta == true) {  //controllo dell'istruzione if. La variabile conferma contiene il valore restituito dalla finestra di dialogo confirm() che abbiamo definito prima. Se l'utente ha premuto il pulsante "OK" nella finestra di conferma, il valore di conferma sarà true, altrimenti sarà false.
        document.form.reset(); //se confirm è true, doc. seleziona l'elemento del dom con l'IDmy form
    }
    else{ 
    }
}

