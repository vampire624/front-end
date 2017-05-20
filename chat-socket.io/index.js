var express = require("express")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.use("/",express.static(__dirname))

http.listen(3000,function(){
	console.log("the server is  running at port3000...")
})


io.on("connect",function(socket){
	console.log("a user connected")
	socket.on("disconnect",function(){
		console.log("user disconnected")
	})
	socket.on("chat",function(msg){
		// io.emit("chat",msg)
		socket.broadcast.emit("chat",msg)
	})
})



