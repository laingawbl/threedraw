var app = require('express')()
var session = require('express-session')
var io = require('socket.io')(8081)

app.listen(8080)

drawing = [];

drawing.push([{'x': -1, 'y': -1, 'z': -1},
							{'x': -1, 'y': -1, 'z': 1},
							{'x': 1, 'y': -1, 'z': 1},
							{'x': 1, 'y': -1, 'z': -1},
							{'x': -1, 'y': -1, 'z': -1}]);
							
app.use(session({
	secret: 'draw',
	resave: false,
	saveUninitialized: true
}))

app.get('/', function(req, res){
	res.sendfile('./draw.html')
})

io.on('connection', function (socket) {
	socket.emit('open', { 'serverIp': 	socket.request.headers.host})
  socket.on('addition', function(data){	
  	console.log(data)
  	drawing.push(data);
  	socket.emit('update', drawing);
  })
})


