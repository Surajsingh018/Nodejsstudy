import { connectDB } from "../config/database.js";
import path from "node:path";
import fs from "node:fs";

const getHtmlpage = (req, res) => {
  let filepath = path.join(import.meta.dirname, "..", "pages", "index.html");
  console.log(filepath);
  let src = fs.createReadStream(filepath, "utf-8");
  (src.pipe(res));
};
const handleSubmit = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const collection = await connectDB();
    await collection.insertOne({ username, email, password });
    res.json({ message: "user created", data: { username, email } });
  } catch (error) {
    console.log(error);
    res.json({ message: "unable to create a user", error });
  }
};
const getalluser = async (req, res) => {
  try {
    const collection = await connectDB();
    const users = await collection.find({}).toArray();
    res.json({ message: " fetched all user", users, totalUsers: users.length });
  } catch (error) {
    console.log(error);
    res.json({ message: " unable to fetch all user", error });
  }
};

export { getHtmlpage, handleSubmit, getalluser };

// path.join use krenge htmlpage ko extracts krte time
