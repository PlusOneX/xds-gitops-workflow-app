const express = require('express');
const PORT = 3000 || process.env.PORT
const env = process.env.NODE_ENV || 'development'
const app = express();

app.get('/', (req, res) => {
  res.send(`API running in ${env} mode!`);
});

app.listen(3000, () => {
  console.log(`Server running on PORT: ${PORT}`);
})