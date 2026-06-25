import express from "express";
import fs from "node:fs";
import mongodb from "mongodb";

async function connectDB() {
  const client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  const database = client.db("Task1")
  const collection = await database.createCollection("users")
  return collection;
}

const app = express();
const Port = 9000;

//middlewares
app.use(express.urlencoded({extended: true})); //it parses form data

app.get("/", (req, res) => {
  let src = fs.createReadStream("./pages/index.html","utf-8")
  src.pipe(res);
});



app.post("/submit", async (req, res) => {
 try {
  let { username, email, password } = req.body;
  const collection = await connectDB();
  await collection.insertOne({ username, email, password });
  res.json({ message: "User Created", data: { username, email } });
 } catch (error) {
    console.log(error);
    res.json({ message: "Unable to create a user", error });
 }
});

app.get("/users", async (req,res)=>{
  try{
    const collection = await connectDB();
    const users = await collection.find({}).toArray();
    res.json({message: "fetched all user", users, totalUsers: users.length});

  }catch(error){
    console.log(error);
    res.json({message: "unable to fetch all user",error})
    
  }
})



app.listen(Port, (err) => {
  if (err) {
    console.log("Server not started", Port);
    return;
  }
  console.log("Server started port", Port);
});
