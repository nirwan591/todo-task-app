const express = require("express");
const router = express.Router();
const db = require("../db");

// Get 5 latest active tasks
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM task WHERE is_completed = false ORDER BY created_at DESC LIMIT 5",
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    }
  );
});

// Add new task
router.post("/", (req, res) => {
  const { title, description } = req.body;
  db.query(
    "INSERT INTO task (title, description) VALUES (?, ?)",
    [title, description],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, title, description });
    }
  );
});

// Mark task as done
router.put("/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE task SET is_completed = true WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    }
  );
});

module.exports = router;
