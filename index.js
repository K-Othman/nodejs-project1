const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/Article");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://karim:karim@cluster0.klmixfi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((error) => {
    console.log("Error With Data The DB", error);
  });

// mongodb+srv://karim:<password>@cluster0.klmixfi.mongodb.net/?retryWrites=true&w=majority

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/", (req, res) => {
  res.send("hello from Node");
});

app.get("/numbers", (req, res) => {
  let numbers = "";
  for (let i = 0; i <= 100; i++) {
    numbers += i + " - ";
  }
  //   res.send(`You are visiting Hi: ${numbers}`);

  //   res.sendFile(__dirname + "/views/numbers.html");
  res.render("numbers.ejs", {
    name: "Karim",
    numbers: numbers,
  });
});

app.get("/findSummation/:num1/:num2", (req, res) => {
  const number1 = req.params.num1;
  const number2 = req.params.num2;
  console.log(req.params);
  res.send(`the number are ${+number1 + +number2}`);
});

app.get("/sayHello", (req, res) => {
  //   console.log(req.query);
  //   //   console.log(req.body);
  //   res.send(`Hello ${req.body.name}, Age Is ${req.query.age}`);

  res.json({
    name: req.body.name,
    age: req.query.age,
    language: "Arabic",
  });
});

app.put("/test", (req, res) => {
  res.send("You are visiting test");
});

app.post("/addComment", (req, res) => {
  res.send("Post request on add comment");
});
app.delete("/testingDelete", (req, res) => {
  res.send("Visiting Delete Req");
});

// Articals End Point

app.post("/articles", async (req, res) => {
  const newArticle = new Article();
  newArticle.title = "My New Article";
  newArticle.body = "This Is The Body";
  newArticle.numberOfLikes = 100;
  await newArticle.save();

  res.send("The New Article Has Been Stored!");
});

app.listen(3000, () => {
  console.log("I am Listening in port 3000");
});
