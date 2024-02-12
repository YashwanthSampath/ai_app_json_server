const express = require("express");
// const jwt = require("jsonwebtoken");
const jsonServer = require("json-server");
const path = require("./db.json");
const fs = require("fs");

const app = express();
const PORT = 3001;

app.use(express.json());

const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults();

app.use(middlewares);

app.use("/api", router);
// Read and parse the db.json file
// const db = JSON.parse(fs.readFileSync("db.json", "utf8"));

// Access users and tasks directly from the parsed db object
// const users = db.users;
// const tasks = db.tasks;

// const SECRET_KEY = "#ai_app_45678";

// function generateToken(user) {
//   return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
//     expiresIn: "1h",
//   });
// }

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (user) {
//     const token = generateToken(user);
//     res.json({ token });
//   } else {
//     res.status(401).json({ error: "Invalid credentials" });
//   }
// });

// Example endpoint to get all tasks
// app.get("/tasks", (req, res) => {
//   res.json(tasks);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
