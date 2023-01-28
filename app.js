const express = require("express");
const app = express();
const path = require("path");
const port = 1000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.post("/addItem", (req, res) => {});
app.delete("/delItem", (req, res) => {
    res.send("File deleted!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
