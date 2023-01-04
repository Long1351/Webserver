const http = require('http');
const port = 3000;
const fs = require('fs'); 

const server = http.createServer((req, res) => {
    if (req.url == '/addItem') {
        let body;
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            
        });

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World');
    }
    

    if (req.url != '/') { 
        if (fs.existsSync('ui' + req.url)) {
            res.writeHead(200, {});
            fs.readFile('ui' + req.url,(error, data) => {
                res.write(data);
                res.end();
            });
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('node/ui/index.html', (error, data) => {
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

server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error);
        return;
    }
    console.log('Server is listening on port ' + port);
});