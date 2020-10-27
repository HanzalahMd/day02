const { text } = require('express');
const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs({defaultlayout: 'main.hbs'}));
app.set('view engine', 'hbs');

const PORT = parseInt(process.argv[2]) || 4400;

app.listen(PORT, () => {
    console.log (`The application has started on ${PORT}: ${new Date}`);
})

app.use(
    express.static(__dirname + '/public')
)

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

console.log('modified');