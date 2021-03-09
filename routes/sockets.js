const { io } = require('../server')

io.on('connection', function(socket) {
  
  socket.on('msgSend', function(datos) {
    socket.broadcast.emit('msg', datos);
  });
  socket.on('userLogin', function(data){
    socket.broadcast.emit('userChat', data);
  });
});