var app = require('express')()
var io = require('socket.io')(8081)

app.listen(8080)

drawing = [];
drawing.push([{'x': -1, 'y': -1, 'z': -1},
							{'x': -1, 'y': -1, 'z': 1},
							{'x': 1, 'y': -1, 'z': 1},
							{'x': 1, 'y': -1, 'z': -1},
							{'x': -1, 'y': -1, 'z': -1}]);
							
drawing.push([{'x': -1, 'y': 1, 'z': -1},
							{'x': -1, 'y': 1, 'z': 1},
							{'x': 1, 'y': 1, 'z': 1},
							{'x': 1, 'y': 1, 'z': -1},
							{'x': -1, 'y': 1, 'z': -1}]);		
							
drawing.push([{'x': 1, 'y': 1, 'z': 1}, {'x': 1, 'y': -1, 'z': 1}]);
drawing.push([{'x': 1, 'y': 1, 'z': -1}, {'x': 1, 'y': -1, 'z': -1}]);		
drawing.push([{'x': -1, 'y': 1, 'z': -1}, {'x': -1, 'y': -1, 'z': -1}]);		
drawing.push([{'x': -1, 'y': 1, 'z': 1}, {'x': -1, 'y': -1, 'z': 1}]);	

app.get('/', function(req, res){
	res.sendfile('./draw.html')
})

io.on('connection', function (socket) {
	console.log(socket.request.headers.origin);
	socket.emit('open', {'serverIp': 	socket.request.headers.host})
  socket.on('addition', function(data){	
  	drawing.push(data);
  	socket.emit('update', drawing);
  })
})


