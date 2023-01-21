// モジュール読み込み
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 3001;

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('start', (msg) => {
    io.emit('refresh', msg);
  });

  socket.on('stop', (msg) => {
    io.emit('refresh', msg);
  });
});

// サーバーの実行
http.listen(PORT, () => {
  console.log('server listening. Port:' + PORT);
});
