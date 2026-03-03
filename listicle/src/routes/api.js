// src/routes/api.js
const express = require("express");
const { getAllEvents, getEventBySlug } = require("../data/events");

const router = express.Router();

// GET /api/events
router.get("/events", (req, res) => {
  res.json(getAllEvents());
});

// GET /api/events/:slug
router.get("/events/:slug", (req, res) => {
  const event = getEventBySlug(req.params.slug);
  if (!event) return res.status(404).json({ error: "Event not found" });
  res.json(event);
});

module.exports = router;