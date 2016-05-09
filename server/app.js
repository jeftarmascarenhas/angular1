var app = require('express')();
var http = require('http').Server(app);

var port = process.env.PORT || 3412;

var contatos = [
                {images: '1.png', name:'Jeftar Mascarenhas', email: 'jeftarmascarenhas@hotmail.com', password:'121#@' },
                {images: '2.png', name:'Filipe Sales', email: 'filipe@hotmail.com', password:'131#@'},
                {images: '3.png', name:'Kevin caravalho', email: 'kevin@hotmail.com', password:'1221#@'}
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
