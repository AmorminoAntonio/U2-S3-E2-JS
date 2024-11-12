//es 2

function updateCounter() {
    let time = sessionStorage.getItem('time');

    if (time === null) {
        time = 0;
    } else {
        time = parseInt(time) + 1;
    }
    sessionStorage.setItem('time', time);
    document.getElementById('counter').textContent = time;
    document.getElementById('session-info').textContent = `Tempo di sessione: ${time} secondi`;
}

setInterval(updateCounter, 1000);
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

function saveName() {
    const name = document.getElementById("event-name").value;

    if (name) {
        localStorage.setItem("userName", name);
        loadSavedName();
    } else {
        alert("Inserisci il nome  prima di salvare.");
    }
}

function removeName() {
    localStorage.removeItem("userName");
    loadSavedName();
}

document.getElementById("save-btn").addEventListener("click", saveName);
document.getElementById("delete-btn").addEventListener("click", removeName);

window.onload = loadSavedName;