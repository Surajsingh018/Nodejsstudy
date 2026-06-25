//! HTTP Module is a core module used to create server

//! Steps To create a server

//1) import http
//2) use CreateServer()
//3) assign a PORT number
//4) define routes

import http from "node:http";

const server = http.createServer((req, res) => {
  // res.end("hii");
  res.setHeader("content-Type", "text/html")
  res.write("<h2>Hello India</h2>");
  res.end();
});

server.listen(9000, (err) => {
  if (err) {
    console.log("unable to create server", err);
  }
  console.log("server started at Port 9000");
});
