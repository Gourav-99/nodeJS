const express = require("express");
const fs = require("fs");

const PORT = 8080;

const app = express();

// const logUserAgent = (req, res, next) => {
//   const agent = req.headers["user-agent"];
//   console.log(agent);
//   if (agent.includes("Chrome")) return res.status(403).send("unthorised");
//   next();
// };
// app.use(logUserAgent);
app.get("/", (req, res) => {
  res.send("first response from express!").status(200);
});
app.get("/todos", (req, res) => {
  fs.readFile("./db.js", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(JSON.parse(data)).status(200);
  });
});
app.get("/name/:username", (req, res) => {
  const { username } = req.params;
  res.send(`My name is ${username}`).status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
