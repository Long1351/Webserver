const text = document.getElementById("sec-text");
function textLoad() {
    setTimeout(() => {
        text.textContent = "Do Long";
        text.style.animation = "none";
    }, 0);
    setTimeout(() => {
        text.textContent = "ein Discord Bot Developer";
    }, 3000);
    setTimeout(() => {
        text.textContent = "ein Web-Entwickler";
    }, 6000);
}
textLoad();
setInterval(textLoad, 9000);