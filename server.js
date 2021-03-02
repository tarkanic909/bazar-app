const express = require("express");
const jsonServer = require("json-server");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();

app.use("/api", jsonServer.router("db.json"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", req, (res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server listening on port: ${port}`));
