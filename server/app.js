var app = require('express')();
var http = require('http').Server(app);

var port = process.env.PORT || 3412;

var contatos = [
                {name:'Jeftar Mascarenhas', email: 'jeftarmascarenhas@hotmail.com', password:'121#@', img: 'images/1.jpg' },
                {name:'Filipe Sales', email: 'filipe@hotmail.com', password:'131#@', img: 'images/2.jpg'},
                {name:'Kevin caravalho', email: 'kevin@hotmail.com', password:'1221#@', img: 'images/3.jpg'}
              ];


http.listen(port,function functionName() {
  console.log('Server Runnig: ' + port);
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contacts', function (req, res) {
  res.json(contatos);
});

app.post('/contacts', function (req, res) {
  contatos.push(req.body);
  res.json(true);
});
