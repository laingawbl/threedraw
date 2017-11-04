var app = require('express')();
var io = require('socket.io')(8080);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/draw.html');
});

io.on('connection', function(sock){
	sock.emit(
});

app.listen(8080);
