const http = require('http');
const port = 3000;
const fs = require('fs'); 

const server = http.createServer((req, res) => {  
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('node/ui/index.html', function(error, data) {
            if (error) {
                console.error(error);
                res.end('An error occurred');
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

server.listen(port, () => {
    console.log('Server is listening on port ' + port);
});