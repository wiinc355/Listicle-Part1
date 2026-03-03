// server.js
require("dotenv").config();
const app = require("./listicle/src/app");

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});