import express from "express";
const Books = [
  {
    id: 1,
    title: "Book1",
  },
  {
    id: 2,
    title: "Book2",
  },
];

const app = express();
const PORT = 7000;

//!middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("welcome");
});

app.get("/all-books", (req, res) => {
  res.status(200).json({ message: "book fetched succesfully", data: Books });
});

app.get("/books/:id", (req, res) => {
  let bookID = parseInt(req.params.id, 10);
  let myBook = Books.find((book) => book.id === bookID);

  if (!myBook) {
    return res.status(404).json({
      message: "Book Not Found",
    });
  }
  res.status(200).json({
    message: "Book Found",
    data: myBook,
  });
});

//!Add new Book
app.post("/add-book", (req, res) => {
  let { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  let newBook = {
    title,
    id: Books.length + 1,
  };
  Books.push(newBook);

  res.status(201).json({
    message: "Book added successfully",
    data: newBook,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("unable to start server", PORT);
    return;
  }
  console.log("Server Started", PORT);
});
