const { json } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const port = 80;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.post("/additem", (req, res) => {
    console.log(JSON.parse(req.body));
    res.send("wer hat gefragt?");

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
