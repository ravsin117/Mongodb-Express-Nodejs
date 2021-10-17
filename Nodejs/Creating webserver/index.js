const http = require("http"); //this module  gives us netwroking capabilities
// two important tasks are to be done now :-
//1. create server
const server = http.createServer((req, res) => {
  // cb is fired each time a new req is made to server
  console.log(req);
  res.end("Reply From Server:hello from the server"); // res that we are going to send .
  //cb function has access to req and res variable. req has bunch of data like url.
  //res gives a lot of tools for sending out a response back.
});
//2.start the server to listen to incoming request
server.listen(3000, "127.0.0.1", () => {
  console.log("Server has been started");
}); //(port,host)
//port is basically an andress on host, by default host is set to localhost(address that we are specifying above),but we are just specifying here explicitly.
//localhost -> cuurent comp in which prog is running
console.log(1);
