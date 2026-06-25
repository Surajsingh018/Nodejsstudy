import mongodb from "mongodb";

async function connectDB() {
  //! step1 : Create a connection
  const client = await mongodb.MongoClient.connect("mongodb://localhost:27017");

  // coonect method it return reference
  //! step2 : create a database
  const database = client.db("App1");

  //! step3 : create a database
  const collection = await database.createCollection("users");

  // console.log("Database Connection Establish");

  //! Create a Single User ---> insertOne()

  // collection.insertOne({fname: "John" , lname:"Doe",age:21})
  // console.log("UserCreated");

  //! Create multiple user --> insertMany()

  // collection.insertMany([
  //   { fname: "John" ,lname:"Doe", age : 23},
  //   {fname: "Suraj" , lname: "Singh", age : 24}
  // ])
  // console.log("Multiple user");

  //! Get Single User -> findOne({filter})

  // let user= await collection.findOne({fname: "Suraj"})
  // console.log(user);

  //! Get all User -> findmany({filter})
  // let user = await collection.find({}).toArray();
  // console.log(user);

  //! Update a user -> updateOne({filter}),({updateValue})
  let result = await collection.updateOne({
    fname: "John"},
    {$set: {age:30}}
  )
  console.log(result);
  
  //! Delete one  ->  deleteOne({filter})
  // let resp= await collection.deleteOne({fname: "John"})
  // console.log(resp);
  
  //! Delete many -> deleteMany({})

  let resp = await collection.deleteMany({})
  console.log(resp);
}

connectDB();
