const express = require("express");
const cors = require("cors");
const db = require("./db/config");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/items", async (req, res) => {
    try {
      const result = await db.any("SELECT * FROM animes");
      res.json(result);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

  app.post("/items", async (req, res) => {
    try {
      const { name } = req.body;
      const result = await db.one(
        "INSERT INTO items (name) VALUES ($1) RETURNING *",
        [name]
      );
      res.json(result);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});