const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// In-memory storage for player data (you can replace this with a database later)
let players = {};

// Add player data
app.post("/add", (req, res) => {
  const { userId, username } = req.body;
  if (userId && username) {
    players[userId] = { username };
    res.status(200).send({ message: "Player added!" });
  } else {
    res.status(400).send({ message: "Invalid data!" });
  }
});

// Get player data
app.get("/players", (req, res) => {
  res.status(200).json(players);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
