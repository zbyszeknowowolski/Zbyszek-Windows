// Otwieranie aplikacji
function openMyFavouritePlicks() {
    document.getElementById("plicksWindow").style.display = "block";
}

// Zamknięcie okna aplikacji
function closeWindow() {
    document.getElementById("plicksWindow").style.display = "none";
}

// Obsługa dodawania plików
document.getElementById("fileInput").addEventListener("change", function(event) {
    let fileList = document.getElementById("fileList");
    fileList.innerHTML = ""; // Czyścimy listę przed dodaniem nowych plików

    for (let file of event.target.files) {
        let listItem = document.createElement("li");
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
    }
});
