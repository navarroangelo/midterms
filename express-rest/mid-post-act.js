const express = require("express");
const app = express();

const movies = [
  {
    id: 1,
    title: "Superman",
  },
  {
    id: 2,
    title: "Thor",
  },
  {
    id: 3,
    title: "Iron Man",
  },
];

// GET ALL MOVIES
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

// GET MOVIE BY ID
app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find((h) => h.id === parseInt(req.params.id));
  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");
  res.send(movie);
});

// POST
app.use(express.json());

app.post("/api/movies", (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
  };
  movies.push(movie);
  res.send(movie);
});

app.listen(4006, () => {
  console.log("Listening on port 4006");
});
