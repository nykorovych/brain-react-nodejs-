const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const database = {
  users: [
    {
      id: "123",
      name: "sally",
      email: "sally@gmail.com",
      password: "bannanas",
      entries: "0",
      joined: new Date(),
    },
    {
      id: "124",
      name: "Jhon",
      email: "jhon@gmail.com",
      password: "bannanas",
      entries: "0",
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send(database.users);
});
app.post("/signin", (req, res) => {
  res.json("signin");
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  database.users.push({
    // id: `${database.users.id + 4}`,
    id: "127",
    name: name,
    email: email,
    password: password,
    entries: "0",
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  database.users.forEach((u) => {
    if (u.id === id) {
      return res.json(u);
    }
  });
  return res.json("No");
});

app.put("/image", (req, res) => {
    console.log(req.body)
  const { id } = req.body;
  database.users.forEach((u) => {
    if (u.id === id) {
        u.entries++
      return res.json(u.entries);
    }
  });
  return res.json("NoOOOOooooOOooOoOoOoooOO");
});

app.listen(3000, () => console.log("Server UP"));
