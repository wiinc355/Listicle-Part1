// src/routes/pages.js
const express = require("express");
const { getEventBySlug } = require("../data/events");
const { renderEventDetailPage, render404Page } = require("../views/templates");

const router = express.Router();

// Detail pages: /events/open-mic-monday
router.get("/events/:slug", (req, res) => {
  const event = getEventBySlug(req.params.slug);
  if (!event) return res.status(404).send(render404Page(req.originalUrl));
  res.send(renderEventDetailPage(event));
});

module.exports = router;