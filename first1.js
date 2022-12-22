const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("hello deepika nice");
   res.end();
})
server.listen(4000);
