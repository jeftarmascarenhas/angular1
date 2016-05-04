var app = require('express')();
var http = require('http').Server(app);

var port = process.env.PORT || 3412;

var contatos = [
                {name:'Jeftar Mascarenhas', email: 'jeftarmascarenhas@hotmail.com', images: '1.png', password:'121#@' },
                {name:'Filipe Sales', email: 'filipe@hotmail.com', images: '2.png', password:'131#@'},
                {name:'Kevin caravalho', email: 'kevin@hotmail.com', images: '3.png', password:'1221#@'}
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
