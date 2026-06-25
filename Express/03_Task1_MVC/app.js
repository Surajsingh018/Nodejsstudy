import express from "express";
import userRoutes from "./routes/user-routes";

//!app intialize
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended: true})); 

//!routes
app.use(userRoutes);

//! server
app.listen(PORT, (err) => {
  if (err) {
    console.log("unable to start server", PORT);
  }
  console.log("Server Started", PORT);
});
