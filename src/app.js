import express from 'express';
const PORT = process.env.PORT || 3000 
const env = process.env.NODE_ENV || 'development'
const app = express();



app.get('/', (req, res) => {
  res.send(`API running in ${env} mode!!`);
});

app.listen(3000, () => {
  console.log(`Server running on PORT: ${PORT}`);
});


export default app;