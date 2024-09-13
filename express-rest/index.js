const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("My New App!");
});

app.get("/api/heroes", (req, res) => {
  res.send(["Superman", "Iron Man", "Batman", "Hulk"]);
});

// Single Param
app.get("/api/heroes/:id", (req, res) => {
  res.send(req.params.id);
});

// Multi Params
// app.get("/api/heroes/:title/:publisher", (req, res) => {
//   res.send(req.params);
// });

// Query Params
app.get("/api/heroes/:title/:publisher", (req, res) => {
  res.send([req.params, req.query]);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
