var http = require("http")
var express = require("express")
var fs = require("fs")
var app = express()
var server = http.createServer(app)

app.use(express.bodyParser())
app.use("/",express.static(__dirname + "/www"))
app.post("/file-upload",function(req,res){
	// 获取文件临时目录
	var temp_path = req.files.upload.path
	console.log(temp_path)
	var target_path = "./www/" + req.files.upload.name
	console.log(target_path)
	var rStream = fs.createReadStream(temp_path)
	var wStream = fs.createWriteStream(target_path)
	rStream.pipe(wStream)

	//使用fs.rename方法写入上传文件
	// fs.rename(temp_path,target_path,function(err){
	// 	if(err){
	// 		throw err
	// 	}
	// })

	res.writeHead(200,{
		"Content-Type":"text/plian"
	})
	res.end("File uploaded to: " + target_path)
})
server.listen(3000)

console.log("the server started...")