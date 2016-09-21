/**
 * Created by xuyiming on 16/9/21.
 */
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port:3000});

wss.on('connection', function(socket){
    socket.send('连接成功.');
    console.log('有用户连接成功.');
});
