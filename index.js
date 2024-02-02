const express = require("express");

const app = express();

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
  res.send(`You are visiting Hi: ${numbers}`);
});

app.get("/findSummation/:num1/:num2", (req, res) => {
  const number1 = req.params.num1;
  const number2 = req.params.num2;
  console.log(req.params);
  res.send(`the number are ${+number1 + +number2}`);
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

app.listen(3000, () => {
  console.log("I am Listening in port 3000");
});
