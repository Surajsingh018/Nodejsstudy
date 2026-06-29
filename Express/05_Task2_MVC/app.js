import express from "express";

const app = express();
const PORT = 9000;


app.listen(PORT, (err) => {
  if (err) {
    console.log("unable to create server", PORT);
  }
  console.log("Server Created Succesful", PORT);
});
