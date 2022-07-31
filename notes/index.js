let button = document.getElementById('addBtn');
button.addEventListener('click', checkNotes);

document.addEventListener('DOMContentLoaded', function () {
    let notes = localStorage.getItem('notes');
    if (notes != null) {
        document.getElementById('notes').innerHTML = notes;
    }
});

function saveNote(addNote) {
    let savedNotes = document.getElementById('notes');
    savedNotes.innerHTML += addNote + '<br>';

    localStorage.setItem('notes', savedNotes.innerHTML);
}

function checkNotes() {
    let addNote = document.getElementById('addNote').value;
    saveNote(addNote);
}