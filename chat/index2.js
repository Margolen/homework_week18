let button = document.getElementById('button');
button.addEventListener('click', checkMessage);


document.addEventListener('DOMContentLoaded', function () {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById('author').value = name;
    }

    let photo = localStorage.getItem('photo');
    if (photo != null) {
        document.getElementById('authorPhoto').value = photo;
        document.getElementById('avatar').src = photo; ~
    }
});

function sendMessage(author, comment) {
    let chat = document.getElementById('chat');
    chat.innerHTML = chat.innerHTML + `<span class='author'>${author}:</span><span>${comment}</span><br>`;
}

function checkMessage() {
    let author = document.getElementById('author').value;
    let comment = document.getElementById('comment').value;
    let authorPhoto = document.getElementById('authorPhoto').value;

    localStorage.setItem('name', author);
    localStorage.setItem('photo', authorPhoto);

    sendMessage(author, comment);
    document.getElementById('avatar').src = authorPhoto;
}