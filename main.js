const { text } = require('express');
const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs({defaultLayout: 'default.hbs'}));
app.set('view engine', 'hbs');

const PORT = parseInt(process.argv[2]) || 4400;

const rollDices = () => Math.floor(Math.random() * 6 + 1);

const diceImages = [
    '', 'one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'
]

app.get('/roll', (req, res) => {
    const d1 = diceImages[rollDices()];
    const d2 = diceImages[rollDices()];
    res.status(200);
    res.type('text/html');
    res.render('roll', {d1, d2});
})

app.get('/result', (req, res) => {
    res.status(200);
    res.type('text/html');
    res.render('result');
})

app.get('/test', (req, res) => {
    res.status(200);
    res.type('text/html');
    res.render('test');
})

app.get('/', (req, res) => {
    res.status(200);
    res.type('text/html');
    res.render('index');
})

app.use(
    express.static(__dirname + '/public')
)

app.listen(PORT, () => {
    console.log (`The application has started on ${PORT}: ${new Date}`);
})

