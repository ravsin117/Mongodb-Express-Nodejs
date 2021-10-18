const http=require('http');
const url = require('url');// we need it for extracting specific parts of urls from the requests that are made 

const server=http.createServer((req,res)=>{
    console.log(req.url);// this cb fn is executed twice bcz we get two outputs.->
    // /
    // /favicon.ico
    // the browser here automatically requests for favicon(just ignore this for now).
    //if we specify 127.0.0.1/overview and reload the page , then on console here we get O/P->
    // /overview  <- just this one matters 
    // /favicon.ico
    const pathname=req.url;
    if(pathname==='/overview'|| pathname==="/"){
        res.end('This is the overview')
    }else if(pathname=='/product'){
        res.end('This is the Product')
    }else{
        res.writeHead(404,{ // http heaeder is the peace of response that we qare sending back.(headers must be set befpre we send out statis codes).
        'Content-type':'text/html', //<-one of the standard header is to inform browser about content type the browser should expect
        'my-own-header':'hello-world'
        });
        res.end('<h1>Page not Found</h1>');
    }
    // res.end("Response From the Server");
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to requsts on port 8000');
})

// this is how we implement routing 