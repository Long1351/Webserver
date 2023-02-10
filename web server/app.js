const express = require("express");
const app = express();
const path = require("path");
const port = 80;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.post("/addItem", (req, res) => {
    let body = JSON.stringify(req.body);
    console.log(body);
    res.send(body);

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
