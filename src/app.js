const express = require('express');

const app = express();

// Sample route (replace with your application logic)
app.get('/', (req, res) => {
  res.send('Hello from your Node.js application!');
});

const port = process.env.PORT || 3000;  // Use environment variable or default port

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
