const express = require("express");
const app = express();
const path = require("path");
const port = 80;

// Rate limiting middleware
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

app.use(express.static("public"));

app.get("/", limiter, (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.post("/additem", (req, res) => {
    console.log(typeof req.body);
    res.send("wer hat gefragt?");
});

app.get("/getitems", (req, res) => {
    res.send("wer hat gefragt?");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
