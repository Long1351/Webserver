function addbutton() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:3000/node/app.js');
    xhr.send();
}