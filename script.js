const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Do Long";
        text.style.animation = "animate 6s steps(25) infinite;";
    }, 0);
    setTimeout(() => { text.textContent = "ein Discord Bot Developer"; }, 6000);
    setTimeout(() => { text.textContent = "ein Web-Entwickler"; }, 12000);
}
textLoad();
setInterval(textLoad, 18000);