const http = require("http");
const fs = require("fs");
const port = 1000;

http.createServer((_req, res) => {
    function sendFile(filename, contentType) {
        fs.readFile(filename, (error, data) => {
            if (error) {
                console.error(error);
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.write("Something does not work well");
            } else {
                res.writeHead(200, { "Content-Type": contentType });
                res.write(data);
            }
        });
    }

    sendFile("./node/ui/index.html", "text/html");
    sendFile("./node/ui/style.css", "text/css");
    sendFile("./node/ui/script.js", "text/javascript");
    res.end();
}).listen(port, (error) => {
    if (error) {
        console.log("Something went wrong" + error);
    } else {
        console.log("Everything is working fine on port " + port);
    }
});
