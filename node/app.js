const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.all("*", (req, res) => {
    function sendFile(path) {
        fs.readFile(path, (err, data) => {
            if (err) {
                res.send("404 Not Found");
            } else {
                res.send(data);
            }
        });
    }
    sendFile("index.html");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});