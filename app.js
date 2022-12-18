const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/wordpress/') {
        fs.readFile('index.php', function(error, data) {
            res.write(data);
            res.end();
        });
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.write(data);
        }
        res.end();
    });

    server.listen(port, function(error) {
        if (error) {
            console.log('Something went wrong', error);
        } else {
            console.log('Server is listening on port ' + port);
        }
    })
});

/*
const {Builder, By, Key, until, Browser} = require('selenium-webdriver');
let driver;
openGoogle();

async function openGoogle() {
    driver = await new Builder().forBrowser(Browser.EDGE).build();
    await driver.get('http://www.google.com');
    await click('Alle akzeptieren');
    await driver.findElement(By.name('q')).sendKeys('YouTube', Key.RETURN);
    await click('YouTube');
    await click('Alle akzeptieren');
}

async function click(text) {
    await driver.findElement(By.xpath("//*[text()='" + text + "']")).click();
}
*/