const express = require("express");

// Constants
const PORT = process.env.PORT || 80;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => res.send("This response is coming from source deployment code, please check for the latest changes "));
app.post("/test", (req, res) => {
console.log("Call came till here and request is now logged");
res.send({
  "type": "text",
  "payload": {
    "text": "This is sample response from cloud function"
  }
})
});

let server = app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

module.exports = server;
