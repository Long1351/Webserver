const http = require('http');
const port = 3000;
const fs = require('fs'); 

const server = http.createServer((req, res) => {
    
    if (req.url == '/getitems') {
        fs.readFile('list.json', (error, data) => {
            res.write(JSON.parse(data)["products"].toString());
            res.end();
        });  
    }

    if (req.url == '/addItem') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            
        });

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World');
        res.end();
        return;
    }
    

    if (req.url != '/') { 
        if (fs.existsSync('ui'+req.url)) {
            res.writeHead(200);
            fs.readFile('ui'+req.url, function(error, data) {
                res.write(data);
                res.end();
            });
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('ui/index.html', function(error, data) {
            res.write(data);
            res.end();
        });
    }
});

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});