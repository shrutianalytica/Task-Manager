const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// Create task
router.post("/", auth, async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Get all tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find().populate("assignedTo projectId");
  res.json(tasks);
});

// Update status
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.status = req.body.status;
  await task.save();
  res.json(task);
});

module.exports = router;