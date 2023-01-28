const http = require('http');
const fs = require('fs');
const port = 1000;

http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('./node/ui/index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        })
    };
}).listen(port, () => console.log(`Server running on port ${port}`));