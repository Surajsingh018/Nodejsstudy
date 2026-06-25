import http from "node:http";
import fs from "node:fs";

let server = http.createServer((req, res) => {
  //! Sending html file

  //   let src = fs.createReadStream("./index.html", "utf-8");
  //   res.writeHead(200, ("content-Type", "text/html"));
  //   src.pipe(res);
  // });

  //! CSS FIle

  
  //   let src = fs.createReadStream("./style.css", "utf-8");
  //   res.writeHead(200, ("content-Type", "text/css"));
  //   src.pipe(res);
  // });

  //! Json file

  let src = fs.createReadStream("./Obj.json", "utf-8");
  res.writeHead(200, ("content-Type", "application/json"));
  src.pipe(res);
});


server.listen(9000, (err) => {
  if (err) {
    console.log("unable to create server", err);
  }
  console.log("server started at Port 9000");
});
