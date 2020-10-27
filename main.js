const { text } = require('express');
const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars({defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');

const PORT = parseInt(process.argv[2]) || 4400;

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

app.use(
    express.static(__dirname + '/public')
)

app.listen(PORT, () => {
    console.log (`The application has started on ${PORT}: ${new Date}`);
})