const express = require("express");
const app = express();

app.use(express.static("public")); // Public folder ko serve karein

let users = [{ name: "Amit" }, { name: "Shivendra" }];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
