const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

// Array of Available Routes: /api/users, /api/users/:id, /api/users/:param, /api/delete/:id
const routes = [
  " /api/users",
  " /api/users/:id",
  " /api/users/:param",
  " api/delete/:id",
];

// Array of Users with id, name, email, age, and salary.
const users = [
  {
    id: 1,
    name: "Carmela",
    email: "mela@gmail.com",
    age: 25,
    salary: 25000,
  },
  {
    id: 2,
    name: "Joseph",
    email: "joe@yahoo.com",
    age: 30,
    salary: 45000,
  },
  {
    id: 3,
    name: "James",
    email: "james@msn.com",
    age: 35,
    salary: 30000,
  },
  {
    id: 4,
    name: "John",
    email: "john@gmail.com",
    age: 40,
    salary: 25000,
  },
  {
    id: 5,
    name: "Frank",
    email: "frank@yahoo.com",
    age: 45,
    salary: 45000,
  },
  {
    id: 6,
    name: "Alex",
    email: "alex@msn.com",
    age: 21,
    salary: 33000,
  },
];

// Displays available routes.
app.get("/", (req, res) => {
  res.send("Available Routes: " + routes);
});

// Returns all users.
app.get("/api/users", (req, res) => {
  // Display all users with id, name, email, age, and salary. (Formatted with Line Breaks Per User)
  res.send(
    "All Users: <br>" + users.map((user) => JSON.stringify(user) + "<br>")
  );
});

// Fetches a specific user by ID.
app.get("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    res.status(404).send("User not found.");
  }
  res.send(user);
});

// Retrieves and displays parameters.
app.get("/api/params/:param", (req, res) => {
  res.send(`Parameter Received: ${req.params.param}`);
});

// Adds a new user through form submission.
app.post("/api/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    salary: req.body.salary,
  };
  users.push(user);
  res.send(user);
});

// Deletes a user by ID.
app.delete("/api/delete/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    res.status(404).send("User not found.");
  }
  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send("User " + user.id + " has been deleted.");
});

app.listen(3000, () => {
  console.log("The server is running on port 3000.");
});
