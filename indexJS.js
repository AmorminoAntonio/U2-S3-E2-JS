
// class AgendaEvent {
//     constructor(img, name, date) {
//         this.eventImg = img;
//         this.eventName = name;
//         this.eventDate = date;
//     }
// }

// const generateCard = function (appointment) {
//     const cardRow = document.getElementById("card-row");

//     const col = document.createElement("col");
//     col.className = "col";
//     col.innerHtml = "";

//     cardRow.appendChild(col);
// }


// window.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form");
    
//     const inputImg = document.getElementById("event-img");
//     const inputName = document.getElementById("event-name");
//     const inputDate = document.getElementById("event-date");
//     form.onsubmit = function (e) {
//         e.preventDefault();
    
//         const appointment = new AgendaEvent(inputImg.value, inputName.value, inputDate.value);

//         generateCard(appointment);
//     };
// });


// const appointmentFromStorage = localStorage.setItem("");



//es 2

function updateCounter() {
    // Recupera il valore del contatore dal sessionStorage
    let time = sessionStorage.getItem('time');

    // Se non esiste, inizializza il contatore
    if (time === null) {
        time = 0;
    } else {
        // Incrementa il contatore di 1 ogni secondo
        time = parseInt(time) + 1;
    }

    // Memorizza il nuovo valore nel sessionStorage
    sessionStorage.setItem('time', time);

    // Mostra il valore aggiornato del contatore nella pagina
    document.getElementById('counter').textContent = time;

    // Mostra la durata della sessione
    document.getElementById('session-info').textContent = `Tempo di sessione: ${time} secondi`;
}

// Esegui l'aggiornamento del contatore ogni secondo
setInterval(updateCounter, 1000);

// Carica il contatore all'avvio della pagina
window.onload = updateCounter;









//es 1

function loadSavedName() {
    const savedName = localStorage.getItem("userName");
    const savedNameElement = document.getElementById("saved-name");

    if (savedName) {
        savedNameElement.innerHTML = `Nome salvato: ${savedName}`;
    } else {
        savedNameElement.innerHTML = "Nessun nome salvato.";
    }
}

// Funzione per salvare il nome nel localStorage
function saveName() {
    const name = document.getElementById("event-name").value;

    if (name) {
        localStorage.setItem("userName", name);
        loadSavedName(); // Ricarica il nome salvato dopo averlo memorizzato
    } else {
        alert("Inserisci il nome  prima di salvare.");
    }
}

// Funzione per rimuovere il nome salvato
function removeName() {
    localStorage.removeItem("userName");
    loadSavedName(); // Ricarica lo stato dopo la rimozione
}

// Aggiungi event listeners ai pulsanti
document.getElementById("save-btn").addEventListener("click", saveName);
document.getElementById("delete-btn").addEventListener("click", removeName);

// Carica il nome salvato (se presente) quando la pagina si carica
window.onload = loadSavedName;