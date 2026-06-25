//! FILE SYSTEM - FS (CORE MODULE)
// to perform CRUD on files and folders

import { log } from "node:console";
import fs from "node:fs";
// console.log(fs);

//! ------------SYNCHRONOUS WAY-------------

//! CREATE A FILE --> fs.writeFileSync("path" , "data")
//--- if file is not present create it otherwise if file is present override the data

// fs.writeFileSync("./test1.txt", "i am test 3");
// console.log("file created");

//! READ A FILE --> fs.readFileSync("path" , "encoding")
// let data = fs.readFileSync("./test1.txt" , "utf-8");
// console.log(data);

//! UPDATE A FILE --> fs.appendFileSync("path" , "new updated data")
// fs.appendFileSync("./test1.txt", "\nUpdated");
// console.log("file updated");

//! DELETE A FILE --> fs.unlinkSync("path")
// fs.unlinkSync("./test1.txt");
// console.log("file deleted");

//! ------------ASYNCHRONOUS WAY-------------

//! Create a file :- fs.writeFile("path","data", callback)
// ---> callback :- is known as error first callback

// error callback function is a whose first paeameter that store error

// console.log(1);

// fs.writeFile("./demo.txt", "i am demo file" ,(err)=>{
//   if(err){
//     console.log("unable to create a file", err);

//   }
//   console.log("file created");

// })
// console.log(2);

//!Read a file :- fs.readFile("path","encoding",callback)

// fs.readFile("./demo.txt","utf-8", (err,data)=>{
//   if(err){
//     console.log("unable to read", err);

//   }
//   console.log("File Read Sucess ...>",data);

// })

//!Update a file :- fs.append("path","new Data", callback)

// fs.appendFile("./demo.txt", "\nhello world" , (err)=>{
//   if(err){
//     console.log("not updated ",err);

//   }console.log("updated successfully");

// })

//! Delete a file :- fs.unlink("path",callback)

// fs.unlink("./demo.txt" , (err)=>{
//   if(err){
//     console.log("delete not");

//   }console.log("delete sucess");

// })

//!Task :- Create and update file (not recommended)
// CallBack Hell : to avoid this we have to use promises

// fs.writeFile("./text.txt","i am demo",(err)=>{
//   if(err){
//     console.log("unable to create ",err);

//   }
//   console.log("create sucess");

// })
// fs.appendFile("./text.txt", "\nhello node", (err)=>{
//   if(err){
//     console.log("unable to update",err);

//   }else if (fs.appendFile("./text.txt","\nhello react",(err)=>{
//     if(err){
//       console.log("not update2nd",err);

//     }console.log("update 2nd");

//   }))
//   console.log("update sucess");

// })

//! ----------------Using Promise --------------------

import fsp from "node:fs/promises";

//!Create

// let resp = fsp.writeFile("./demo1.txt","Enter all course");

// resp.then(()=>{
//   console.log("File Created");

// })
// resp.catch((err)=>{
//   console.log(err);
// })

//!Read

// let resp = fsp.readFile("./demo1.txt", "utf-8")

// resp.then((data)=>{
//   console.log("file read sucesss" , data);

// })
// resp.catch((err)=>{
//   console.log(err);

// })

let resp1 = fsp.writeFile("./demo.txt", "i am demo");

resp1.then(() => {
  console.log("file created");

  let resp2 = fsp.appendFile("./demo.txt", "\nhello node");

  resp2.then(()=>{
    console.log("update 1 done");
    
    let resp3 = fsp.appendFile("./demo.txt", "\nhello react" );

    resp3.then(()=>{
      console.log("update 2 done");
      
    })
    resp3.catch((err)=>{
      console.log(err);
      
    })
  })
  resp2.catch((err)=>{
    console.log(err);
    
  })
})

