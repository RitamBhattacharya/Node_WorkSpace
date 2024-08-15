const http=require('http')

let server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.write('<h1>Hello I am From HTTP module</h1>')
    res.end()
})

server.listen(4000)
console.log('Server Listening at the port no 4000...')

