import fs from "node:fs";

// fs.readFile("index.js", "utf-8", (err, data) => {
//   if (err) {
//     console.log("unable to read file", err);
//   }
//   console.log("file read successfully");
//   console.log(data);
// });

//!Streams and buffer

//! Buffer - A temporary space in memory
//! String - continuesly reading and writing the data in chunks

//! Default Buffer Size
//Normal files ---> 64kb
//Large File video ya audio ---> 16kb

//!Streams are of 4 types

//! 1) Writeable Streams - to write data in chunks
// fs.createWriteStream("path")

//! 2) Readable Streams - to read data in chunks
// fs.createReadStream("path", "encoding")

//! 3) Duplex Streams -to write and read data in chunks (Important)
// src.pipe(destination)

// let src = fs.createReadStream("./index.js")
// let destination = fs.createWriteStream("./index.txt")
// src.pipe(destination)

//! how Chuncks works

let src = fs.createReadStream("./text.txt", {
  encoding: "utf-8",
  highWaterMark: 1, // <.....Size of chunk in byte
});

//1 byte = 8bits ====> 1 alphabet 8 bits

src.on("data", (chunck) => {
  console.log(chunck, `length is ${chunck.length}`);
});

//! 4) Transform Streams - to write , read and update data in chunks
//
