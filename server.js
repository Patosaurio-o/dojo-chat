const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

app.use(session({secret: 'hackeameesta'}));
app.use(flash());

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

app.use(require('./routes/form-users'));
app.use(require('./routes/routes'));

const server = app.listen(8000, () =>
console.log(`el server esta usando el puerto: ${server.address().port}!`)
);

const io = require('socket.io')(server);

io.on('connection', function(socket) {
  
  socket.on('msg', function(data) {
    socket.broadcast.emit('msg', {msg: msg});
  });

});