var express = require('express');
var app = express();
var sharejs = require('share').server;
var exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

var options = {db: {type: 'none'}};
sharejs.attach(app, options);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
