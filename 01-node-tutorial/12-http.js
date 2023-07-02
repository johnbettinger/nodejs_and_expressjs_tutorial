const http = require('http');


 // req is incoming request (Client requesting from the browser ur webpage)
 // res is what we are sending back
 const server = http.createServer((req,res)=>{ 

    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('here is our short history')
    }
    res.end(`
    <h1> Oops!</h1>
<p>We an't seem to find the page you are looking for</p>
<a href="/">back home</a>
    `)
 })

 server.listen(3000) // what port the server is listening to 