const http=require('http')
const url=require('url')

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');

    //parse the request
    let obj=url.parse(req.url,true).query;
    if(obj.uname=='node'&& obj.upwd=='node'){
        res.write('<h1>Login Successful</h1>');
    }else{
        res.statusCode=400;
        res.write('<h1>Login Failed</h1>');
    }

    res.end()
})

server.listen(4000);
console.log('Server is listening at the port no 4000')