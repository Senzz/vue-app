// app.js

var chatSocket = require('./src/router/socket.js')
var server = require('./build/dev-server.js') 


//添加socket
chatSocket(server);