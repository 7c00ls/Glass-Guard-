const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the same directory as server.js
app.use(express.static(path.join(__dirname)));

// SPA fallback: every unmatched route returns index.html
// This is required so that React Router (wouter) deep links work
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Glass Guard running on port ${PORT}`);
});
