const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

var players = [];

// Configuración Express
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

io.on('connection', (socket) => {
    players.push({
      posx: 100, 
      poxy: 450, 
      id: socket.id,
      velocityX: 0 
      });

    socket.on('updatePlayers', (data) => {
        for (player of players) {
            if (player.id === socket.id) {  
                player.posx = data.posx;
                player.posy = data.posy;
                player.velocityX = data.velocityX || 0;
            }
        }
        io.emit('updatePlayers', players);
    });

    socket.on('disconnect', () => {
        players = players.filter(p => p.id !== socket.id);
        io.emit('updatePlayers', players); // 👈 Notifica a tots
    });
});