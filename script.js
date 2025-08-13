const text = document.getElementById("sec-text");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loop() {
    const textArray = ["Do Long", "cool", "dumm"];
    const sleepTime = 100;
    let j = 0;

    while (true) {
        for (let i = 0; i < textArray[j].length; i++) {
            text.innerHTML = textArray[j].substring(0, i + 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);

        for (let i = textArray[j].length; i > 0; i--) {
            text.innerHTML = textArray[j].substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 2);

        if (j == textArray.length - 1) {
            j = 0;
        } else {
            j++;
        }
    }
}

loop();
