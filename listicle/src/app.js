// src/app.js
const express = require("express");
const path = require("path");

const apiRoutes = require("./routes/api");
const pageRoutes = require("./routes/pages");
const { render404Page, renderErrorPage } = require("./views/templates");

const app = express();

// Basics
app.disable("x-powered-by");
app.use(express.json());

// Static frontend
app.use(express.static(path.join(__dirname, "..", "public")));

// Routes
app.use("/api", apiRoutes);      // JSON endpoints
app.use("/", pageRoutes);        // HTML endpoints

// 404
app.use((req, res) => {
  res.status(404).send(render404Page(req.originalUrl));
});

// Error handler (last)
app.use((err, req, res, next) => {
  console.error("❌ Server error:", err);
  res.status(500).send(renderErrorPage());
});

module.exports = app;