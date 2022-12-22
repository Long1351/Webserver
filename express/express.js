const express = require('express');
const app = express();
const port = 3000;

const users = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'John'});
});
app.get('/login', (req, res) => {
    res.render('login.ejs');
});
app.get('/register', (req, res) => {
    res.render('register.ejs');
});
app.post('/register', (req, res) => {
    req.body
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});