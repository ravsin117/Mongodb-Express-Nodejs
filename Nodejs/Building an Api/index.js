// building a web api

//api-> is a service from which we can request some data
const http = require('http');
const url= require('url');
const fs= require('fs');

const data=fs.readFileSync("./dev-Data/data.json", "utf-8")// here we are using sync functions bcz this will only read the file once and the callback function which is present below will be executed each time the request for api is made 
const dataobj= JSON.parse(data);


const server=http.createServer((req,res)=>{
    console.log(req.url);
    const pathname=req.url;
    if(pathname==='/'|| pathname==="/overview"){
        res.end('this is the overview');
    }else if (pathname === "/product") {
      res.end("this is the product");
    } else if (pathname === "/api") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    //   fs.readFile("./dev-Data/data.json", "utf-8", (err, data) => {
    //     const prodData = JSON.parse(data);
    //     // console.log(1);
    //     // console.log(prodData);
    //     res.writeHead(200, {'Content-type':'application/json'}); // for sending json data.
    //     res.end(data); // in this case we were reading file everyti,e this api route was hit by any user and each time we would read file then display the O/p, instead we can read the file in begining and give the o/p whenever user needs it
    //   });
    } else {
      res.writeHead(404, {
        "Content-type": "text/html",
        "my-own-header": "hello-world",
      });
      res.end("<h1>page nor found</h1>");
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening on port 8000')
})



