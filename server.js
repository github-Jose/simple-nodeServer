var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]
if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

// var port = process.env.PORT || 8888

var server = http.createServer(function (request, response){
  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  // 从这里开始看
  if (path === '/') {
    var string = fs.readFileSync('./index.html', 'utf8')
    var amount = fs.readFileSync('./db', 'utf8')
    string = string.replace('&&&amount&&&', amount)
    response.setHeader('Content-Type', 'text/html;chartset=utf-8')
    response.write(string)
    response.end()
  } else if (path === '/style.css') {
    var string = fs.readFileSync('./style.css', 'utf-8')
    response.setHeader('Content-Type', 'text/css')
    response.write(string)
    response.end()
  } else if (path === '/main.js') {
    var string = fs.readFileSync('./main.js', 'utf-8')
    response.setHeader('Content-Type', 'application/javascript')
    response.write(string)
    response.end()
  } else if (path === '/pay' && method.toUpperCase() === 'POST') {
    var amount = fs.readFileSync('./db', 'utf8') // 100
    var newAmount = amount - 1
    if (Math.random() > 0.5) {
      fs.writeFileSync('./db', newAmount)
      response.write('success')
    } else {
      response.write('fail')
    }
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('找不到对应的路径，你需要自行修改 server.js')
    response.end()
  }

  // 代码结束，下面不需要看
  console.log(method + ' ' + request.url)
})

// if(!port){
//   console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
//   process.exit(1)
// }

// var server = http.createServer(function(request, response){
//   var parsedUrl = url.parse(request.url, true)
//   var path = request.url 
//   var query = ''
//   if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
//   var pathNoQuery = parsedUrl.pathname
//   var queryObject = parsedUrl.query
//   var method = request.method

//   /******** 从这里开始看，上面不要看 ************/













//   console.log('JoseLiSay：得到的HTTP 路径\n' + path)
//   if(path == '/'){
// 	response.setHeader('Content-Type','text/html;charset=utf-8')	
//   	response.write('<!DOCTYPE>\n<html>'+
// 		'<header><link rel="stylesheet" href="/style.css"></header>'+
// 		'<body>'+
// 		'<h1>你好</h1>'+
// 		'<script src="/main.js"></script>'+
// 		'</body></html>')
// 	response.end()
//   }else if(path == '/style.css'){
// 	response.setHeader('Content-Type','text/css;charset=utf-8')
//   	response.write('body{background-color:#ddd;}h1{color:red;}')
// 	response.end()
//   }else if(path == '/main.js'){
// 	response.setHeader('Content-type','text/javascript;charset=utf-8')
//   	response.write('alert("响应的js")')
//         response.end()
//   }else{
//   	response.statusCode = 404
// 	response.end()
//   }









//   /******** 代码结束，下面不要看 ************/
// })

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


