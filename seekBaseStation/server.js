var express = require("express")//调用express
var app = express()//实例化express
var http = require("http").Server(app)//创建服务
var io = require("socket.io")(http)//载入socket服务

app.use("/",express.static(__dirname))//声明静态地址

http.listen(3000,function(){
	console.log("Web server listening on 127.0.0.1:3000")
})//监听3000端口


//socket事件处理
io.on("connect",function(socket){
	console.log("a user connected")
	socket.on("disconnect",function(){
		console.log("user disconnected")
	})
})


//socket服务
var net = require("net")
var HOST = "127.0.0.1"
var PORT = 3001
//创建套接字实例
net.createServer(function(socket){
	console.log("socket服务创建：" + socket.remoteAddress + ":" + socket.remotePort)

	socket.on("data",function(data){
		console.log("socket接收到数据：" + socket.remoteAddress  + ": " + data)
		//这里需要处理data数据格式为字符串 108.123456,34.123456
		io.emit("map",data.toString())
		socket.write("data received!")
	})

	socket.on("close",function(){
		console.log("socket服务断开：" + socket.remoteAddress + ":" + socket.remotePort)
	})
}).listen(PORT,HOST)

console.log("Socket server listening on "  + HOST +':'+ PORT)


//client socket客户端
var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据 
    //setTimeout(function(){
    	//client.write('this is data 0624');
    //},10000)

});

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', function(data) {

    console.log('DATA: ' + data);
    // 完全关闭连接
    client.destroy();

});

// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('Connection closed');
});