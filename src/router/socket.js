module.exports = function(server){

	let io = require('socket.io').listen(server),

		user = new Map(),
		newArticles = [];

	io.sockets.on('connection', function(socket) {

		//建立连接就获取最新数据
		io.sockets.emit('updateSize', user.size);
		
	    //login
	    socket.on('login', function(userName){
	    	user.set(userName, socket.id);
	    	console.log('Hello, ' + userName);
	    	io.sockets.emit('updateSize', user.size, userName, false)
	    }); 
	    
	    //sendMessage
	    socket.on('sendMessage', function(data) {
	        socket.broadcast.emit('updateMessage', data);  //传递给除了自身的其他用户
	    });

	    //exit
	    socket.on('exitChat', function(userName){
	    	user.delete(userName);
	        console.log(userName + '离开了聊天室！');
	        io.sockets.emit('updateSize', user.size, userName, true);
	    })

	    //disconnect 是固定的，无法传入数据, 所有新增一个exitChat
	    // socket.on('disconnect', function(type) {
	    //     user.delete(userName);
	    //     console.log(userName)
	    //     io.sockets.emit('updateSize', user.size, userName, true);
	    // });
	});
}