const fs = require("fs");
const text = document.getElementsByClassName("sec-text")[0];
function textLoad() {
    setTimeout(() => {
        text.textContent = "Do Long";
        
    }, 0);
    setTimeout(() => { text.textContent = "ein Discord Bot Developer"; }, 3000);
    setTimeout(() => { text.textContent = "ein Web-Entwickler"; }, 6000);
}
textLoad();
setInterval(textLoad, 9000);