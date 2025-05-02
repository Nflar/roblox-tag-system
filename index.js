module.exports = (req, res) => {
  // Handle CORS (optional)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  // In-memory storage for player data
  let players = {};

  if (req.method === "POST" && req.url === "/add") {
    const { userId, username } = req.body;
    if (userId && username) {
      players[userId] = { username };
      res.status(200).send({ message: "Player added!" });
    } else {
      res.status(400).send({ message: "Invalid data!" });
    }
  } else if (req.method === "GET" && req.url === "/players") {
    res.status(200).json(players);
  } else {
    res.status(404).send({ message: "Route not found!" });
  }
};
