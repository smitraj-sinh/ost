const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/info", (req, res) => {
  res.json({
    name: "NPM Lab",
    subject: "Open Source Technology",
    semester: "BE 6th Sem"
  });
});

app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
